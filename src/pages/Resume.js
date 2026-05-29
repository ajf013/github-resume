import React, { Component } from "react";
import { UserProfile, Loader } from "../components";
import Axios from "axios";
import fallbackLanguages from "../constants/languageColors.json";

const GITHUB_API_USER = "https://api.github.com/users/";

export default class Resume extends Component {
  state = {
    data: null,
    isFetching: false,
    language: {},
  };

  async componentDidMount() {
    const { username } = this.props.match.params;
    this.setState({ isFetching: true });

    try {
      const userData = await this.fetchUserData(username);
      const userRepos = await this.fetchUserRepos(username);
      this.setState({
        data: { ...userData, repositories: userRepos },
        isFetching: false,
      });
    } catch (err) {
      this.props.history.push({
        pathname: "/404-not-found",
        state: {
          user: this.props.match.params.username,
          error: err.message,
        },
      });
    }

    let langData = null;
    if (localStorage.getItem("lang")) {
      try {
        langData = JSON.parse(localStorage.getItem("lang"));
      } catch (e) {
        localStorage.removeItem("lang");
      }
    }

    if (!langData) {
      try {
        // Attempt to fetch from deployment, fallback if Heroku is down
        const response = await Axios.get("https://github-lang-deploy.herokuapp.com/lang");
        langData = response.data;
        if (langData && Object.keys(langData).length > 0) {
          localStorage.setItem("lang", JSON.stringify(langData));
        } else {
          langData = fallbackLanguages;
        }
      } catch (err) {
        console.warn("Could not fetch languages, using local colors fallback:", err.message);
        langData = fallbackLanguages;
      }
    }

    this.setState({ language: langData || fallbackLanguages });
  }

  fetchUserData(username) {
    return Axios.get(GITHUB_API_USER + username)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }

  fetchUserRepos(username) {
    return Axios.get(GITHUB_API_USER + username + "/repos")
      .then((response) => this.fetchReposLanguages(response.data))
      .catch((error) => Promise.reject(error));
  }

  comapare(a, b) {
    if (a.stargazers_count > b.stargazers_count) return -1;
    else if (a.stargazers_count < b.stargazers_count) return 1;
    else {
      if (a.forks_count > b.forks_count) return -1;
      else if (a.forks_count < b.forks_count) return 1;
      else return 0;
    }
  }

  fetchReposLanguages(repositories) {
    // Sort repositories by stars/forks
    repositories.sort(this.comapare);
    // Limit to top 8 repositories to keep the resume clean and focused
    const topRepos = repositories.slice(0, 8);
    return Promise.all(
      topRepos.map((repo) =>
        Axios.get(repo.languages_url)
          .then((repoLanguages) => {
            return {
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              languages: repoLanguages.data,
              stars: repo.stargazers_count,
              watchers: repo.watchers_count,
            };
          })
          .catch(() => {
            // If languages_url fails (e.g. rate limit), return repo with empty languages
            return {
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              languages: {},
              stars: repo.stargazers_count,
              watchers: repo.watchers_count,
            };
          })
      )
    );
  }

  render() {
    const { username } = this.props.match.params;
    const { data, isFetching, language } = this.state;
    if (!isFetching && data) {
      return (
        <div className="resume-container">
          <UserProfile data={data} username={username} language={language} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

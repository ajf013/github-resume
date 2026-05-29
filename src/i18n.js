import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Github Resume Generator",
      description: "Create a stunning, print-ready, professional developer resume instantly using your GitHub profile and repositories.",
      placeholder: "Enter GitHub username...",
      generate: "Generate Resume",
      required: "Username is required",
      star_text: "If you like this project don't forget to give a Star to the repository",
      copyright: "Copyrights",
      featured_repos: "Featured Repositories",
      no_repos: "does not have any repositories",
      followers: "Followers",
      repositories: "Repositories",
      following: "Following",
      no_languages: "No languages detected",
      user_not_found: "User Not Found",
      profile_error: "The requested GitHub user profile could not be loaded.",
      redirecting: "Redirecting to home page...",
      install_title: "Install App",
      install_text: "Add to Home screen for quick offline access!",
      install_btn: "Install",
      dismiss_btn: "Dismiss",
      update_title: "Update Available",
      update_text: "A new version of the app is ready. Click update to reload!",
      update_btn: "Update"
    }
  },
  ta: {
    translation: {
      title: "கிட்ஹப் பயோடேட்டா ஜெனரேட்டர்",
      description: "உங்கள் கிட்ஹப் சுயவிவரம் மற்றும் களஞ்சியங்களைப் பயன்படுத்தி உடனடியாக ஒரு அழகான, அச்சிடத் தயாரான, தொழில்முறை டெவலப்பர் பயோடேட்டாவை உருவாக்குங்கள்.",
      placeholder: "கிட்ஹப் பயனர்பெயரை உள்ளிடவும்...",
      generate: "பயோடேட்டாவை உருவாக்கு",
      required: "பயனர்பெயர் தேவை",
      star_text: "உங்களுக்கு இந்த திட்டம் பிடித்திருந்தால், இந்த களஞ்சியத்திற்கு ஒரு ஸ்டார் வழங்க மறக்காதீர்கள்",
      copyright: "பதிப்புரிமைகள்",
      featured_repos: "சிறப்பு களஞ்சியங்கள்",
      no_repos: "எந்தவொரு களஞ்சியங்களையும் கொண்டிருக்கவில்லை",
      followers: "பின்தொடர்பவர்கள்",
      repositories: "களஞ்சியங்கள்",
      following: "பின்தொடர்வது",
      no_languages: "மொழிகள் எதுவும் கண்டறியப்படவில்லை",
      user_not_found: "பயனர் கண்டறியப்படவில்லை",
      profile_error: "கோரப்பட்ட கிட்ஹப் பயனர் சுயவிவரத்தை ஏற்ற முடியவில்லை.",
      redirecting: "முகப்புப் பக்கத்திற்குத் திருப்பிவிடப்படுகிறது...",
      install_title: "செயலியை நிறுவு",
      install_text: "விரைவான ஆஃப்லைன் அணுகலுக்கு முகப்புத் திரையில் சேர்க்கவும்!",
      install_btn: "நிறுவு",
      dismiss_btn: "தள்ளுபடி செய்",
      update_title: "புதிய இடுகை கிடைக்கிறது",
      update_text: "பயன்பாட்டின் புதிய பதிப்பு தயாராக உள்ளது. மீண்டும் ஏற்ற புதுப்பி என்பதைக் கிளிக் செய்க!",
      update_btn: "புதுப்பி"
    }
  },
  es: {
    translation: {
      title: "Generador de CV de GitHub",
      description: "Crea un currículum de desarrollador impresionante, listo para imprimir y profesional al instante usando tu perfil y repositorios de GitHub.",
      placeholder: "Ingresa el usuario de GitHub...",
      generate: "Generar Currículum",
      required: "El usuario es obligatorio",
      star_text: "Si te gusta este proyecto, no olvides darle una estrella al repositorio",
      copyright: "Derechos de autor",
      featured_repos: "Repositorios Destacados",
      no_repos: "no tiene repositorios",
      followers: "Seguidores",
      repositories: "Repositorios",
      following: "Siguiendo",
      no_languages: "No se detectaron lenguajes",
      user_not_found: "Usuario no encontrado",
      profile_error: "No se pudo cargar el perfil del usuario de GitHub.",
      redirecting: "Redirigiendo a la página de inicio...",
      install_title: "Instalar Aplicación",
      install_text: "Añádela a tu pantalla de inicio para un acceso rápido sin conexión.",
      install_btn: "Instalar",
      dismiss_btn: "Descartar",
      update_title: "Actualización Disponible",
      update_text: "Una nueva versión está lista. Haz clic en actualizar para recargar.",
      update_btn: "Actualizar"
    }
  },
  de: {
    translation: {
      title: "Github Lebenslauf Generator",
      description: "Erstellen Sie sofort einen beeindruckenden, druckfertigen und professionellen Entwickler-Lebenslauf mit Ihrem GitHub-Profil und Ihren Repositories.",
      placeholder: "GitHub-Benutzernamen eingeben...",
      generate: "Lebenslauf generieren",
      required: "Benutzername ist erforderlich",
      star_text: "Wenn Ihnen dieses Projekt gefällt, vergessen Sie nicht, dem Repository einen Stern zu geben",
      copyright: "Urheberrechte",
      featured_repos: "Ausgewählte Repositories",
      no_repos: "hat keine Repositories",
      followers: "Follower",
      repositories: "Repositories",
      following: "Folgt",
      no_languages: "Keine Sprachen erkannt",
      user_not_found: "Benutzer nicht gefunden",
      profile_error: "Das angeforderte GitHub-Benutzerprofil konnte nicht geladen werden.",
      redirecting: "Weiterleitung zur Startseite...",
      install_title: "App installieren",
      install_text: "Fügen Sie es zum Startbildschirm hinzu, um schnellen Offline-Zugriff zu erhalten!",
      install_btn: "Installieren",
      dismiss_btn: "Verwerfen",
      update_title: "Update verfügbar",
      update_text: "Eine neue Version der App ist bereit. Klicken Sie auf Aktualisieren, um sie neu zu laden!",
      update_btn: "Aktualisieren"
    }
  },
  pl: {
    translation: {
      title: "Generator CV z GitHub",
      description: "Stwórz niesamowite, gotowe do druku, profesjonalne CV programisty natychmiast, korzystając ze swojego profilu i repozytoriów na GitHub.",
      placeholder: "Wpisz nazwę użytkownika GitHub...",
      generate: "Generuj CV",
      required: "Nazwa użytkownika jest wymagana",
      star_text: "Jeśli podoba Ci się ten projekt, nie zapomnij dać gwiazdki temu repozytorium",
      copyright: "Prawa autorskie",
      featured_repos: "Wyróżnione repozytoria",
      no_repos: "nie posiada żadnych repozytoriów",
      followers: "Obserwujący",
      repositories: "Repozytoria",
      following: "Obserwuje",
      no_languages: "Nie wykryto języków",
      user_not_found: "Użytkownik nie znaleziony",
      profile_error: "Nie można załadować żądanego profilu użytkownika GitHub.",
      redirecting: "Przekierowanie do strony głównej...",
      install_title: "Zainstaluj aplikację",
      install_text: "Dodaj do ekranu głównego, aby uzyskać szybki dostęp offline!",
      install_btn: "Zainstaluj",
      dismiss_btn: "Odrzuć",
      update_title: "Dostępna aktualizacja",
      update_text: "Nowa wersja aplikacji jest gotowa. Kliknij aktualizuj, aby przeładować!",
      update_btn: "Aktualizuj"
    }
  },
  it: {
    translation: {
      title: "Generatore di CV GitHub",
      description: "Crea all'istante un curriculum da sviluppatore straordinario, pronto per la stampa e professionale utilizzando il tuo profilo GitHub e i tuoi repository.",
      placeholder: "Inserisci il nome utente GitHub...",
      generate: "Genera CV",
      required: "Il nome utente è richiesto",
      star_text: "Se ti piace questo progetto, non dimenticare di dare una stella al repository",
      copyright: "Diritti d'autore",
      featured_repos: "Repository in evidenza",
      no_repos: "non ha alcun repository",
      followers: "Follower",
      repositories: "Repository",
      following: "Seguiti",
      no_languages: "Nessuna lingua rilevata",
      user_not_found: "Utente non trovato",
      profile_error: "Impossibile caricare il profilo utente GitHub richiesto.",
      redirecting: "Reindirizzamento alla home page...",
      install_title: "Installa l'app",
      install_text: "Aggiungi alla schermata iniziale per un rapido accesso offline!",
      install_btn: "Installa",
      dismiss_btn: "Ignora",
      update_title: "Aggiornamento disponibile",
      update_text: "Una nuova versione dell'app è pronta. Clicca su aggiorna per ricaricare!",
      update_btn: "Aggiorna"
    }
  },
  pt: {
    translation: {
      title: "Gerador de Currículo do GitHub",
      description: "Crie um currículo de desenvolvedor impressionante, pronto para imprimir e profissional instantaneamente usando seu perfil e repositórios do GitHub.",
      placeholder: "Digite o usuário do GitHub...",
      generate: "Gerar Currículo",
      required: "O nome de usuário é obrigatório",
      star_text: "Se você gostou deste projeto, não se esqueça de dar uma estrela para o repositório",
      copyright: "Direitos autorais",
      featured_repos: "Repositórios em Destaque",
      no_repos: "não possui nenhum repositório",
      followers: "Seguidores",
      repositories: "Repositórios",
      following: "Seguindo",
      no_languages: "Nenhum idioma detectado",
      user_not_found: "Usuário não encontrado",
      profile_error: "Não foi possível carregar o perfil do usuário do GitHub solicitado.",
      redirecting: "Redirecionando para a página inicial...",
      install_title: "Instalar Aplicativo",
      install_text: "Adicione à tela inicial para acesso rápido offline!",
      install_btn: "Instalar",
      dismiss_btn: "Descartar",
      update_title: "Atualização Disponível",
      update_text: "Uma nova versão do aplicativo está pronta. Clique em atualizar para recarregar!",
      update_btn: "Atualizar"
    }
  },
  fr: {
    translation: {
      title: "Générateur de CV GitHub",
      description: "Créez instantanément un CV de développeur impressionnant, prêt à imprimer et professionnel à partir de votre profil et de vos dépôts GitHub.",
      placeholder: "Entrez le nom d'utilisateur GitHub...",
      generate: "Générer le CV",
      required: "Le nom d'utilisateur est requis",
      star_text: "Si vous aimez ce projet, n'oubliez pas de donner une étoile au dépôt",
      copyright: "Droits d'auteur",
      featured_repos: "Dépôts en vedette",
      no_repos: "n'a aucun dépôt",
      followers: "Abonnés",
      repositories: "Dépôts",
      following: "Abonnements",
      no_languages: "Aucun langage détecté",
      user_not_found: "Utilisateur non trouvé",
      profile_error: "Impossible de charger le profil utilisateur GitHub demandé.",
      redirecting: "Redirection vers la page d'accueil...",
      install_title: "Installer l'application",
      install_text: "Ajoutez à l'écran d'accueil pour un accès hors ligne rapide !",
      install_btn: "Installer",
      dismiss_btn: "Ignorer",
      update_title: "Mise à jour disponible",
      update_text: "Une nouvelle version de l'application est prête. Cliquez sur mettre à jour pour recharger !",
      update_btn: "Mettre à jour"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("REACT_GITHUB_PROFILE_LANG") || "en",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
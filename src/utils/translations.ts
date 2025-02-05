type TranslationType = {
  [key: string]: {
    [key: string]: string;
  };
};

export const translations: TranslationType = {
  en: {
    welcome: "Welcome Back",
    createAccount: "Create Account",
    login: "Login",
    register: "Register",
    email: "Email",
    password: "Password",
    username: "Username",
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",
    home: "Home",
    gallery: "Gallery",
    friends: "Friends",
    messages: "Messages",
    events: "Events",
    settings: "Settings",
    logout: "Logout",
    welcomeMessage: "Welcome to Community",
    homeFeedDesc: "This is your home feed. Here you'll see updates from your friends and community.",
    searchFriends: "Search friends...",
    photoGallery: "Photo Gallery",
    interactiveEvents: "Interactive Events Page",
    eventCount: "Event Count",
    triggerEvent: "Trigger Event",
    eventsDesc: "This page includes JavaScript interactions. Click the button below to see it in action!",
    yourMessages: "Your Messages",
    messagesDesc: "Connect with your friends through messages.",
    yourSettings: "Your Settings",
    settingsDesc: "Manage your account settings and preferences.",
  },
  ru: {
    welcome: "Добро пожаловать",
    createAccount: "Создать аккаунт",
    login: "Войти",
    register: "Регистрация",
    email: "Эл. почта",
    password: "Пароль",
    username: "Имя пользователя",
    dontHaveAccount: "Нет аккаунта?",
    alreadyHaveAccount: "Уже есть аккаунт?",
    home: "Главная",
    gallery: "Галерея",
    friends: "Друзья",
    messages: "Сообщения",
    events: "События",
    settings: "Настройки",
    logout: "Выйти",
    welcomeMessage: "Добро пожаловать в Community",
    homeFeedDesc: "Это ваша лента. Здесь вы увидите обновления от друзей и сообщества.",
    searchFriends: "Поиск друзей...",
    photoGallery: "Фотогалерея",
    interactiveEvents: "Интерактивная страница событий",
    eventCount: "Количество событий",
    triggerEvent: "Создать событие",
    eventsDesc: "Эта страница включает JavaScript взаимодействия. Нажмите кнопку ниже, чтобы увидеть их в действии!",
    yourMessages: "Ваши сообщения",
    messagesDesc: "Общайтесь с друзьями через сообщения.",
    yourSettings: "Ваши настройки",
    settingsDesc: "Управляйте настройками вашего аккаунта.",
  },
};

export const useTranslation = (language: string = 'en') => {
  return (key: string) => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };
};
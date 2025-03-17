import { FaCode, FaMobileAlt, FaGlobe } from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Разработка веб-приложений",
    icon: <FaCode />,
    subsections: [
      {
        title: "Корпоративные системы",
        details: [
          "Интеграция с 1С и ERP-системами",
          "Многоуровневая система безопасности",
          "Автоматизация бизнес-процессов",
          "Дашборды аналитики в реальном времени",
        ],
        duration: "2-6 месяцев",
        features: ["React", "Redux", "WebSocket", "REST API"],
      },
      {
        title: "Пользовательские решения",
        details: [
          "Интерактивные веб-редакторы",
          "Социальные платформы",
          "Системы голосования",
          "Персонализированные ленты",
        ],
        duration: "1-3 месяца",
        features: ["Next.js", "Firebase", "WebRTC"],
      },
      {
        title: "Интеграции",
        details: [
          "Платежные системы (Stripe, PayPal)",
          "Сервисы аутентификации",
          "Сторонние API",
          "Микросервисная архитектура",
        ],
        duration: "2-4 недели",
        features: ["Node.js", "GraphQL", "Docker"],
      },
    ],
  },
  {
    id: 2,
    title: "Мобильные приложения",
    icon: <FaMobileAlt />,
    subsections: [
      {
        title: "Кроссплатформенные",
        details: [
          "React Native разработка",
          "Нативные модули",
          "Оптимизация производительности",
          "Оффлайн-функционал",
        ],
        duration: "3-6 месяцев",
        features: ["React Native", "Expo", "TypeScript"],
      },
      {
        title: "Публикация",
        details: [
          "App Store Optimization",
          "Google Play настройка",
          "Непрерывная интеграция",
          "Тестовые сборки",
        ],
        duration: "1-2 недели",
        features: ["Fastlane", "TestFlight", "CI/CD"],
      },
    ],
  },
];

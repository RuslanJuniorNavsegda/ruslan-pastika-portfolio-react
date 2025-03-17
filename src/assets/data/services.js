import { FaCode, FaMobileAlt, FaGlobe } from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Разработка веб-приложений",
    description: "Создание современных и производительных веб-приложений",
    features: [
      "Интерактивные интерфейсы на React",
      "Интеграция с REST API",
      "Оптимизация производительности",
      "Тестирование (Unit/E2E)",
    ],
    icon: <FaCode className="icon" />,
    color: "#2ecc71",
  },
  {
    id: 2,
    title: "Мобильные приложения",
    description: "Кроссплатформенные решения с React Native",
    features: [
      "Нативные возможности",
      "Push-уведомления",
      "Оффлайн-режим",
      "Публикация в сторах",
    ],
    icon: <FaMobileAlt className="icon" />,
    color: "#3498db",
  },
  {
    id: 3,
    title: "Веб-сайты",
    description: "Адаптивные и SEO-оптимизированные сайты",
    features: [
      "Современный дизайн",
      "Анимации",
      "CMS интеграция",
      "Техническая поддержка",
    ],
    icon: <FaGlobe className="icon" />,
    color: "#9b59b6",
  },
];

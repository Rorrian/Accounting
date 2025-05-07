## BudgetBuddy  - Home Accounting

_BudgetBuddy — приложение для ведения домашней бухгалтерии, позволяющее управлять финансами, отслеживать транзакции, счета, копилки и финансовые цели. Проект находится в активной разработке._

![alt text](
https://i.pinimg.com/736x/0f/52/04/0f52047c93579bcddd21dcd6baff21e6.jpg)

<br/>

## 🚀 Основные возможности (на текущий момент)
- Авторизация и регистрация:
	- Регистрация и вход с использованием JWT-токенов
	- Подтверждение учетной записи через почту
	- Восстановление аккаунта через почту
	- Авторизация через соц. сети(Google и Github)
- Анимации: Плавная смена форм на странице авторизации (Framer Motion).
- UI-компоненты: Базовые элементы (кнопки, поля ввода, формы) с валидацией.

<br/>

## 🛠  Технологический стек:
Используемые технологии:
- Frontend:
	- React
	- Next.js 15(App Router)
	- TypeScript
	- Zustand
	- Framer Motion
	- Vanilla Extract
- Инструменты:
	- ESLint
	- Prettier

Планируемые технологии:
- API:
	- GraphQL (Apollo Client) или REST (axios)(?)
	- Zod
- Тестирование:
	- Vitest
	- React Testing Library
	- Playwright
- Инструменты:
	- Storybook
	- next-intl
	- Husky
- Оптимизация:
	- Next.js Dynamic Imports
	- Workbox
	- Lighthouse
	- Web Vitals
- CI/CD:
	- GitHub Actions/Vercel(?)

<br/>

## 📋 План разработки
Подробный план разработки доступен в todo.md. Основные этапы:
- Переход на Feature-Sliced Design (FSD) архитектуру.
- Разработка UI-кита и документация в Storybook.
- Создание страниц (домашняя, настройки, справочники).
- Интеграция с бэкендом (переход с NestJS на PHP).
- Оптимизация производительности и внедрение PWA.
- Настройка CI/CD и деплой.

<br/>

## 🔗 Связанные проекты
Бэкенд: Accounting-Backend

<br/>

## Запуск проекта:
1. Клонируйте репозиторий:
```bash
	git clone https://github.com/Rorrian/Accounting.git
```
2. Установите зависимости:
```bash
  yarn
```
3. Запустите dev-сервер:
```bash
	yarn dev
```
4. Откройте приложение в браузере: http://localhost:3000

<!-- ## Тестовый аккаунт для просмотра:
* Логин: 
* Пароль:  -->
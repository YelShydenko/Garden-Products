# Garden Products

## Описание на русском языке, на английском ниже 

### Ссылки на макет, ТЗ и задеплоенную реализацию

- **Макет:** [Figma](https://www.figma.com/design/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?node-id=5251-7386)
- **Техническое задание (ТЗ):** [Google Docs](https://docs.google.com/document/d/1RU3XZ0tYzUHOfF7ijKEsZjT7f086xNL8-OiYQt-cKFk/edit)
- **Задеплоенная реализация (render.com):** [Render](#)

### Общее описание

Проект представляет собой интернет-магазин товаров для дома и сада. Цель проекта — предоставить пользователям удобный интерфейс для просмотра товаров, добавления их в корзину и оформления заказа.

### Основной функционал проекта

#### Главная страница

- Отображение списка из 4-х категорий.
- Форма для получения скидки 5%.
- Отображение 4 случайных товаров со скидкой.
  
#### Модальное окно "Товар дня":
- Размещено в хедере, открывается с любой страницы.
- В окне отображается случайный товар со скидкой 50%.
- Из модального окна товар можно добавить в корзину.
- После закрытия модального окна пользователь остается на той же странице, с которой кликал.

#### Категории товаров

- Просмотр списка всех доступных категорий товаров.
- Переход в раздел "Товары по категориям" для выбранной категории при клике на карточку категории.

#### Товары по категориям

- Отображение списка товаров в выбранной категории.
- Возможность сортировки товаров (по умолчанию, по убыванию цены, по возрастанию цены).
- Возможность фильтрации товаров (по наличию скидки и по диапазону цен).
- Переход к подробному описанию конкретного товара при клике на карточку товара.

#### Все товары

- Отображение полного списка товаров.
- Возможность сортировки товаров (по умолчанию, по убыванию цены, по возрастанию цены).
- Возможность фильтрации товаров (по наличию скидки и по диапазону цен).
- Переход к подробному описанию конкретного товара при клике на карточку товара.

#### Товары со скидкой

- Отображение списка товаров со скидкой.
- Возможность сортировки товаров (по умолчанию, по убыванию цены, по возрастанию цены).
- Возможность фильтрации товаров (по диапазону цен).
- Переход к подробному описанию конкретного товара при клике на карточку товара.

#### Избранные товары

- Отображение списка избранных товаров (которым поставлено сердечко).
- Возможность сортировки товаров (по умолчанию, по убыванию цены, по возрастанию цены).
- Возможность фильтрации товаров (по диапазону цен).
- Переход к подробному описанию конкретного товара при клике на карточку товара.

#### Подробное описание товара

- Полная информация о выбранном товаре (название, цена, описание, изображения).
- Возможность добавления товара в корзину.

#### Корзина

- Отображение списка выбранных товаров с их количеством и общей стоимостью.
- Возможность изменения количества товаров, удаления товаров из корзины.
- Расчет и отображение общей стоимости товаров в корзине.
- Возможность отправки данных о заказе при отправке формы.

#### Страница не найдена

- Отображение страницы с сообщением о том, что запрашиваемая страница не найдена.
- Возможность вернуться на главную страницу.

#### Скелетон страницы (Loader)

- При загрузке страниц “Все товары”, “Избранные товары”, “Товары со скидкой”, “Товары по категориям” до появления товаров на страницах виден скелетон страницы.

#### Темная тема

- Переключение на темную тему. Все страницы принимают внешний вид темы.
- Выбранная тема сохраняется в Local Storage.

#### Мобильная адаптивность

- Приложение корректно отображается на различных устройствах согласно макету.

### Стек используемых технологий

- **React:** Основной фреймворк для разработки пользовательского интерфейса. Используется для создания компонентов и управления состоянием приложения.
- **Redux Toolkit:** Управление состоянием приложения. Обеспечивает централизованное хранение состояния и упрощает передачу данных между компонентами.
- **React Router:** Маршрутизация в приложении. Используется для создания навигации между страницами.
- **SCSS:** Стилизация компонентов. Обеспечивает создание и управление CSS-стилями внутри JavaScript.
- **Git и GitHub:** Система контроля версий и хостинг кода. Используются для управления изменениями в коде и совместной работы над проектом.
- **React Loading Skeleton:** Библиотека для создания скелетонов страниц.

### Авторы проекта

#### Елизавета Шиденко

- **[LinkedIn](https://www.linkedin.com/in/yelyzaveta-shydenko-a4654a22b/)**
- **[GitHub](https://github.com/YelShydenko)**

**Реализованные фичи:**

- Настройка проекта
- Реализация формы для получения скидки 5%
- Сортировка и фильтрация
- Карточка товара
- Корзина
- Хлебные крошки
- Бургер меню
- Рефакторинг
- Деплой

#### Алина Кобец

- **[LinkedIn](https://www.linkedin.com/in/alina-kobets-74991329b)**
- **[GitHub](https://github.com/AlinaKobetss)**

**Реализованные фичи:**

- Footer (Подвал приложения)
- Товары по категориям
- Страница Error 404
- Модальное окно "Товар дня"

#### Дмитрий Морохотин

- **[LinkedIn](https://www.linkedin.com/in/dmytro-morokhotin-84877b310)**
- **[GitHub](https://github.com/Boxer2023)**

**Реализованные фичи:**

- Отображение списка товаров 4-х категорий на главной странице
- Товары со скидкой
- Страница товара
- Скелетон страницы

#### Алина Музыка

- **[LinkedIn](https://www.linkedin.com/in/alina-muzyka-505b52307/)**
- **[GitHub](https://github.com/Muzyka788516)**

**Реализованные фичи:**

- Шапка приложения (Header) и баннер
- Категория товаров
- Темная тема
- Мобильная адаптивность
- Заполнение презентации о проекте

#### Юрий Курлапов

- **[GitHub](https://github.com/YuriiKyrlapov)**

**Реализованные фичи:**

- Отображение на главной странице 4 случайных товаров со скидкой
- Все товары
- Страница избранное
- Оформление README

---

## English Version

### Links to the Design, Requirements, and Deployed Implementation

- **Design:** [Figma](https://www.figma.com/design/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?node-id=5251-7386)
- **Requirements (Specification):** [Google Docs](https://docs.google.com/document/d/1RU3XZ0tYzUHOfF7ijKEsZjT7f086xNL8-OiYQt-cKFk/edit)
- **Deployed Implementation (render.com):** [Render](#)

### General Description

This project is an e-commerce platform for home and garden products. The goal is to provide users with a convenient interface for browsing products, adding them to a cart, and placing orders.

### Main Project Features

#### Home Page

- Display a list of 4 categories.
- Form for receiving a 5% discount.
- Display 4 random discounted products.
  
**"Product of the Day" Modal Window:**
- Located in the header, accessible from any page.
- Displays a random product with a 50% discount.
- Allows adding the product to the cart directly from the modal.
- After closing the modal, the user remains on the same page from which they clicked.

#### Product Categories

- View a list of all available product categories.
- Navigate to the "Products by Category" section for the selected category by clicking on the category card.

#### Products by Category

- Display a list of products in the selected category.
- Sort products (by default, by decreasing price, by increasing price).
- Filter products (by discount availability and price range).
- Navigate to detailed product descriptions by clicking on the product card.

#### All Products

- Display the full list of products.
- Sort products (by default, by decreasing price, by increasing price).
- Filter products (by discount availability and price range).
- Navigate to detailed product descriptions by clicking on the product card.

#### Discounted Products

- Display a list of discounted products.
- Sort products (by default, by decreasing price, by increasing price).
- Filter products (by price range).
- Navigate to detailed product descriptions by clicking on the product card.

#### Favorite Products

- Display a list of favorite products (marked with a heart).
- Sort products (by default, by decreasing price, by increasing price).
- Filter products (by price range).
- Navigate to detailed product descriptions by clicking on the product card.

#### Product Details

- Full information about the selected product (name, price, description, images).
- Ability to add the product to the cart.

#### Cart

- Display a list of selected products with their quantity and total cost.
- Ability to change the quantity of products, remove products from the cart.
- Calculate and display the total cost of products in the cart.
- Ability to submit order data via a form.

#### Page Not Found

- Display a page with a message that the requested page was not found.
- Option to return to the home page.

#### Page Skeleton (Loader)

- When loading the “All Products,” “Favorite Products,” “Discounted Products,” and “Products by Category” pages, a skeleton loader is shown until the products are loaded.

#### Dark Theme

- Toggle to switch to a dark theme. All pages adopt the selected theme's appearance.
- The selected theme is saved in Local Storage.

#### Mobile Responsiveness

- The application is properly displayed on various devices according to the design.

### Technology Stack

- **React:** The primary framework for developing the user interface. Used for creating components and managing the application's state.
- **Redux Toolkit:** State management for the application. Provides centralized state storage and simplifies data passing between components.
- **React Router:** Routing within the application. Used to create navigation between pages.
- **SCSS:** Component styling. Allows creating and managing CSS styles within JavaScript.
- **Git and GitHub:** Version control system and code hosting. Used for managing code changes and collaborative work on the project.
- **React Loading Skeleton:** A library for creating page skeletons.

### Project Authors

#### Yelyzaveta Shydenko

- **[LinkedIn](https://www.linkedin.com/in/yelyzaveta-shydenko-a4654a22b/)**
- **[GitHub](https://github.com/YelShydenko)**

**Implemented Features:**

- Project setup
- Discount form implementation (5% off)
- Sorting and filtering
- Product card
- Shopping cart
- Breadcrumbs
- Burger menu
- Refactoring
- Deployment

#### Alina Kobets

- **[LinkedIn](https://www.linkedin.com/in/alina-kobets-74991329b)**
- **[GitHub](https://github.com/AlinaKobetss)**

**Implemented Features:**

- Footer
- Products by category
- Error 404 page
- "Product of the Day" modal window

#### Dmytro Morokhotin

- **[LinkedIn](https://www.linkedin.com/in/dmytro-morokhotin-84877b310)**
- **[GitHub](https://github.com/Boxer2023)**

**Implemented Features:**

- Displaying a list of 4 categories on the home page
- Discounted products
- Product details page
- Page skeletons

#### Alina Muzyka

- **[LinkedIn](https://www.linkedin.com/in/alina-muzyka-505b52307/)**
- **[GitHub](https://github.com/Muzyka788516)**

**Implemented Features:**

- Application header and banner
- Product category
- Dark theme
- Mobile responsiveness
- Project presentation preparation

#### Yurii Kyrlapov

- **[GitHub](https://github.com/YuriiKyrlapov)**

**Implemented Features:**

- Displaying 4 random discounted products on the home page
- All products page
- Favorites page
- README formatting

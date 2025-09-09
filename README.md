# Mini E-Commerce Store (MeCS)

A headless e-commerce demo built with **React**, **Tailwind CSS**, and **REST API**.
This project demonstrates a full-featured e-store with **Products**, **Categories**, **Cart**, **Orders**, **Customers**, **Experiments**, and **Personalization** modules.

---

## Features

* Modern and responsive UI using **Tailwind CSS**.
* **Product listing** with price, availability, and quick add-to-cart.
* **Shopping cart** with add/remove/clear functionality.
* **Orders management**: place, confirm, cancel orders.
* **Customer management** (for admin views).
* **Experimentation & Personalization** support (A/B testing placeholders).
* Fully modular **React components**: Navbar, Footer, OrderCard, CartItem, etc.
* **Context API** for global cart state.
* Clean **card-based layout** with hover effects and badges.
* Fully responsive for **desktop, tablet, and mobile**.

---

## Technologies

* **Frontend:** React+Vite, React Router, Tailwind CSS
* **State Management:** React Context API
* **API Integration:** Fetch REST API
* **Styling:** Tailwind CSS, custom CSS overrides
* **Optional:** Experiment & Personalization placeholders

---

## Folder Structure

```
src/
├── api/               # API functions (cart, orders, products)
├── components/        # Reusable components (Navbar, Footer, OrderCard, CartItem)
├── context/           # CartContext for global cart state
├── pages/             # Pages: Home, Products, Categories, Cart, Orders, Customers
├── App.jsx            # Root app component with routes
├── index.css          # Global CSS
```

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd mini-e-commerce-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:5173` (Vite default).

---

## API Setup

* The app expects a REST API backend.
* Base API URL is configured in `src/lib/api.js`:

```js
export const API_BASE = "http://localhost:5246/api";
```

* Available endpoints:

```
GET    /cart/:id
POST   /cart
POST   /cart/:id/add/:productId
POST   /cart/:id/clear
GET    /products
GET    /order
POST   /order
PUT    /order/:id/place
PUT    /order/:id/cancel
```

---

## Usage

* **Browse Products** → Add items to Cart.
* **View Cart** → Modify quantities or clear cart.
* **Place Orders** → Checkout current cart.
* **Manage Orders** → Confirm or cancel orders.
* **Customer & Personalization Pages** → For admin or experimentation purposes.

---

## UI Highlights

* **Navbar:** Fixed header with menu links and cart badge.
* **Footer:** Consistent footer across all pages.
* **Card Layout:** Products, Orders, and Cart items displayed in responsive cards.
* **Hover Effects:** Buttons and cards animate smoothly.
* **Responsive:** Desktop menu bar, tablet optimized, mobile hamburger menu.

---

## License

MIT License © 2025

---
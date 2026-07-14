# Furniro — Static HTML/CSS/JS Site

Complete Furniro furniture-store frontend built with vanilla HTML5, CSS3, and JavaScript (ES6+).

## Run
Just open `index.html` in a browser. No build step required.

## Pages
Home, Shop, Product Details, Cart, Checkout, Blog, About, Contact,
Login, Signup, Forgot / Reset Password, Dashboard, Profile, Settings, 404.

## Features
- Responsive layout (mobile / tablet / desktop)
- Sticky navbar, scroll-to-top, mobile drawer
- Product grid, search, filter, sort, pagination
- Cart & wishlist with localStorage persistence
- Product detail with tabs, quantity, size/color pickers
- Frontend auth: signup, login, forgot / reset password, remember me
- Dashboard with sidebar nav, profile editor, change-password, settings, dark-mode toggle
- Form validation with regex, toast notifications, loading spinner utility

## Structure
```
index.html + other pages
css/style.css, css/responsive.css
js/script.js  — core (products, cart, wishlist, UI)
js/validation.js — form validation helpers
js/auth.js  — login/signup/reset flows
js/dashboard.js — dashboard behavior
assets/
```

Product photography uses Unsplash CDN URLs — swap for your own by editing `PRODUCTS` in `js/script.js`.

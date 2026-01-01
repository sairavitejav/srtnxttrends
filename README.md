# NXT Trendz - E-Commerce Application

A modern, feature-rich e-commerce web application built with **React.js** for shopping trendy fashion and apparel. This application provides users with an intuitive interface to browse products, manage a shopping cart, and explore personalized deals.

## 🎯 Project Overview

NXT Trendz is a full-featured e-commerce platform focused on fashion retail. The application demonstrates professional React development practices including component composition, state management, routing, context API, and responsive design.

## 🎯 Default User Credentials

 username: rahul
 password: rahul@2021

## ✨ Features

### Core Functionality
- **User Authentication** - Secure login system with session management
- **Product Browsing** - View all available products with detailed information
- **Product Filtering** - Filter products by category, price range, and ratings
- **Product Details** - In-depth product information with similar product recommendations
- **Shopping Cart** - Add, remove, update quantities, and manage cart items
- **Prime Deals Section** - Exclusive deals and promotions for premium members
- **Responsive Design** - Fully responsive UI optimized for desktop and mobile devices

### User Features
- Protected routes ensuring authenticated access
- Real-time cart updates and persistence
- Product search and filtering capabilities
- Smooth navigation between pages
- Cart summary with total calculations
- Empty cart view with helpful messaging
- 404 Not Found error handling

## 🛠️ Tech Stack

### Frontend
- **React.js** (v17.0.1) - UI library
- **React Router DOM** (v5.2.0) - Client-side routing
- **React Icons** (v4.2.0) - Icon library
- **React Loader Spinner** (v4.0.0) - Loading indicators
- **ReactJS Popup** (v2.0.6) - Modal and popup components

### State Management & Utilities
- **Context API** - Global state management for cart
- **js-cookie** (v3.0.0) - Cookie handling
- **History** (v5.0.0) - Browser history management

### Development Tools
- **React Scripts** (v4.0.3) - Build configuration
- **ESLint** - Code quality and linting
- **Prettier** - Code formatting
- **Jest & React Testing Library** - Testing framework

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── AllProductsSection/ # All products display
│   ├── Cart/               # Cart page
│   ├── CartItem/           # Individual cart item
│   ├── CartListView/       # Cart list container
│   ├── CartSummary/        # Cart total summary
│   ├── EmptyCartView/      # Empty cart message
│   ├── FiltersGroup/       # Product filters
│   ├── Header/             # Navigation header
│   ├── Home/               # Home page
│   ├── LoginForm/          # User authentication
│   ├── NotFound/           # 404 page
│   ├── PrimeDealsSection/  # Prime deals display
│   ├── ProductCard/        # Product display card
│   ├── ProductItemDetails/ # Product detail page
│   ├── Products/           # Products listing page
│   ├── ProductsHeader/     # Products page header
│   ├── ProtectedRoute/     # Route protection
│   └── SimilarProductItem/ # Similar products
├── context/
│   └── CartContext.js      # Global cart state
├── App.js                  # Main app component
├── App.css                 # Global styles
└── index.js                # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.0.0 or higher)
- npm (v8 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd srtnxttrends
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

### Available Scripts

- `npm start` - Run the app in development mode
- `npm build` - Build the app for production
- `npm test` - Launch the test runner
- `npm run lint` - Check code quality
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run run-all` - Run tests, linting, and formatting in parallel

## 📋 Key Components

### Header
Navigation component with links to home, products, and cart. Displays cart item count.

### Home
Landing page showcasing the brand message with a call-to-action "Shop Now" button.

### Products
Main shopping page featuring:
- Prime Deals Section for exclusive offers
- All Products Section with filtering and sorting

### Cart
Shopping cart management with:
- Display of all cart items
- Quantity adjustment controls
- Item removal functionality
- Cart summary with totals

### Product Details
Detailed product page showing:
- Product images and specifications
- Product description
- Similar product recommendations
- Add to cart functionality

## 🔐 Authentication

The application includes a LoginForm component for user authentication. Protected routes ensure that only authenticated users can access the cart and purchase functionality.

## 🎨 Styling

- Custom CSS for responsive design
- Mobile-first approach
- Consistent design system across components
- Optimized for various screen sizes

## 🧪 Testing

The project includes testing setup with:
- Jest as the test runner
- React Testing Library for component testing
- Configured test files ready for implementation

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```
This creates an optimized production build in the `build/` folder.

## 📝 Code Quality

The project maintains code quality through:
- **ESLint** configuration (Airbnb style guide)
- **Prettier** code formatting
- **Lint-staged** for pre-commit hooks
- **Husky** for git hooks

## 🔄 State Management

Cart state is managed globally using **React Context API** through `CartContext.js`, providing:
- Add/remove cart items
- Update item quantities
- Access cart data from any component

## 🌟 Future Enhancements

- Payment gateway integration
- User profile management
- Order history tracking
- Reviews and ratings system
- Wishlist functionality
- Real-time inventory updates

## 📄 License

This project is private and intended for educational and commercial purposes.

## 👨‍💻 Author

Built with React.js and modern web development best practices.

---

**Happy Shopping with NXT Trendz! 🛍️**

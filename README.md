# ALX Listing App

A modern Airbnb clone built with Next.js, TypeScript, and TailwindCSS. This project demonstrates best practices in React development, component reusability, and modern web development techniques.

## 🚀 Project Overview

The ALX Listing App is designed to showcase property listings with a clean, responsive interface. Built as part of the ALX Software Engineering program, this project emphasizes:

- **Type Safety**: Full TypeScript integration for robust development  
- **Component Reusability**: Modular components for scalable architecture  
- **Modern Styling**: TailwindCSS for responsive, utility-first design  
- **Code Quality**: ESLint configuration for consistent code standards

## 🏗️ Project Structure

alx-listing-app/
├── components/
│ └── common/
│ ├── Card.tsx # Reusable card component for property listings
│ └── Button.tsx # Reusable button component with variants
├── interfaces/
│ └── index.ts # TypeScript interfaces and type definitions
├── constants/
│ └── index.ts # Application constants and configuration
├── pages/
│ ├── _app.tsx # Next.js app wrapper
│ ├── _document.tsx # Custom document configuration
│ └── index.tsx # Home page with featured properties
├── public/
│ └── assets/
│ ├── images/ # Property images and placeholders
│ └── icons/ # SVG icons and graphics
├── styles/
│ └── globals.css # Global styles with Tailwind imports
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── next.config.js # Next.js configuration
└── package.json # Project dependencies and scripts


### Directory Purpose

- **`components/common/`**: Reusable UI components used throughout the app  
- **`interfaces/`**: Type definitions for props, models, etc.  
- **`constants/`**: Static values like configuration, enums, API URLs  
- **`public/assets/`**: Static files like images and icons

## 🛠️ Technologies Used

- [Next.js 13+](https://nextjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [ESLint](https://eslint.org/)  
- [React](https://reactjs.org/)

## 📋 Prerequisites

Make sure you have the following installed:

- **Node.js 16+**
- **npm** or **yarn**
- **VS Code** with the following extensions:
  - TypeScript
  - TailwindCSS IntelliSense
  - ESLint

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app

### 2. Install Dependencies
npm install
# or
yarn install

### 3. Run the Development Server
npm run dev
# or
yarn dev

### 4. Open in Browser
 - Visit http://localhost:3000 in your browser.

## 🎯 Features

### ✅ Implemented

- Responsive design with TailwindCSS  
- Reusable Card and Button components  
- Type-safe props and interfaces  
- Scalable file/folder architecture  

### 🔜 Upcoming

- Property detail view  
- Search and filtering  
- User authentication  
- Booking functionality  
- Host dashboard  
- Payment integration  

---

## 🧩 Component Usage

### 🃏 Card Component

tsx
import Card from '../components/common/Card';

<Card
  title="Luxury Beach House"
  description="Oceanfront property with stunning views"
  location="Miami, FL"
  price={300}
  rating={4.9}
  image="/assets/images/property.jpg"
  onClick={() => handleCardClick('property-id')}
/>

### 🔘 Button Component

tsx
import Button from '../components/common/Button';

<Button
  variant="primary"
  size="lg"
  onClick={handleClick}
>
  Book Now
</Button>


## 🎨 Styling Guidelines

- Use Tailwind utility classes only — no custom CSS unless necessary  
- Mobile-first: always design for small screens first  
- Follow Tailwind's spacing, font, and color systems for consistency  
- Centralize colors and themes in `tailwind.config.js`

---

## 📝 Development Scripts

bash
# Start dev server
npm run dev

# Build app
npm run build

# Start production server
npm start

# Lint files
npm run lint

# Type check
npm run type-check


## 🤝 Contributing

1. **Fork** the repo  
2. **Create your branch**:  
   ```bash
   git checkout -b feature/amazing-feature

3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'

4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature

5. **Open a Pull Request**

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

## 👥 Authors

**ALX Student** – Initial work – [Kevin Odhiambo](https://github.com/manodhiambo)

---

## 🙏 Acknowledgments

- **ALX Software Engineering Program**
- **Next.js** team for the amazing framework  
- **Tailwind CSS** team for the utility-first CSS approach  
- **The React community** for continuous innovation

---

> Built with ❤️ as part of the **ALX Software Engineering Program**


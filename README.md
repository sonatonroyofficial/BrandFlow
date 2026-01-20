# BrandFlow Marketplace

A modern, full-stack E-commerce marketplace application built with **Next.js 15**, **MongoDB**, **Firebase Authentication**, and **Tailwind CSS**.

## 🚀 Project Overview

BrandFlow Marketplace allows users to browse a curated collection of premium items, view detailed product information, and list their own items for sale. It features a secure authentication system, a robust database connection, and a polished user interface.

## 🛠️ Setup & Installation

Follow these steps to get the project running on your local machine.

### 1. Clone the repository
(If applicable, otherwise verify you are in the project directory)

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory and add the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📍 Route Summary

| Route | Access | Description |
| :--- | :--- | :--- |
| `/` | Public | **Landing Page**: New E-commerce focused design with Hero, Features, and How It Works sections. |
| `/items` | Public | **Marketplace**: Displays a grid of all available items. |
| `/items/[id]` | Public | **Item Details**: Shows full details for a specific item (Image, Price, Description). |
| `/items/add` | **Protected** | **Add Item**: Form to list a new product. Redirects to login if unauthenticated. |
| `/login` | Public | **Login**: User sign-in page. |
| `/signup` | Public | **Sign Up**: New user registration page. |

## ✨ Implemented Features

### 1. **MongoDB Integration**
- **Robust Storage**: Replaced in-memory storage (and local JSON file) with a real MongoDB database.
- **Persistence**: Items added by users are now permanently stored in the `brandflow` database (collection: `items`).
- **Optimization**: Uses a singleton connection pattern (`src/lib/mongodb.ts`) for efficient resource management in Next.js.

### 2. **Authentication & Security**
- **Firebase Auth**: Secure user sign-up and login flow.
- **Protected Routes**: The "Add Item" page (`/items/add`) is strictly protected. Unauthenticated users are redirected to login.
- **White Screen Fix**: Implemented a loading state in `AuthContext` to prevent white screens/flashes while checking authentication status.

### 3. **Marketplace Functionality**
- **Dynamic Routing**: Individual item pages (`/items/[id]`) are dynamically generated based on the Item ID.
- **API Endpoints**:
    - `GET /api/items`: Fetches all items from MongoDB.
    - `POST /api/items`: Validates and saves a new item to MongoDB.
    - `GET /api/items/[id]`: Fetches a single item by its MongoDB `_id`.

### 4. **Modern UI/UX**
- **Tailwind CSS**: Fully responsive and styled design.
- **Toast Notifications**: Integrated `sonner` for beautiful success/error toast notifications when adding items.
- **Relevant Landing Page**: Updated the homepage content to match the E-commerce theme ("Discover Extraordinary Items"), removing irrelevant SaaS sections like Pricing and Testimonials.

### 5. **Developer Experience**
- **Type Safety**: Full TypeScript support for API routes and React components.
- **Clean Architecture**: Separated concerns with `src/lib` for database logic and `src/components` for UI.

## 📝 Tech Stack

- **Frontend**: Next.js 15 (App Router), React, Tailwind CSS
- **Backend API**: Next.js Route Handlers
- **Database**: MongoDB
- **Auth**: Firebase
- **Icons**: Lucide React
- **Notifications**: Sonner

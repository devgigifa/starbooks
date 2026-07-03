# 📚 Starbooks

A full-stack book catalog application where users can browse a curated list of books, explore recommendations, and manage a personal favorites list.

---

## 🎥 Demo

![Screenshot 1](https://github.com/devgigifa/starbooks/raw/master/.github/assets/screenshot1.png)
![Screenshot 2](https://github.com/devgigifa/starbooks/raw/master/.github/assets/screenshot2.png)
![Screenshot 3](https://github.com/devgigifa/starbooks/raw/master/.github/assets/screenshot3.png)

---

## 🗂️ Project Structure

```
starbooks/
├── package.json    # Root scripts to run everything at once
├── .gitignore
├── front/          # React frontend
└── server/         # Node.js + Express backend
```

---

## ✨ Features

- **Home page** with a search bar, book recommendations, and a highlighted best book section
- **Book catalog** (`/estante`) listing all available books from the API
- **Favorites** (`/favoritos`) to save and manage your favorite books
- Add or remove books from favorites with real-time UI updates
- Book cover images served directly from the backend

---

## 🛠️ Tech Stack

### Frontend
| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| React Router DOM | Client-side routing |
| Styled Components | Component-level styling |
| Axios | HTTP requests |
| React Icons | Icon library |

### Backend
| Tool | Purpose |
|---|---|
| Node.js | Runtime |
| Express | HTTP server & routing |
| Nodemon | Auto-restart on file changes (dev) |
| CORS | Cross-origin resource sharing |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (v16 or higher recommended)
- npm (comes with Node.js)

---

### Step 1 — Clone the repository

```bash
git clone <repository-url>
cd starbooks
```

---

### Step 2 — Install all dependencies

You can install everything at once from the root folder:

```bash
npm run install:all
```

Or install each part manually:

```bash
# Backend
cd server
npm install

# Frontend
cd ../front
npm install
```

---

### Step 3 — Run the application

#### Option A — Run both at once (recommended)

From the root folder:

```bash
npm run dev
```

This starts both the backend and frontend simultaneously.

#### Option B — Run each separately

Open **two terminals**:

**Terminal 1 — Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd front
npm start
```

---

### Step 4 — Open in the browser

| Service | URL |
|---|---|
| Frontend (React app) | http://localhost:3000 |
| Backend (API) | http://localhost:8000 |

> ⚠️ **Both servers must be running at the same time** for the app to work correctly.

---

## 🔌 API Endpoints

Base URL: `http://localhost:8000`

### Books

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/books` | Get all books |
| `GET` | `/books/:id` | Get a single book by ID |
| `POST` | `/books` | Add a new book |
| `PATCH` | `/books/:id` | Update a book |
| `DELETE` | `/books/:id` | Delete a book |

### Favorites

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/favorites` | Get all favorite books |
| `POST` | `/favorites/:id` | Add a book to favorites |
| `DELETE` | `/favorites/:id` | Remove a book from favorites |

### Static Assets

| Path | Description |
|---|---|
| `/images/:filename` | Serves book cover images |

---

## 📁 Frontend Structure

```
front/src/
├── components/
│   ├── BestBook/          # Featured book section
│   ├── BookCard/          # Reusable book card component
│   ├── Footer/            # App footer
│   ├── Header/            # App header with navigation
│   ├── RecommendedBooks/  # Recommended books section
│   └── Search/            # Search bar
├── routes/
│   ├── Home.js            # Home page (/, search + recommendations)
│   ├── BooksPage.js       # All books page (/estante)
│   └── favorites.js       # Favorites page (/favoritos)
├── services/
│   ├── books.js           # API calls for books
│   └── favorites.js       # API calls for favorites
└── index.js               # App entry point & global styles
```

## 📁 Backend Structure

```
server/
├── controllers/
│   ├── book.js            # Book CRUD logic
│   └── favorite.js        # Favorites logic
├── routes/
│   ├── book.js            # Book routes
│   └── favorite.js        # Favorite routes
├── images/                # Book cover images
├── books.json             # Book data store
├── favorites.json         # Favorites data store
└── app.js                 # Server entry point
```

---

## 📖 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Search bar, recommendations, and best book highlight |
| `/estante` | Book Catalog | Browse all books and add them to favorites |
| `/favoritos` | Favorites | View and remove your favorited books |

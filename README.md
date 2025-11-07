# 💸 Dashboard Application

**Tech:** Next.js · TypeScript · Redux Toolkit · Zustand · Framer Motion · Tailwind CSS

---

## 📘 Overview

The dashboard provides:

- **Wallet balance display** and withdrawal action
- **Transaction listing** with live data
- **Filter sidebar** for refining transactions
- **Export list** button
- **Chart visualization** for wallet transaction activity
- **Floating sidebar navigation**
- Designed using **TailwindCSS**
- Smooth **slide-in/out animations** using Framer Motion

---

## 🧩 Tech Stack

| Layer            | Library / Tool                           | Purpose                                     |
| ---------------- | ---------------------------------------- | ------------------------------------------- |
| **Frontend**     | Next.js (App Router)                     | Main framework                              |
| **Language**     | TypeScript                               | Type safety                                 |
| **State Mgmt**   | Zustand                                  | Global UI state (e.g., filter tags, counts) |
| **Data Fetching**| Redux Toolkit Query (RTK Query)          | User, Wallet and transaction APIs           |
| **Styling**      | Tailwind CSS                             | Component and layout styling                |
| **Animation**    | Framer Motion                            | Sidebar and modal animations                |
| **Testing**      | Jest + React Testing Library + Babel      | Component and page testing                  |

---

## ⚙️ Environment Setup

**Pull code from GitHub:**  
[https://github.com/FrankLucky1/mainstack-test](https://github.com/FrankLucky1/mainstack-test)

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Run the App

```bash
npm run dev
```

---

## 🧠 Core Logic Overview

### 🏠 Home Page

Located in `src/app/page.tsx`:

- Fetches wallet and transaction data via RTK Query
- Manages filter panel visibility
- Uses Zustand to track active filters and tags
- Renders components: Header, Chart, WalletTab, FloatingSidebar, Filter, TableItems

---

## ▶️ Running Tests

Run Jest in watch mode:

```bash
npx vitest
```

---

## 💡 Developer Notes

- `page.tsx` is the root entry page — replaces `Home.tsx` in a standard React app.
- Zustand is used for UI state only; Redux handles data fetching.
- Ensure your API endpoints are live or mocked for full testing.
- You can extend tests to cover Zustand store or Redux slices separately.

---

## ✅ Feature Status

| Feature          | Tool Used                    | Status |
| ---------------- | ---------------------------- | ------ |
| State management | Zustand + RTK Query          | ✅      |
| Animations       | Framer Motion                | ✅      |
| Testing          | Jest + React Testing Library | ✅      |
| Styling          | TailwindCSS                  | ✅      |
| Type safety      | TypeScript                   | ✅      |
| App router       | Next.js (App Directory)      | ✅      |

---

## 👨‍💻 Author

**Lucky Frank**  
Frontend Engineer specializing in React, Next.js, and TypeScript.  
🚀 Building modern interfaces with clean architecture and solid testing practices.

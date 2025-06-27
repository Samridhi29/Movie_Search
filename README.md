# 🎬 OMDB Movie Explorer

A sleek and responsive movie search application built with:

- ✅ **Next.js (App Router + TypeScript)**
- 🎨 **Tailwind CSS**
- 💎 **Shadcn UI**
- 🌘 **Dark/Light Mode**
- 🔎 **OMDB API** (for fetching movie data)


## 🚀 Features

- 🔍 Search movies by title using the OMDB API
- 🎴 Responsive movie cards with title, year, and poster
- 🌗 Light and dark mode toggle via `next-themes`
- ❌ Fallback image when poster is not available
- 📦 Component-based structure using Shadcn UI
- ✅ Built with modern Next.js App Router (app directory) and TypeScript

---

## 🛠️ Tech Stack

| Tool          | Description                                |
|---------------|--------------------------------------------|
| Next.js       | React framework for SSR and static sites   |
| TypeScript    | Strongly typed JavaScript                  |
| Tailwind CSS  | Utility-first CSS framework                |
| Shadcn UI     | Component library on top of Radix UI       |
| OMDB API      | Movie database API                         |
| Sonner        | Beautiful toast notifications              |

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/omdb-movie-app.git
cd omdb-movie-app
```
### 2. Install dependencies

```bash
npm install
```
### 3. Configure environment variables

```bash
NEXT_PUBLIC_OMDB_API_KEY=your_omdb_api_key_here
```
### 4. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

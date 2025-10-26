# 🐱 Random Cat Gallery

<div align="center">

<a href="https://nextjs.org/docs" target="_blank">
  <img src="https://img.shields.io/badge/Next.js-15.5.6-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
</a>
<a href="https://react.dev/" target="_blank">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
</a>
<a href="https://www.typescriptlang.org/docs/" target="_blank">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</a>
<a href="https://tailwindcss.com/docs" target="_blank">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</a>

<br />
<br />

**A web application that displays 10 random cat images in a card format using [The Cat API](https://thecatapi.com/)**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-blue?style=for-the-badge)](https://random-cat-gallery-mu.vercel.app)

</div>

## ✨ Features

- 🎲 **Random Cat Images** - Displays 10 random cat images in a beautiful card layout
- 🔄 **Regenerate Button** - Click a button to fetch and display a new set of random cat images
- 🎨 **Dark/Light Mode** - Toggle between dark and light themes
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## 🌐 Live Demo

Check out the live demo: **[https://random-cat-gallery-mu.vercel.app](https://random-cat-gallery-mu.vercel.app)**

## 🚀 Getting Started

> **🐈 API:** This project uses **[The Cat API](https://thecatapi.com/)** - Free API providing access to thousands of cat images
>
> **📋 Requirements:**
>
> - **Node.js** >= 20.x ([Download](https://nodejs.org/))
> - **Package Manager:** [npm](https://www.npmjs.com/) • [yarn](https://yarnpkg.com/) • [pnpm](https://pnpm.io/) • [bun](https://bun.sh/)

### Clone the Repository

```bash
git clone https://github.com/yuke325/random-cat-gallery.git
cd random-cat-gallery
```

### Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install
```

```bash
# Using yarn
yarn install
```

```bash
# Using pnpm
pnpm install
```

```bash
# Using bun
bun install
```

### Get Your Cat API Key

1. Visit [The Cat API Signup Page](https://thecatapi.com/signup)
2. Enter your email address
3. Check your email for your API key

### Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Open `.env.local` and add your API key:

```env
CAT_API_KEY=your_actual_api_key_here
```

> 💡 **Important:** Replace `your_actual_api_key_here` with the API key you received from The Cat API.

### Start the Development Server

```bash
# Using npm
npm run dev
```

```bash
# Using yarn
yarn dev
```

```bash
# Using pnpm
pnpm dev
```

```bash
# Using bun
bun dev
```

## 🙏 Acknowledgments

- Cat images provided by **[The Cat API](https://thecatapi.com/)**
- UI components from **[shadcn/ui](https://ui.shadcn.com/)**
- Tutorial reference: **[サバイバルTypeScript - Next.jsチュートリアル](https://typescriptbook.jp/tutorials/nextjs)**

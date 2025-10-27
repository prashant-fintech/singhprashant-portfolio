# Prashant Singh - Risk Data Engineer & Quantitative Technologist

Professional portfolio and blog showcasing 10+ years of experience in banking, fintech, and data engineering. Built with Next.js 15, TypeScript, Tailwind CSS, and MDX content management.

## ✨ Features

- **Professional Portfolio**: Showcasing expertise in risk analytics, quantitative finance, and data engineering
- **Technical Blog**: Deep-dive articles on PySpark, AWS, financial modeling, and FinTech solutions  
- **Modern Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Content Management**: MDX-powered blog with syntax highlighting for Python, SQL, and financial code
- **Performance**: Optimized for Core Web Vitals and fast loading
- **SEO Ready**: Built-in SEO metadata, RSS feeds, and sitemaps for professional visibility
- **Responsive Design**: Mobile-first design with dark mode support
- **Type Safety**: Full TypeScript coverage with strict type checking

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd singhprashant
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                 # Next.js App Router pages
│   ├── blog/           # Blog listing and post pages
│   ├── projects/       # Projects showcase
│   ├── about/          # About page
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components
├── content/           # MDX content files
│   ├── posts/         # Blog posts
│   └── projects/      # Project case studies
├── lib/               # Utility functions and configs
└── public/            # Static assets
```

## 🛠 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript checks

## 📝 Content Management

### Adding Blog Posts

Create new MDX files in `content/posts/`:

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Brief description of your post"
tags: ["nextjs", "react", "typescript"]
published: true
---

Your content here...
```

### Adding Projects

Create new MDX files in `content/projects/`:

```mdx
---
title: "Project Name"
description: "Project description"
date: "2024-01-15"
tech: ["Next.js", "TypeScript", "Tailwind"]
github: "https://github.com/username/repo"
demo: "https://demo-url.com"
published: true
---

Project details...
```

## 🎨 Customization

### Site Configuration

Edit `lib/seo.ts` to update site metadata:

```typescript
export const siteConfig = {
  name: "Your Name",
  url: "https://yoursite.com",
  description: "Your description",
  // ...
};
```

### Styling

- Tailwind configuration: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component styles: Use Tailwind classes

### Theme

The site supports light/dark mode out of the box. Customize colors in `tailwind.config.ts`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Manual Deployment

1. Build the application:
```bash
pnpm build
```

2. Start the production server:
```bash
pnpm start
```

### Environment Variables

No environment variables are required for basic functionality. Add as needed for additional features.

## 📊 Performance

- Lighthouse Score: 100/100/100/100
- Core Web Vitals optimized
- Image optimization with Next.js Image
- Static generation for optimal performance

## 🔧 Technologies

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Contentlayer2 + MDX
- **Icons**: Lucide React
- **Code Highlighting**: rehype-pretty-code
- **Date Handling**: date-fns
- **Deployment**: Vercel (recommended)

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 🏢 Founded Companies

- **FinPulse Labs**: Advanced analytics and AI solutions for financial institutions
- **Bankopedia**: Knowledge platform for banking professionals and fintech insights  
- **qfinbox**: Quantitative finance toolkit and risk analytics platform

## 📞 Contact

- Website: [singhprashant.dev](https://singhprashant.dev)
- Email: hello@singhprashant.dev
- GitHub: [@singhprashant](https://github.com/singhprashant)
- LinkedIn: [prashant-singh-dev](https://linkedin.com/in/prashant-singh-dev)

---

*Risk Data Engineer & Quantitative Technologist | 10+ years in Banking, FinTech & Data Engineering*

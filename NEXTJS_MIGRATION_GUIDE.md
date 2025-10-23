# Portfolio-V2: Vite + React → Next.js Migration Guide

## Project Analysis Summary

**Current Stack:**

- **Build Tool:** Vite 6.3.5
- **Framework:** React 19.1.0 + React Router DOM 7.6.2
- **Styling:** Tailwind CSS 4.1.10 (with @tailwindcss/vite)
- **UI Components:** Radix UI (accordion, dropdown, tooltip, etc.)
- **Animations:** Framer Motion 12.18.1, Lottie React 0.17.4
- **Language:** TypeScript 5.8.3
- **Structure:** SPA with single route (/) using React Router

**Key Components:**

- `src/main.tsx` — React DOM entry point
- `src/App.tsx` — Router setup with single route
- `src/context/theme-provider.tsx` — Theme context (Light/Dark)
- `src/components/` — Multiple UI components (profile, about, contact, education, projects, skills, resume, etc.)
- Custom UI components in `src/components/ui/` (button, card, accordion, dropdown-menu, tooltip)

**Current Entry Point:** `index.html` → `src/main.tsx` → `src/App.tsx` with React Router

---

## Why Migrate to Next.js?

✅ **Benefits:**

- Built-in SSR/SSG support (better SEO for portfolio)
- File-based routing (simpler than React Router for portfolios)
- Automatic code splitting and optimizations
- API routes (portfolio contact form backend)
- Image optimization
- Vercel deployment integration
- Modern React Server Components support (optional)

---

## Step-by-Step Migration Plan

### Phase 1: Preparation (No Breaking Changes Yet)

**1.1 Backup your current project**

```bash
# Make a backup branch
git checkout -b backup/vite-before-migration
git push origin backup/vite-before-migration

# Return to master
git checkout master
```

**1.2 Create a new Next.js project in a separate directory (optional, for comparison)**

```bash
npx create-next-app@latest portfolio-v2-next --typescript --tailwind --app
```

---

### Phase 2: Dependency Migration

**2.1 Remove Vite and React Router dependencies**

```bash
npm uninstall vite @vitejs/plugin-react @tailwindcss/vite react-router-dom react-dom
npm uninstall --save-dev vite typescript-eslint eslint-plugin-react-refresh
```

**2.2 Install Next.js and required dependencies**

```bash
npm install next@latest react@latest react-dom@latest
npm install -D typescript @types/node @types/react @types/react-dom eslint-config-next
```

**2.3 Verify your final dependencies**
After migration, your `package.json` will have:

- `next` (replaces vite)
- `react@19+` (already have)
- `react-dom@19+` (already have)
- Tailwind CSS (keep, but Next.js will manage it)
- All other dependencies remain: framer-motion, lucide-react, @lottiefiles/dotlottie-react, etc.

---

### Phase 3: Project Structure Reorganization

**3.1 Create new Next.js app directory structure**

```bash
# From your project root:

# 1. Keep src/components, src/context, src/lib as-is (they'll stay in src/)
# 2. Create new directories for Next.js:
mkdir -p src/app
mkdir -p public/assets

# 3. Move public assets if needed:
# (Your lottie animations should stay in public/assets or src/assets)
```

**3.2 Create Next.js app files**

Create `src/app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishaan Gupta",
  description: "Portfolio of Ishaan Gupta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link id="favicon" rel="icon" href="/user_light.png" />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" storageKey="next-ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

Create `src/app/page.tsx`:

```typescript
"use client";

import Profile from "@/components/profile";
import InteractionGradient from "@/components/interaction-gradient";
import { FixedGradient } from "@/components/fixed-gradient";
import { useEffect } from "react";
import { useTheme } from "@/context/theme-provider";

export default function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = theme === "dark" ? "/user_dark.png" : "/user_light.png";
    }
  }, [theme]);

  return (
    <>
      <FixedGradient />
      <InteractionGradient />
      <Profile />
    </>
  );
}
```

Create `src/app/globals.css` (migrate from `src/index.css`):

```bash
# Copy your current index.css to globals.css
cp src/index.css src/app/globals.css

# Keep src/App.css for component-specific styles (or migrate to CSS modules)
```

---

### Phase 4: Update TypeScript Configuration

Create/Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "outDir": ".next",
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "paths": {
      "@/*": ["./src/*"]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

### Phase 5: Create Next.js Configuration

Create `next.config.ts`:

```typescript
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "./src");
    return config;
  },
  images: {
    unoptimized: true, // Optional: set to false if using Vercel/server
  },
};

export default nextConfig;
```

---

### Phase 6: Update ESLint Configuration

Create `eslint.config.mjs`:

```javascript
import nextEslintConfig from "eslint-config-next/core";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: [".next"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  nextEslintConfig,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "react-hooks/exhaustive-deps": "warn",
    },
  }
);
```

---

### Phase 7: Update package.json Scripts

Replace the scripts section in `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

### Phase 8: Component Updates (Minor)

**Update imports in components** (if needed):

Most of your components should work as-is. However, check:

1. **Remove React Router imports** from any component that references them.
2. **Mark client-side components** with `"use client"` directive:
   - `src/components/profile.tsx`
   - `src/components/theme-toggle.tsx`
   - Any component using hooks

Example update for `src/components/profile.tsx`:

```typescript
"use client";

import AboutSection from "./about";
import Contact from "./contact";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";

export default function Profile() {
  return (
    <div className="container mx-auto">{/* ... rest of component ... */}</div>
  );
}
```

3. **Update ThemeProvider** (`src/context/theme-provider.tsx`):
   - Add `"use client"` at the top
   - Remove any hooks that aren't compatible with Server Components (already using `useContext` and `useEffect` which work in Client Components)

---

### Phase 9: Public Assets

**Ensure your public assets are properly placed:**

```bash
# Your lottie files should be in:
public/assets/boy.lottie  # (or wherever they are currently)

# Next.js serves public/ directly, same as Vite
# Update any import paths if needed:
# Old: import boy from "@/assets/boy.lottie"
# New: "/assets/boy.lottie" (static path in public)
```

---

### Phase 10: Testing & Migration Execution

**10.1 Remove old files that Next.js doesn't need:**

```bash
# Remove Vite-specific files:
rm vite.config.ts
rm src/main.tsx
rm src/App.tsx
rm index.html
rm tsconfig.app.json
rm tsconfig.node.json

# Keep everything else in src/
```

**10.2 Install dependencies and test:**

```bash
npm install
npm run dev
```

**10.3 Expected output:**

```
- Local:        http://localhost:3000
- Environments: .env.local
```

Visit `http://localhost:3000` and verify:

- ✅ All pages render correctly
- ✅ Theme toggle works
- ✅ Animations (Framer Motion, Lottie) display correctly
- ✅ Styling is applied
- ✅ No console errors

---

## Detailed Command Sequence (All-in-One)

Run these commands in order from your project root:

```bash
# 1. Backup current state
git checkout -b backup/vite-before-migration
git push origin backup/vite-before-migration
git checkout master

# 2. Remove Vite dependencies
npm uninstall vite @vitejs/plugin-react @tailwindcss/vite react-router-dom react-dom
npm uninstall --save-dev vite typescript-eslint eslint-plugin-react-refresh

# 3. Install Next.js
npm install next@latest react@latest react-dom@latest
npm install -D typescript @types/node @types/react @types/react-dom eslint-config-next

# 4. Create Next.js structure
mkdir -p src/app
mkdir -p public/assets

# 5. Copy and create new files (see Phase 3-6 above)
# Do this manually or use the file creation commands below

# 6. Remove old files
rm vite.config.ts src/main.tsx src/App.tsx index.html tsconfig.app.json tsconfig.node.json

# 7. Install final dependencies
npm install

# 8. Start development server
npm run dev
```

---

## File Checklist for Migration

### Delete These Files:

- ❌ `vite.config.ts`
- ❌ `src/main.tsx`
- ❌ `src/App.tsx`
- ❌ `index.html`
- ❌ `tsconfig.app.json`
- ❌ `tsconfig.node.json`

### Create These Files:

- ✅ `src/app/layout.tsx`
- ✅ `src/app/page.tsx`
- ✅ `src/app/globals.css`
- ✅ `next.config.ts`
- ✅ `tsconfig.json` (updated)
- ✅ `eslint.config.mjs` (updated)

### Keep These Directories (No Changes):

- ✅ `src/components/` — All components work as-is (add `"use client"` where needed)
- ✅ `src/context/` — Theme provider works with Next.js
- ✅ `src/lib/` — Utilities unchanged
- ✅ `src/assets/` — Public assets (or move to `public/assets/`)
- ✅ `public/` — Static files

---

## Post-Migration: Optional Enhancements

### 1. **API Routes** (for contact form)

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  // Handle email sending, form submission, etc.
  return NextResponse.json({ success: true });
}
```

### 2. **Image Optimization**

```typescript
import Image from "next/image";

export default function MyComponent() {
  return <Image src="/user_light.png" alt="User" width={100} height={100} />;
}
```

### 3. **Metadata per Route** (if you add more pages)

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
};
```

### 4. **Environment Variables**

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Troubleshooting

| Issue                                | Solution                                                              |
| ------------------------------------ | --------------------------------------------------------------------- |
| `"Cannot find module '@/...'"`       | Ensure `tsconfig.json` has the path alias `"@/*": ["./src/*"]`        |
| Styles not loading                   | Check `src/app/globals.css` is imported in `layout.tsx`               |
| Favicon not changing on theme toggle | Ensure `useEffect` is in a Client Component (add `"use client"`)      |
| Lottie animations not showing        | Verify `public/assets/` path and ensure component uses `"use client"` |
| Build errors about React Router      | Check all Router/Routes imports are removed                           |

---

## Deployment

### Vercel (Recommended for Next.js)

```bash
npm i -g vercel
vercel link
vercel deploy
```

### Self-Hosted (Node.js Server)

```bash
npm run build
npm start
```

### Static Export (if no server-side features needed)

In `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "export",
};
```

Then build to `out/` folder for static hosting.

---

## Summary

| Aspect                | Before (Vite)                | After (Next.js)                           |
| --------------------- | ---------------------------- | ----------------------------------------- |
| **Build Tool**        | Vite                         | Next.js                                   |
| **Router**            | React Router DOM             | File-based routing (app/)                 |
| **Entry Point**       | `index.html` → `main.tsx`    | `src/app/layout.tsx` + `src/app/page.tsx` |
| **Dev Server Port**   | 3000 (custom)                | 3000 (default)                            |
| **CSS**               | `index.css` + Vite plugin    | `src/app/globals.css` + Next.js           |
| **TypeScript Config** | Split (app.json + node.json) | Single `tsconfig.json`                    |
| **Components**        | Most work as-is              | Add `"use client"` for client-side        |

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router Migration](https://nextjs.org/docs/app)
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [TypeScript with Next.js](https://nextjs.org/docs/app/building-your-application/configuring/typescript)

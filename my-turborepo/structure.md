# Project Structure and Guidelines

This document outlines the structure of the `my-turborepo` monorepo, explains how to use the shared packages, and provides guidelines for developing the micro-frontends (MFEs).

## 1. Monorepo Structure

The repository is a Turborepo-powered monorepo with the following structure:

```
my-turborepo/
|-- apps/
|   |-- docs/         # Documentation MFE (Next.js)
|   `-- web/          # Main Web Application MFE (Next.js)
|-- packages/
|   |-- eslint-config/      # Shared ESLint configuration
|   |-- prettier-config/    # Shared Prettier configuration
|   |-- tailwind-config/  # Shared Tailwind CSS preset
|   |-- tsconfig/         # Shared TypeScript configurations
|   `-- ui/               # Shared React component library (shadcn/ui based)
|-- package.json
|-- turbo.json
`-- structure.md
```

- **`apps/`**: Contains the individual micro-frontends (MFEs). Each MFE is a standalone application (e.g., a Next.js app).
- **`packages/`**: Contains shared code and configurations that can be used across all MFEs.

## 2. Shared Packages

### 2.1. UI Components (`@repo/ui`)

This package contains a set of shared, unstyled React components based on `shadcn/ui`. All MFEs should import these components to maintain a consistent look and feel.

**Available Components:**
- `Button`
- `Card`, `CardHeader`, `CardFooter`, `CardTitle`, `CardDescription`, `CardContent`
- `Input`
- `Label`
- `Textarea`

**How to Use:**

Import components directly from the `@repo/ui` package within your MFE's components:

```tsx
// Example: apps/web/app/page.tsx

import { Button } from "@repo/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/card";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";

export default function Page() {
  return (
    <main>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Shared UI Components</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <Button className="mt-4">Click Me</Button>
        </CardContent>
      </Card>
    </main>
  );
}
```

### 2.2. Shared Configurations

To ensure consistency across the monorepo, we use shared configurations for ESLint, Prettier, Tailwind CSS, and TypeScript.

- **ESLint (`@repo/eslint-config`)**: Enforces a consistent coding style. Your MFE's `.eslintrc.js` should extend from this package.
- **Prettier (`@repo/prettier-config`)**: Enforces consistent code formatting. Your MFE's `prettier.config.js` should import this package.
- **Tailwind CSS (`@repo/tailwind-config`)**: Provides a shared Tailwind CSS preset with theme tokens (colors, border radius, etc.). Your MFE's `tailwind.config.ts` must use this preset.
- **TypeScript (`@repo/typescript-config`)**: Provides base `tsconfig.json` files for different types of projects (e.g., `nextjs.json`, `react-library.json`). Your MFE's `tsconfig.json` should extend from the appropriate file in this package.

## 3. MFE Guidelines

### 3.1. Development Workflow

1.  **Run all apps:** From the root of the `my-turborepo` directory, run `npm run dev` to start the development servers for all MFEs simultaneously.
2.  **Create new components:** If a component is specific to a single MFE, create it within that MFE's directory (e.g., `apps/web/components/`). If the component is intended to be used by multiple MFEs, add it to the `@repo/ui` package.
3.  **Install dependencies:** When adding a new dependency, determine if it's specific to one MFE or should be shared. Install it in the appropriate `package.json` and run `npm install` from the root of the monorepo.

### 3.2. Styling

- **Use Tailwind CSS:** All styling should be done using Tailwind CSS utility classes.
- **Use shared components:** Whenever possible, use the components from the `@repo/ui` package.
- **No custom CSS files (unless necessary):** Avoid writing custom CSS files. If you must, keep them scoped to the component they are styling.

### 3.3. State Management

Each MFE is responsible for its own state management. If you need to share state between MFEs, consider using a global state management library (e.g., Zustand, Redux) or passing state via URL parameters or a shared parent application (if applicable).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Table of Contents

1. [Introduction](#introduction)

2. [Prerequisites and Environment Setup](#prerequisites-and-environment-setup)

3. [Available Scripts](#available-scripts)

4. [Automated Testing Tools](#automated-testing-tools)

5. [Project Structure Overview](#project-structure-overview)

6. [Learn More](#Learn-More)

7. [Deploy on Vercel](Deploy-on-Vercel)

## Introduction

The dummy-web-app Website is a static web application designed to present information for the major learnings mostly about the latest tools which are essential for developing quality products. The website aims to provide a centralized platform for users to learn about tool offerings and access relevant information.

---

## Prerequisites and Environment Setup

Before starting, ensure the following tools are installed:

- **Node.js** and **npm**:

- Required version: `20.x`

- This project uses [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) or [asdf](https://asdf-vm.com/) to manage Node.js versions.

- To install the correct version:

With `nvm`:

```bash

nvm install

```

With `asdf`:

```bash

asdf install

```

- **Git**:

Required for version control. Ensure Git is installed and available in your system PATH.

> All other dependencies are declared in `package.json` and installed via `npm install`. Do **not** install packages globally.

## Environment Setup

1. Copy the `.env.example` file.

2. Fill in the required values. You can get the latest values from [our private Gist](https://gist.github.com/VPLI-Dev-01/d2b371017fc53ccf2be889b5537ca458).

> **Do not commit `.env.local`** — it is git-ignored for safety.

## Available Scripts

The following npm scripts are available for development, testing, and deployment:

### Development

First, run the development server:

```bash

npm  run  dev

# or

yarn  dev

# or

pnpm  dev

# or

bun  dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## Automated Testing Tools

This project uses automated testing tools to ensure code quality and maintainability.

### 1. Storybook (Component Development & Visual Testing)

[Storybook](https://storybook.js.org/docs) helps develop and preview UI components in isolation. It's ideal for visually testing, documenting, and collaborating on design systems.

- Preview components independently of the app.
- Document component props, states, and variations.
- Visually test UI consistency across changes.

### Installation

To install Storybook in the project:

```bash
npm install --save-dev @storybook/nextjs @storybook/addon-a11y @storybook/addon-docs @chromatic-com/storybook

```

### Update `.storybook/main.ts`

Replace your current config with the following:

```bash
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  staticDirs: ["../public"],
  core: {
    builder: "webpack5"
  }
};

export default config;

```

### Update `.storybook/preview.ts`

Use this to set global decorators and import styles like Tailwind:

```bash
import "../src/app/globals.css"; // adjust if your CSS file is elsewhere

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

```

- To run Storybook locally:

```bash

npm run storybook

```

- To build static docs:

```bash

npm run build-storybook

```

---

## Project Structure Overview

The project is organized as follows:

```plaintext

VPLI_Website/

├── public/ # Public assets (images, stylesheets, etc.)

├── src/

│ ├── app/ # Next.js app directory for routing and pages

│ │ ├── components/ # Reusable React components

│ │ ├── utils/ # Utility functions and helpers

│ │ ├── (general)/ # General pages and layouts

│ │ └── api/ # API routes (if applicable)

│ ├── styles/ # Global and component-specific styles

│ └── instrumentation.ts # Sentry instrumentation setup

├── .env # Environment variables

├── next.config.mjs # Next.js configuration

├── jest.setup.js # Jest setup file

├── package.json # Project dependencies and scripts

└── README.md # Project documentation

```

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

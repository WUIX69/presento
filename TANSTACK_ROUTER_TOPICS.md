# TanStack Router with Lynx

> Comprehensive guide for implementing TanStack Router in Lynx applications

## Table of Contents

- [Overview](#overview)
- [Environment Constraints](#environment-constraints)
- [Hard Requirements](#hard-requirements)
  - [1. Router Configuration](#1-router-configuration)
  - [2. React 18 Compatibility Layer](#2-react-18-compatibility-layer)
  - [3. Polyfills](#3-polyfills)
  - [4. Navigation Constraints](#4-navigation-constraints)
- [Quick Reference](#quick-reference)

---

## Overview

When using TanStack Router with ReactLynx, you are running a web-standard router in a **non-web environment**. Lynx uses a dual-thread architecture (Main/Background) and lacks a traditional browser DOM, requiring specific configuration to avoid crashes or navigation failures.

> [!IMPORTANT]
> Lynx does not provide a browser-standard DOM. All routing logic must account for the absence of `document`, `window`, and browser history APIs.

---

## Environment Constraints

### No DOM Access

Lynx does not expose traditional web APIs. Ensure your routing implementation **does not** rely on:

- `document` object
- `window` object
- Browser-specific history APIs

### Dual-Thread Architecture

Lynx separates execution into two threads:

- **Main Thread**: Handles UI rendering and high-performance operations
- **Background Thread**: Executes JavaScript logic, including navigation

> [!NOTE]
> If you trigger navigation from the Main Thread (e.g., scroll handlers), you must bridge the call back to the Background Thread.

---

## Hard Requirements

The following four requirements are **mandatory** to ensure proper router functionality in Lynx.

### 1. Router Configuration

You **must** explicitly configure the router with memory-based history and correct environment detection.

#### Why This Matters

- **Memory History**: Lynx has no `window.history`. Using the default browser history will crash the app
- **Server Detection**: Without setting `isServer: false`, TanStack Router may incorrectly detect a server environment due to the undefined `document` object, disabling client-side interactivity

#### Implementation

```typescript
// App.tsx
import { createMemoryHistory, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"], // Set your initial route
});

export const router = createRouter({
  routeTree,
  history: memoryHistory,
  isServer: false, // Required for Lynx background thread
});
```

> [!CAUTION]
> Omitting `createMemoryHistory` or `isServer: false` will cause application crashes or non-functional navigation.

---

### 2. React 18 Compatibility Layer

ReactLynx requires a compatibility layer to support modern React 18 features like Transitions and Suspense.

#### Why This Matters

Without this alias, `useNavigate` will fail because it depends on `React.startTransition`, which isn't available in the base Lynx runtime.

---

### 3. Polyfills

Lynx's JavaScript engine (PrimJS) is lightweight and does **not** include `URLSearchParams`, which TanStack Router uses extensively for type-safe search parameters.

#### Why This Matters

Without this polyfill, any route with search parameters (e.g., `?studentId=123`) will fail.

#### Implementation

Install the polyfill:

```bash
npm install url-search-params-polyfill
```

Import it **at the very top** of your entry file, before all other imports:

```typescript
// index.tsx
import 'url-search-params-polyfill';
import { root } from '@lynx-js/react';
import { App } from './App';

root.render(<App />);
```

> [!WARNING]
> The polyfill import must be the **first line** in your entry file. Failing to do so will cause runtime errors when parsing search parameters.

---

### 4. Navigation Constraints

Lynx's event system and component model differ from standard web applications.

#### Avoid `<Link>` Components

While TanStack's `<Link>` component works, it's designed for web environments. In Lynx, use the `useNavigate` hook with native Lynx components for better performance.

#### Recommended Pattern

```tsx
import { useNavigate } from "@tanstack/react-router";

function StudentListItem({ studId }: { studId: string }) {
  const navigate = useNavigate();

  return (
    <view bindtap={() => navigate({ to: "/stud/$studId", params: { studId } })}>
      <text>Open Students</text>
    </view>
  );
}
```

#### Thread Awareness

Navigation logic runs in the **Background Thread**. If you need to trigger navigation from Main Thread scripts:

1. Emit a custom event from the Main Thread
2. Listen for the event in the Background Thread
3. Execute navigation in the event handler

---

## Quick Reference

| Feature           | Mandatory Requirement                            |
| ----------------- | ------------------------------------------------ |
| **History**       | Use `createMemoryHistory`                        |
| **Environment**   | Explicitly set `isServer: false`                 |
| **Bundler Alias** | Alias `react` to `@lynx-js/react/compat`         |
| **Polyfill**      | Import `url-search-params-polyfill` first        |
| **Navigation**    | Use `useNavigate` hook with `<view>` + `bindtap` |
| **Rendering**     | Use `<Outlet />` inside Lynx `<view>` components |

---

## Additional Resources

- [TanStack Router Documentation](https://tanstack.com/router)
- [Lynx Framework Documentation](https://lynx-js.org)
- [ReactLynx Compatibility Guide](https://lynx-js.org/react)

---

**Last Updated**: January 2026

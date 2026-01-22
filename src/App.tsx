import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

/**
 * Create Memory History
 * Required for Lynx environment (no window.history)
 */
const memoryHistory = createMemoryHistory({
  initialEntries: ["/"],
});

/**
 * Create Router Instance
 * With Lynx-specific configuration
 */
const router = createRouter({
  routeTree,
  history: memoryHistory,
  isServer: false, // Required for Lynx background thread
});

/**
 * App Component
 *
 * Main application component with TanStack Router.
 * The router handles all navigation and layout is provided by __root.tsx
 */
export function App() {
  return <RouterProvider router={router} />;
}

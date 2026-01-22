import "url-search-params-polyfill"; // To ensure URLSearchParams API works correctly in the Lynx environment, add url-search-params-polyfill at the top of your entry file:

import "@lynx-js/preact-devtools";
import "@lynx-js/react/debug";
import { root } from "@lynx-js/react";
import { App } from "./App";
import "./App.css";

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}

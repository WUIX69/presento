import '@lynx-js/preact-devtools';
import '@lynx-js/react/debug';
import { root, useState } from '@lynx-js/react';

// Next.js style layout and pages
import './app/global.css';
import RootLayout from './app/layout';
import HomePage from './app/page';
import SignInPage from './app/auth/sign-in/page';
import SignUpPage from './app/auth/sign-up/page';

export function App() {
  const [currentPage, setCurrentPage] = useState<
    'gallery' | 'sign-in' | 'sign-up'
  >('sign-in');

  return (
    <RootLayout>
      {currentPage === 'gallery' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'sign-in' && <SignInPage onNavigate={setCurrentPage} />}
      {currentPage === 'sign-up' && <SignUpPage onNavigate={setCurrentPage} />}
    </RootLayout>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}

import { useState } from '@lynx-js/react';
import RootLayout from './routes/_layout';
import SignInPage from './routes/auth/sign-in/index';
import SignUpPage from './routes/auth/sign-up/index';
import LandingPage from './routes/index';

type Page = 'gallery' | 'sign-in' | 'sign-up';

/**
 * App Component
 *
 * Main application component with manual routing.
 * This will be replaced with TanStack Router or React Router in the future.
 *
 * Layout hierarchy:
 * RootLayout (ThemeProvider + Navbar + Footer + Scroll + Background) > Page
 */
export const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('gallery');

  const renderPage = () => {
    switch (currentPage) {
      case 'gallery':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'sign-in':
        return <SignInPage onNavigate={setCurrentPage} />;
      case 'sign-up':
        return <SignUpPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return <RootLayout>{renderPage()}</RootLayout>;
};

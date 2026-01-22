import { useState } from "@lynx-js/react";
import RootLayout from "./routes/_layout";
import SignInPage from "./routes/auth/sign-in/index";
import SignUpPage from "./routes/auth/sign-up/index";
import LandingPage from "./routes/index";
import StudentPage from "./routes/student/index";
import TeacherPage from "./routes/teacher/index";

type Page = "home" | "sign-in" | "sign-up" | "student" | "teacher";

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
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage onNavigate={setCurrentPage} />;
      case "sign-in":
        return <SignInPage onNavigate={setCurrentPage} />;
      case "sign-up":
        return <SignUpPage onNavigate={setCurrentPage} />;
      case "student":
        return <StudentPage onNavigate={setCurrentPage} />;
      case "teacher":
        return <TeacherPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return <RootLayout>{renderPage()}</RootLayout>;
};

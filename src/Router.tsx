import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/appLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import CookiePolicy from "./pages/CookiePolicy";
import CodeOfConduct from "./pages/CodeOfConduct";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <TermsAndCondition />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "/code-of-conduct",
        element: <CodeOfConduct />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
    ],
  },
]);

export default Router;

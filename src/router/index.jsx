import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import {ROUTES} from "../routes";
import Blog from "../pages/Blog";
import Faq from "../pages/Faq";
import BookDetails from "../pages/BookDetails";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <HomePage/>
  }, {
    path: `${ROUTES.ABOUT}`,
    element: <About/>
  }, {
    path: `${ROUTES.BLOG}`,
    element: <Blog/>
  }, {
    path: `${ROUTES.FAQ}`,
    element: <Faq/>
  }, {
    path: `${ROUTES.SINGLE_BOOK.STATIC}`,
    element: <BookDetails/>
  }, {
    path: `*`,
    element: <NotFound/>
  }
]);

import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from './components/Hero/Hero.jsx';
import SingleProductDetail from './components/SingleProductDetail/SingleProductDetail.jsx';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Hero/>,
        },
        {
          path : "/SingleProductDetail",
          element : <SingleProductDetail/>
        },
      ],
    },
  ]);
  createRoot(document.getElementById("root")).render(
    <>
      <RouterProvider router={router} />
    </>
  );

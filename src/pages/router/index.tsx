import { createBrowserRouter } from "react-router-dom";
import { ProductPage, loadProductData } from "../ProductPage";
import { MainApp } from "../main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
  },
  {
    path: "product/:id",
    element: <ProductPage />,
    loader: (params) => loadProductData(params),
  },
]);

export default router;

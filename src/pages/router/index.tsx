import { createBrowserRouter } from "react-router-dom";
import { ProductPage, loadProductData } from "../ProductPage";
import { MainApp } from "../main";
import { loadFilterData } from "../MainTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    loader: (params) => loadFilterData(params),
  },
  {
    path: "/:name",
    element: <MainApp />,
    loader: (params) => loadFilterData(params),
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
    loader: (params) => loadProductData(params),
  },
]);

export default router;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import App from "./App";
import ErrorPage from './Pages/ErrorPage';
import LayoutRoot from './components/LayoutRoot';
import { Provider } from "react-redux";
import store from "./Store/Index";
import AddPost from "./Pages/AddPost";
import Edit from './Pages/Edit';
import Details from './Pages/Details';


const router = createBrowserRouter([{
  
    path: "/",
    element:<LayoutRoot/>,
    errorElement:<ErrorPage/>,
    children:[
      {index :true ,element:<App/>},
        {path:'add' ,element:<AddPost/>},
        {path:':id/details' ,element:<Details/>},
        {path:':id/edit' ,element:<Edit/>}

    ]
}])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </>
);

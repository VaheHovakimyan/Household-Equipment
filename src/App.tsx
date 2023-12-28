import React from 'react';
import {Home} from "./pages/home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./pages/RootLayout";
import {NotFound} from "./pages/notFound/NotFound";
import {Register} from "./pages/register/Register";
import {Login} from "./pages/login/Login";
import {ShopBag} from "./pages/shop-bag/ShopBag";
import {Store} from "./pages/store/Store";
import {CategoriesSidebarProducts} from "./components/store/categoriesSidebarProducts/CategoriesSidebarProducts";
import {Products} from "./pages/products/Products";
import {History} from "./pages/history/History";


function App() {


    const router = createBrowserRouter([
            {
                path: "/",
                element: <RootLayout/>,
                children: [
                    {
                        index: true,
                        element: <Home/>
                    },
                    {
                        path: "store",
                        element: <Store/>
                    },
                    {
                        path: "store/:id",
                        element: <CategoriesSidebarProducts/>
                    },
                    {
                        path: "register",
                        element: <Register/>
                    },
                    {
                        path: "products/:id",
                        element: <Products/>
                    },
                    {
                        path: "login",
                        element: <Login/>
                    },
                    {
                        path: "shop-bag",
                        element: <ShopBag/>
                    },
                    {
                        path: "shop-history",
                        element: <History/>
                    },
                    {
                        path: "*",
                        element: <NotFound/>
                    }
                ]
            },

        ]
    );


    return (
        <RouterProvider router={router}/>
    );
}

export default App;

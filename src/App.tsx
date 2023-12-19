import React from 'react';
import {Home} from "./pages/home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Test} from "./pages/TEst";
import {RootLayout} from "./pages/RootLayout";
import {NotFound} from "./pages/notFound/NotFound";


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
                        element: <Test/>
                    },
                    {
                        path: "*",
                        element: <NotFound />
                    }
                ]
            },

        ]
    )


    return (
        <RouterProvider router={router}/>
    );
}

export default App;

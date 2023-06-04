import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {css, Global} from "@emotion/react";
import {BrowserRouter as Router} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "react-query";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});


root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <Global styles={css`
                  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

                  body {
                    font-family: Inter, sans-serif;
                  }
                `}/>
                <App/>
                <ToastContainer/>
            </Router>
        </QueryClientProvider>
    </React.StrictMode>
);

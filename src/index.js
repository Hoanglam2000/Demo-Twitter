import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ContextProviders from './context';
import './resetStyle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProviders>
        <ChakraProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </ContextProviders>
);

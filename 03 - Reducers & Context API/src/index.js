import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './components/store/authContext';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);

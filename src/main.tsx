
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import AppAppBar from './components/AppAppBar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppAppBar />
    <App />
  </StrictMode>
);

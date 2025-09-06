import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/globals.css';
import { App } from './core/App';

// @ts-expect-error
import 'swiper/css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

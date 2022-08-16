import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootContainer = document.querySelector('#root');

if (rootContainer != null) {
	createRoot(rootContainer).render(<App />);
}

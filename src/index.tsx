import React from 'react';
import { createRoot } from 'react-dom/client';

import classNames from './index.scss';
import Main from './pages/Main';

console.log(classNames);
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
rootElement.classList.add(classNames.root);

const root = createRoot(rootElement);
root.render(<Main />);

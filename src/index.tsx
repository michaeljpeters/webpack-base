import { createRoot } from 'react-dom/client';

import App from './components/app';

import './index.scss';

const main = document.querySelector('main');
if (main === null) {
    throw new Error('unable to find main!');
}
const root = createRoot(main);
root.render(<App />);

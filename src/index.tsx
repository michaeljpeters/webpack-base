import { FC } from 'react';
import { createRoot } from 'react-dom/client';

import { doWork } from './module';

import './index.scss';

import MushroomCatImage from './img/mushroom-cat.png';

import Portrait from './portrait';

const App: FC = () => {
    const num = doWork();
    console.log('work gave', num);
    return (
        <div>
            <div>Hello, Webpack</div>
            <Portrait src={MushroomCatImage} />
        </div>
    );
};

const main = document.querySelector('main');
if (main === null) {
    throw new Error('unable to find main!');
}
const root = createRoot(main);
root.render(<App />);

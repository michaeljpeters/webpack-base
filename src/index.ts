import { doWork } from './module';

import './index.scss';

function createComponent(): HTMLElement {
    const elem = document.createElement('div');
    elem.innerText = 'Hello, Webpack';
    const num = doWork();
    console.log('work gave', num);
    return elem;
}

const elem = createComponent();
document.body.appendChild(elem);

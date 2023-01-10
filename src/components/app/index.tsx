import MushroomCatImage from './mushroom-cat.png';

import { FC } from 'react';
import Portrait from '../portrait';

const App: FC = () => {
    return (
        <div>
            <div>Hello, Webpack</div>
            <Portrait src={MushroomCatImage} />
        </div>
    );
};

export default App;

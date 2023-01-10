import MushroomCatImage from './mushroom-cat.png';

import Portrait from '../portrait';
import { FC } from 'react';

const App: FC = () => {
    return (
        <div>
            <div>Hello, Webpack</div>
            <Portrait src={MushroomCatImage} />
        </div>
    );
};

export default App;

import { FC } from 'react';

interface PortraitProps {
    src: string;
}
const Portrait: FC<PortraitProps> = (props: PortraitProps) => {
    const { src } = props;
    return (
        <div>
            Portrait <img src={src} />
        </div>
    );
};

export default Portrait;

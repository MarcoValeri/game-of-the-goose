import Panel from '../Panel/Panel';
import User from '../User/User';

import './GameSpace.scss';

const GameSpace = () => {
    return (
        <div className="game-space">
            <User name="MV" step={3} />
            <Panel number={0} />
            <Panel number={1} />
            <Panel number={2} />
            <Panel number={3} />
        </div>
    )
}

export default GameSpace;

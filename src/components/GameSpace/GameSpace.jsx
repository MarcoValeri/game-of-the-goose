import Panel from '../Panel/Panel';
import User from '../User/User';

import './GameSpace.scss';

const GameSpace = () => {
    return (
        <div className="game-space">
            <User name="MV" />
            <Panel />
        </div>
    )
}

export default GameSpace;

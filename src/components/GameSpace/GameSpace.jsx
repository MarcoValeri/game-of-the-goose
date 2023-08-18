import { useState } from 'react';
import Dice from '../Dice/Dice';
import Panel from '../Panel/Panel';
import User from '../User/User';

import './GameSpace.scss';

const GameSpace = () => {

    const [userStep, setUserStep] = useState(0);
    const [userNewSteps, setUserNewSteps] = useState(0);

    // Events
    const stepsClickHandler = () => {
        setUserNewSteps(setRandomInteger(1, 12));
        setUserStep(current => current + userNewSteps);
    }

    // Functions
    const setRandomInteger = (minInteger, maxInteger) => {
        return Math.floor(Math.random() * (maxInteger - minInteger) + minInteger);
    }

    return (
        <div className="game-space">
            <div className="game-space__table">
                <User name="MV" step={userStep} />
                <Panel number={0} />
                <Panel number={1} />
                <Panel number={2} />
                <Panel number={3} />
                <Panel number={4} />
                <Panel number={5} />
                <Panel number={6} />
                <Panel number={7} />
                <Panel number={8} />
                <Panel number={9} />
                <Panel number={10} />
                <Panel number={11} />
                <Panel number={12} />
                <Panel number={13} />
                <Panel number={14} />
                <Panel number={15} />
                <Panel number={16} />
                <Panel number={17} />
                <Panel number={18} />
                <Panel number={19} />
                <Panel number={20} />
                <Panel number={21} />
                <Panel number={22} />
                <Panel number={23} />
                <Panel number={24} />
                <Panel number={25} />
                <Panel number={26} />
                <Panel number={27} />
                <Panel number={28} />
                <Panel number={29} />
                <Panel number={30} />
                <Panel number={31} />
                <Panel number={32} />
                <Panel number={33} />
                <Panel number={34} />
                <Panel number={35} />
                <Panel number={36} />
                <Panel number={37} />
                <Panel number={38} />
                <Panel number={39} />
                <Panel number={40} />
                <Panel number={41} />
                <Panel number={42} />
                <Panel number={43} />
                <Panel number={44} />
                <Panel number={45} />
                <Panel number={46} />
                <Panel number={47} />
                <Panel number={48} />
                <Panel number={49} />
            </div>
            <div className="game-space__dice">
                <Dice handlerSteps={stepsClickHandler} />
            </div>
        </div>
    )
}

export default GameSpace;

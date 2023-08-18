import './Dice.scss';

const Dice = props => {
    return (
        <div>
            <button onClick={props.handlerSteps}>Move</button>
        </div>
    )
}

export default Dice;
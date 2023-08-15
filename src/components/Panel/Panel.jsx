import './Panel.scss';

const Panel = props => {
    return (
        <div className={`panel ${props.number > 0 ? 'panel__step-' + props.number : ''}`}>
            <div className="panel__wrapper">
                <div className="panel__container-number">
                    <h3 className="panel__number h3">{props.number}</h3>
                </div>
            </div>
        </div>
    )
}

export default Panel;

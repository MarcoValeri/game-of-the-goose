import './User.scss';

const User = props => {
    return (
        <div className={`user ${props.step > 0 ? 'user__step-' + props.step : ''}`}>
            <h2>{props.name}</h2>
        </div>
    )
}

export default User;

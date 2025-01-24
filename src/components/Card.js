import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; // Lisame klassi dünaamiliselt
    return <div className={classes}>{props.children}</div>;
};

export default Card;

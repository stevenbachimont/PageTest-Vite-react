import './Card.css';
import PropTypes from "prop-types";

function Card({image, firstName, lastName}) {
    return (
        <div id="card"  className="card">
            <img src={image} alt="Avatar" />
            <div className="container">
                <h4>{firstName} {lastName}</h4>
                <button className="more">En savoir +</button>
            </div>
        </div>
    );
}
Card.propTypes = {
    image: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}

export default Card;

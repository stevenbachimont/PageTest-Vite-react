import './Card.css';

function Card({image, firstName, lastName}) {
    return (
        <div id="card"  className="card">
            <img src={image} alt="Avatar" />
            <div className="container">
                <h4>{firstName} {lastName}</h4>
            </div>
        </div>
    );
}

export default Card;

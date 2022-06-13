import { useState } from "react";
import "./pinCard.css";
import Link from '../../assets/Link.png'

const SourceLink = ({ source }) => {
    return (
        <div className="pinCard__source__container">
            <img className="pinCard__source_imageLink" src={Link} alt="Link" />
            <a href={source} className="pinCard__source__text">{source}</a>
        </div>
    );
};

const PinCard = ({urlImage, name, source}) => {
    // Render face
    const [isHovered, setIsHovered] = useState();

    return (
        <div className="pinCard__container">
            <div
                className="pinCard__image__container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img className="pinCard__image" src={urlImage} alt={`pin-${name}`} />
                {isHovered && <SourceLink source={source} /> }
            </div>
            <span className="pinCard__name">{name}</span>
        </div>
    );
};

export default PinCard;
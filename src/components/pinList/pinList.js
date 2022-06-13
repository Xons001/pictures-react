import PinCard from "../pinCard/pinCard";
import "./pinList.css"

const listOfPins = [
    {
        "id":1,
        "author": 18,
        "source": "https://reverbnation.com",
        "urlImage": "https://images.unsplash.com/photo-1654802321555-c596f69658aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "name": "Asientos increibles"
    },
    {
        "id":2,
        "author": 5,
        "source": "https://bravesites.com",
        "urlImage": "https://images.unsplash.com/photo-1654812548511-172cbecd449f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "name": "Mar precioso",
        "description": "Tiene unas vistas muy increibles desde muy lejos"
    },
    {
        "id":3,
        "author": 9,
        "source": "https://dion.ne.jp",
        "urlImage": "https://images.unsplash.com/photo-1654821930773-241591c2dbd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "name": "Cascada suprema",
        "description": "Puedes sentir que la imagen te puede hasta salpicar"
    }
];

const PinList = () => {
    // Render Phase

    return (
        <div className="pinList__container">
            {listOfPins.map(pin => (
                <PinCard 
                    urlImage={pin.urlImage} 
                    name={pin.name}
                    source={pin.source}
                />
            ))}
        </div>
    )
};

export default PinList;
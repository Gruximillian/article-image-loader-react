import React, {useState} from 'react';
import './App.css';

const imageNames = ['galaxies.png', 'bridge.jpg', 'stars.jpg', 'sombrero.jpg'];

function App() {
    const [numberOfTimesLoaded, setNumberOfTimesLoaded] = useState(0);
    const [imagePath, setImagePath] = useState(undefined);

    function loadImage() {
        setNumberOfTimesLoaded(numberOfTimesLoaded + 1);
        const imageName = imageNames[numberOfTimesLoaded % imageNames.length];
        setImagePath(`img/${imageName}`);
    }

    return (
        <div>
            <div className="container button-container">
                <button
                    className="load-button"
                    onClick={loadImage}
                >
                    Load Image
                </button>
            </div>

            <div className="container image-container-with-loader">
                {
                    imagePath &&
                    <img src={imagePath} alt="image placeholder"/>
                }
            </div>
        </div>
    );
}

export default App;

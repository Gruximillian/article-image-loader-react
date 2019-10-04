import React, {useState} from 'react';
import './App.css';

const imageNames = ['galaxies.png', 'bridge.jpg', 'stars.jpg', 'sombrero.jpg'];

function App() {
    const [numberOfTimesLoaded, setNumberOfTimesLoaded] = useState(0);
    const [imagePath, setImagePath] = useState(undefined);
    const [loading, setLoading] = useState(false);

    function loadImage() {
        setLoading(true);

        setNumberOfTimesLoaded(numberOfTimesLoaded + 1);
        const imageName = imageNames[numberOfTimesLoaded % imageNames.length];
        const imagePath = `https://gruximillian.github.io/article-image-loader-react/img/${imageName}`;

        fetch(imagePath)
            .then(response => {
                if (response.ok) {
                    console.log('ok');
                    setImagePath(imagePath);
                }
            })
            .catch(error => {
                console.log(error);

            })
            .finally(() => {
                setLoading(false);
            });
    }

    const loadingClass = loading ? 'loading' : '';

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

            <div className={`container image-container-with-loader ${loadingClass}`}>
                {
                    imagePath &&
                    <img src={imagePath} alt="image placeholder"/>
                }
            </div>
        </div>
    );
}

export default App;

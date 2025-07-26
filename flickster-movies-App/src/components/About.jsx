import { useLocation, useNavigate } from 'react-router-dom';


function About({ setShowAbout }) {

    const navigate = useNavigate();
    const location = useLocation();

    const handleAboutClick = () => {
        if (location.pathname !== "/home") {
            navigate("/home#about");
        } else {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    return (
        <div id="about-section" className="about-section">
            <h2>About Flickster</h2>
            <p>
                Flickster Movies App is a dynamic and user-friendly web application <br />
                built for movie lovers to search, explore, and interact with movies and TV series. <br />
                The app is designed with a clean, responsive UI and packed with features that offer <br />
                a smooth and personalized experience to the user being able to see new releases and also <br />
                giving them to create a favorite movie collection.
            </p>
            <p>
                Our mission is to connect movie lovers around the world...
            </p>
            <button onClick={handleAboutClick}>About</button>
        </div>
    );
}

export default About;
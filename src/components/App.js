import '../style/App.css';
import Navbar from './Navbar';
import Section from './Section';
import SectionImage from '../img/Bloom-3.jpg';



function App() {
    return (
        <>
            <Navbar />
            <Section
                image={SectionImage}
            />
        </>
    );
}

export default App;

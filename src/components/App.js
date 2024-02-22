import '../style/App.css';
import Navbar from './Navbar';
import Section from './Section';
import SectionTwo from './SectionTwo';
import SectionImage from '../img/Bloom-3.jpg';
import SectionTwoImage from '../img/coff.jpg'



function App() {
    return (
        <>
            <Navbar />
            <Section
                image={SectionImage}
            />
            <SectionTwo background={SectionTwoImage} />
        </>
    );
}

export default App;

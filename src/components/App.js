// App.js
import React from 'react';
import '../style/App.css';
import Navbar from './Navbar';
import Section from './Section';
import SectionTwo from './SectionTwo';
import SectionImage from '../img/Bloom-3.jpg';
import SectionTwoImage from '../img/coff.jpg';
import SectionTwoImage1 from '../img/boximage1.jpg';
import SectionTwoImage3 from '../img/boximage3.jpg';
import Sectiontree from './Sectiontree';
import Footer from './Footer';
import FooterImage from '../img/coff2.jpg'




function App() {
    return (
        <>
            <Navbar />
            <Section
                image={SectionImage}
            />
            <SectionTwo
                background={SectionTwoImage}
                boximage1={SectionTwoImage1}
                // boximage2={SectionTwoImage2}
                boximage3={SectionTwoImage3}
            // boximage4={SectionTwoImage4}
            />
            <Sectiontree />
            <Footer
                backgroundfooter={FooterImage}
            />
        </>
    );
}

export default App;

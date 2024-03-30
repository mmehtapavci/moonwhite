import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import '../style/Sectiontree.css';
import image1 from '../img/IMG_0822.jpg'; // 1. resmi import edin
import image2 from '../img/IMG_0822.jpg'
import image3 from '../img/IMG_0822.jpg';
import image4 from '../img/IMG_0822.jpg';
import image5 from '../img/IMG_0822.jpg';
import image6 from '../img/IMG_0822.jpg';
import image7 from '../img/IMG_0822.jpg';
import image8 from '../img/IMG_0822.jpg';
import image9 from '../img/IMG_0822.jpg';
import image10 from '../img/IMG_0822.jpg';
import image11 from '../img/IMG_0822.jpg';
import image12 from '../img/IMG_0822.jpg';


function Sectiontree({ pageTitle }) {
    const [categories, setCategories] = useState([
        { id: 1, name: "Kahveler" },
        { id: 2, name: "Kruvasanlar" },
        { id: 3, name: "Dondurmalar" },
        { id: 4, name: "Soğuk İçecekler" },

    ]);

    const [cards, setCards] = useState([
        { categoryId: 1, title: "Card 1", subtitle: "Subtitle 1", text: "Text 1", imgSrc: image1 },
        { categoryId: 2, title: "Card 2", subtitle: "Subtitle 2", text: "Text 2", imgSrc: image2 },
        { categoryId: 3, title: "Card 3", subtitle: "Subtitle 3", text: "Text 3", imgSrc: image3 },
        { categoryId: 4, title: "Card 4", subtitle: "Subtitle 4", text: "Text 4", imgSrc: image4 },
        { categoryId: 5, title: "Card ", subtitle: "Subtitle 5", text: "Text 5", imgSrc: image5 },
        { categoryId: 6, title: "Card 6", subtitle: "Subtitle 6", text: "Text 6", imgSrc: image6 },
        { categoryId: 7, title: "Card 7", subtitle: "Subtitle 7", text: "Text 7", imgSrc: image7 },
        { categoryId: 8, title: "Card 8", subtitle: "Subtitle 8", text: "Text 8", imgSrc: image8 },
        { categoryId: 9, title: "Card 9", subtitle: "Subtitle 9", text: "Text 9", imgSrc: image9 },
        { categoryId: 10, title: "Card 10", subtitle: "Subtitle 10", text: "Text 10", imgSrc: image10 },
        { categoryId: 11, title: "Card 11", subtitle: "Subtitle 11", text: "Text 11", imgSrc: image11 },
        { categoryId: 12, title: "Card 12", subtitle: "Subtitle 12", text: "Text 12", imgSrc: image12 },

    ]);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };


    return (
        <div className="products">
            <h3>{pageTitle}</h3>
            <div className="row">
                <div className="col-md-3">
                    <ListGroup>
                        {categories.map((category) => (
                            <ListGroupItem
                                key={category.id}
                                onClick={() => handleCategoryClick(category.id)}
                                active={selectedCategory === category.id}
                                style={{ cursor: 'pointer', color: 'black' }}
                            >
                                {category.name}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </div>
                <div className="col-md-9">
                    <Container>
                        <div className="scrollable">
                            <div className="row">
                                {cards
                                    .filter((card) => selectedCategory === null || card.categoryId === selectedCategory)
                                    .map((card, index) => (
                                        <div key={index} className="col-md-3 mb-4">
                                            <Card>
                                                <CardImg top width="100%" src={card.imgSrc} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle>{card.title}</CardTitle>
                                                    <CardSubtitle>{card.subtitle}</CardSubtitle>
                                                    <CardText>{card.text}</CardText>
                                                    <Button>Sepete Ekle</Button>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Sectiontree;

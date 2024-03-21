import React from 'react';
import '../style/Sectiontree.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

function Sectiontree() {
    // Kartların içeriğini ve sayısını tek bir dizi içinde tanımla
    const cards = [
        { title: "Card title 1", subtitle: "Card subtitle 1", text: "Some quick example text to build on the card title and make up the bulk of the card's content.",imgSrc:"/img/Bloom-3.jpg"},
        { title: "Card title 2", subtitle: "Card subtitle 2", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 3", subtitle: "Card subtitle 3", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 4", subtitle: "Card subtitle 4", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 5", subtitle: "Card subtitle 5", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 6", subtitle: "Card subtitle 6", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 7", subtitle: "Card subtitle 7", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 8", subtitle: "Card subtitle 8", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 9", subtitle: "Card subtitle 9", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 10", subtitle: "Card subtitle 10", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 11", subtitle: "Card subtitle 11", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 12", subtitle: "Card subtitle 12", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 13", subtitle: "Card subtitle 13", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 14", subtitle: "Card subtitle 14", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 15", subtitle: "Card subtitle 15", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" },
        { title: "Card title 16", subtitle: "Card subtitle 16", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" }
    ];
    return (
        <div className="products">
            <h1>Ürünler</h1>
            <div className="row">
                <div className="col-md-3">
                    <ListGroup>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Morbi leo risus</ListGroupItem>
                        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    </ListGroup>
                </div>
                <div className="col-md-9">
                    <Container>
                        {/* Kartları döngü içinde oluşturulan bölümü, ayrı bir kaydırma bölgesi içine al */}
                        <div className="scrollable">
                            <div className="row">
                                {cards.map((card, index) => (
                                    <div key={index} className="col-md-3 mb-4">
                                        <Card>
                                            <CardImg top width="70%" src={card.imgSrc} alt="Card image cap" />
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
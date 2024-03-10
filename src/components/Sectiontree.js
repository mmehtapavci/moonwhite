import React from 'react'
import '../style/Sectiontree.css';
import { ListGroup, ListGroupItem } from 'reactstrap';





function Sectiontree() {
    return (
        <div className="products">
            <h1>ürünler</h1>
            <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
        </div>
    )
}
export default Sectiontree;

import React from 'react'
import Card from "react-bootstrap/Card"

const ImgOverlay = (title, text, img) => {
    return (
        <Card className="bg-dark text-white">

            <Card.ImgOverlay>
                <Card.Title>{this.title}</Card.Title>
                <Card.Text>
                    {this.text}
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <img as={Image} src={this.img} fluid={true} alt="Card image" />
            </Card.ImgOverlay>
        </Card>
    )
}

export default ImgOverlay;
import React from 'react'
import { Card, Container } from 'react-bootstrap'
import '../styles/Wallets_Cards.css'

export default function WalletsCards() {
    return (
        <div style={{margin: "20px 0px 0px 20px"}}>
        <h1 style = {{display : "flex",justifyContent: "flex-start"}}>Wallet</h1>
        <Container style = {{marginTop : "5%"}}>
            <Card className = "WalletsCardsCss">
                <Card.Body className = "text-css">
                    <Card.Text>Total Balance<span style = {{color: "rgb(240, 66, 66)",float : "right"}}>INR 0</span></Card.Text>
                    <Card.Text>Your Cash <span style = {{color: "rgb(240, 66, 66)",float : "right"}}>INR 0</span></Card.Text>
                    <Card.Text>Offer Cash<span style = {{color: "rgb(240, 66, 66)",float : "right"}}>INR 0</span></Card.Text>    
                </Card.Body>
        </Card>
        </Container>
        </div>
    )
}
import React from 'react'
import { Card, Container } from 'react-bootstrap'
import '../styles/Wallets_Cards.css'
import { FaWallet } from 'react-icons/fa';

export default function WalletsCards() {
    return (
        <>
        <h3 style = {{color: "rgb(240, 66, 66)",display : "flex",justifyContent: "flex-start"}}><FaWallet />Wallet</h3>
        <Container style = {{marginTop : "5%"}}>
            <Card>
                <Card.Body className = "text-css">
                    <Card.Text>Total Balance<span style = {{color: "rgb(240, 66, 66)",float : "right"}}>INR 0</span></Card.Text>
                    <Card.Text>Your Cash <span style = {{color: "rgb(240, 66, 66)",float : "right"}}>INR 0</span></Card.Text>
                    <Card.Text>Offer Cash<span style = {{color: "rgb(240, 66, 66)",float : "right"}}>INR 0</span></Card.Text>    
                </Card.Body>
        </Card>
        </Container>
        </>
    )
}
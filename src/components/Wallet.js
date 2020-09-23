import React from 'react'
import { Card, Container } from 'react-bootstrap'
import '../styles/Wallet.css'

export default function Wallet() {
    return (
        <div style={{margin: "20px 0px 0px 20px"}}>
        <h1 style = {{display : "flex",justifyContent: "flex-start"}}>Wallet</h1>
        <Container  style = {{marginTop : "5%"}}>
            <Card className ="walletContainerCss">
                <Card.Header style = {{color: "rgb(240, 66, 66)"}}>BALANCE</Card.Header>
                <Card.Body>
                    <Card.Text>Total Balance</Card.Text>
                    <Card.Text>Your Cash</Card.Text>
                    <Card.Text>Offer Cash</Card.Text>    
                </Card.Body>
                <hr/>
                <Card.Header style = {{color: "rgb(240, 66, 66)"}}>RECENT ACTIVITY</Card.Header>
        </Card>
        </Container>
        </div>
    )
}
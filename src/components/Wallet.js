import React from 'react'
import { Card, Container } from 'react-bootstrap'
import '../styles/Wallet.css'
import { FaWallet } from 'react-icons/fa';

export default function Wallet() {
    return (
        <>
        <h3 style = {{color: "rgb(240, 66, 66)",display : "flex",justifyContent: "flex-start"}}><FaWallet />Wallet</h3>
        <Container style = {{marginTop : "5%"}}>
            <Card>
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
        </>
    )
}
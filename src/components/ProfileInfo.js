import React from 'react'
import { Row, Col,Card,ListGroup } from 'react-bootstrap'
import '../styles/ProfileInfo.css'
import { FaWallet, FaCog,FaPlane } from 'react-icons/fa';

import { Avatar } from "@chakra-ui/core";
import ChangePassword from './ChangePassword';

const displayComponent = (value) => {
    console.log(value)
}

export default function ProfileInfo() {

    return (
        <Row>
            <Col lg={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Header className="sideBar-css"><Avatar src="https://bit.ly/broken-link" />Name</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item style ={{cursor: "pointer"}} className="sideBar-css" onClick={()=>displayComponent('MyTrips')}><FaPlane />My Trips</ListGroup.Item>
                        <ListGroup.Item style ={{cursor: "pointer"}} className="sideBar-css" onClick={()=>displayComponent('WalletsCards')}><FaWallet />Wallets / Cards</ListGroup.Item>
                        <ListGroup.Item style ={{cursor: "pointer"}} className="sideBar-css" onClick={()=>displayComponent('MyProfile')}><FaCog />My Profile</ListGroup.Item>
                        <ListGroup.Item style ={{cursor: "pointer"}} className="sideBar-css" onClick={()=>displayComponent('ChangePassword')}><FaCog />Change Password</ListGroup.Item>
                        <ListGroup.Item style ={{cursor: "pointer"}} className="sideBar-css" onClick={()=>displayComponent('Wallet')}><FaWallet />Wallet</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col lg={7}>
                <ChangePassword />
            </Col>
        </Row>
    )
}
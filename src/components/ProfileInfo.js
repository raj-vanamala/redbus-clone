import React, { useState } from 'react'
import { Row, Col,Card,ListGroup } from 'react-bootstrap'
import '../styles/ProfileInfo.css'
import { FaWallet, FaCog,FaPlane } from 'react-icons/fa';

import { Avatar } from "@chakra-ui/core";

import MyTrips from './MyTrips';
import WalletsCards from './Wallets_Cards'
import MyProfile from './MyProfile'
import ChangePassword from './ChangePassword';
import Wallet from './Wallet'

export default function ProfileInfo() {

    const [Mytrips , setMyTrips] = useState(false);
    const [Walletscards , setWalletsCards] = useState(false);
    const [Myprofile , setMyProfile] = useState(true);
    const [Changepassword , setChangePassword] = useState(false);
    const [wallet , setWallet] = useState(false);

    const displayComponent = (value) => {
    
        if(value === 'MyTrips') {
    
            setMyTrips(true)
            setWalletsCards(false)
            setMyProfile(false)
            setChangePassword(false)
            setWallet(false)
        }
    
        else if(value === 'WalletsCards') {
    
            setWalletsCards(true)
            setMyTrips(false)
            setMyProfile(false)
            setChangePassword(false)
            setWallet(false)
    
        }
    
        else if(value === 'MyProfile') {
    
    
            setMyProfile(true)
            setMyTrips(false)
            setWalletsCards(false)
            setChangePassword(false)
            setWallet(false)
        }
    
        else if(value === 'ChangePassword') {
    
            setChangePassword(true)
            setMyTrips(false)
            setWalletsCards(false)
            setMyProfile(false)
            setWallet(false)
        }
    
        else if(value === 'Wallet') {
    
            setWallet(true)
            setChangePassword(false)
            setMyTrips(false)
            setWalletsCards(false)
            setMyProfile(false)
        }
    }

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
                {
                    (Mytrips=== true)?
                    <MyTrips />:(Walletscards===true)?
                    <WalletsCards />:(Myprofile===true)?
                    <MyProfile/>:(Changepassword===true)?
                    <ChangePassword />:(wallet===true)?<Wallet />:""
                }
            </Col>
        </Row>
    )
}
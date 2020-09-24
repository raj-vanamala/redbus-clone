import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../styles/NavBar.css'

import Dropdown from 'react-bootstrap/Dropdown'
import Home from "./Home";
import RPool from "./RPool";
import BusHire from "./BusHire";
import ProfileInfo from "./ProfileInfo";
import Footer from "./Footer";
import CancelTicket from "./CancelTicket";
import RescheduleJourney from "./RescheduleJourney";
import ShowTickets from "./ShowTickets";
import EmailSMS from "./Email_SMS";
import BusSearch from "./BusSearch";

import { Avatar } from "@chakra-ui/core";


export default function NavBar() {
  return (
      <div>
        <div className="navBar-css">
          <div className="navBarItem-css">
            <Link to="/" className="brand-css" style={{color : "white"}}>redBus</Link>
          </div>
          <div className="navBarItem-css">
            <Link to="/" style={{color : "white"}}>BUS Tickets</Link>
          </div>
          <div className="navBarItem-css">
            <Link to="/rPool" style={{color : "white"}}>rPool</Link>
          </div>
          <div className="navBarItem-css">
            <Link to="/bushire" style={{color : "white"}}>BUS HIRE</Link>
          </div>
          <div>
          <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic" style={{color : "white"}}>
                    Manage My Booking
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><Link to="/CancelTicket" style={{color : "black"}}>Cancel</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to="/RescheduleJourney" style={{color : "black"}}>Reschedule</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to="/ShowTickets" style={{color : "black"}}>Show My Tickets</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to="/Email_SMS" style={{color : "black"}}>Email / SMS</Link></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
                <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic" style={{color : "white"}}>
                <Avatar src="https://bit.ly/broken-link" size="sm"/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {/* <Dropdown.Item ><Link to="/ProfileInfo/MyTrips" style={{color : "black"}}>My Trips</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to="/ProfileInfo/Wallet_Cards" style={{color : "black"}}>Wallets/Cards</Link></Dropdown.Item> */}
                    <Dropdown.Item ><Link to="/ProfileInfo/MyProfile" style={{color : "black"}}>My Profile</Link></Dropdown.Item>
                    {/* <Dropdown.Item ><Link to="/ProfileInfo/ChangePassword" style={{color : "black"}}>Change Password</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to="/ProfileInfo/Wallet" style={{color : "black"}}>Wallet</Link></Dropdown.Item> */}
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        
        <Switch>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
          <Route path="/rPool">
            <RPool />
            <Footer />
          </Route>
          <Route path="/bushire">
            <BusHire />
            <Footer />
          </Route>
          <Route path="/ProfileInfo/MyProfile">
            <ProfileInfo />
            <Footer />
          </Route>
          <Route path="/CancelTicket">
            <CancelTicket />
            <Footer />
          </Route>
          <Route path="/RescheduleJourney">
            <RescheduleJourney />
            <Footer />
          </Route>
          <Route path="/ShowTickets">
            <ShowTickets />
            <Footer />
          </Route>
          <Route path="/Email_SMS">
            <EmailSMS />
            <Footer />
          </Route>
          <Route path="/BusSearch">
            <BusSearch />
            <Footer />
          </Route>
        </Switch>
      </div>
  );
}

import React, { useState } from 'react'
import '../styles/MyTrips.css'

export default function MyTrips() {

    const [isUpComingTrips,setUpComingTripsComponent] = useState(true)
    const [isCompletedTrips,setCompletedTripsComponent] = useState(false)


    function changeDisplayComponents(value1,value2) {

        setUpComingTripsComponent(value1);
        setCompletedTripsComponent(value2);


    }

    return (
        
        <div style={{margin: "20px 0px 0px 20px"}}>
            <h1>MyTrips</h1>
            <div>
                <div className="MyTripsFontCss">
                    <span onClick={()=>changeDisplayComponents(true,false)} className="TripLinks" style={{marginRight : "100px"}}>Upcoming</span>
                    <span onClick={()=>changeDisplayComponents(false,true)} className="TripLinks">Completed</span></div>
                <div className="MyTripsInfoBarCss">
                    {
                        (isUpComingTrips===true)?<div className="MyTripsMessageCss">No Upcoming Trips</div>:<div className="MyTripsMessageCss">No Completed Trips</div>
                    }
                </div>
            </div>    
        </div>
    )
}
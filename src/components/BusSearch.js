import React, { useState } from "react"
import '../styles/BusSearch.css'
import { Button } from '@material-ui/core';

export default function BusSearch() {
 
    const [displayBusLayout , setDisplayBusLayout] = useState(false);
    const [displayTravelInfo , setDisplayTravelInfo] = useState(false);

    return (
        <div className="BusSearch">
                    <div className="BusSearchFilterCss"></div>
                    <div style={{position : "absolute",top:"0",marginLeft:"20%"}} className="BusSearchContentCss">
                        <div className="specificBus" style={{marginBottom:"20px"}}>
                            <div style={{display:"flex"}}>
                                <div style={{display:"flex",flexDirection: "column",width: "500px",fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
                                    <div style={{fontWeight : "bold",marginBottom : "20px"}}>Bus Operator Name</div>
                                    <div>Bus Type</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Departure</div>
                                    <div>22:45</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Duration</div>
                                    <div>10 h 50m</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Arrival</div>
                                    <div>08:50</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Ratings</div>
                                    <div>4.3</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Fare</div>
                                    <div>INR 1500</div>
                                </div>
                                <div className="BusDetailsCss" style={{width : "200px"}}>
                                    <div>Availabilty</div>
                                    <div>7 Seats Available</div>
                                </div>
                            </div>
                            <div className="viewSeatsButtonCss">
                                {
                                    (displayBusLayout=== false)?
                                        
                                        <Button onClick={()=>setDisplayBusLayout(true)} variant="outlined" color="secondary">
                                        VIEW SEATS                
                                        </Button>
                                        
                                        :
                                        
                                        <Button onClick={()=>setDisplayBusLayout(false)} variant="outlined" color="secondary">
                                            HIDE SEATS                
                                        </Button>
                                       
                                }
                            </div>
                        </div>
                        {
                                (displayBusLayout=== true)?
                                <div className="BusLayoutCss">
                                    <div className="BusSeatsLayout">
                                            <div style={{display : "flex",justifyContent:"space-around"}}>
                                                <div className = "seatStatusCss1">Available</div>
                                                <div className = "seatStatusCss2">UnAvailable</div>
                                            </div> <hr />
                                            <div className="BusSeatsContainerCss">
                                                <span className="BusDriverFontCss">D</span>
                                                <div className="seatsRow1Css">
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S1</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                </div>
                                                <div className="seatsRow2Css">
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                </div>
                                                <div className="seatsRow3Css">
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                </div>
                                                <div className="seatsRow4Css">
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss"></span>
                                                </div>
                                            </div>
                                    </div>
                                    {
                                        (displayTravelInfo=== true)?<div className="selectedSeatsInfoCss">working</div>:""
                                    }
                                </div>
                                : 
                                ""
                            }
                        <div className="specificBus" style={{margin:"10px 0px 10px 0px"}}>
                            <div style={{display:"flex"}}>
                                <div style={{display:"flex",flexDirection: "column",width: "500px",fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
                                    <div style={{fontWeight : "bold",marginBottom : "20px"}}>Bus Operator Name</div>
                                    <div>Bus Type</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Departure</div>
                                    <div>22:45</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Duration</div>
                                    <div>10 h 50m</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Arrival</div>
                                    <div>08:50</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Ratings</div>
                                    <div>4.3</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Fare</div>
                                    <div>INR 1500</div>
                                </div>
                                <div className="BusDetailsCss" style={{width : "200px"}}>
                                    <div>Availabilty</div>
                                    <div>7 Seats Available</div>
                                </div>
                            </div>
                            <div className="viewSeatsButtonCss">
                                <Button variant="outlined" color="secondary">
                                    VIEW SEATS                
                                </Button>
                            </div>
                        </div>
                        <div className="specificBus" style={{margin:"10px 0px 10px 0px"}}>
                            <div style={{display:"flex"}}>
                                <div style={{display:"flex",flexDirection: "column",width: "500px",fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
                                    <div style={{fontWeight : "bold",marginBottom : "20px"}}>Bus Operator Name</div>
                                    <div>Bus Type</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Departure</div>
                                    <div>22:45</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Duration</div>
                                    <div>10 h 50m</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Arrival</div>
                                    <div>08:50</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Ratings</div>
                                    <div>4.3</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Fare</div>
                                    <div>INR 1500</div>
                                </div>
                                <div className="BusDetailsCss" style={{width : "200px"}}>
                                    <div>Availabilty</div>
                                    <div>7 Seats Available</div>
                                </div>
                            </div>
                            <div className="viewSeatsButtonCss">
                                <Button variant="outlined" color="secondary">
                                    VIEW SEATS                
                                </Button>
                            </div>
                        </div>
                        <div className="specificBus" style={{margin:"10px 0px 10px 0px"}}>
                            <div style={{display:"flex"}}>
                                <div style={{display:"flex",flexDirection: "column",width: "500px",fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
                                    <div style={{fontWeight : "bold",marginBottom : "20px"}}>Bus Operator Name</div>
                                    <div>Bus Type</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Departure</div>
                                    <div>22:45</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Duration</div>
                                    <div>10 h 50m</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Arrival</div>
                                    <div>08:50</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Ratings</div>
                                    <div>4.3</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Fare</div>
                                    <div>INR 1500</div>
                                </div>
                                <div className="BusDetailsCss" style={{width : "200px"}}>
                                    <div>Availabilty</div>
                                    <div>7 Seats Available</div>
                                </div>
                            </div>
                            <div className="viewSeatsButtonCss">
                                <Button variant="outlined" color="secondary">
                                    VIEW SEATS                
                                </Button>
                            </div>
                        </div>
                        <div className="specificBus" style={{margin:"10px 0px 10px 0px"}}>
                            <div style={{display:"flex"}}>
                                <div style={{display:"flex",flexDirection: "column",width: "500px",fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
                                    <div style={{fontWeight : "bold",marginBottom : "20px"}}>Bus Operator Name</div>
                                    <div>Bus Type</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Departure</div>
                                    <div>22:45</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Duration</div>
                                    <div>10 h 50m</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Arrival</div>
                                    <div>08:50</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Ratings</div>
                                    <div>4.3</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Fare</div>
                                    <div>INR 1500</div>
                                </div>
                                <div className="BusDetailsCss" style={{width : "200px"}}>
                                    <div>Availabilty</div>
                                    <div>7 Seats Available</div>
                                </div>
                            </div>
                            <div className="viewSeatsButtonCss">
                                <Button variant="outlined" color="secondary">
                                    VIEW SEATS                
                                </Button>
                            </div>
                        </div>
                        <div className="specificBus" style={{margin:"10px 0px 10px 0px"}}>
                            <div style={{display:"flex"}}>
                                <div style={{display:"flex",flexDirection: "column",width: "500px",fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
                                    <div style={{fontWeight : "bold",marginBottom : "20px"}}>Bus Operator Name</div>
                                    <div>Bus Type</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Departure</div>
                                    <div>22:45</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Duration</div>
                                    <div>10 h 50m</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Arrival</div>
                                    <div>08:50</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Ratings</div>
                                    <div>4.3</div>
                                </div>
                                <div className="BusDetailsCss">
                                    <div>Fare</div>
                                    <div>INR 1500</div>
                                </div>
                                <div className="BusDetailsCss" style={{width : "200px"}}>
                                    <div>Availabilty</div>
                                    <div>7 Seats Available</div>
                                </div>
                            </div>
                            <div className="viewSeatsButtonCss">
                                <Button variant="outlined" color="secondary">
                                    VIEW SEATS                
                                </Button>
                            </div>
                        </div>
                        <div style={{marginBottom : "150px"}}></div>
                    </div>
        </div>
    )
}
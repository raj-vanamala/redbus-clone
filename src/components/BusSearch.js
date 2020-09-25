import React, { useState } from "react"
import '../styles/BusSearch.css'
import { Button } from '@material-ui/core';

export default function BusSearch() {
 
    const [displayBusLayout , setDisplayBusLayout] = useState(false);
    const [displayTravelInfo , setDisplayTravelInfo] = useState(false);
    const [displayBoardingPointInfo , setDisplayBoardingPointInfo] = useState(true);
    const [displayDroppingPointInfo , setDisplayDroppingPointInfo] = useState(false);
    const [source , setSource] = useState("");
    const [destination , setDestination] = useState("");
    const [selectedSeats , setSelectedSeats] = useState([]);

    function handleStateChanges(event) {

        let target = event.target;
        if(target.name === 'source'){
            setSource(target.value);
        }
        else if(target.name === "destination"){
            setDestination(target.value);
        }

    }

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
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S2</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S3</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S4</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S5</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S6</span>
                                                </div>
                                                <div className="seatsRow2Css">
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S7</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S8</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S9</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S10</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S11</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S12</span>
                                                </div>
                                                <div className="seatsRow3Css">
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S13</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S14</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S15</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S16</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S17</span>
                                                    <span onClick={()=>setDisplayTravelInfo(true)} className="BusSeatsCss">S18</span>
                                                </div>
                                                <div className="seatsRow4Css">
                                                    <span onClick={()=>{setDisplayTravelInfo(true);setSelectedSeats([...selectedSeats,"S19"])}} className="BusSeatsCss">S19</span>
                                                    <span onClick={()=>{setDisplayTravelInfo(true);setSelectedSeats([...selectedSeats,"S20"])}} className="BusSeatsCss">S20</span>
                                                    <span onClick={()=>{setDisplayTravelInfo(true);setSelectedSeats([...selectedSeats,"S21"])}} className="BusSeatsCss">S21</span>
                                                    <span onClick={()=>{setDisplayTravelInfo(true);setSelectedSeats([...selectedSeats,"S22"])}} className="BusSeatsCss">S22</span>
                                                    <span onClick={()=>{setDisplayTravelInfo(true);setSelectedSeats([...selectedSeats,"S23"])}} className="BusSeatsCss">S23</span>
                                                    <span onClick={()=>{setDisplayTravelInfo(true);setSelectedSeats([...selectedSeats,"S24"])}} className="BusSeatsCss">S24</span>
                                                </div>
                                            </div>
                                    </div>
                                    {
                                        (displayTravelInfo=== true)?

                                        <div className="selectedSeatsInfoCss">
                                            <div className="selectedSeatsInfoCss1">
                                                {
                                                    (displayBoardingPointInfo=== true)?
                                                    <div>
                                                        <h2 style={{textAlign : "center",color:"#d84f57"}}>BOARDING POINT</h2>
                                                        <hr />
                                                        <div>
                                                            <input onChange={handleStateChanges} onClick={()=>{setDisplayBoardingPointInfo(false);setDisplayDroppingPointInfo(true)}} value="BoardingPoint1" type="radio" name="source" />
                                                            <label>BoardingPoint 1</label>
                                                        </div>
                                                        <div>
                                                            <input onChange={handleStateChanges} onClick={()=>{setDisplayBoardingPointInfo(false);setDisplayDroppingPointInfo(true)}} value="BoardingPoint2" type="radio" name="source" />
                                                            <label>BoardingPoint 2</label>
                                                        </div>
                                                        <div>
                                                            <input onChange={handleStateChanges} onClick={()=>{setDisplayBoardingPointInfo(false);setDisplayDroppingPointInfo(true)}} value="BoardingPoint3" type="radio" name="source" />
                                                            <label>BoardingPoint 3</label>
                                                        </div>
                                                        <div>
                                                            <input onChange={handleStateChanges} onClick={()=>{setDisplayBoardingPointInfo(false);setDisplayDroppingPointInfo(true)}} value="BoardingPoint4" type="radio" name="source" />
                                                            <label>BoardingPoint 4</label>
                                                        </div>
                                                    </div>
                                                    :
                                                    
                                                    (displayDroppingPointInfo === true )?
                                                    <div>
                                                        <h2 style={{textAlign : "center",color:"#d84f57"}}>DROPPING POINT</h2>
                                                        <hr />
                                                        <div>
                                                            <input onChange={handleStateChanges} onClick={()=>setDisplayDroppingPointInfo(false)} value="DroppingPoint1" type="radio" name="destination" />
                                                            <label>DroppingPoint 1</label>
                                                        </div>
                                                        <div>
                                                            <input onChange={handleStateChanges} onClick={()=>setDisplayDroppingPointInfo(false)} value="DroppingPoint2" type="radio" name="destination" />
                                                            <label>DroppingPoint 2</label>
                                                        </div>
                                                        <div>
                                                            <input onChange={handleStateChanges} onClick={()=>setDisplayDroppingPointInfo(false)} value="DroppingPoint3" type="radio" name="destination" />
                                                            <label>DroppingPoint 3</label>
                                                        </div>
                                                        <div>
                                                            <input onChange={handleStateChanges} onClick={()=>setDisplayDroppingPointInfo(false)} value="DroppingPoint4" type="radio" name="destination" />
                                                            <label>DroppingPoint 4</label>
                                                        </div>
                                                    </div>
                                                    : 
                                                    <div>
                                                        <h2 style={{textAlign : "center",color:"#d84f57"}}>TRAVEL INFO</h2>
                                                        <hr />
                                                        <div style={{padding:"20px"}}>
                                                            <div className = "travelInfoCss">
                                                                <div>Boarding Point</div>
                                                                <div>{source}</div>
                                                            </div>
                                                            <div className = "travelInfoCss">
                                                                <div>Dropping Point</div>
                                                                <div>{destination}</div>
                                                            </div>
                                                            <div className = "travelInfoCss">
                                                                <div>Selected Seats</div>
                                                                <div>{selectedSeats.map(value=><span>{value}</span>)}</div>
                                                            </div>
                                                            <div className = "travelInfoCss">
                                                                <div>Fare</div>
                                                                <div>INR 1500.00</div>
                                                            </div>
                                                            <div>
                                                                <button style={{width:"100%",backgroundColor : "#d84f57",color:"white"}}>PROCEED TO BOOK</button>
                                                            </div>
                                                        </div>
                                                    </div>


                                                }
                                            </div>
                                        </div>

                                        :
                                        ""
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
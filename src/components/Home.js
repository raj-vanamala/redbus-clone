import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import '../styles/Home.css'
import { Button } from 'react-bootstrap'    

let Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

export default function Home() {

    let [currentDate] = useState(new Date());
    let [source , setSource] = useState("");
    let [destination , setDestination] = useState("");
    let [journeyDate , setJourneyDate] = useState("");
    const history = useHistory();

    function changeStateValues (event) {

        let target = event.target;
        console.log(target.value)

        if(target.name === "source"){
            setSource(target.value)
        }
        else if(target.name === "destination"){
            setDestination(target.value)
        }
        else if(target.name === "productCategory"){
            setJourneyDate(target.value)
        }
    }

    function searchBus() {

        history.push('/busSearch')
    }

    return (
        <div>
            <img src="https://st.redbus.in/Images/INDOFFER/COVID-19/heroimage2.png" alt = "Redbus Journey" style={{width:"100%",height:"500px"}}/>
            <div style={{position : "absolute", top:"50%",left:"15%",display:"flex",flexDirection:"row"}}>
                
                    <div style={{width:"300px"}}>
                        <input value={source} onChange={changeStateValues} list="sources" id="source" style={{height : "50px",borderBottomStyle : "none"}} type="text" placeholder="FROM"></input>
                        <datalist id="sources">
                            <option value="Hyderabad" />
                            <option value="Mumbai" />
                            <option value="Chennai" />
                        </datalist>
                    </div>
                    <div style={{width:"300px"}}>
                        <input value={destination} onChange={changeStateValues} list="destinations" id="destination" style={{height : "50px",borderBottomStyle : "none"}} type="text" placeholder="TO"></input>
                        <datalist id="destinations">
                            <option value="Hyderabad" />
                            <option value="Mumbai" />
                            <option value="Chennai" />
                        </datalist>
                    </div>
                    <div>
                        <input value={journeyDate} onChange={changeStateValues} style={{height : "50px"}} type="date" min={currentDate}></input>
                    </div>
                    <div>
                        <Button onClick={searchBus} style={{height : "50px"}} variant="danger" color="secondary">Search Buses</Button>
                    </div>
                
            </div>
        </div>
    )
}
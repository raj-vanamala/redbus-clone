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
        

        if(target.name === "source"){
            console.log('enter');
            setSource(target.value)
            console.log(target.value)
        }
        else if(target.name === "destination"){
            console.log('enter');
            setDestination(target.value)
            console.log(target.value)
        }
        else if(target.name === "journeyDate"){
            setJourneyDate(target.value)
            console.log(target.value)
        }
    }

    function searchBus() {

        if(source!=="" && destination!=="" && journeyDate !=="") {
            history.push('/busSearch')
        } else {
            alert('Please Check Entered Details')
        }
    }

    return (
        <div>
            <img src="https://st.redbus.in/Images/INDOFFER/COVID-19/heroimage2.png" alt = "Redbus Journey" style={{width:"100%",height:"500px"}}/>
            <div style={{position : "absolute", top:"50%",left:"15%",display:"flex",flexDirection:"row"}}>
                
                    <div style={{width:"300px"}}>
                        <input name="source" type="text" id="source" placeholder="FROM" value={source}  onChange={changeStateValues} list="sources" style={{height : "50px",borderBottomStyle : "none"}} />
                        <datalist id="sources">
                            <option id="source1" value="Hyderabad" />
                            <option id="source2" value="Mumbai" />
                            <option id="source3" value="Chennai" />
                        </datalist>
                    </div>
                    <div style={{width:"300px"}}>
                        <input name="destination" value={destination} onChange={changeStateValues} list="destinations" id="destination" style={{height : "50px",borderBottomStyle : "none"}} type="text" placeholder="TO" />
                        <datalist id="destinations">
                            <option id="destination1" value="Hyderabad" />
                            <option id="destination1" value="Mumbai" />
                            <option id="destination1" value="Chennai" />
                        </datalist>
                    </div>
                    <div>
                        <input name="journeyDate" type="date" value={journeyDate} onChange={changeStateValues} style={{height : "50px",color:"black"}} />
                    </div>
                    <div>
                        <Button onClick={searchBus} style={{height : "50px"}} variant="danger" color="secondary">Search Buses</Button>
                    </div>
            </div>
        </div>
    )
}
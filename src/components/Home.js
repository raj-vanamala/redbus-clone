import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import { Button } from 'react-bootstrap'    

let Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

export default function Home() {

    let [currentDate] = useState(new Date());

    useEffect(()=>{
        let year = currentDate.getFullYear();
        let date = currentDate.getDate();
        let month = currentDate.getMonth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        currentDate = "" + year + "-0" + month + "-" + date;
        console.log(currentDate);
    })

    return (
        <div>
            <img src="https://st.redbus.in/Images/INDOFFER/COVID-19/heroimage2.png" alt = "Redbus Journey" style={{width:"100%",height:"500px"}}/>
            <div style={{position : "absolute", top:"50%",left:"15%",display:"flex",flexDirection:"row"}}>
                
                    <div style={{width:"300px"}}><input style={{height : "50px",borderBottomStyle : "none"}} type="text" placeholder="FROM"></input></div>
                    <div style={{width:"300px"}}><input style={{height : "50px",borderBottomStyle : "none"}} type="text" placeholder="TO"></input></div>
                    <div><input style={{height : "50px"}} type="date" min={currentDate}></input></div>
                    <div><Button style={{height : "50px"}} variant="danger" color="secondary">Search Buses</Button></div>
                
            </div>
        </div>
    )
}
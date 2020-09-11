import React from 'react'

export default function Footer() {

    return (
        <div style={{
            backgroundColor:"black",
            color : "white",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            position : "absolute",
            bottom : "0"
            }}>

            <div style={{width : "40%",fontSize: "large"}}>
            redBus is the world's largest online bus ticket booking service trusted by over 18 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.
            </div>
            <div
                style = {{
                    color: "white",
                    fontSize: "large"
                }}
            >
                redBus <br/>
                Ⓒ 2020 ibibogroup All rights reserved
            </div>
        </div>
    )
}
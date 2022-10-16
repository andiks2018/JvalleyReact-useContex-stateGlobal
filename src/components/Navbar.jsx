import React from "react";

export default function Navbar(props){

    return(
        <div style={{
            width:"100vw",
            height : 60,
            backgroundColor : "orange"
        }}>
            <nav style={{
                width:"100%",
                maxWidth : 1200,
                height : "100%",
                margin : "0px auto",
                display : "flex",
                alignItems : "center",
                justifyContent: "space-between",
                padding : "0 20px"
            }}>
                <h1 style={{
                    fontSize : 36,
                    color : "white",
                    userSelect:"none"
                }}>
                    Market palce sebelah</h1>
                <p style={{
                    fontWeight:500,
                    color: "white"
                }}>
                    total belanja : {props.total}</p>
            </nav>
        </div>
    )
}
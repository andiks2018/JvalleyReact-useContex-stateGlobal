import React from 'react'
import CardProduct from './CardProduct'


export default function WrapperProduct() {
  return (
    <div style={{
        flex:1,
        minHeight:900,
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
        padding :20
    }}>
        <h1 style={{marginBottom:20}}>Product</h1>
        <hr />
        <div style={{
            width:"100%",
            display: "flex",
            flexWrap:"wrap",
            gap:20
        }}>
            <CardProduct
                name= {"sepatu baru"}
                price= {"Rp.35.000"}
                img={"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"} />
        </div>
    </div> 
  )
} 

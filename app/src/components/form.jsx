import React from 'react'
import Grid from '@mui/material/Grid';
import { brown } from '@mui/material/colors';

function Forms() {
    return (
        <div align="center" style={{margin:"25vh"}}>
            <h1 align="center" style={{ color: "#000080", fontFamily: "inherit", fontSize: "50px" }}>Your Feedback is Valueable !!</h1>
            
            <img width={600} feight={700} style={{ marginLeft:"100px"}} src="https://www.atlassian.com/blog/wp-content/uploads/2017/11/radical-candor_featured2@2x.png"></img>
            <br/>
            <br />
            <div>
                <span style={{ color: brown, fontSize: "25px" }}>Enter Order Id:</span>&nbsp;&nbsp;&nbsp;   <input type="text" style={{ fontSize:"25px" ,width:"450px", height:"50px"}}></input>
                <br />
                <br />
                <br />
                <span style={{ color: brown, fontSize: "25px" }}>Enter Email Id: </span>&nbsp; <input type='email' style={{ fontSize:"25px" , width:"450px", height:"50px"}}></input>
                <br />
                <br />
                <br />      
                <span style={{ color: brown, fontSize: "25px" }}>Write feedback: </span>&nbsp; <input type='text' style={{ fontSize:"25px" , width:"450px", height:"50px"}}></input>
                <br />
                <br />
                <br />     
                <button type='submit'style={{ fontSize: "20px",borderRadius:"30px",background:"green",color:"white", width:"250px", height:"40px"}}>SUBMIT</button>
            </div>
        </div>
    )
}
export default Forms;

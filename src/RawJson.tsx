import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react"
import { Location, useLocation, useNavigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
 

const RawJson = ()=>{
    const data:Location = useLocation();
    const [json,setJson] = useState(data.state);
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(-1)
    }
    return(
        <Container style={{ display:'flex', flexDirection:'column', padding:'16px'}}>
         <Typography>{JSON.stringify(json)}</Typography>
         <Button onClick={handleClick}>Go Back</Button>

        </Container>
    )

}

export default RawJson;
import React, { useState } from 'react';
import { Card } from '@material-ui/core';
import Input from './Input';
import axios from 'axios';
import { Button } from '@material-ui/core';



export default function New () {
    const [list, setList] = useState({
        name:"",
    });

    const handleClick = async () => {
        await axios
            .post("http://localhost:3031/list", list)
            .then((response) => {
                setList(response.data);
            });
    };

    const handleChangeList = (e) => {
        setList({ ...list, [e.target.name]: e.target.value });
      };
return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
        <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          heigh: "500px",
          width: "500px",
          paddingTop: "15px",
        }}
        >

        <Input
            id="outlined-basic"
            variant="outlined"
            label="Nom de la tâche"
            name="name"
            value={list.name}
            onChange={handleChangeList}
        />
        <div style={{
          borderRadius: "45px",
          backgroundColor: "#1CABA9",
          color: "white",
          border: "none",
          marginTop: "20px",
          marginBottom: "15px",
        }}>
        <Button href="/table" onClick={handleClick}>
            Créer votre nouvelle tâche
        </Button>
        </div>
        </Card>
    </div>
);
};
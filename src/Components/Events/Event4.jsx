import React from "react";
import { Container, Grid} from "@mui/material";
import HeroCarousel from "react-hero-carousel";

import {
  SectionHeading
} from "../Global/GlobalStyles";

const Event4 = () => {
  const onHello = () =>{
    alert("Hello Everyone")
  }
  return (
    <div id="event1">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SectionHeading variant="h4" sx={{ marginTop: "50px",marginBottom:'50px' }}>
              Event4
            </SectionHeading>
          </Grid>
            <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <HeroCarousel sx={{mb:'10px'}}>
              {itemData.map((item) => (
                <Container sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}>
                  <img
                  key={item.img}
                  style={{ borderRadius: "40px",width:'500px',objectFit:'crop',auto:'format'}}
                  src={`${item.img}`}
                  //src={`${item.img}?w=700&fit=crop&auto=format`}
                  //srcSet={`${item.img}?w=700&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  onClick={onHello}
                />
                </Container> 
              ))}
            </HeroCarousel>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Event4;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

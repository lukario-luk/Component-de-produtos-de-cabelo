import React from 'react';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  font-family: 'Lora', serif;
}
`
const Container = styled.div`
    width:max(25%, 265px);
    max-height: 70%;
    margin:2%;
    padding:1.5%;
    border-radius:35px;
    box-shadow:1px 1px 6px 0px rgb(195, 195, 195);
    background-color:#e9ecef;
img{
    width:100%;
    border-radius:30px;
}
`
const InfoProduct = styled.div`
    padding:4% 1% 3%;
    display:flex;
    justify-content:space-between;
    align-items:space-between;
    flex-wrap:wrap;
    h3{
        width:100%;
        margin-bottom:4%;
        font-size:1.25em;
    }
    h4{
        text-align:center;
        font-size:1em;
    }
    p{
        margin-left:3%;
        font-weight:bold;
        font-size:1.4em;
    }
`

const Cards = ({img,imgAlt, name, price, stock}) =>{
    return(
        <Container>
            <GlobalStyle/>
            <img src={img} alt={imgAlt} />
            <InfoProduct>
                <h3>{name}</h3>
                <h4>In stock: {stock}</h4>
                <p>{price}</p>

            </InfoProduct>
        </Container>
    )
}
export default Cards;
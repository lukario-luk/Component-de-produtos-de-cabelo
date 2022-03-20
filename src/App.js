import React, { Component } from "react"
import Cards from "./components/Cards.js"
import kit1 from "./assests/kit1.jpeg"
import kit2 from "./assests/kit2.jpeg"
import kit3 from "./assests/kit3.jpeg"
import kit4 from "./assests/kit4.jpeg" 
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
}
`
const DisplayProducts = styled.div`
  width:100%;
  display: flex;
  justify-content:center;
  background-color:rgb(250, 250, 255);

`
const List =styled.ul`
  display: flex;
  justify-content:center;
  flex-wrap:wrap;
  background-color:rgb(250, 250, 255);
`
export default class Galeria extends Component{
  state={
    products:[
        {kitimg:kit1,kitAlt:"Kit Shampoo + Condicionador Salon Line Bomba Crescimento Capilar", product:"Kit Shampoo + Condicionador Salon Line Bomba Crescimento Capilar", price:"R$:25.99",inStock:"1k",},
        {kitimg:kit2,kitAlt:"Kit Shampoo + Condicionador Seda Ceramidas", product:"Kit Shampoo + Condicionador Seda Ceramidas",price:"R$:37.95", inStock:"3k",},
        {kitimg:kit3,kitAlt:"Kit Shampoo + Condicionador L'oreal Elseve Reparação Total 5", product:"Kit Shampoo + Condicionador L'oreal Elseve Reparação Total 5",price:"R$:41.99",inStock:"2k",},
        {kitimg:kit4,kitAlt:"Kit Shampoo + Condicionador Skala Expert Bomba de Queratina", product:"Kit Shampoo + Condicionador Skala Expert Bomba de Queratina",price:"R$:43.90", inStock:"7k"},
      ]
};
render(){
  return(
    <DisplayProducts>
      <List>
      <GlobalStyle/>
        {this.state.products.map(item =>(
            <Cards img={item.kitimg} imgAlt={item.kitAlt} name={item.product} price={item.price} stock={item.inStock}/>
        ))}
        </List>
    </DisplayProducts>
  )}}
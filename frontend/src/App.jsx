/*
//Rendering Lists in React
const products = [
   {title:'apple',isFruit:true, id:1},
   {title:'cabbage',isFruit:false, id:2},
   {title:'garlic',isFruit:false, id:3}
]

export default function ShoppingList() {
   const ListItems = products.map(product=>
      <li key={product.id} style={{color:product.isFruit ? 'magenta' : 'darkgreen'}}>
         {product.title}
      </li>
   );
   return(
      <ul>{ListItems}</ul>
   );
}

//Event Handling in React
export default function MyButton(){
   function handleClick(){                <-event handler function
      alert("You clicked me!");
   }
   return(
      <button onClick={handleClick}>Click me</button>  <- here handleClick has no parentheses because we are passing the function reference, not calling it immediately
   )
}


import { useState } from "react"; //


function MyButton(){
   const [count, setCount] = useState(0); // State variable to keep track of button clicks

   function handleClick(){  // Event handler function
      setCount(count + 1);
   }

   return(
      <button onClick={handleClick}>Clicked {count}</button>
   )
}

export default function App(){
   return(
      <div>
         <h1>My Button 1</h1>
         <MyButton/>
         <h1>My Button 2</h1>
         <MyButton/>
      </div>
   )
}

import Student from "./student.jsx"; //props example

export default function App(){       //this is the parent component
   return(
      <><Student name="Oggy"/></>
   )
}
*/

//Rendering Lists in React
const people = [
  {id:1, name:'Creola Katherine Johnson: mathematician',profession:'mathematician'},
  {id:2, name:'Mario José Molina-Pasquel Henríquez: chemist',profession:'chemist'},
  {id:3, name:'Mohammad Abdus Salam: physicist',profession:'physicist'},
  {id:4, name:'Percy Lavon Julian: chemist',profession:'chemist'},
  {id:5, name:'Subrahmanyan Chandrasekhar: astrophysicist',profession:'astrophysicist'}
];

//const listItems = people.map((person) =><li>{person}</li>)
const chemists = people.filter(person => person.profession === 'chemist');
export default function FamousPeopleList() {
  const listItems = chemists.map((chemist)=><li key={chemist.id}>{chemist.name}</li>)
  return (
    <ul>{listItems}</ul>
  );
}
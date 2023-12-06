import { useState } from 'react';


export default function ComplexState(){

const styles = {
  rentalContainer : {
    border : "3px solid black",
    width :"fit-content",
    padding : "18px"



  }
};
const [name, setName ] = useState(['a','b','c'])
const [nameInput, setNameInput ] = useState("")

const [titleInput , setTitleInput ] = useState("")
const [title , setTitle] = useState({
  title: "big lebowski",
  year: 1991,
  rating: "rated r"
})
const [yearInput, setYearInput] = useState("");
const [ratingInput, setRatingInput] = useState("");


console.log(nameInput)
console.log(titleInput)
console.log(yearInput)
console.log(ratingInput)


const addName = () =>{
 if (nameInput !== ""){

  setName([...name, nameInput]);
 }

  setNameInput("")
};

const changeTitle = () =>{
if (titleInput !== ""){
  setTitle({
    ...title,
    title:titleInput
  })
  setTitleInput("")
}
};



const changeYear = () =>{
if (yearInput !== ""){
  setTitle({
    ...title,
    year:yearInput

  })

}
setYearInput("")

};



const changeRating = () =>{
if (ratingInput !== ""){
  setTitle({
    ...title,
    rating:ratingInput

  })


}
setRatingInput("")
  
};

  return (
  
<>
<h2>name:
</h2>
<ul>
 {name.map((name,index) => <li key = {index}>{name}</li>)}
</ul>
<p>Add name:</p>


<input  
type = 'text' 
onChange={(event) => setNameInput(event.target.value)}
value = {nameInput}
></input>
<button onClick={addName} >Add Name</button>




<h3 >Rental:</h3>
<div style = {styles.rentalContainer}>

   <p>Title:{title.title}</p> 
   <p>Year:{title.year}</p>
   <p>Rating:{title.rating}</p>

</div>

<h4>Change Title:</h4>
<input type = 'text'  onChange={(event) => setTitleInput(event.target.value)}  value = {titleInput}></input>
<button onClick = {changeTitle}>change title</button>
<input 
  type='text' 
  placeholder='Year'
  onChange={(event) => setYearInput(event.target.value)}  
  value={yearInput}
/>
<button onClick = {changeYear}>change title</button>
<input 
  type='text' 
  placeholder='Rating'
  onChange={(event) => setRatingInput(event.target.value)}  
  value={ratingInput}
/>
<button onClick = {changeRating}>change title</button>

</>


);




}
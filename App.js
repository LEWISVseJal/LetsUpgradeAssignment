import './App.css';
import Header from './Header';
import Products_list from './Products_list';
//import { useState } from 'react';
function App() {
  /*let countries = [
    { id:1,name: "South Africa", capital: "Cape Town" },
    { id:2,name: "New Zealand", capital: "Wellington" }
  ]

  let [name, setName] = useState("")
  let [age,setAge]=useState("")
  function changeData() {
    name = "Shua";
    setName("Shua")
  console.log(name);*/

 
  
  function doSomething(data)
  {
    console.log("hello I am Clicked "+data)
  }
  return (
    <div className="App">
      {/*
        {
          countries.map((country) => {
            return (
              <div className='data' key={country.id}>
                <h3>{country.name}</h3>
                <h3>{country.capital}</h3>
              </div>
            )
          })
        }
      }

      <div className='data'>
      <h3>South Korea</h3>
      <p>Seoul</p>
      </div>
      
      <div className='data'>
      <h3>America</h3>
      <p>New York</p>
      </div>
      
      <h3>{name}</h3>
      <button onClick={changeData}>Click</button>
      <h3>Name</h3>
      <h3>{name}</h3>
      <input type='text' placeholder='Enter Name' onChange={(event) =>
      { setName(event.target.value); }} />

      <input type='number' placeholder='Enter Age' onChange={(event) =>
      { setAge(event.target.value); }} />

      <button type='button' onClick={() =>
      { console.log(name, age) }}>Submit</button>
      */}  
      <Header />
      <Products_list />
      <button className='btn' onClick={(event) => {
        console.log(event)
        doSomething("Sejal")
      }}>Click</button>
      </div>
  );
}

export default App;

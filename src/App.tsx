import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import { url } from 'inspector';
import AddToList from './components/AddToList';

//Using State to work with data in React TypeScript template. 
//Usando State para manusear dados em aplicações React que utilizam TypeScript.
 export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string 
  }[]
}

function App() {

  const [people, SetPeople] = useState<IState["people"]>([
    {
      name: "Laith Harb",
      url:"https://yt3.ggpht.com/ytc/AKedOLSr2K7qgRULQfZ_DeLv0rN48y5Fqmpw5qinYlV9kQ=s88-c-k-c0x00ffffff-no-rj",
      age: 30,
      note: "The best React with TypeScript teacher!"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={SetPeople}/>
    </div>
  );
}

export default App;

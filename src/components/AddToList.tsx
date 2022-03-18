import { parse } from 'path/win32'
import React, { FC, useState } from 'react'
import { IState as Props } from "../App"

interface IProps {
  people: Props["people"]
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList:React.FC<IProps> = ({people, setPeople}) => {

  const [input, setInput] = useState({
    name:"",
    age:"",
    note:"",
    img:"" 
  })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
        
    }

    const handleClick = ():void => {
      if (!input.name ||
          !input.age ||
          !input.img 
        ){
           return
        }

        setPeople([
          ...people,
          {
            name: input.name,
            age: parseInt(input.age),
            url: input.img,
            note: input.note
          }
        ])
        
        //Reset the form after adding one person in the list.
        //Apaga os textos preenchidos após a adição de um novo integrante na lista.
        setInput({
          name:"",
          age:"",
          note:"",
          img:"" 
        })
    }

    return (
      <div className='AddToList'>
        <input className='AddToList-input' type="text" placeholder="Name" value={input.name} onChange={handleChange} name="name" />
        <input className='AddToList-input' type="text" placeholder="Age" value={input.age} onChange={handleChange} name="age" />
        <input className='AddToList-input' type="text" placeholder="Image URL" value={input.img} onChange={handleChange} name="img" />
        <textarea className='AddToList-input' placeholder="note" value={input.note} onChange={handleChange} name="note" />
        <button className='AddToList-btn' onClick={handleClick} > Add to List</button>
      </div>
    )
  }

  export default AddToList
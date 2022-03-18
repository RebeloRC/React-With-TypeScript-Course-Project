import React from 'react'
import {IState as IProps} from "..//App"
//Using Props to pass data.
//Utilizando Props para passar dados.


//When we declare (import {IState as IProps} from "..//App") all properties are imported from App.tsx as IProps removing the need to create the interface below.
//Quando declaramos (import {IState as IProps} from "..//App") todas as propriedades são importadas do arquivo App.tsx como IProps tirando a necessidade de criar a interface a baixo.
/*
 interface IProps {
    people: {
      name: string
      age: number
      url: string
      note?: string 
    }[]
  }
*/

//Defining the type of element "List" as Functional Component using "React.FC<>".
//Definindo o tipo do elemento "List" como Functional Component usando "React.FC<>".
const List: React.FC<IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {
       return people.map((person) => {
            return (
                <li className='List'>
                    <div className='List-header'>
                        <img className='List-img' src={person.url}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} Years Old</p> 
                    <p className='List-note'>{person.note}</p>
                </li>
            )
        })
    }


  return (
        <ul>
            {renderList()}
         </ul>
  )
}

export default List
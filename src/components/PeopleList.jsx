import React from 'react';
import PeopleItem from './PeopleItem';
import './PeopleList.css';

function PeopleList(props) {
    
  return (
    <div className='PeopleList'>
        <h1>Lista Angajati</h1>
            {
                props.people.length
                ?props.people.map(obj => {
                    return(
                        <PeopleItem
                            firstName = {obj.firstName}
                            lastName = {obj.lastName}
                            job = {obj.job}
                            date = {obj.date}
                            salary = {obj.salary}
                            key = {obj.id}
                            id = {obj.id}
                        />
                    )
                })
                :<div className='no-items'>
                    <p>Nu exista angajati</p>
                    <p>Intorceti-va la pagina principala pentru a adauga!</p>
                </div>
                
            }
    </div>
  )
}

export default PeopleList;
import React from 'react';
import PeopleItem from '../PeopleItem/PeopleItem';
import './FiltredPeopleList.css';

function FiltredPeopleList(props) {
  return (
    <div className='FiltredPeopleList'>
        <h1>Lista Angajati</h1>
            {
                props.filteredPeople.length
                ?props.filteredPeople.map(obj => {
                   
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
                    <p>Niciun angajat nu corespunde filtrului ales!</p>
                    <p>Alegeti alt filtru</p>
                </div>   
            }
    </div>
  )
}
export default FiltredPeopleList;
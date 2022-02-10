import React from 'react';
import {connect} from 'react-redux';
import { removePeople } from '../redux/actions';
import './PeopleItem.css';

function PeopleItem(props) {
    const {firstName, lastName, date, job, salary,removePeople, id} = props;
  return (
    <div className=' PeopleItem d-flex flex-column align-items-center'>
        <p><span>Nume:</span> {firstName} {lastName}</p>
        <p><span>Meserie:</span> {job}</p>
        <p><span>Salariu:</span> {salary} LEI</p>
        <p> <span>Data angajarii:</span> {date}</p>
        <button className='btn btn-secondary'  onClick={()=>{
            removePeople(id)
            let people = JSON.parse(window.localStorage.getItem('people'));
            people = people.filter(obj => obj.id !== id)
            window.localStorage.setItem('people', JSON.stringify(people))

        }}>Sterge</button>
    </div>
  )
}
function mapDispatchToProps(dispatch){
  return {
    removePeople: (payload) => {dispatch(removePeople(payload))}
  }
}
export default connect(null, mapDispatchToProps)(PeopleItem);
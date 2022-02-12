import React from 'react';
import { connect } from 'react-redux';
import { filterPrice, sortName, sortPrice } from '../../redux/actions';
import './Filter.css';

function Filter(props) {
    const {sortName, sortPrice, filterPrice} = props
  return (
    <div className=' Filter d-flex flex-column'>
        <h3>Sorteaza dupa</h3>
        <button className='' onClick={()=>{sortName()}}>Nume</button>
        <button className='' onClick={()=>{sortPrice()}}>Salariu</button>
        <h3>Filtreaza dupa salariu</h3>
        <button name="1-2500" className='' onClick={(event) => {filterPrice(event.target.name)}}>&lt;2500</button>
        <button name="2500-4000" className='' onClick={(event) => {filterPrice(event.target.name)}}>2500-4000</button>
        <button name="4000-100000" className='' onClick={(event) => {filterPrice(event.target.name)}}>&gt;4000</button>
    </div>
  )
}
function mapDispatchToProps(dispatch) {
    return {
        sortName: () => {dispatch(sortName())},
        sortPrice: () => {dispatch(sortPrice())},
        filterPrice: (payload) => {dispatch(filterPrice(payload))}
    }
}

export default connect(null, mapDispatchToProps)(Filter);
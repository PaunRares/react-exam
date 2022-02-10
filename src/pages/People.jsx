import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPeople } from '../redux/actions';
import PeopleList from '../components/PeopleList';
import Filter from '../components/Filter';
import FiltredPeopleList from '../components/FiltredPeopleList';
import './People.css';

class People extends React.Component {

    componentDidMount() {
        let people = JSON.parse(window.localStorage.getItem('people'));
        if(people){
            this.props.addPeople(people)
        }
    }

    render(){
        return (
        <div className='People d-flex flex-column justify-content-between'>
            

            <div className='Filter-List d-flex justify-content-around'>
                <Filter/>
                {
                    this.props.filterActive
                    ?<FiltredPeopleList filteredPeople={this.props.filteredPeople}/>
                    :<PeopleList people={this.props.people}/>
                }
              
            </div>
            <div className='back-button'>
                <Link to="/">
                <button className='btn btn-primary m-5'>Inapoi la pagina principala</button>
                </Link>
            </div>
        </div>
        )
      }
    }
function mapDispatchToProps(dispatch) {
    return {
        addPeople: (payload) => {dispatch(addPeople(payload))}
    }
}
function mapStateToProps(state){
    return {
        filterActive: state.filterActive,
        people: state.people,
        filteredPeople: state.filteredPeople
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(People);
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            job: '',
            salary: '',
            date: this.date(),
            id: 1
        }
    }
    changeInput(event){
        return this.setState({[event.target.name]: event.target.value})
    }
    date(){
        let date = new Date();
        let month = date.getUTCMonth() +1;
        if(month<10){
            month = '0'+month
        }
        let day = date.getDate();
        if(day<10){
            day = '0'+day
        }
        let year = date.getUTCFullYear();
        let newDate = year + "-" + month + "-"+ day;
        return newDate;
    }

    render(){
        
        return (
            <div className='Home d-flex flex-column align-items-center justify-content-center '>
              
                <form className='d-flex flex-column' onSubmit={(event) => {
                        event.preventDefault();
                        let people = JSON.parse(window.localStorage.getItem('people'));
                        if(people) {
                            const maxId = people.reduce((acc, obj) =>{
                                return Math.max(acc,obj.id)
                            }, 0)
                            this.setState({id: maxId+1},()=>{
                                people.push(this.state)
                                window.localStorage.setItem('people', JSON.stringify(people))
                            })
                        }else{
                            window.localStorage.setItem('people', JSON.stringify([this.state]))
                        }
                       
                    }} >
                    <h1>Introdu datele</h1>
                    <label htmlFor="firsName">Nume</label>
                  <input type="text" name="firstName" placeholder='Nume' onChange={(event) =>{this.changeInput(event)}} required/>
                  <label htmlFor="firsName">Prenume</label>
                  <input type="text" name="lastName" placeholder='Prenume' onChange={(event) =>{this.changeInput(event)}} required/>
                  <label htmlFor="firsName">Job</label>
                  <input type="text" name="job" placeholder='Job' onChange={(event) =>{this.changeInput(event)}} required/>
                  <label htmlFor="firsName">Salariu</label>
                  <input type="number" name="salary" placeholder='Salariu' onChange={(event) =>{this.changeInput(event)}} required/>
                  <label htmlFor="firsName">Data angajarii</label>
                  <input type="date" name="date" placeholder='Nume' className='date' onChange={(event) =>{this.changeInput(event)}} defaultValue={this.date()} required/>
                  <button type="submit" className='submit'>Trimite</button>
                </form>
                  <Link to="/people">
                      <button className='btn btn-primary m-5'>Spre pagina cu angajati</button>
                  </Link>
              
            </div>
        )
    }
}

export default Home;
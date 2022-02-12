# React - Final Exam
The project represents a form with data about employees.
There are inputs for:
* Last Name ( Nume de familie ); 
* First Name ( Prenume ); 
* Job;
* Salary ( Salariu );
* Date of Employment ( Data Angajarii ), which will default show the actual date.

## The main tehnologies used for creating the app:
* React.js
* Redux.js
* React Router
* Bootstrap

## To run the project locally
1. git clone https://github.com/PaunRares/react-exam.git
2. cd react-exam
3. npm install
4. npm start

### Demo
http://react-examen.herokuapp.com/

### Functionalities
* Click on Trimite - it will send data to the page with employees;
* Click on Spre pagina cu angajati - it will display the page with employees; if there are no employees, it will show a message which recommends to go to the main page and introduce an employee;
* Click on Sorteaza - Dupa nume - it will sort employees by Last Name;
* Click on Sorteaza - Dupa salariu - it will sort employees by Salary;
* Click on Filtreaza dupa salariu: >2500  - it will show the employees with salary between 1 and 2500 Lei;
* Click on Filtreaza dupa salariu: 2500-4000  - it will show the employees with salary between 2500 and 4000 Lei;
* Click on Filtreaza dupa salariu: >4000 - it will show the employees with salary bigger than 4000 Lei;
* Click on Inapoi la pagina principala - it will display the main page and automatically restore the employees in the original order.

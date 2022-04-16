import './App.css';


const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}


function App(props) {
    
return(
  <div className="container">
    <img src={employee.profileImg}/>
    <div>{employee.name}</div>
    <h1>location:</h1>
    <div>{employee.location}</div>
    <h1>bloodGroup:</h1>
    <div>{employee.bloodGroup}</div>
    <h1>Age:</h1>
    <div>{employee.age}</div>
    
  </div>
  
)
}



export default App;

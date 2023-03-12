import { useEffect, useState } from 'react';
import './App.css';
import StudentList from './components/StudentList/StudentList';

//get this Value from .env
const  API_URL= "http://localhost:8888"

function App() {

  const [studentData, setStudentData] = useState([]);

  useEffect(()=>{
    console.log('<App /> useEffect() fired'/* the info to the left is just a notation*/)
      async function fetchData(){
        const res = await fetch(`${API_URL}/students`);/*this is the backend*/
        const json = await res.json();
      console.log('<App /> useEffect() fetched data'/* the info to the left is just a notation*/, json);
      const {data} = json;
      setStudentData(data);
    }

    fetchData(); 
    
  }, []);
  
  console.log(`<App /> rendered! num students = ${studentData.length}`  )

  return (
    <div className="App">
      <StudentList studentData={studentData}/>
    </div>
  );
} 

export default App;
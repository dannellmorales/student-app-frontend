import { useEffect, useState } from 'react';
import './App.css';
import StudentList from './components/StudentList/StudentList';
import Loading from './components/Loading/Loading';

//get this Value from .env
const API_URL = "http://localhost:8888"

function App() {

  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    console.log('<App /> useEffect() fired'/* the info to the left is just a notation*/)
    async function fetchData() {

      // show the user we're loading...
      setLoading(true);

      const res = await fetch(`${API_URL}/students`);/*this is the backend*/
      const json = await res.json();
      console.log('<App /> useEffect() fetched data'/* the info to the left is just a notation*/, json);
      const { data } = json;
      setStudentData(data);
      // stop showing the user reloading you are UI...
      setLoading(false);
    }
    fetchData();

  }, []);

  console.log(`<App /> rendered! loading = ${loading} num students = ${studentData.length}`)

  return (
    <div className="App">
      { /* if loading, render <Loading />
        Else render <StudentList />*/ }
        {loading ?  <Loading /> : <StudentList studentData={studentData} />} 
    </div>
  );
}

export default App;
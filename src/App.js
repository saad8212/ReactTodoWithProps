import DisplayData from './components/listItems/displayData';
import CountryDetails from './components/countryDetails';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import React, { useState } from 'react'; 
function App() {
  const [countryData, setCountryData] = useState([]);  
  const useEffect = (name) =>{
    fetch(`https://restcountries.com/v3.1/name/${name}`).then(response =>{
      if(response.ok) {
        return response.json()
      }
      throw response;
    }).then(data =>{
      let obj = {
        id:Math.ceil((Math.random() * 100) + 1),
        data:data[0]
       }  
        setCountryData([obj, ...countryData]);
        console.log(countryData);
    }).catch(err =>{
      console.log("Country Data Error: ", err);
    })
  }
    

  const GetCountryName = (props) =>{
    useEffect(props);
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={
            < DisplayData   Data = {countryData} countryName = {GetCountryName}/>}>
          </Route>
          <Route path='/details/:id' element={
            <CountryDetails  Data = {countryData} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import './App.css';
import './Contents.jsx'
import Contents from './Contents.jsx';
import data from "./data.json"
import { useState, useEffect } from "react";

function App() {

  //sort the data by frist name so Conatc list is alphabetical
  data = data.sort((a, b) => (a.first_name > b.first_name ? 1 : -1))

  //add toString to objects to be used as one long refernce to search in
  for (let i = 0; i < data.length; i++) {
    data[i]["toString"] = data[i].first_name + " " + data[i].last_name + " " + data[i].email_address + " " + data[i].date_of_birth + " " + data[i].address + " " + data[i].country + " " + data[i].zip_code + " " + data[i].city

  }

  const [searchTerm, setSearchTerm] = useState("")
  const [usedData, setUsedData] = useState(data);

  // Used to update when state changes as setState is async but useEffcet is sync
  useEffect(() => {
    //only filter the data is there is a search term defined
    if (searchTerm !== "") {
      //set the data that is displayed to be filtered by the search term
      setUsedData(data.filter(entry => { return entry.toString.includes(searchTerm) }))
    }
    // otherwsie set the data back to all the records
    else {

      setUsedData(data)
    }
  }, [searchTerm])


  //method to handle the change of the search box - updates searchTerm state
  const handleChange = e => {

    setSearchTerm(e.target.value)

  }


  // iterates through the data that will be displayed and creates a Contents object for each data object in the array
  function GetItems() {
    //Ensures the array is not empty
    if (usedData.length !== 0) {
      //maps data items to Contents items
      return (usedData.map((person, i) => (<Contents key={i} person={person} />)))
    } else {
      // if array is empty, ie there are not data items that meet search term then display not items found
      return (<div className='notFound'><p><b>NOTHING FOUND</b></p></div>)
    }
  }


  return (
    <>
      <div className='Container'>
        <div className="mid">
          <div>
            <input className='inputBar' value={searchTerm} onChange={handleChange} />
            <p style={{ float: "right", fontSize: "40px" }}>🔍</p>
          </div>
          <div className='scoller'>
            <GetItems />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

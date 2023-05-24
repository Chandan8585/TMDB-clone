import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchDataFromApi } from './utils/api'

function App() {
  useEffect(()=> {
    apiTesting();
  },[]);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log(res); // Access the data property of the response object
      });
      // .catch((error) => {
      //   console.log(error);
      // });
  };
      

  return (
    <div className="App">
     App
    </div>
  )
}

export default App

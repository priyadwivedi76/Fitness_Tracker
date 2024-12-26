import React from 'react'

export const exerciseOptions={
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY_API,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };




const fetchData = async(url,options) => {
    const response=await fetch(url,options);
    const data=await response.json();
}

export default fetchData
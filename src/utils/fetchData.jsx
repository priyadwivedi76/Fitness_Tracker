import React from 'react'


export const exerciseOptions={
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_KEY_API,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url,options) => {
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}
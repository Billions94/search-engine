import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const Company = () => {
  const [data, setdata] = useState(null);

  const company = useParams().company

  const getCompanies = async () => {
    try {
        const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${company}`)
        if(response.ok){
            const data = await response.json()
            console.log('i am the data of companies', data.data)
            const newData = data.data
            setdata(newData)
        }
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
      getCompanies()
  }, [])

  return (
    <>
    {
       data && data.map(d => (
            <div>
                <h1 className='text-light'>{d.category}</h1>
                <h1 className='text-light'>{d.title}</h1>
                <h1 className='text-light'>{d.category}</h1>
            </div>
        ))
    }
    </>
  );
};

export default Company;

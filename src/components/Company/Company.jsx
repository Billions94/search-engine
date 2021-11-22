import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap"
import "./styles.css"

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
           <Row className='justify-content-center'>
            <Col md={6} className='customComDiv mt-2'>
                <h4 className='text-light'>{d.company_name}</h4>
                <h4 className='text-light'>{d.title}</h4>
                <h4 className='text-light'>{d.category}</h4>
                <h4 className='text-light'>{d.salary}</h4>
                <h4 className='text-light'>{d.url}</h4>
                <h4 className='text-light'>{d.category}</h4>
            </Col>
            </Row>
        ))
    }
    </>
  );
};

export default Company;

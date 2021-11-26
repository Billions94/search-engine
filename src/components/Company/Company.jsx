import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { postTimer } from "../Lib/index"
import "./styles.css"
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";


const Company = () => {
  
  const [isLoading, setIsLoading] = useState(true)  
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
            setTimeout(() => {
            setIsLoading(false)
            },2000)
        }
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
      getCompanies()
  }, 
   // eslint-disable-next-line react-hooks/exhaustive-deps
  [])

  return (
    <>
    { isLoading ? 
        <ReactPlaceholder showLoadingAnimation={true} type='text' ready={false} rows={15} color='#E0E0E0'>
            <div></div>
        </ReactPlaceholder> : 
          (
            <div className='col-10 mt-3 mx-auto'>
                { data && data.map(d => (
                    <Row key={d._id}   className='justify-content-center'>
                    <Col key={d._id}  md={6} className='customComDiv mt-2'>
                        <h4 className='text-light text-left'>Company name: {d.company_name}</h4>
                        <h6 className='text-light text-left'>Job Title: {d.title}</h6>
                        <h6 className='text-light text-left'>Job Category: {d.category}</h6>
                        <h6 className='text-light text-left'>Salary: {d.salary}</h6>
                        <h6 className='text-left text-light'>Apply: <a href={d.url} className='text-light text-left'>{d.url}</a></h6>
                        <h6 className='text-left text-light'>Published Date: {postTimer(`${d.publication_date}`)} ago</h6>
                    </Col>
                    </Row>
                ))}
            </div>
          )

    }
    </>
  );
};

export default Company;

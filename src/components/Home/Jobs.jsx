import React from "react";
import { Link } from "react-router-dom"

const Jobs = ({ data }) => {
    console.log("mind you i'm in jobs",data)
  return (
    <div className='mt-5 customDiv text-dark pl-2'>
        <h3 className='text-dark text-left mb-5'>Job offers</h3>
      {data && data.map(d => (
        <div key={d._id} className='customBottomBorder ListGroup'>
            <Link key={d._id}  className='text-dark' to={`/${d.company_name}`} >
                <h6 className='text-left'>Job Title: {d.title}</h6>
            </Link>
                <h6 className='text-left'>Company: {d.company_name}</h6>
                <h6 className='text-left'>Job Type: {d.job_type}</h6>
        </div>
      ))}
    </div>
  );
};

export default Jobs;

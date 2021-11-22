import React from "react";
import { Link } from "react-router-dom"

const Jobs = ({ data }) => {
    console.log("mind you i'm in jobs",data)
  return (
    <div className='mt-5 customDiv text-dark pl-2'>
        <h3 className='text-dark text-left'>Job offers</h3>
      {data && data.map(d => (
          <Link className='text-dark' to={`/${d.company_name}`} >
          <div className='customBottomBorder'>
          <h6>{d.title}</h6>
          <h6>{d.company_name}</h6>
          <h6>{d.job_type}</h6>
          </div>
          </Link>
      ))}
    </div>
  );
};

export default Jobs;

import React from "react";
import { Link } from "react-router-dom"

const Jobs = ({ data }) => {
    console.log("mind you i'm in jobs",data)
  return (
    <div className='mt-5 mb-0 customDiv text-dark px-3 pt-0 pb-2'>
        <h3 className='text-light mt-0 text-left mb-5 jobs sticky-top'>Jobs </h3>
      {data && data.map(d => (
        <ul key={d._id} className=' list-group '>
            <div className='text-left NaN list-group-item pl-3 mb-2'>
                <div className='d-flex'>
                    <div className='mr-2'>
                    <img className='roundpic' src='https://picsum.photos/200/300' alt='' width='50px' />
                    </div>
                    <div>
                    <Link key={d._id}  className='text-dark' to={`/${d.company_name}`} >
                        <div className='customerh1Span'>
                           Job Title: {d.title}
                        </div>
                    </Link>
                    <div className='customerh3Span text-muted'>
                        Company: {d.company_name}
                    </div>
                    <div className='customerh3Span text-muted'>
                        Job Type: {d.job_type}
                    </div>
                    <div className='customerh3Span text-muted'>
                        Location: {d.candidate_required_location}
                    </div>
                    </div>
                </div>
            </div>
        </ul>
      ))}
    </div>
  );
};

export default Jobs;

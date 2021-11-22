import React from "react";
import { Link } from "react-router-dom"

const Jobs = ({ data }) => {
    console.log("mind you i'm in jobs",data)
  return (
    <div className='mt-5 customDiv text-dark pl-2'>
        <h3 className='text-light text-left mb-5'>Jobs </h3>
      {data && data.map(d => (
        <ul key={d._id} className=' list-group '>
            <li className='text-left list-group-item pl-3'>
                <div className='d-flex'>
                    <div className='mr-2'>
                    <img className='roundpic' src='https://picsum.photos/200/300' alt='' width='50px' />
                    </div>
                    <div>
                    <Link key={d._id}  className='text-dark' to={`/${d.company_name}`} >
                        <div className=''>
                            <div> <span className='customerh1Span'>Job Title: {d.title}</span> </div>
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
            </li>
        </ul>
      ))}
    </div>
  );
};

export default Jobs;

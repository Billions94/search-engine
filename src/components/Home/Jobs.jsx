import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToFavAction } from "../../redux/actions";

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (fav) => {
      dispatch(addToFavAction(fav))
    }
})

const Jobs = ({ data, addToFavorites } ) => {
  console.log("mind you i'm in data",data)
    console.log("mind you i'm in jobs",addToFavorites)
  return (
    <div className='mt-5 mb-0 customDiv text-dark px-3 pt-0 pb-2'>
        <h3 className='text-light mt-0 text-left mb-5 jobs sticky-top'>Jobs </h3>
        
      {data && data.map(d => (
        <ul key={d._id} className=' list-group '>
            <div className='text-left NaN list-group-item pl-3 mb-2'>
                <div className='jobDivWrapper d-flex'>
                  <div className='d-flex'>
                    <div className='mr-2'>
                    <img className='roundpic' src='https://picsum.photos/200/300' alt='' width='50px' />
                    </div>
                    <div className=''>
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
                    <div className='favoriteIcon text-muted ml-4'>
                        <img onClick={() => addToFavorites(d)} src="https://img.icons8.com/color/50/000000/add-to-favorites.png" width='30px'/>
                    </div>
                </div>
            </div>
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)

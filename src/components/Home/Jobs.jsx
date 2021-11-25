import React from "react";
import { connect } from "react-redux";
import { addToFavAction, removeFromFavAction } from "../../redux/actions";
import SingleJob from "./SingleJob";
import Alert from "react-bootstrap/Alert"

const mapStateToProps = state => ({
  favorite: state.data.favorites,
  jobs: state.jobs.data,
  isError: state.jobs.isError,
  isLoading: state.jobs.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (fav) => {
    dispatch(addToFavAction(fav))
  },
  removeFromFavorites: (favIndex) => {
    dispatch(removeFromFavAction(favIndex))
  }
})


const Jobs = ({ jobs, data, favorite, addToFavorites, removeFromFavorites, isError, isLoading } ) => {

  

  console.log("mind you i'm in data",jobs)
    console.log("mind you i'm in jobs",addToFavorites)

 


  return (
    <div className='mt-5 mb-0 customDiv text-dark px-3 pt-0 pb-2'>
        <h3 className='text-light mt-0 text-left mb-5 jobs sticky-top'>Jobs </h3> 
      {jobs && jobs.map((d, i)=> (
        <div>
        {
          isError ?   <div><Alert variant="warning">ERROR WHILE FETCHING</Alert></div> : 
          (
            <SingleJob 
            addToFavorites={addToFavorites}
            favorite={favorite}
            removeFromFavorites={removeFromFavorites}
             d={d} i={i}/>
          )
        },
         {/* <SingleJob 
        // addToFavorites={addToFavorites}
        // favorite={favorite}
        // removeFromFavorites={removeFromFavorites}
        //  d={d} i={i}/> */}
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)

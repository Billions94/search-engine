import React from "react";
import { connect } from "react-redux";
import { addToFavAction, removeFromFavAction } from "../../redux/actions";
import SingleJob from "./SingleJob";

const mapStateToProps = state => ({
  favorite: state.data.favorites,
})

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (fav) => {
    dispatch(addToFavAction(fav))
  },
  removeFromFavorites: (favIndex) => {
    dispatch(removeFromFavAction(favIndex))
  }
})


const Jobs = ({ data, favorite, addToFavorites, removeFromFavorites } ) => {

  

  console.log("mind you i'm in data",data)
    console.log("mind you i'm in jobs",addToFavorites)

 


  return (
    <div className='mt-5 mb-0 customDiv text-dark px-3 pt-0 pb-2'>
        <h3 className='text-light mt-0 text-left mb-5 jobs sticky-top'>Jobs </h3> 
      {data && data.map((d, i)=> (
        <SingleJob 
        addToFavorites={addToFavorites}
        favorite={favorite}
        removeFromFavorites={removeFromFavorites}
         d={d} i={i}/>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)

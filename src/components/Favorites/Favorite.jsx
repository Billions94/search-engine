import React from "react";
import { connect } from "react-redux";
import { removeFromFavAction } from "../../redux/actions";
import { Link } from "react-router-dom"
import "./styles.css"

const mapStateToProps = (state) => ({
  favorite: state.data.favorites,
});

const mapDispatchToProps = (dispatch) => ({
    removeFromFavorites: (favIndex) => {
        dispatch(removeFromFavAction(favIndex))
    }
});

const Favorite = ({ favorite, removeFromFavorites }) => {
  console.log("favorite", favorite);
  return (
    <div className='favDivContainer mx-auto col-6 mt-3 '>
        
        <h1 className='text-light text-left favList sticky-top'> Favorite List </h1>
        <h1 className='text-light indicator text-right'>{favorite.length}</h1>
      {favorite &&
        favorite.map((el, i) => (
          <div key={el._id} className='d-flex justify-content-center mt-4 customh1'>
                <Link  to={`/${el.company_name}`} className='customh1'>
                 <h1 className="customh1 text-left">{el.company_name}</h1>
                </Link>
               <div className='ml-4 removeFav'>
                 <img onClick={() => removeFromFavorites(i)} alt='' src="https://img.icons8.com/fluency/50/000000/delete-sign.png" width='20px'/>
               </div>  
          </div>
        ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);

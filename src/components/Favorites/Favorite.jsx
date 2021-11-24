import React from "react";
import { connect } from "react-redux";
import { removeFromFavAction } from "../../redux/actions";
import { Link } from "react-router-dom"

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
    <div>
      {favorite &&
        favorite.map((el, i) => (
          <div key={el._id} className='d-flex justify-content-center mt-4'>
                <Link to={`/${el.company_name}`}>
                 <h6 className="text-light">{el.company_name}</h6>
                </Link>
               <div className='ml-4'>
                 <img onClick={() => removeFromFavorites(i)} src="https://img.icons8.com/fluency/50/000000/delete-forever.png" width='20px'/>
               </div>  
          </div>
        ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);

import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const SingleJob  = ({ favorite, addToFavorites, removeFromFavorites, d, i}) => {
    const [selected, setSelected] = useState(false)

    const multiTask = (d) => {
        setSelected(true)
        addToFavorites(d)
      }
      
      // console.log('this id the company name ', favorite)

      const removeFavorite = (i) => {
        setSelected(false)
        removeFromFavorites(i)
      }
  
    useEffect(() => {
      console.log('THIS IS SETTING THE SELECTED ONES')
        if(favorite.map(f => f._id).indexOf(d._id) !== -1){
            setSelected(true)
        }else(setSelected(false))
    },
     // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected])

    return(
        <div>
            <ul key={i} className=' list-group '>
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
                          {
                            selected === false ? 
                            <img onClick={() => multiTask(d)} alt='' src="https://img.icons8.com/color/50/000000/add-to-favorites.png" width='30px'/>
                          : <img onClick={() => removeFavorite(i)} alt='' src="https://img.icons8.com/ultraviolet/50/000000/add-to-favorites.png" width='30px'/>
                          }
                            
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    )
}


export default SingleJob
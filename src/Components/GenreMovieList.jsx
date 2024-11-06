import React from 'react'
import PropTypes from 'prop-types'
import GenresList from '../Constant/GenreList'

function GenreMovieList() {
  return (
    <div>
        {GenresList.genere.map((item, index)=>index<=4&&(
            <div>
                <h2 className='text=[20px] text-white font-bold'>{item.name}</h2>
            </div>
        ))}
    </div>
  )
}

GenreMovieList.propTypes = {}

export default GenreMovieList

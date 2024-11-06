import React from 'react'
import PropTypes from 'prop-types'

function GenreMovieList() {
  return (
    <div>
        {GenresList.genere.map((item)=>(
            <div>
                <h2>{item.name}</h2>
            </div>
        ))}
    </div>
  )
}

GenreMovieList.propTypes = {}

export default GenreMovieList

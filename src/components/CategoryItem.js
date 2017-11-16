import React from 'react'
import PropTypes from 'prop-types'

export default function CategoryItem({ category }) {
  return <li>{category.cat_name}</li>
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    cat_name: PropTypes.string.isRequired
  })
}

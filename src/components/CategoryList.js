import React from 'react'
import PropTypes from 'prop-types'

import CategoryItem from './CategoryItem'

export default function CategoryList({ categories }) {
  return (
    <ul>
      {categories.map(category => (
        <CategoryItem key={category.cat_id} category={category} />
      ))}
    </ul>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(CategoryItem.propTypes.category)
}

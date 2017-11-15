import React from 'react'
import PropTypes from 'prop-types'

function CategoryItem({ category }) {
  return <li>{category.cat_name}</li>
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    cat_name: PropTypes.string.isRequired
  })
}

function CategoryList({ categories }) {
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

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props)

    this.api = 'http://myaday.net/pop/api.php'
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch(this.api)
      .then(res => res.json())
      .then(json => {
        this.setState({
          categories: json.data
        })
      })
  }

  render() {
    return <CategoryList categories={this.state.categories} />
  }
}

function App() {
  return <CategoryContainer />
}

export default App

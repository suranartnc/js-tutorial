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
      loading: false,
      categories: []
    }

    this.fetchBookData = this.fetchBookData.bind(this)
  }

  fetchBookData() {
    this.setState({
      loading: true
    })

    fetch(this.api)
      .then(res => res.json())
      .then(json => {
        this.setState({
          loading: false,
          categories: json.data
        })
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchBookData}>Fetch</button>

        {this.state.loading === true && <div>Loading...</div>}

        <CategoryList categories={this.state.categories} />
      </div>
    )
  }
}

function App() {
  return <CategoryContainer />
}

export default App

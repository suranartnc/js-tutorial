import React from 'react'
import CategoryList from '../components/CategoryList'

export default class CategoryContainer extends React.Component {
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

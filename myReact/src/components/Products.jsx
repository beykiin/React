import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <>
        <h3>Products - {this.props.currentCategory}</h3>
      </>
    )
  }
}

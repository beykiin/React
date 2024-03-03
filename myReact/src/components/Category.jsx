import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default class category extends Component {
    // state={
    //     category:[
    //         {id:1,categoryName:"Murat"},
    //         {id:2,categoryName:"Ahmet"},
    //         {id:3,categoryName:"Yasin"},
    //         {id:4,categoryName:"Umut"},
    //         {id:5,categoryName:"Osman"}
    //     ],
    //     currentCategory:""

    // }
    // changeCategory=(category)=>{
    //     this.setState({currentCategory:category})
    // }
  render() {
    return (
        <>
            <h3>{this.props.title}</h3>
            <h3>{this.props.info.title}</h3>
            <h3>{this.props.info.baska}</h3>
            <ListGroup>
                {this.props.category.map(item=>(
                    <ListGroup.Item onClick={()=>this.props.changeCategory(item.categoryName)} key={item.id}>{item.categoryName}</ListGroup.Item>
                ))}

            </ListGroup>
            <h5>{this.props.currentCategory}</h5>
        </>
    )
  }
}


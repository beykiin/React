
import Nav1 from './components/Navbar'
import Category from './components/category'
import Products from './components/Products'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React, { Component } from 'react'
import Footer from './components/Footer'

export default class App extends Component {
  state={
    category:[
        {id:1,categoryName:"Murat"},
        {id:2,categoryName:"Ahmet"},
        {id:3,categoryName:"Yasin"},
        {id:4,categoryName:"Umut"},
        {id:5,categoryName:"Osman"}
    ],
    currentCategory:""

}
changeCategory=(category)=>{
  this.setState({currentCategory:category})
}
  render() {
    let info={
          title:"Beken",
          baska:"Burası da başka deneme"
        }
    return (
      <>
        <Nav1/>
          <Row>
            <Col xs={3}>
              <Category info={info} category={this.state.category} currentCategory={this.state.currentCategory} changeCategory={this.changeCategory}/>
            </Col>
            <Col xs={9}>
              <Products currentCategory={this.state.currentCategory}/>
            </Col>
          </Row>
          <Footer title={"yasin"}/>
      </>
    )
  }
}


// function App() {
//   state
//   const [count, setCount] = useState(0)
//   let art=()=>{
//     setCount((count)=>count +1)
//     // Countu arttırma fonksiyonu yazdık ve aşağıda buttonda art fonksiyonunu çağırdık
//   }
//   let azalt=(count)=>{
//     setCount((count)=>{
//       return count==0?0:count -1
//       // Azaltma fonksiyonunu yazdık ve aşağıda çağırdık
//     })
//   }
//   let categoryTitle="Category Title"
//   let info={
//     title:"Beken",
//     baska:"Burası da başka deneme"
//   }
//   let sekil={
//     backgroundColor:"blue",
//     color:"white",
//     width:"100px",
//     marginLeft:"3px"
//   }
//   return (
//     <>
//     <Nav1/>
//     <Row>
//       <Col xs={3}>
//         <Category title={categoryTitle} info={info}/>
//       </Col>
//       <Col xs={9}>
//         <Products/>
//       </Col>
//     </Row>
      

//       <button style={sekil} onClick={()=>art()}>Arttır</button>
//       <button style={sekil} onClick={()=>azalt()}>Azalt</button>
//       <p style={{backgroundColor:"red",color:"white",width:"100px",marginLeft:"50px"}}>{count}</p>
      
//     </>

//   )
// }

// export default App

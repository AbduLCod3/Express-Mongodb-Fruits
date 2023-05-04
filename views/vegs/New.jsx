const React = require("react")
const Nav = require("../components/Nav")

class New extends React.Component {
  render() {
    return(
      <div>
        <Nav link="/vegs" text="Home" />
        <h1>Create a New Veg!</h1>
        <form action="/vegs" method="POST">
          Name: <input type="text" name="name" />
          Color: <input type="text" name="color" />
          Is Ready To Eat: 
          <input 
            type="checkbox" 
            name="readyToEat" 
          /> 
          <input type="submit" value="Create Veg" />       
        </form>
      </div>
    )
  }
}

module.exports = New
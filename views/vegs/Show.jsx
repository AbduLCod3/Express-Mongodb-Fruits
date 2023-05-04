const React = require("react");
const Nav = require("../components/Nav");

class Show extends React.Component {
  render() {
    const veg = this.props.veg;
    return (
      <div>
        <Nav link="/vegs" text="Home" />
        <h1> Show Page </h1>
        The {veg.name} is {veg.color} <br />
        {veg.readyToEat
          ? "Its is ready to eat"
          : "It is not ready to eat... Cant touch this"}
      </div>
    );
  }
}

module.exports = Show;

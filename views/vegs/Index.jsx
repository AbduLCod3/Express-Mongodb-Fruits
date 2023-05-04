const React = require("react");
const Nav = require("../components/Nav");

class Index extends React.Component {
  render() {
    const { vegs } = this.props;
    return (
      <div>
        <h1>Vegs Index Page</h1>
        <Nav link="/vegs/new" text="Create a Veg" />
        <ul>
          {vegs.map((veg, i) => {
            return (
              <li key={i}>
                The <a href={`/vegs/${veg._id}`}>{veg.name}</a> is{" "}
                {veg.color} <br></br>
                {veg.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;

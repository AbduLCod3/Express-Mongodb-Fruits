const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <DefaultLayout title="Show Page" link="/pokemons" text="Home">
        The {pokemon.name} looks like {pokemon.img} <br />
      </DefaultLayout>
    );
  }
}

module.exports = Show;

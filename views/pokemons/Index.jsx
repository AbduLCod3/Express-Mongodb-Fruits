const React = require("react");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <DefaultLayout
        title="Logs Index Page"
        link="/logs/new"
        text="Create a Log"
      >
        <ul>
          {pokemons.map((pokemon, i) => {
            return (
              <li key={i}>
                The <a href={`/logs/${pokemon._id}`}>{pokemon.name}</a>{" "}
                {pokemon.img} <br></br>
                <br />
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;

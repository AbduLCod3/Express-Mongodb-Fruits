const React = require("react");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <DefaultLayout
        title="Logs Index Page"
        link="/logs/new"
        text="Create a Log"
      >
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                <a href={`/logs/${log._id}`}>{log.title}</a> {log.entry}{" "}
                <br></br>
                {log.shipIsBroken} <br></br>
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

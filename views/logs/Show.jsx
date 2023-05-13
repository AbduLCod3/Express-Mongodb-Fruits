const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <DefaultLayout title="Show Page" link="/logs" text="Home">
        {log.title} <br />
        {log.entry} <br />
        {log.shipIsBroken} <br />
      </DefaultLayout>
    );
  }
}

module.exports = Show;

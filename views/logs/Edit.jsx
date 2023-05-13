const React = require("react");
const DefaultLayout = require("../layout/Default");

class Edit extends React.Component {
  render() {
    //grabbing the log givin to this page by the edit route on the server.
    const log = this.props.log;
    return (
      <DefaultLayout
        title="Edit Page"
        // 2 properties below are for the Nav component
        link="/logs"
        text="Home"
      >
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          {/* use the log info to give the inputs a defaultValue for a nice user experience */}
          Title: <input type="text" name="title" defaultValue={log.title} />
          Entry: <input type="textarea" name="entry" defaultValue={log.entry} />
          Is Ship Broken:
          {/* conditionally rendering the checkbox input to make it check by default or not. */}
          {log.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;

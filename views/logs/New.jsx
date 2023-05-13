const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New Page" link="/logs" text="Home">
        <h1>Create a New Log!</h1>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" />
          Entry: <input type="textarea" name="entry" />
          Is Ship Broken: <input type="checkbox" name="entry" />
          <input type="submit" value="Create Log" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;

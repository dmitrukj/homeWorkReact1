const e = React.createElement;
class UserName extends React.Component {
  render() {
    return e("h1", null, "Hello world ", `${this.props.username}`);
  }
}
const divContainer = document.querySelector("#root");
ReactDOM.render(e(UserName, { username: "Juli" }), divContainer);

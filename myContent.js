const e = React.createElement;
const name = "Artem";

class UserName extends React.Component {
  constructor(props) {
    super(props.name);
    this.state = { nameState: false };
  }

  render() {
    return e(
      "h1",
      { onClick: () => this.setState({ nameState: true }) },
      document.write("Hello world, ", name, "!")
    );
  }
}

const domContainer = document.querySelector("#myContent");
ReactDOM.render(e(UserName), domContainer);

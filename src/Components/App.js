import React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    pageHeader: "Naming Contests",
  };
  componentDidMount() {
    // timers, listeners
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map((contest) => (
            <ContestPreview {...contest} key={contest.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

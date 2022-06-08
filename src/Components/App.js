import React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    pageHeader: "Naming Contests",
    contests: this.props.initialContests,
  };
  componentDidMount() {
    axios.get("/api/contests").then((resp) => {
      this.setState({
        contests: resp.data.contests,
      });
    });
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map((contest) => (
            <ContestPreview {...contest} key={contest.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

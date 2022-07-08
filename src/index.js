import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";

// this.setState({
//   contests: resp.data.contests,
// });
const root = createRoot(document.getElementById("root"));

root.render(<App initialContests={window.data.contests} />);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";

import data from "./testData.json";

const root = createRoot(document.getElementById("root"));

root.render(<App contests={data.contests} />);

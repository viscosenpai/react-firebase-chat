import React from "react";
import Layout from "./containers/Layout/Layout";
import Channels from "./components/Window/Window";

const App = () => {
  return (
    <div>
      <Layout>
        <h1>React Firebase Chat</h1>
        <Channels />
      </Layout>
    </div>
  );
};

export default App;

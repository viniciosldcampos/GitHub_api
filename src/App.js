import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { ResetCSS } from "./components/global/resetCSS";

function App() {
  return (
    <main>
      <ResetCSS/>
      <Layout>
        <Profile/>
        <div>Repositories</div>
        <div>Starred</div>
      </Layout>
    </main>
  );
}

export default App;

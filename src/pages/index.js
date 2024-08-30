import * as React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "../styles/pageStyles.css";
import "../styles/global.css";
import * as mui from '@material-ui/core';

const IndexPage = () => {
  return (
    <>
 
      <div>
        <main className="pageStyles">
          <Home />
        </main>
      </div>
 
    </>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

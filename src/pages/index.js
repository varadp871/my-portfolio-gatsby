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
          <h1 className="text_color_light headingStyles">Welcome to my page</h1>
        </main>
      </div>
 
    </>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

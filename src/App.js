import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import MarketPlace from "./tabs/Marketplace";


function App() {
  const [suggestedPosts, setSuggestedPosts] = useState(require('./examplePosts.json').posts)

  return (
    <div className="app">

      {/*calling the header class in main*/}
      <Header />
      <MarketPlace />

      <div className="app__body">
        <SideBar />
        <Feed posts={suggestedPosts} />
        {/*Feed*/}
        {/*Widgets*/}
      </div>

    </div>
  );
}

export default App;

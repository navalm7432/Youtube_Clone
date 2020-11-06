import React from "react";
import "./MobFooter.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { Link } from "react-router-dom";

function MobFooter() {
  return (
    <div className="mobFooter">
      <Link to="/">
        <div class="home icon">
          <HomeIcon className="sizeAdjust" />
          <p>Home</p>
        </div>
      </Link>
      <div class="trending icon">
        <WhatshotIcon className="sizeAdjust" />
        <p>Trending</p>
      </div>
      <div class="subs icon">
        <SubscriptionsIcon className="sizeAdjust" />
        <p>Subscription</p>
      </div>
      <div class="library icon">
        <VideoLibraryIcon className="sizeAdjust" />
        <p>Library</p>
      </div>
    </div>
  );
}

export default MobFooter;

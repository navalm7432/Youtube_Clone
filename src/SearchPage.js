import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import req from "./req";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchpage_filterIcon">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow channelUrl={req.agadmatorChannel} />
      <hr />
      <VideoRow fetchUrl={req.agadmatorPlaylist} />
    </div>
  );
}
export default SearchPage;

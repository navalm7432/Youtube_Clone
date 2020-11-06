import React, { useEffect, useState } from "react";
import "./VideoRow.css";
import axios from "./axios";
function VideoRow({ fetchUrl}) {
  const [videoBox, setvideoBox] = useState([]);
  
  useEffect(() => {
      async function fetchData() {
          const requests = await axios.get(fetchUrl);
            setvideoBox(requests.data.items);
        }
        fetchData();
  }, [fetchUrl]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div class="wrapper">
      {videoBox.map((video) => (
        <div className="videorow">
          <img
            src={video.snippet.thumbnails.maxres.url}
            alt={video.snippet.channelTitle}
          />
          <div className="videorow_text">
            <h5 className="fordesktop_Title">{video.snippet.title}</h5>
            <h5 className="forMob_Title">{truncate(video.snippet.title,38)}</h5>
              <div class="flex">
                <img
                  src="https://yt3.ggpht.com/a/AATXAJx7O6wDxNlnSemhmZ0a3GzPl0CHsZX-0GBffo_KHw=s176-c-k-c0x00ffffff-no-rj-mo"
                  alt=""
                />
                <p class="chTitle">{video.snippet.channelTitle}</p>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoRow;

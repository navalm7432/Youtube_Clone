import React from "react";

function Iframe({ id }) {
  return (
    <div>
          <iframe
              title="iframe"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
  );
}

export default Iframe;

import React, { useEffect } from "react";
import "../css/SocialMediaHandles.css";

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="instagram-embed-container">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="12"
        style={{
          margin: 0,
          padding: 0,
          border: "none",
          position: "relative",
          overflow: "hidden",
        }}
      />
      <div className="overlay"></div>
    </div>
  );
};

export default InstagramEmbed;

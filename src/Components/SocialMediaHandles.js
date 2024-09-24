// src/SocialMediaHandles.js
import React from "react";
import "../css/SocialMediaHandles.css";
import InstagramEmbed from "./InstagramEmbed";

const SocialMediaHandles = () => {
  const posts = [
    "https://www.instagram.com/p/C03Ihw1RkOy", // Replace with actual Instagram post URLs
    "https://www.instagram.com/p/C0xwBviSDRi",
    "https://www.instagram.com/p/C0v1EMIxhE6",
  ];

  return (
    <div className="container">
      <div className="title-container">
        <hr className="line" />
        <span className="separator md:text-[60px] sm:text-[40px] text-[30px]">
          Social Media Handles
        </span>
        <hr className="line" />
      </div>
      <div className="social-media">
        <img
          src="../../assets/Facebook Circled.png"
          alt="Facebook"
          className="logo"
        />
        <img src="../../assets/TwitterX.png" alt="Twitter" className="logo" />
        <img
          src="../../assets/Instagram.png"
          alt="Instagram"
          className="logo"
        />
      </div>
      <span className="social-media-cards-title md:text-[64px] sm:text-[40px] text-[30px]">
        Latest stories running around
      </span>
      <hr className="underline" />
      <div className="social-media-cards">
        {posts.map((post, index) => (
          <div className="social-media-card" key={index}>
            <InstagramEmbed url={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaHandles;

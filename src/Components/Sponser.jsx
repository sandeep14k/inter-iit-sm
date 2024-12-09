import React from 'react';
import '../css/Sponser.css';

const AppDetails = () => {
  return (
    <div className="AppDetailsBox overflow-hidden">
      <div className="flex flex-col items-center text-center py-10 px-5 bg-gray-50 overflow-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold overflow-hidden">
          Inter IIT Sports Meet 2024
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4">
        Welcome to the official app for Inter IIT Sports Meet 2024, where passion meets competition. Featuring 200+ thrilling matches across 6 exciting sports, 23 IITs battling for the General Championship, and over 2000 participants showcasing their skills. Stay ahead with live streaming of matches, real-time score updates, detailed results, and a comprehensive player database. Experience the ultimate sports journey like never before!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.iism.iitk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white px-5 py-3 rounded-md hover:bg-blue-600 transition"
          >
            <img
              src="/assets/play-store.svg"
              alt="Google Play"
              className="w-32 h-16 mr-8"
            />
            Get it on Google Play
          </a>
          <a
            href="https://apps.apple.com/in/app/inter-iit-sports-meet-24/id6738761317"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white px-5 py-3 rounded-md hover:bg-gray-800 transition"
          >
            <img
              src="/assets/app-store.svg"
              alt="App Store"
              className="w-29 h-16 mr-8"
            />
            Download on the App Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;

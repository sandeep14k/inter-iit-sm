import React from "react";

const IITKMap = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 overflow-hidden">IITK Map</h1>
      <div className="w-full md:w-3/4 h-96">
        <iframe
          title="IIT Kanpur Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7110.472750748911!2d80.23040184365029!3d26.51233893959827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c387aa510ba33%3A0x80b0a6fba96c25a1!2sIndian%20Institute%20of%20Technology%20Kanpur!5e0!3m2!1sen!2sin!4v1693848412012!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default IITKMap;

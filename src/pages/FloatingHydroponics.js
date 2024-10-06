import React from 'react';
import './FloatingHydroponics.css'; // Importing a custom CSS file for styling
import FloatingHydroponicsVideo from '../components/hydroponics.mp4'; // Adjust the path to your video file

const FloatingHydroponics = ({onClick}) => {
  return (
    <div className="hydroponics-section">
      <h1 className="section-title">Floating Hydroponics System</h1>
      <p className="section-description">
        The <strong>Floating Hydroponics System</strong> is an innovative solution designed for farmers in flood-prone areas,
        ensuring crop growth without disruption during floods. This system allows crops to grow hydroponically
        in normal conditions and, in the event of a flood, the entire structure floats on the water, preventing damage.
        Once the floodwaters recede, the system returns to its original position on the ground, resuming regular farming conditions.
      </p>

      <h2 className="sub-title">1. Adaptability to Floods:</h2>
      <ul className="feature-list">
        <li>In normal conditions, the hydroponics system operates on land, using nutrient-rich water solutions to grow crops without soil.</li>
        <li>During a flood, the entire structure floats, preventing waterlogging, root damage, and crop loss.</li>
        <li>The buoyancy of the system is designed to withstand variable water levels, ensuring that the crops remain unaffected by the surrounding floodwater.</li>
      </ul>

      <h2 className="sub-title">2. Automatic Restoration Post-Flood:</h2>
      <p>
        Once the flood recedes, the hydroponics system naturally returns to its original position. This automatic restoration ensures
        minimal disruption to the farming process, allowing crops to continue growing without requiring any manual intervention.
      </p>

      <h2 className="sub-title">3. Sustainability and Resilience:</h2>
      <ul className="feature-list">
        <li>This system is an eco-friendly alternative to traditional farming methods in flood-prone areas.</li>
        <li>By combining hydroponics with a floating mechanism, farmers can achieve year-round crop production even in the face of natural disasters.</li>
      </ul>

      <h3 className="sub-title">Working:</h3>
      <ul className="feature-list">
        <li><strong>Normal Season:</strong> The crops grow in a stable hydroponics setup on land, using a controlled water and nutrient system.</li>
        <li><strong>Rainy Season:</strong> When heavy rains cause flooding, the system floats on the rising water. The crops are kept above the water level by buoyant platforms, ensuring that they continue to receive nutrients without being submerged.</li>
        <li><strong>Post-Flood:</strong> Once the floodwaters recede, the system settles back to its original position on the ground, allowing the crops to continue growing as before.</li>
      </ul>

      <h3 className="sub-title">Benefits:</h3>
      <ul className="feature-list">
        <li><strong>Flood-Proof Farming:</strong> Protects crops from flood damage, ensuring consistent yields even during extreme weather conditions.</li>
        <li><strong>Reduced Labor:</strong> The floating system automatically adjusts to water levels, eliminating the need for manual intervention during floods.</li>
        <li><strong>Year-Round Farming:</strong> Farmers can continue to produce crops throughout the year, regardless of flood risks.</li>
        <li><strong>Eco-Friendly:</strong> By utilizing hydroponics, this system reduces water usage and does not require soil, making it sustainable and efficient.</li>
      </ul>

      <h2 className="section-title">Watch the Floating Hydroponics System in Action</h2>
      <video className="hydroponics-video" controls>
        <source src={FloatingHydroponicsVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FloatingHydroponics;

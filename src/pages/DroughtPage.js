import React from 'react';
import './DroughtPage.css'; // Make sure to include your CSS file for styling
import explanation from '../components/explanation.mp4'
import animation from '../components/animation.mp4'

const DroughtPage = ({onClick}) => {
  return (
    <div className="drought-page">
      <h1>Drought Page: Smart Irrigation System for Drought Management</h1>

      {/* Overview Section */}
      <section className="overview">
        <h2>Overview</h2>
        <p>
          The Drought Page provides a detailed explanation of an innovative Smart Irrigation System 
          designed to protect crops from the effects of drought. This system leverages soil moisture data, 
          water storage from flood events, and smart irrigation techniques to ensure crops receive adequate 
          water, even during drought conditions.
        </p>
      </section>

      {/* Problem Statement Section */}
      <section className="problem-statement">
        <h2>Problem Statement</h2>
        <p>
          Farmers face the dual threat of floods and droughts, both of which can severely affect crop health and yield. 
          While floods cause waterlogging, droughts deprive crops of essential water, leading to reduced productivity 
          and crop failure. Managing water during these extreme weather events is critical for sustaining agriculture.
        </p>
      </section>

      {/* Solution Section */}
      <section className="solution">
        <h2>Solution: Smart Irrigation System</h2>
        <h3>Flood Water Storage:</h3>
        <p>
          During flood events, excess water is stored using a specially designed storage system. This stored water is 
          saved for later use during drought conditions. By capturing floodwater, farmers can create a reserve that will 
          be used to irrigate crops when natural water sources are scarce.
        </p>

        <h3>Soil Moisture Detection via Hardware:</h3>
        <p>
          A hardware-based system is installed in the soil to monitor moisture levels. This hardware constantly tracks 
          the soil’s moisture content, providing real-time data that helps predict upcoming droughts. If soil moisture 
          falls below a critical threshold, the system alerts farmers to the possibility of a drought and prompts the 
          use of stored water.
        </p>

        <h3>Reduced Water Supply for Maximum Utilization:</h3>
        <p>
          During drought periods, the Smart Irrigation System reduces the water supplied to crops by 50%, optimizing 
          the use of stored water. This technique ensures that the stored water lasts throughout the drought season, 
          helping farmers continue crop production without significant loss.
        </p>

        <h3>Smart Irrigation Technology:</h3>
        <p>
          The system uses drip irrigation and precision water delivery, meaning that the exact amount of water needed 
          for crop survival is delivered directly to the plant roots. This method conserves water and ensures that crops 
          remain hydrated even when water resources are limited.
        </p>
      </section>

      {/* How the System Works Section */}
      <section className="system-works">
        <h2>How the System Works</h2>
        <h3>Normal Season:</h3>
        <p>
          During non-flood or non-drought seasons, the smart irrigation system operates in the background, monitoring 
          soil moisture and adjusting water levels as needed.
        </p>

        <h3>Flood Season:</h3>
        <p>
          When floods occur, the system captures and stores floodwater. Excess water is directed to storage units, 
          preventing flooding in the fields while building a reserve for future use.
        </p>

        <h3>Drought Detection:</h3>
        <p>
          The hardware sensors installed in the fields monitor soil moisture levels continuously. If a drought is 
          detected based on soil dryness and the absence of rain, the system automatically switches to stored water usage.
        </p>

        <h3>Drought Season:</h3>
        <p>
          During a drought, the system automatically reduces the water supply to crops by half, using the stored water 
          reserves to irrigate the fields. This ensures crops receive enough water to survive, while maximizing the 
          use of the available water throughout the drought season.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Benefits of the Smart Irrigation System</h2>
        <ul>
          <li>
            <strong>Efficient Water Management:</strong> By storing floodwater and optimizing water use during droughts, 
            the system ensures a steady supply of water for crops throughout the year, irrespective of weather conditions.
          </li>
          <li>
            <strong>Drought Resilience:</strong> Farmers are better prepared for droughts with early detection and 
            water storage systems in place, minimizing crop loss and maintaining productivity.
          </li>
          <li>
            <strong>Automated Water Supply:</strong> The automated system eliminates the need for manual intervention, 
            as it intelligently adjusts water supply based on real-time soil moisture data.
          </li>
          <li>
            <strong>Cost-Effective Farming:</strong> The reduced water supply during droughts, combined with precise 
            irrigation, minimizes wastage and reduces the cost of water usage, benefiting farmers financially.
          </li>
        </ul>
      </section>

      {/* Videos and Animation Section */}
      <section className="videos">
        <h2>Videos and Animation</h2>
        <p>
          <strong>Hardware Explanation Video:</strong> A detailed video is available on the webpage, demonstrating the 
          hardware system used for soil moisture detection and smart irrigation. This video provides an in-depth look at 
          how the hardware functions and integrates with the irrigation system.
        </p>

        {/* Video Component */}
        <video controls width="600">
          <source src={explanation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p>
          <strong>System Animation Video:</strong> In addition, an animated video showcases the entire process—from 
          floodwater storage to drought detection and irrigation—helping farmers visualize how the system operates 
          during different weather conditions.
        </p>

        {/* Animation Video Component */}
        <video controls width="600">
          <source src={animation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Conclusion Section */}
      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>
          The Smart Irrigation System presented on the Drought Page offers a sustainable and innovative solution for 
          managing water resources during droughts. By leveraging soil moisture detection, floodwater storage, and 
          precision irrigation techniques, this system helps farmers maintain crop health and productivity, even in 
          the face of extreme weather conditions.
        </p>
      </section>
    </div>
  );
};

export default DroughtPage;
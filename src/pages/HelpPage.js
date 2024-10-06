import React from 'react';

const HelpPage = ({onClick}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>HELP</h1>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Welcome to the Geospora Help Page</h2>
        <p style={styles.text}>
          This guide will walk you through the key features of the website and how to effectively use the tools provided to help with agricultural decision-making.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subTitle}>1. Homepage: Satellite Map and Search Bar</h3>
        <p style={styles.text}>
          <strong>Satellite Map:</strong> On the homepage, you will see a satellite map that allows you to explore various regions and understand their geographical and environmental conditions.
        </p>
        <p style={styles.text}>
          <strong>Search Bar:</strong> You can type the name of any location to locate it on the map. The map will zoom in on the selected region.
        </p>
        <p style={styles.text}>
          <strong>Toggle Weather Button:</strong> Displays current weather data and crop suggestions based on environmental conditions.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subTitle}>2. About Page</h3>
        <p style={styles.text}>
          The About page provides information on the platform's purpose, how it helps farmers, and details about the team behind Geospora.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subTitle}>3. Flood Page</h3>
        <p style={styles.text}>
          On the Flood page, you'll find details on the Floating Hydroponics System and how it works to protect crops during floods. A video animation explains the process.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subTitle}>4. Drought Page</h3>
        <p style={styles.text}>
          The Drought page provides a solution for managing water during droughts with a hardware-based system. A video explains how excess water is stored and reused.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subTitle}>5. Help Page</h3>
        <p style={styles.text}>
          Access this page anytime by clicking the Help button in the navigation bar. Here you'll find details on how to use all platform features.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Key Features Overview</h2>
        <ul style={styles.list}>
          <li>Map Navigation</li>
          <li>Weather Data & Crop Recommendations</li>
          <li>Flood Solutions</li>
          <li>Drought Solutions</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Support</h2>
        <p style={styles.text}>
          If you encounter any issues, feel free to reach out to our support team at <a href="mailto:support@geospora.com" style={styles.email}>support@geospora.com</a>.
        </p>
      </section>
    </div>
  );
};

// Inline CSS styles
const styles = {
    container: {
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#000000', // Black background
        color: '#00FF00', // Green text',
    },
    heading: {
      textAlign: 'center',
      fontSize: '48px',  // Increased font size for the heading
      marginBottom: '40px',
      color: '#0056b3', // Primary theme color
    },
    subheading: {
      fontSize: '28px',  // Larger font size for subheadings
      marginBottom: '20px',
      color: '#007BFF',  // Blue color for subheadings
      textAlign: 'center',  // Center align subheadings
    },
    text: {
      fontSize: '18px',  // Larger text size for readability
      lineHeight: '1.8',
      textAlign: 'center',  // Center align for content
      maxWidth: '800px',
      margin: '0 auto',
    },
    section: {
      marginBottom: '50px',
    },
    teamSection: {
      marginTop: '50px',
    },
    teamCard: {
      textAlign: 'center',
      padding: '20px',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',  // Hover effect
    },
    teamCardHover: {
      transform: 'scale(1.05)',  // Scale up on hover
    },
    image: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      marginBottom: '15px',
    },
    teamName: {
      fontSize: '22px',
      color: '#333',
      marginBottom: '5px',
    },
    teamRole: {
      fontSize: '18px',
      color: '#777',
    },
      button: {
        backgroundColor: '#00FF00', // Green button background
        color: '#000000', // Black text on button
      },
    };

export default HelpPage;

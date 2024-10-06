// src/components/About.js
import React from 'react';
import Slider from 'react-slick';  // Import react-slick for carousel
import 'slick-carousel/slick/slick.css';  // Import carousel styles
import 'slick-carousel/slick/slick-theme.css';  // Import slick theme styles


import ahsan from '../images/ahsan.jpg';
import colin from '../images/colin2.jpg';
import shradda from '../images/shraddha.jpg';
import nakshathra from '../images/nakshratra.jpg';
import amal from '../images/amal.jpg';
import madhav from '../images/madhav.jpg';



// Team Data
const team = [
    {
      name: "Ahsan Saleem",
      role: "Lead Developer",
      image: ahsan
    },
    {
      name: "Colin Jimmy",
      role: "Data Analyst & Visualization Expert",
      image: colin
    },
    {
      name: "Shradda Sasikumar",
      role: "Geospatial Analyst",
      image: shradda
    },
    {
      name: "Nakshathra Roice",
      role: "UX/UI Designer",
      image: nakshathra
    },
    {
      name: "Amal Joseph",
      role: "Backend Developer",
      image: amal
    },
    {
      name: "Madhav K",
      role: "Project Manager",
      image: madhav
    }
  ];

const About = () => {

  // Slider settings for the team carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  // Automatically slides
    autoplaySpeed: 1000,  // Set time interval for auto-slide (3 seconds)
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Geospora</h2>

      <section style={styles.section}>
        <h3 style={styles.subheading}>Overview</h3>
        <p style={styles.text}>Geospora is an innovative platform designed to empower farmers by providing them access to NASA Earth observation datasets, enabling data-driven decisions to tackle water-related agricultural challenges...</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subheading}>Mission</h3>
        <p style={styles.text}>The mission of Geospora is to bridge the gap between cutting-edge NASA datasets and farmers on the ground, giving them the tools they need to make informed decisions that enhance crop resilience...</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subheading}>Problem Statement</h3>
        <p style={styles.text}>Farmers face a deluge of water-related challenges stemming from unpredictable weather patterns, pests, and diseases, all of which can severely affect crop health, farmers’ profits, and food security...</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subheading}>Solution</h3>
        <ul style={styles.text}>
          <li>Explore and Visualize NASA Data</li>
          <li>Analyze Crop & Water Trends</li>
          <li>Predict & Plan</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subheading}>Impact</h3>
        <p style={styles.text}>Geospora will help increase crop resilience, enhance food security, and boost farmers' profits...</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subheading}>Technology Stack</h3>
        <p style={styles.text}>Front-end: React.js, Back-end: Node.js, Visualization: D3.js, Leaflet.js, etc...</p>
      </section>

      <section style={styles.teamSection}>
        <h3 style={styles.subheading}>Meet the Team</h3>
        <Slider {...settings}>
          {team.map((member, index) => (
            <div key={index} style={styles.teamCard}>
              <img src={member.image} alt={member.name} style={styles.image} />
              <h4 style={styles.teamName}>{member.name}</h4>
              <p style={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

// Inline styles
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

export default About;

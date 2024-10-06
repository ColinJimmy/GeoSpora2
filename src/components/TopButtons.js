// src/components/TopButtons.js
import React from 'react';

const TopButtons = ({onHomeClick, onAboutClick, onFloodClick, onDroughtClick, onHelpClick }) => {
  return (
    <div style={styles.container}>
    <button onClick={onHomeClick} style={styles.button}>Home</button>
    <button onClick={onAboutClick} style={styles.button}>About</button>
      <button onClick={onFloodClick} style={styles.button}>Flood</button>
      <button onClick={onDroughtClick} style={styles.button}>Drought</button>
      <button onClick={onHelpClick} style={styles.button}>Help</button>
    </div>
  );
};

// Inline styles for the button container
const styles = {
  container: {
    position: 'fixed',
    left: '200px',
    display: 'flex',
    gap: '10px',
    zIndex: 1000, // Ensure buttons are above the map
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default TopButtons;

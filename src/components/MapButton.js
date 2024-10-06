const MapButton = ({ toggleMap }) => {
  return (
    <div style={styles.container}>
      <button style={styles.button} className="map-button" onClick={toggleMap}>
      Toggle Map/Weather
    </button>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    left: '2px',
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

export default MapButton;

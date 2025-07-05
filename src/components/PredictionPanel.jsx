import React from 'react'

function PredictionPanel() {
  return (
    <div style={styles.panel}>
      <h2 style={styles.title}>🔮 Prediction Panel</h2>
      <p style={styles.text}>
        This is where your model’s predictions will render — coming soon with dynamic charts and volatility insights.
      </p>
      <div style={styles.placeholder}>
        <span style={styles.chartNote}>📈 Chart Preview Area</span>
      </div>
    </div>
  )
}

const styles = {
  panel: {
    backgroundColor: '#111',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,255,255,0.2)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#00ffff',
  },
  text: {
    fontSize: '1rem',
    color: '#cccccc',
    marginBottom: '1.5rem',
  },
  placeholder: {
    background: '#222',
    border: '2px dashed #555',
    borderRadius: '8px',
    padding: '2rem',
    color: '#888',
  },
  chartNote: {
    fontStyle: 'italic',
    fontSize: '0.9rem',
  },
}

export default PredictionPanel



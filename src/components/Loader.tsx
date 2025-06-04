const Loader = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <div style={styles.text}>Loading...</div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  spinner: {
    width: 60,
    height: 60,
    border: "8px solid rgba(255, 255, 255, 0.3)",
    borderTop: "8px solid white",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.5,
    textShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
  },
};

// Keyframe for spinner animation
const styleSheet = document.styleSheets[0];
const keyframes = `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;

// Inject the keyframes rule if it does not exist already
if (styleSheet && styleSheet.cssRules.length === 0) {
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

export default Loader;

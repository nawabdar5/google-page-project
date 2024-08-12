import React from "react";

const ChromePage = () => {
  return (
    <div style={styles.chromePage}>
      <header style={styles.chromeHeader}>
        <img src='../cssimg/nawab.png' alt="Chrome" style={styles.chromeLogo} />
        <nav style={styles.chromeNav}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>The Browser by Google</a>
          <a href="#" style={styles.navLink}>Features</a>
          <a href="#" style={styles.navLink}>Support</a>
        </nav>
      </header>
      <main style={styles.chromeMain}>
        <img src="../css/img/nawab.png" alt="Chrome"/>
        <h1 style={styles.heading}>The browser built to be yours</h1>
        <div style={styles.chromeButtons}>
          <button style={styles.button}>Updates</button>
          <button style={styles.button}>Yours</button>
          <button style={styles.button}>Safe</button>
          <button style={styles.button}>Fast</button>
          <button style={styles.button}>By Google</button>
        </div>
        <footer style={styles.chromeFooter}>
          <p>Need the Chrome installer? <a href="#" style={styles.footerLink}>Download here</a>.</p>
        </footer>
      </main>
    </div>
  );
};

const styles = {
  chromePage: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  },
  chromeHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd"
  },
  chromeLogo: {
    height: "30px"
  },
  chromeNav: {
    display: "flex"
  },
  navLink: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#000"
  },
  chromeMain: {
    padding: "50px 20px"
  },
  chromeIcon: {
    width: "80",
    hight:"80"
  },
  heading: {
    fontSize: "2.5em",
    margin: "20px 0"
  },
  chromeButtons: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0"
  },
  button: {
    margin: "0 10px",
    padding: "10px 20px",
    fontSize: "1em",
    border: "1px solid #ddd",
    backgroundColor: "#f5f5f5",
    cursor: "pointer"
  },
  chromeFooter: {
    marginTop: "40px",
    fontSize: "0.9em"
  },
  footerLink: {
    textDecoration: "none",
    color: "blue"
  }
};

export default ChromePage;

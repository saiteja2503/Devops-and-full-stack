import React from "react";

function App() {
  const subjects = [
    { name: "Mathematics", progress: 82, status: "On Track" },
    { name: "Computer Science", progress: 91, status: "Excellent" },
    { name: "Physics", progress: 74, status: "Improving" },
    { name: "English", progress: 88, status: "Strong" }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎓 Student Dashboard</h1>

        <p style={styles.subtitle}>
  Track your academic performance, course progress, and learning status in one place.
</p>

        <div style={styles.summaryRow}>
          <div style={styles.summaryBox}>
            <h3>Total Courses</h3>
            <p>4</p>
          </div>

          <div style={styles.summaryBox}>
            <h3>Average Progress</h3>
            <p>84%</p>
          </div>

          <div style={styles.summaryBox}>
            <h3>Status</h3>
            <p>Good Standing</p>
          </div>
        </div>

        <h2 style={styles.sectionTitle}>Course Progress</h2>

        {subjects.map((subject, index) => (
          <div key={index} style={styles.subjectCard}>
            <div style={styles.subjectHeader}>
              <h3>{subject.name}</h3>
              <span>{subject.status}</span>
            </div>

            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: subject.progress + "%"
                }}
              ></div>
            </div>

            <p>{subject.progress}% Completed</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f4f6f8",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial"
  },

  card: {
    maxWidth: "800px",
    margin: "auto",
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },

  title: {
    textAlign: "center"
  },

  subtitle: {
  textAlign: "center",
  marginBottom: "30px",
  color: "#555",
  fontSize: "16px"
},

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px"
  },

  summaryBox: {
    background: "#eef3f8",
    padding: "15px",
    borderRadius: "8px",
    width: "30%",
    textAlign: "center"
  },

  sectionTitle: {
    marginBottom: "15px"
  },

  subjectCard: {
    background: "#fafafa",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px"
  },

  subjectHeader: {
    display: "flex",
    justifyContent: "space-between"
  },

  progressBar: {
    height: "10px",
    background: "#ddd",
    borderRadius: "5px",
    marginTop: "10px",
    marginBottom: "5px"
  },

  progressFill: {
    height: "100%",
    background: "#4caf50",
    borderRadius: "5px"
  }
};

export default App;
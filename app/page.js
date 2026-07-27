export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#050816",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      <div style={{maxWidth: "800px", textAlign: "center"}}>

        <h1 style={{
          fontSize: "72px",
          marginBottom: "20px",
          letterSpacing: "-3px"
        }}>
          AgentGenes
        </h1>

        <h2 style={{
          fontSize: "32px",
          fontWeight: "400",
          color: "#8ab4ff"
        }}>
          Engineering the DNA of Autonomous AI
        </h2>

        <p style={{
          fontSize: "20px",
          lineHeight: "1.6",
          color: "#cbd5e1",
          marginTop: "30px"
        }}>
          A premium AI brand for the next generation of intelligent agents,
          autonomous systems and AI infrastructure.
        </p>

        <button style={{
          marginTop: "40px",
          padding: "16px 32px",
          borderRadius: "50px",
          border: "none",
          background: "#4f8cff",
          color: "white",
          fontSize: "18px",
          cursor: "pointer"
        }}>
          Request Acquisition
        </button>

        <p style={{
          marginTop: "60px",
          color: "#64748b"
        }}>
          AgentGenes.ai — premium domain available for acquisition.
        </p>

      </div>
    </main>
  );
}

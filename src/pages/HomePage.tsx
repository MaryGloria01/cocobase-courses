import { useNavigate } from "react-router-dom";

const T = {
  bg: "#0d1117",
  surface: "#161b22",
  surface2: "#1c2430",
  border: "#30363d",
  green: "#39d353",
  greenDim: "rgba(57,211,83,0.14)",
  text: "#e6edf3",
  muted: "#7d8590",
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: T.bg,
        padding: "60px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          textAlign: "center",
          animation: "slideUp 0.5s ease",
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 20 }}>🥥</div>

        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: T.text,
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          Learn Backend Development
        </h1>

        <p
          style={{
            fontSize: 18,
            color: T.muted,
            marginBottom: 40,
            lineHeight: 1.6,
          }}
        >
          Master Cocobase and backend development fundamentals through
          interactive lessons, quizzes, and challenges. Track your progress
          locally and learn at your own pace.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/courses")}
            style={{
              padding: "16px 32px",
              background: T.green,
              color: "#000",
              border: "none",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              transition: "transform 0.1s, opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.98)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Explore Courses →
          </button>
        </div>

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 16,
          }}
        >
          <div
            style={{
              padding: 16,
              background: T.surface,
              borderRadius: 8,
              border: `1px solid ${T.border}`,
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 8 }}>📚</div>
            <div style={{ fontSize: 14, color: T.muted }}>6+ Courses</div>
          </div>
          <div
            style={{
              padding: 16,
              background: T.surface,
              borderRadius: 8,
              border: `1px solid ${T.border}`,
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 8 }}>🎯</div>
            <div style={{ fontSize: 14, color: T.muted }}>Interactive</div>
          </div>
          <div
            style={{
              padding: 16,
              background: T.surface,
              borderRadius: 8,
              border: `1px solid ${T.border}`,
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 8 }}>💾</div>
            <div style={{ fontSize: 14, color: T.muted }}>Local Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { ALL_COURSES } from "../data/courses";
import { getCourseProgress } from "../utils/progressStorage";

const T = {
  bg: "#0d1117",
  surface: "#161b22",
  surface2: "#1c2430",
  border: "#30363d",
  green: "#39d353",
  text: "#e6edf3",
  muted: "#7d8590",
};

export default function CoursesListPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: T.bg, padding: "40px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "8px 16px",
              background: "transparent",
              border: `1px solid ${T.border}`,
              color: T.text,
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "border-color 0.2s",
              marginBottom: 20,
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = T.green)}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = T.border)}
          >
            ← Back
          </button>

          <h1
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: T.text,
              marginBottom: 8,
            }}
          >
            Available Courses
          </h1>
          <p style={{ color: T.muted, fontSize: 16 }}>
            Choose a course to start learning
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {ALL_COURSES.map((course) => {
            const progress = getCourseProgress(course.id);
            const progressPercent = progress
              ? (progress.completedSteps.length / course.steps.length) * 100
              : 0;
            const isComplete = progress?.isComplete;

            return (
              <div
                key={course.id}
                onClick={() => navigate(`/course/${course.id}`)}
                style={{
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  borderRadius: 12,
                  padding: 24,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = course.color;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.3)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = T.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {isComplete && (
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      background: T.green,
                      color: "#000",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </div>
                )}

                <div style={{ fontSize: 40, marginBottom: 12 }}>
                  {course.icon}
                </div>

                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: T.text,
                    marginBottom: 8,
                  }}
                >
                  {course.title}
                </h2>

                <p
                  style={{
                    fontSize: 14,
                    color: T.muted,
                    marginBottom: 16,
                    minHeight: 40,
                  }}
                >
                  {course.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 16,
                    fontSize: 12,
                  }}
                >
                  <span
                    style={{
                      background: course.color + "20",
                      color: course.color,
                      padding: "4px 12px",
                      borderRadius: 20,
                      fontWeight: 600,
                    }}
                  >
                    {course.difficulty}
                  </span>
                  <span
                    style={{
                      background: T.surface2,
                      color: T.muted,
                      padding: "4px 12px",
                      borderRadius: 20,
                      fontWeight: 600,
                    }}
                  >
                    {course.duration} min
                  </span>
                </div>

                {progress && (
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        color: T.muted,
                        marginBottom: 6,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Progress</span>
                      <span>{Math.round(progressPercent)}%</span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: 6,
                        background: T.surface2,
                        borderRadius: 3,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${progressPercent}%`,
                          height: "100%",
                          background: T.green,
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                  </div>
                )}

                <div style={{ marginTop: 16 }}>
                  <span
                    style={{
                      fontSize: 12,
                      color: T.green,
                      fontWeight: 600,
                    }}
                  >
                    {progress
                      ? `${progress.completedSteps.length}/${course.steps.length} lessons`
                      : "Start learning →"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

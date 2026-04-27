import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import CoursesListPage from "./pages/CoursesListPage";
import CourseContentPage from "./pages/CourseContentPage";

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
// ─── DESIGN SYSTEM v1.0 ──────────────────────────────────────────────────────
const COLORS = {
  // Primary — Actions, links, key UI
  primary: {
    50: "#E6F1FB",
    100: "#B5D4F4",
    400: "#378ADD",
    600: "#185FA5",
    800: "#0C447C",
  },
  // Success — Completion, correct answers
  success: {
    50: "#EAF3DE",
    100: "#C0DD97",
    400: "#639922",
    600: "#3B6D11",
  },
  // Warning — Reminders, partial progress
  warning: {
    50: "#FAEEDA",
    100: "#FAC775",
    400: "#BA7517",
    600: "#854F0B",
  },
  // Danger — Wrong answers, errors
  danger: {
    50: "#FCEBEB",
    100: "#F7C1C1",
    400: "#E24B4A",
    600: "#A32D2D",
  },
  // Neutral — Surfaces, borders, text
  neutral: {
    50: "#F1EFE8",
    100: "#D3D1C7",
    400: "#888780",
    800: "#444441",
    900: "#2C2C2A",
  },
};

const T = {
  // Color tokens
  primary: COLORS.primary[600],
  success: COLORS.success[400],
  warning: COLORS.warning[400],
  danger: COLORS.danger[400],

  // Surfaces
  bg: COLORS.neutral[50],
  surface: "#ffffff",
  surface2: COLORS.neutral[100],
  surfaceMuted: COLORS.neutral[50],

  // Borders
  border: COLORS.neutral[100],
  borderMuted: COLORS.neutral[100],

  // Text
  text: COLORS.neutral[900],
  textSecondary: COLORS.neutral[800],
  textMuted: COLORS.neutral[400],

  // Legacy compat
  green: COLORS.success[400],
  greenDim: `rgba(99, 153, 34, 0.1)`,
  greenGlow: `rgba(99, 153, 34, 0.2)`,
  red: COLORS.danger[400],
  redDim: `rgba(226, 75, 74, 0.1)`,
  amber: COLORS.warning[400],

  // Typography
  fontSans: "'DM Sans', 'Inter', sans-serif",
  fontSerif: "'Literata', 'Lora', serif",
  fontMono: "'JetBrains Mono', 'DM Mono', monospace",
};

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Sora:wght@400;500;600;700;800&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{background:${T.bg};color:${T.text};font-family:${T.fontSans};overflow-x:hidden}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${T.border};border-radius:999px}

@keyframes slideUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes slideIn{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}
@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-7px)}40%{transform:translateX(7px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}
@keyframes glow{0%,100%{box-shadow:0 0 0 0 ${T.greenGlow}}50%{box-shadow:0 0 22px 6px ${T.greenGlow}}}
@keyframes pop{0%{transform:scale(1)}40%{transform:scale(1.18)}70%{transform:scale(0.92)}100%{transform:scale(1)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.55}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes heartLose{0%{transform:scale(1)}30%{transform:scale(1.5)}60%{transform:scale(0.7)}100%{transform:scale(1)opacity:0.25}}

.slide-up{animation:slideUp .35s cubic-bezier(.4,0,.2,1) both}
.slide-in{animation:slideIn .35s cubic-bezier(.4,0,.2,1) both}
.shake{animation:shake .4s ease}
.glow{animation:glow .6s ease}
.pop{animation:pop .35s ease}

.option-btn{
  width:100%;background:${T.surface};border:2px solid ${T.border};border-radius:12px;
  padding:14px 16px;color:${T.text};font-family:${T.fontSans};font-size:14px;font-weight:600;
  cursor:pointer;text-align:left;transition:border-color .15s,background .15s,transform .1s;
  display:flex;align-items:center;gap:12px;
}
.option-btn:hover:not(:disabled){border-color:${T.green};background:${T.surface2}}
.option-btn:active:not(:disabled){transform:scale(0.98)}
.option-btn.selected{border-color:${T.green};background:${T.greenDim}}
.option-btn.correct{border-color:${T.green};background:rgba(57,211,83,0.1);animation:glow .5s ease}
.option-btn.wrong{border-color:${T.red};background:${T.redDim};animation:shake .4s ease}
.option-btn.reveal{border-color:${T.green};background:rgba(57,211,83,0.06)}
.option-btn:disabled{cursor:default}
.option-btn.code{font-family:${T.fontMono};font-size:12px;font-weight:400;white-space:pre;overflow-x:auto;align-items:flex-start}

.check-btn{
  width:100%;border:none;border-radius:12px;padding:16px;
  font-family:${T.fontSans};font-size:16px;font-weight:800;letter-spacing:.04em;
  cursor:pointer;transition:opacity .2s,transform .1s,background .2s;
}
.check-btn:hover:not(:disabled){opacity:.88}
.check-btn:active:not(:disabled){transform:scale(0.99)}
.check-btn:disabled{opacity:.28;cursor:default}
.check-btn.idle{background:${T.green};color:#000}
.check-btn.pass{background:${T.green};color:#000}
.check-btn.fail{background:${T.red};color:#fff}

.tf-btn{
  background:${T.surface};border:2px solid ${T.border};border-radius:12px;
  padding:20px 12px;color:${T.text};font-family:${T.fontSans};font-size:15px;font-weight:700;
  cursor:pointer;text-align:center;transition:border-color .15s,background .15s;
  display:flex;flex-direction:column;align-items:center;gap:8px;
}
.tf-btn:hover:not(:disabled){border-color:${T.green};background:${T.surface2}}
.tf-btn.selected{border-color:${T.green};background:${T.greenDim}}
.tf-btn.correct{border-color:${T.green};background:rgba(57,211,83,0.1);animation:glow .5s ease}
.tf-btn.wrong{border-color:${T.red};background:${T.redDim};animation:shake .4s ease}
.tf-btn:disabled{cursor:default}

.match-item{
  background:${T.surface};border:2px solid ${T.border};border-radius:8px;
  padding:12px;font-size:13px;font-weight:600;cursor:pointer;text-align:center;
  transition:border-color .15s,background .15s,transform .1s;
  min-height:52px;display:flex;align-items:center;justify-content:center;
}
.match-item:hover:not(.matched):not(.disabled){border-color:${T.green};transform:scale(1.02)}
.match-item.active{border-color:${T.green};background:${T.greenDim}}
.match-item.matched{border-color:${T.green};background:rgba(57,211,83,0.08);color:${T.green};cursor:default;animation:glow .4s ease}
.match-item.wrong-flash{border-color:${T.red};background:${T.redDim};animation:shake .4s ease}
.match-item.disabled{cursor:default;opacity:.6}

.word-chip{
  background:${T.surface};border:2px solid ${T.border};border-radius:999px;
  padding:6px 14px;font-family:${T.fontMono};font-size:12px;font-weight:600;
  cursor:pointer;color:${T.text};transition:border-color .15s,background .15s,color .15s;
}
.word-chip:hover:not(:disabled){border-color:${T.green};background:${T.greenDim};color:${T.green}}
.word-chip.used{opacity:.25;cursor:default;pointer-events:none}

.reorder-item{
  background:${T.surface};border:2px solid ${T.border};border-radius:8px;
  padding:12px 14px;font-family:${T.fontMono};font-size:12px;
  display:flex;align-items:center;gap:10px;
  transition:border-color .2s,background .2s,transform .15s;
}
.reorder-item.correct{border-color:${T.green}}
.reorder-item.wrong{border-color:${T.red}}

.short-input{
  width:100%;background:${T.surface};border:2px solid ${T.border};border-radius:12px;
  padding:14px 16px;color:${T.text};font-family:${T.fontSans};font-size:15px;
  outline:none;transition:border-color .15s;
}
.short-input:focus{border-color:${T.green}}
.short-input.correct{border-color:${T.green};background:rgba(57,211,83,0.06)}
.short-input.wrong{border-color:${T.red};background:${T.redDim};animation:shake .4s ease}

.xp-badge{
  display:inline-flex;align-items:center;gap:6px;
  background:${T.greenDim};border:1px solid rgba(57,211,83,.3);
  border-radius:999px;padding:5px 14px;
  font-size:12px;font-weight:700;color:${T.green};
}
`;

function useGlobalStyles() {
  useEffect(() => {
    if (document.getElementById("learn-kinyarwanda-styles")) return;
    const s = document.createElement("style");
    s.id = "learn-kinyarwanda-styles";
    s.textContent = GLOBAL_CSS;
    document.head.appendChild(s);
  }, []);
}

export default function App() {
  useGlobalStyles();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesListPage />} />
        <Route path="/course/:courseId" element={<CourseContentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

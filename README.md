ur prompt is as follows # E-Learning UI Design Guidelines
**Design System v1.0** — A structured, intentional system to replace vibe-coded chaos, built for clarity, accessibility, and learner focus.

---

## 01 — Core Principles

Design for the learner's brain. Every decision should reduce friction between the student and the content.

| Principle | Rule |
|---|---|
| **Cognitive clarity** | Reduce noise. Every element must serve the learning goal — nothing decorative. |
| **Readable always** | High contrast text, generous line height, no decorative font abuse. |
| **Progress visible** | Learners need to feel momentum. Make progress states first-class UI citizens. |
| **Consistent patterns** | Re-use components relentlessly. Familiar = fast. Surprise belongs in content, not UI. |

---

## 02 — Color System

Each color has **one role**. Never use color just for decoration — it must signal meaning.

### Primary — Actions, links, key UI
| Stop | Hex | Use |
|---|---|---|
| 50 | `#E6F1FB` | Subtle backgrounds, active nav highlight |
| 100 | `#B5D4F4` | Hover states, light fills |
| 400 | `#378ADD` | Interactive borders |
| **600** ★ | `#185FA5` | Buttons, links, primary actions |
| 800 | `#0C447C` | Text on light blue backgrounds |

### Success — Completion, correct answers
| Stop | Hex | Use |
|---|---|---|
| 50 | `#EAF3DE` | Correct answer background |
| 100 | `#C0DD97` | Light success fill |
| **400** ★ | `#639922` | Success badge, checkmark |
| 600 | `#3B6D11` | Text on success backgrounds |

### Warning — Deadline reminders, partial progress
| Stop | Hex | Use |
|---|---|---|
| 50 | `#FAEEDA` | Reminder banner background |
| 100 | `#FAC775` | Warning fill |
| **400** ★ | `#BA7517` | Warning badge, due-date label |
| 600 | `#854F0B` | Text on warning backgrounds |

### Danger — Wrong answers, error states
| Stop | Hex | Use |
|---|---|---|
| 50 | `#FCEBEB` | Wrong answer background |
| 100 | `#F7C1C1` | Error fill |
| **400** ★ | `#E24B4A` | Error icon, failed state |
| 600 | `#A32D2D` | Text on danger backgrounds |

### Neutral — Surfaces, borders, muted text
| Stop | Hex | Use |
|---|---|---|
| 50 | `#F1EFE8` | Page background, card surface |
| 100 | `#D3D1C7` | Borders, dividers |
| 400 | `#888780` | Muted labels, secondary text |
| 800 | `#444441` | Body text |
| 900 | `#2C2C2A` | Headings, high-emphasis text |

---

## 03 — Typography

### Font pairing
Use a **humanist serif** for lesson content — it aids reading comprehension during long sessions.  
Use a **clean sans-serif** for navigation, buttons, labels, and UI chrome.

**Recommended pairings:**
- Content: [Literata](https://fonts.google.com/specimen/Literata), [Lora](https://fonts.google.com/specimen/Lora), or [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4)
- UI: [DM Sans](https://fonts.google.com/specimen/DM+Sans), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), or [Inter](https://fonts.google.com/specimen/Inter)
- Code: [DM Mono](https://fonts.google.com/specimen/DM+Mono), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), or [Fira Code](https://fonts.google.com/specimen/Fira+Code)

### Type scale

| Role | Font | Size | Weight | Line Height | Use |
|---|---|---|---|---|---|
| Display | Serif | 28px | 600 | 1.2 | Hero lesson headings |
| H1 | Serif | 22px | 500 | 1.3 | Chapter titles |
| H2 | Sans | 18px | 500 | 1.3 | Section headings |
| H3 | Sans | 15px | 500 | 1.4 | Sub-sections, card titles |
| Body | Serif | 15px | 400 | 1.7 | All lesson/article content |
| UI Body | Sans | 14px | 400 | 1.5 | Descriptions, nav items |
| Caption | Sans | 12px | 400 | 1.5 | Figure captions, helper text |
| Label | Sans | 11px | 500 | — | Uppercase tags, metadata |
| Code | Mono | 13px | 400 | 1.6 | Inline and block code |

### Typography rules
- **Never use font-weight 700+** for body or UI. Weight 500 for headings is sufficient. Hierarchy comes from size, not heaviness.
- **Sentence case always.** Never ALLCAPS for body text. Uppercase is reserved for small labels only (`letter-spacing: 0.08em`).
- **Body text minimum 15px.** Don't drop below 13px for any visible UI text.
- **Max line length: 65–72 characters** for lesson content. Wider lines hurt reading fluency.
- **No justified text.** Always left-align body content.

---

## 04 — Spacing Scale

All spacing values must be **multiples of 8px**. No exceptions. This creates visual rhythm and eliminates "pixel pushing."

| Token | Value | Use |
|---|---|---|
| `space-1` | 4px | Tight inline gaps (icon + text, badge padding) |
| `space-2` | 8px | xs — element-internal gaps |
| `space-3` | 12px | sm — stacked form fields |
| `space-4` | 16px | md — card padding, list item gaps |
| `space-6` | 24px | lg — component group separation |
| `space-8` | 32px | xl — major section breaks |
| `space-12` | 48px | 2xl — page-level white space |
| `space-16` | 64px | 3xl — hero and full-bleed areas |

### Border radius
| Token | Value | Use |
|---|---|---|
| `radius-sm` | 4px | Badges, tags, inline chips |
| `radius-md` | 8px | Buttons, inputs, small cards |
| `radius-lg` | 12px | Content cards, panels |
| `radius-xl` | 16px | Modal dialogs, feature cards |
| `radius-full` | 9999px | Pill badges, avatar circles, progress bars |

---

## 05 — Components

### Progress Bar

```html
<!-- Module progress -->
<div class="progress-bar">
  <div class="progress-bar__track">
    <div class="progress-bar__fill" style="width: 40%;"></div>
  </div>
  <div class="progress-bar__labels">
    <span>40% complete</span>
    <span>3 lessons left</span>
  </div>
</div>
```

```css
.progress-bar__track {
  height: 6px;
  background: #F1EFE8;
  border-radius: 9999px;
  overflow: hidden;
}
.progress-bar__fill {
  height: 100%;
  background: #185FA5;  /* use #639922 for completed */
  border-radius: 9999px;
  transition: width 300ms ease-out;
}
.progress-bar__labels {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #888780;
  margin-top: 4px;
}
```

### Badges / Tags

```html
<span class="badge badge--blue">Beginner</span>
<span class="badge badge--green">Completed</span>
<span class="badge badge--amber">In progress</span>
<span class="badge badge--red">Overdue</span>
<span class="badge badge--neutral">8 lessons</span>
```

```css
.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 9999px;
}
.badge--blue   { background: #E6F1FB; color: #185FA5; }
.badge--green  { background: #EAF3DE; color: #3B6D11; }
.badge--amber  { background: #FAEEDA; color: #854F0B; }
.badge--red    { background: #FCEBEB; color: #A32D2D; }
.badge--neutral{ background: #F1EFE8; color: #444441; }
```

### Buttons

```html
<!-- Primary: one per screen maximum -->
<button class="btn btn--primary">Continue learning</button>

<!-- Secondary: supplementary actions -->
<button class="btn btn--secondary">View syllabus</button>

<!-- Ghost: tertiary / destructive -->
<button class="btn btn--ghost">Skip lesson</button>
```

```css
.btn {
  font-size: 14px;
  font-weight: 500;
  padding: 9px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  border: none;
}
.btn--primary {
  background: #185FA5;
  color: #ffffff;
}
.btn--primary:hover { background: #0C447C; }

.btn--secondary {
  background: transparent;
  color: #2C2C2A;
  border: 1px solid #D3D1C7;
}
.btn--secondary:hover { background: #F1EFE8; }

.btn--ghost {
  background: transparent;
  color: #888780;
  border: none;
  padding: 9px 12px;
}
.btn--ghost:hover { color: #2C2C2A; }
```

### Course Card

```html
<div class="course-card">
  <div class="course-card__thumb course-card__thumb--blue">
    <!-- thumbnail image or icon -->
  </div>
  <div class="course-card__body">
    <span class="badge badge--blue">Beginner</span>
    <h3 class="course-card__title">Introduction to Python</h3>
    <p class="course-card__meta">24 lessons · 6 hours</p>
    <div class="progress-bar__track" style="margin-top: 10px;">
      <div class="progress-bar__fill" style="width: 65%;"></div>
    </div>
  </div>
</div>
```

```css
.course-card {
  background: #ffffff;
  border: 1px solid #D3D1C7;
  border-radius: 12px;
  overflow: hidden;
}
.course-card__thumb {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.course-card__thumb--blue   { background: linear-gradient(135deg, #E6F1FB, #B5D4F4); }
.course-card__thumb--green  { background: linear-gradient(135deg, #EAF3DE, #C0DD97); }
.course-card__thumb--amber  { background: linear-gradient(135deg, #FAEEDA, #FAC775); }
.course-card__body {
  padding: 14px 16px;
}
.course-card__title {
  font-size: 15px;
  font-weight: 500;
  margin: 6px 0 2px;
}
.course-card__meta {
  font-size: 12px;
  color: #888780;
}
```

---

## 06 — Code Snippet Display

Code is first-class content on a technical e-learning platform. It must be **readable, copyable, and clearly distinguished** from prose.

### Design rules for code blocks

- **Always use a monospace font** at 13–14px. Never render code in the body serif or sans-serif.
- **Use a dark surface** for multi-line code blocks — dark backgrounds dramatically improve scannability of syntax-highlighted code.
- **Syntax highlight every block** — unhighlighted code forces learners to parse structure manually.
- **Always show the language label** in the top-left corner of the block.
- **Always include a copy button** — learners will run your code. Friction here breaks flow.
- **Line numbers for blocks longer than 8 lines** — essential for "see line 12" references in lesson text.
- **Inline code** (short variable names, function references) uses a light neutral pill, never a full dark block.
- **Never justify or center-align code.** Always left-aligned.
- **Preserve all whitespace and indentation exactly** — indentation is meaning in Python, YAML, and most markup.

### Inline code

For short references within body text:

```html
<p>
  Use the <code class="inline-code">print()</code> function to output values.
</p>
```

```css
.inline-code {
  font-family: 'JetBrains Mono', 'DM Mono', monospace;
  font-size: 12px;
  background: #F1EFE8;
  color: #3B6D11;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid #D3D1C7;
}
```

### Block code (multi-line)

```html
<div class="code-block">
  <div class="code-block__header">
    <span class="code-block__lang">python</span>
    <button class="code-block__copy" onclick="copyCode(this)">Copy</button>
  </div>
  <pre class="code-block__pre"><code class="code-block__code language-python">
def greet(name):
    return f"Hello, {name}!"

print(greet("Ada"))
  </code></pre>
</div>
```

```css
.code-block {
  background: #1e1e2e;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
  border: 1px solid #2e2e3e;
}
.code-block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #16161e;
  border-bottom: 1px solid #2e2e3e;
}
.code-block__lang {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #7c7c9a;
  text-transform: lowercase;
  letter-spacing: 0.04em;
}
.code-block__copy {
  font-size: 11px;
  font-weight: 500;
  background: transparent;
  border: 1px solid #2e2e3e;
  color: #7c7c9a;
  padding: 3px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 150ms;
}
.code-block__copy:hover {
  background: #2e2e3e;
  color: #c0c0d0;
}
.code-block__pre {
  margin: 0;
  padding: 18px 20px;
  overflow-x: auto;
}
.code-block__code {
  font-family: 'JetBrains Mono', 'DM Mono', monospace;
  font-size: 13px;
  line-height: 1.7;
  color: #cdd6f4;
}
```

### Copy button JavaScript

```javascript
function copyCode(btn) {
  const code = btn
    .closest('.code-block')
    .querySelector('.code-block__code')
    .textContent;

  navigator.clipboard.writeText(code.trim()).then(() => {
    btn.textContent = 'Copied!';
    btn.style.color = '#639922';
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.style.color = '';
    }, 2000);
  });
}
```

### Syntax highlighting

Use [Highlight.js](https://highlightjs.org/) or [Prism.js](https://prismjs.com/) — do not roll your own.

```html
<!-- In your <head> -->
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/catppuccin-mocha.min.css">
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js">
</script>
<script>hljs.highlightAll();</script>
```

**Recommended themes:**
- Dark: `catppuccin-mocha`, `github-dark`, `tokyo-night-dark`
- Light (for print/export): `github`, `solarized-light`

### Code block with line numbers (for 8+ line blocks)

```html
<div class="code-block code-block--numbered">
  <div class="code-block__header">
    <span class="code-block__lang">javascript</span>
    <button class="code-block__copy" onclick="copyCode(this)">Copy</button>
  </div>
  <pre class="code-block__pre"><code class="language-javascript">
// Line numbers are added automatically
// by highlight.js when you include the
// line-numbers plugin
  </code></pre>
</div>
```

### Output / terminal blocks

For showing expected output, use a visually distinct "terminal" style:

```html
<div class="output-block">
  <span class="output-block__label">Output</span>
  <pre class="output-block__pre">Hello, Ada!</pre>
</div>
```

```css
.output-block {
  background: #0d1117;
  border-radius: 8px;
  padding: 14px 18px;
  margin: 8px 0 20px;
  border-left: 3px solid #639922;
}
.output-block__label {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #639922;
  display: block;
  margin-bottom: 8px;
}
.output-block__pre {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #c9d1d9;
  margin: 0;
  line-height: 1.6;
}
```

---

## 07 — Motion

### Transition durations

| Context | Duration | Easing |
|---|---|---|
| Hover / focus | 100ms | `ease-in-out` |
| State change (badge, button) | 150ms | `ease-in-out` |
| Panel / drawer slide | 250ms | `ease-out` |
| Page transition | 300ms | `ease-out` |
| Dismiss / collapse | 200ms | `ease-in` |
| Spring (quiz feedback) | 400ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

### Reduced motion

Always wrap non-essential animations:

```css
@media (prefers-reduced-motion: no-preference) {
  .progress-bar__fill {
    transition: width 300ms ease-out;
  }
  .course-card {
    transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;
  }
}
```

---

## 08 — Do's & Don'ts

### Do's ✅

- **Use whitespace liberally** — minimum 48px between major sections. Content needs room to breathe.
- **One primary CTA per screen** — "Continue," "Start quiz," or "Submit." Never two blue buttons competing.
- **Consistent icon sizing** — 16px for UI icons, 24px for illustrative icons. Never mix at the same hierarchy level.
- **State feedback is instant** — correct answer, saved, loading — every action needs a visual response within 100ms.
- **Show file/language type on all code blocks** — always label what language the code is in.
- **Include a copy button on every code block** — reducing friction for learners to try code is critical.

### Don'ts ❌

- **No gradient soup** — colorful gradient backgrounds destroy text legibility and feel unserious.
- **No shadow stacking** — multiple layered drop shadows create a muddy hierarchy. Use borders instead.
- **No font-weight 700+** — weight 500 for headings is sufficient. Hierarchy comes from size, not heaviness.
- **No mystery icons** — if an icon needs a tooltip to be understood, add a visible text label.
- **Never render code in a prose font** — inline code and code blocks must always use a monospace font.
- **Never use a light background for multi-line code blocks** — dark backgrounds dramatically improve syntax readability.
- **No horizontal scrolling on the lesson page** — code blocks that overflow should scroll internally, not the whole page.

---

## 09 — Quick Audit Checklist

Run every screen through these five questions before shipping:

1. **Is the primary action obvious?** One clear button, visually dominant, no competing actions.
2. **Is text contrast ≥ 4.5:1?** Use the [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/).
3. **Is spacing a multiple of 8?** Check padding, margin, and gap values.
4. **Are colors used for meaning, not decoration?** Blue = action, green = success, amber = warning, red = error.
5. **Does the type hierarchy guide the eye?** Display → H1 → H2 → body — each level clearly smaller and lighter.
6. **Are all code blocks monospaced, dark-surfaced, and copyable?** No exceptions.

Fix these six things and 80% of vibe-coded problems disappear.

---

*E-Learning Design Guidelines · v1.0 · Update as the system evolves.*
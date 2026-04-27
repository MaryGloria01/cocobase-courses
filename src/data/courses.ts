// ============================================================================
// COURSE 1: WELCOME TO COCOBASE (🌱 12 steps)
// ============================================================================
export const Course1_Fundamentals = {
  id: "cocobase-fundamentals",
  title: "🌱 Welcome to Cocobase",
  description:
    "What is Backend‑as‑a‑Service? Set up, create your first document, and list data.",
  icon: "🌱",
  color: "#39d353",
  difficulty: "beginner",
  duration: 35,
  steps: [
    {
      id: 1,
      type: "lesson",
      icon: "🥥",
      title: "What is a Backend‑as‑a‑Service?",
      content:
        "<p>Imagine you're building a treehouse. You don't want to cut down the tree, dig the foundation, or install plumbing – you just want to build the cool rooms and slides. That's what Cocobase does for your app.</p><p>Cocobase is a <strong>Backend‑as‑a‑Service (BaaS)</strong>. It gives you:</p><ul><li>🌐 A ready‑to‑use database (NoSQL)</li><li>🔐 User authentication (sign up, log in, social login)</li><li>⚡ Real‑time updates (live chats, notifications)</li><li>☁️ Cloud Functions (serverless code)</li><li>📁 File storage (avatars, images)</li></ul><p>You write only frontend code. Cocobase handles the backend – no servers, no DevOps, no stress.</p>",
      xp: 0,
    },
    {
      id: 2,
      type: "quiz",
      question: "What does BaaS stand for?",
      options: [
        "Build‑and‑apply Service",
        "Backend‑as‑a‑Service",
        "Browser Application Suite",
        "Base API Standard",
      ],
      correct: 1,
      explanation:
        "BaaS = Backend‑as‑a‑Service. It's a cloud service that provides backend functionality (database, auth, etc.) without you writing server code.",
      xp: 10,
    },
    {
      id: 3,
      type: "code_lesson",
      title: "Installing the SDK",
      content:
        "Open your terminal and run this command to add Cocobase to your project.",
      codeSnippet: "npm install cocobase",
      xp: 0,
    },
    {
      id: 4,
      type: "code_lesson",
      title: "Initialising the Client",
      content:
        "First, import Cocobase. Then create a new instance with your API key and project ID (you get these from your Cocobase dashboard after signing up).",
      codeSnippet:
        'import { Cocobase } from "cocobase";\n\nconst db = new Cocobase({\n  apiKey: "your_api_key_here",\n  projectId: "your_project_id_here"   // optional but recommended\n});',
      xp: 0,
    },
    {
      id: 5,
      type: "fill_code",
      question: "Fill in the blank to initialise Cocobase correctly.",
      codeTemplate: [
        "import { Cocobase } from 'cocobase';",
        "",
        "const db = new Cocobase({",
        "  ______: 'your_api_key'",
        "});",
      ],
      blanks: [3],
      blankAnswers: ["apiKey"],
      wordBank: ["apiKey", "API_KEY", "secret", "token", "projectId"],
      explanation:
        "The initialisation object requires an `apiKey` property. `projectId` is optional but good practice.",
      xp: 15,
    },
    {
      id: 6,
      type: "lesson",
      title: "Collections & Documents",
      content:
        "<p>Cocobase is a NoSQL database. Data is organised into <strong>collections</strong> (like folders) and each record is a <strong>document</strong> (a JSON object).</p><p>You don't need to create collections beforehand – the first time you insert a document, Cocobase automatically creates the collection for you. 🎉</p>",
      xp: 0,
    },
    {
      id: 7,
      type: "code_lesson",
      title: "Create Your First Document",
      content:
        "Use `createDocument(collectionName, dataObject)` to add a new document.",
      codeSnippet:
        '// Add a new user to the \'users\' collection\nconst newUser = await db.createDocument("users", {\n  name: "Luna",\n  email: "luna@example.com",\n  points: 100\n});\n\nconsole.log("New document ID:", newUser.id);',
      xp: 0,
    },
    {
      id: 8,
      type: "quiz",
      question: "Which method creates a new document?",
      options: [
        "insertDocument()",
        "addDocument()",
        "createDocument()",
        "newDocument()",
      ],
      correct: 2,
      explanation: "`createDocument(collection, data)` is the correct method.",
      xp: 10,
    },
    {
      id: 9,
      type: "code_lesson",
      title: "List All Documents",
      content:
        "Retrieve all documents from a collection with `listDocuments()`.",
      codeSnippet:
        '// Get all users\nconst allUsers = await db.listDocuments("users");\nconsole.log(`We have ${allUsers.length} users.`);\n\n// You can also add a limit\nconst firstTen = await db.listDocuments("users", { limit: 10 });',
      xp: 0,
    },
    {
      id: 10,
      type: "true_false",
      question: "You must define a collection schema before inserting data.",
      correct: false,
      explanation:
        "False! Cocobase is schemaless – collections are created automatically when you first insert.",
      xp: 10,
    },
    {
      id: 11,
      type: "short_answer",
      question:
        "What method is used to retrieve all documents from a collection?",
      placeholder: "type your answer, e.g., countDocuments",
      correct: "listDocuments",
      caseSensitive: true,
      hint: "db.______('users')",
      explanation:
        "`listDocuments(collection, filters?)` returns an array of documents.",
      xp: 15,
    },
    {
      id: 12,
      type: "reorder",
      question: "Arrange the steps to create and then list documents.",
      items: [
        {
          id: "a",
          text: "Call db.createDocument('posts', { title: 'Hello' })",
        },
        { id: "b", text: "Import Cocobase and initialise with apiKey" },
        { id: "c", text: "Call db.listDocuments('posts') to see the result" },
        { id: "d", text: "Await operations" },
      ],
      correct: ["b", "a", "d", "c"],
      explanation: "First initialise, then create, then await, then list.",
      xp: 15,
    },
  ],
};

// ============================================================================
// COURSE 2: READING & QUERYING DATA (🔍 14 steps)
// ============================================================================
export const Course2_Queries = {
  id: "cocobase-queries",
  title: "🔍 Reading & Querying Data",
  description:
    "Filter, sort, paginate, and use comparison operators to find exactly what you need.",
  icon: "🔍",
  color: "#58a6ff",
  difficulty: "intermediate",
  duration: 45,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "More Than Just `listDocuments`",
      content:
        '<p>The simple `listDocuments()` call returns everything. But real apps need filters: "show me only active users", "products cheaper than $50", "posts published after last week".</p><p>Cocobase uses a powerful query system with operators like `eq`, `ne`, `gt`, `lt`, `gte`, `lte`, `contains`, `in`, and you can also sort and paginate.</p>',
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "Basic Equality Filter",
      content:
        "To filter by exact value, pass an object with the field and value.",
      codeSnippet:
        '// Get only published posts\nconst published = await db.listDocuments("posts", {\n  status: "published"\n});\n\n// Get users with role \'admin\'\nconst admins = await db.listDocuments("users", {\n  role: "admin"\n});',
      xp: 0,
    },
    {
      id: 3,
      type: "quiz",
      question: "What does `{ status: 'published' }` do in `listDocuments`?",
      options: [
        "Returns all documents and adds a status field",
        "Returns only documents where status equals 'published'",
        "Updates the status of all documents",
        "Deletes documents without a status",
      ],
      correct: 1,
      explanation:
        "It filters the results to only those matching the exact field value.",
      xp: 10,
    },
    {
      id: 4,
      type: "code_lesson",
      title: "Comparison Operators (`gt`, `gte`, `lt`, `lte`)",
      content: "Use these inside an object to compare numbers or dates.",
      codeSnippet:
        '// Products with price greater than 100\nconst expensive = await db.listDocuments("products", {\n  price: { gt: 100 }\n});\n\n// Users registered after Jan 1, 2025\nconst newUsers = await db.listDocuments("users", {\n  createdAt: { gt: "2025-01-01T00:00:00Z" }\n});\n\n// Items with stock less than or equal to 5\nconst lowStock = await db.listDocuments("inventory", {\n  stock: { lte: 5 }\n});',
      xp: 0,
    },
    {
      id: 5,
      type: "fill_code",
      question: "Fill the blank to find users with age greater than 18.",
      codeTemplate: [
        "const adults = await db.listDocuments('users', {",
        "  age: { ______: 18 }",
        "});",
      ],
      blanks: [1],
      blankAnswers: ["gt"],
      wordBank: ["gt", "lt", "gte", "lte", "eq"],
      explanation:
        "`gt` means 'greater than'. Use `gte` for greater than or equal.",
      xp: 15,
    },
    {
      id: 6,
      type: "code_lesson",
      title: "String Matching: `contains`",
      content: "Find documents where a string field contains a substring.",
      codeSnippet:
        '// Find users with \'gmail\' in their email\nconst gmailUsers = await db.listDocuments("users", {\n  email: { contains: "gmail.com" }\n});\n\n// Find posts with \'cocobase\' in the title\nconst cocoPosts = await db.listDocuments("posts", {\n  title: { contains: "cocobase" }\n});',
      xp: 0,
    },
    {
      id: 7,
      type: "code_lesson",
      title: "Array Operators: `in`",
      content: "Check if a field's value is inside a list.",
      codeSnippet:
        '// Users with roles \'admin\' or \'moderator\'\nconst privileged = await db.listDocuments("users", {\n  role: { in: ["admin", "moderator"] }\n});\n\n// Products with specific IDs\nconst selected = await db.listDocuments("products", {\n  id: { in: ["prod_1", "prod_2", "prod_3"] }\n});',
      xp: 0,
    },
    {
      id: 8,
      type: "match",
      question: "Match each operator to its meaning.",
      pairs: [
        { term: "gt", def: "Greater than" },
        { term: "gte", def: "Greater than or equal" },
        { term: "lt", def: "Less than" },
        { term: "contains", def: "Substring match" },
        { term: "in", def: "Value in an array" },
      ],
      explanation: "These operators let you build powerful queries.",
      xp: 15,
    },
    {
      id: 9,
      type: "code_lesson",
      title: "Sorting Results",
      content: "Use the `sort` property to order documents.",
      codeSnippet:
        '// Newest first (descending)\nconst recentPosts = await db.listDocuments("posts", {\n  sort: { field: "createdAt", order: "desc" }\n});\n\n// Cheapest first\nconst cheapest = await db.listDocuments("products", {\n  sort: { field: "price", order: "asc" }\n});',
      xp: 0,
    },
    {
      id: 10,
      type: "code_lesson",
      title: "Pagination with `limit` and `offset`",
      content: "Break large result sets into pages.",
      codeSnippet:
        '// First page: 10 items\nconst page1 = await db.listDocuments("posts", {\n  limit: 10,\n  offset: 0\n});\n\n// Second page: next 10 items (skip first 10)\nconst page2 = await db.listDocuments("posts", {\n  limit: 10,\n  offset: 10\n});',
      xp: 0,
    },
    {
      id: 11,
      type: "short_answer",
      question:
        "Which property do you use to skip a certain number of documents?",
      placeholder: "e.g., offset",
      correct: "offset",
      caseSensitive: true,
      hint: "{ limit: 10, ______: 10 }",
      explanation: "`offset` tells how many documents to skip from the start.",
      xp: 15,
    },
    {
      id: 12,
      type: "code_lesson",
      title: "Combining Filters (AND)",
      content:
        "Add multiple fields to the filter object – they are combined with logical AND.",
      codeSnippet:
        '// Products with price > 100 AND category = \'electronics\'\nconst electronics = await db.listDocuments("products", {\n  price: { gt: 100 },\n  category: "electronics"\n});',
      xp: 0,
    },
    {
      id: 13,
      type: "true_false",
      question: "You can use `gt` and `contains` in the same filter object.",
      correct: true,
      explanation:
        "Yes! All operators can be mixed. Example: `{ age: { gt: 18 }, name: { contains: 'John' } }`",
      xp: 10,
    },
    {
      id: 14,
      type: "reorder",
      question:
        "Arrange the steps to build a query that filters, sorts, and paginates.",
      items: [
        { id: "a", text: "Add pagination: limit and offset" },
        { id: "b", text: "Start with db.listDocuments('posts', { ... })" },
        { id: "c", text: "Add filter: { status: 'published' }" },
        { id: "d", text: "Add sort: { field: 'date', order: 'desc' }" },
      ],
      correct: ["b", "c", "d", "a"],
      explanation:
        "First the base call, then filters, then sort, then pagination.",
      xp: 15,
    },
  ],
};

// ============================================================================
// COURSE 3: AUTHENTICATION (🔐 13 steps)
// ============================================================================
export const Course3_Auth = {
  id: "cocobase-auth",
  title: "🔐 User Authentication",
  description:
    "Register, login, logout, social login, user profiles, and role checks.",
  icon: "🔐",
  color: "#e3b341",
  difficulty: "intermediate",
  duration: 50,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Why Authentication Matters",
      content:
        "<p>Almost every app needs users – signing up, logging in, remembering who's who. Cocobase gives you a complete auth system out of the box.</p><p>You get:</p><ul><li>Email/password registration & login</li><li>Social login with Google and GitHub</li><li>Session management (tokens stored automatically)</li><li>User profiles with custom data</li><li>Role checks (admin, moderator, etc.)</li></ul>",
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "Register a New User",
      content:
        "Use `db.auth.register()` – it also logs the user in automatically.",
      codeSnippet:
        'const { user, session } = await db.auth.register({\n  email: "alex@example.com",\n  password: "securePass123",\n  data: {\n    fullName: "Alex Johnson",\n    plan: "free"\n  }\n});\n\nconsole.log(`Welcome, ${user.email}!`);\nconsole.log("Session token:", session.token);',
      xp: 0,
    },
    {
      id: 3,
      type: "quiz",
      question: "What does `db.auth.register()` return?",
      options: [
        "Only the user object",
        "Only a session token",
        "Both a user object and a session object",
        "Nothing – it just sends an email",
      ],
      correct: 2,
      explanation:
        "It returns `{ user, session }`. The session contains a token you can store for authenticated requests.",
      xp: 10,
    },
    {
      id: 4,
      type: "code_lesson",
      title: "Login",
      content: "Sign in an existing user.",
      codeSnippet:
        'const { session } = await db.auth.login({\n  email: "alex@example.com",\n  password: "securePass123"\n});\n\n// Store the token (e.g., in localStorage)\nlocalStorage.setItem("cocobase_token", session.token);',
      xp: 0,
    },
    {
      id: 5,
      type: "true_false",
      question:
        "After login, you must manually store the session token to persist it.",
      correct: true,
      explanation:
        "Yes – Cocobase returns the token, but you need to store it (localStorage, cookies) to use it on page reloads.",
      xp: 10,
    },
    {
      id: 6,
      type: "code_lesson",
      title: "Get Current User",
      content: "Retrieve the logged‑in user's profile.",
      codeSnippet:
        'const currentUser = await db.auth.getCurrentUser();\n\nif (currentUser) {\n  console.log("Logged in as:", currentUser.email);\n  console.log("Custom data:", currentUser.data);\n} else {\n  console.log("No user logged in");\n}',
      xp: 0,
    },
    {
      id: 7,
      type: "short_answer",
      question: "Which method returns the currently logged‑in user?",
      placeholder: "e.g., getCurrentUser",
      correct: "getCurrentUser",
      caseSensitive: true,
      hint: "db.auth.______()",
      explanation: "`getCurrentUser()` returns the user object or null.",
      xp: 15,
    },
    {
      id: 8,
      type: "code_lesson",
      title: "Update User Profile",
      content: "Change a user's data after login.",
      codeSnippet:
        'const updatedUser = await db.auth.updateUser({\n  data: {\n    fullName: "Alex M. Johnson",\n    plan: "premium"\n  }\n});\n\nconsole.log("New name:", updatedUser.data.fullName);',
      xp: 0,
    },
    {
      id: 9,
      type: "code_lesson",
      title: "Logout",
      content: "End the session and clear local storage.",
      codeSnippet:
        'await db.auth.logout();\nlocalStorage.removeItem("cocobase_token");\nconsole.log("User logged out");',
      xp: 0,
    },
    {
      id: 10,
      type: "code_lesson",
      title: "Social Login – Google & GitHub",
      content: "Redirect users to OAuth providers. Cocobase handles the rest.",
      codeSnippet:
        "// Google login\nawait db.auth.loginWithGoogle();\n\n// GitHub login\nawait db.auth.loginWithGithub();\n\n// After redirect, the user is automatically authenticated.\n// You can then call getCurrentUser() to get their profile.",
      xp: 0,
    },
    {
      id: 11,
      type: "quiz",
      question: "Which of these social logins does Cocobase support?",
      options: [
        "Facebook and Twitter",
        "Google and GitHub",
        "Apple and Microsoft",
        "Only email",
      ],
      correct: 1,
      explanation:
        "Cocobase offers `loginWithGoogle()` and `loginWithGithub()` methods.",
      xp: 10,
    },
    {
      id: 12,
      type: "code_lesson",
      title: "Check User Roles",
      content:
        "Use `hasRole()` to see if the current user has a specific role.",
      codeSnippet:
        'const isAdmin = await db.auth.hasRole("admin");\nif (isAdmin) {\n  console.log("Show admin panel");\n} else {\n  console.log("Regular user view");\n}',
      xp: 0,
    },
    {
      id: 13,
      type: "match",
      question: "Match each auth method to its purpose.",
      pairs: [
        { term: "register()", def: "Create new user account" },
        { term: "loginWithGoogle()", def: "Sign in via Google" },
        { term: "getCurrentUser()", def: "Get logged‑in user" },
        { term: "logout()", def: "End session" },
        { term: "hasRole()", def: "Check if user has a role" },
      ],
      explanation: "These cover the main authentication flows.",
      xp: 15,
    },
  ],
};

// ============================================================================
// COURSE 4: REAL‑TIME FEATURES (⚡ 12 steps)
// ============================================================================
export const Course4_Realtime = {
  id: "cocobase-realtime",
  title: "⚡ Real‑time Features",
  description:
    "Live data syncing, chat rooms, broadcasts, and even multiplayer games.",
  icon: "⚡",
  color: "#39d353",
  difficulty: "advanced",
  duration: 55,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "What is Real‑time?",
      content:
        "<p>Normal apps refresh data only when you ask. Real‑time apps update instantly when something changes – like a chat message appearing, a live scoreboard, or a friend typing.</p><p>Cocobase provides four real‑time clients under `db.realtime`:</p><ul><li><strong>collection</strong> – watch a collection for create/update/delete events</li><li><strong>room</strong> – chat rooms with messages and typing indicators</li><li><strong>broadcast</strong> – send one‑to‑many notifications</li><li><strong>game</strong> – multiplayer WebSocket game client</li></ul>",
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "Watching a Collection",
      content: "Use `db.realtime.collection()` to listen for changes.",
      codeSnippet:
        'const watcher = db.realtime.collection("messages");\n\nwatcher.on("create", (doc) => {\n  console.log("New message:", doc);\n});\n\nwatcher.on("update", (doc) => {\n  console.log("Message updated:", doc);\n});\n\nwatcher.on("delete", (id) => {\n  console.log("Message deleted:", id);\n});\n\n// Start listening\nwatcher.subscribe();',
      xp: 0,
    },
    {
      id: 3,
      type: "quiz",
      question: "Which event is triggered when a new document is inserted?",
      options: ["insert", "create", "add", "new"],
      correct: 1,
      explanation: "The `'create'` event fires on document creation.",
      xp: 10,
    },
    {
      id: 4,
      type: "code_lesson",
      title: "Room Chat",
      content: "Create a named room where users can exchange messages.",
      codeSnippet:
        'const chatRoom = db.realtime.room("general");\n\n// Join the room\nawait chatRoom.join();\n\n// Listen for messages\nchatRoom.on("message", (msg) => {\n  console.log(`${msg.user}: ${msg.text}`);\n});\n\n// Send a message\nawait chatRoom.send("Hello everyone!");\n\n// Leave when done\nawait chatRoom.leave();',
      xp: 0,
    },
    {
      id: 5,
      type: "true_false",
      question: "A room chat can have typing indicators.",
      correct: true,
      explanation:
        "Yes – rooms support events like `typing`, `stopTyping`, etc.",
      xp: 10,
    },
    {
      id: 6,
      type: "code_lesson",
      title: "Project Broadcasts",
      content: "Send a message to every connected user in the project.",
      codeSnippet:
        'const broadcaster = db.realtime.broadcast();\n\n// Listen for broadcasts\nbroadcaster.on("announcement", (payload) => {\n  showNotification(payload.text);\n});\n\n// Send a broadcast (e.g., admin panel)\nawait broadcaster.send("announcement", {\n  text: "Server maintenance in 5 minutes"\n});',
      xp: 0,
    },
    {
      id: 7,
      type: "short_answer",
      question:
        "Which real‑time client would you use for a global announcement?",
      placeholder: "e.g., broadcast",
      correct: "broadcast",
      caseSensitive: true,
      hint: "db.realtime.______()",
      explanation: "`broadcast()` sends messages to all users in the project.",
      xp: 15,
    },
    {
      id: 8,
      type: "code_lesson",
      title: "Multiplayer Game Client",
      content: "Build a WebSocket game with rooms, player states, and moves.",
      codeSnippet:
        'const game = db.realtime.game("pong_room");\n\ngame.on("playerJoined", (player) => {\n  console.log(`${player.name} joined`);\n});\n\ngame.on("move", (data) => {\n  updateGameState(data);\n});\n\n// Join as a player\nawait game.join({ name: "Alice", score: 0 });\n\n// Send a move\nawait game.send("move", { dx: 10, dy: 5 });',
      xp: 0,
    },
    {
      id: 9,
      type: "match",
      question: "Match each real‑time client to its primary use.",
      pairs: [
        { term: "collection", def: "Watch for database changes" },
        { term: "room", def: "Chat with messages" },
        { term: "broadcast", def: "Send one‑to‑many alerts" },
        { term: "game", def: "Multiplayer WebSocket game" },
      ],
      explanation: "Choose the right tool for the job.",
      xp: 15,
    },
    {
      id: 10,
      type: "code_lesson",
      title: "Stopping Real‑time Listeners",
      content: "Always unsubscribe to avoid memory leaks.",
      codeSnippet:
        "// For collection watcher\nwatcher.unsubscribe();\n\n// For room\nawait chatRoom.leave();\n\n// For broadcast\nbroadcaster.off(); // remove all listeners\n\n// For game\nawait game.leave();",
      xp: 0,
    },
    {
      id: 11,
      type: "fill_code",
      question: "Fill the blank to create a collection watcher.",
      codeTemplate: [
        "const watcher = db.realtime.",
        "('posts');",
        "watcher.on('create', (doc) => console.log(doc));",
        "watcher.______(); // start listening",
      ],
      blanks: [0, 3],
      blankAnswers: ["collection", "subscribe"],
      wordBank: ["collection", "watch", "subscribe", "listen", "start"],
      explanation: "First call `collection()`, then `subscribe()` to start.",
      xp: 15,
    },
    {
      id: 12,
      type: "reorder",
      question: "Order the steps to set up a live chat room.",
      items: [
        { id: "a", text: "Call chatRoom.send('Hi')" },
        {
          id: "b",
          text: "Create room: const chatRoom = db.realtime.room('lobby')",
        },
        { id: "c", text: "Add listener: chatRoom.on('message', callback)" },
        { id: "d", text: "Join room: await chatRoom.join()" },
      ],
      correct: ["b", "c", "d", "a"],
      explanation: "Create → add listener → join → send messages.",
      xp: 15,
    },
  ],
};

// ============================================================================
// COURSE 5: CLOUD FUNCTIONS (☁️ 10 steps)
// ============================================================================
export const Course5_Functions = {
  id: "cocobase-functions",
  title: "☁️ Cloud Functions",
  description:
    "Write serverless code that runs on Cocobase – perfect for secrets, APIs, and heavy logic.",
  icon: "☁️",
  color: "#58a6ff",
  difficulty: "advanced",
  duration: 40,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Why Cloud Functions?",
      content:
        "<p>Some things you cannot (or should not) do on the client:</p><ul><li>Use secret API keys (e.g., Stripe, SendGrid)</li><li>Perform heavy calculations</li><li>Combine data from multiple sources</li><li>Run scheduled tasks (cron jobs)</li></ul><p>Cloud Functions let you write JavaScript/TypeScript functions that run on Cocobase servers. You call them from your app with `db.functions.execute()`.</p>",
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "Creating a Function (on Cocobase Dashboard)",
      content:
        "In your project dashboard, create a new function. You'll write code like this:",
      codeSnippet:
        '// Example: sendWelcomeEmail.js\nexport default async (req, res, { db, auth }) => {\n  const { email, name } = req.body;\n\n  // Use a secret API key (stored in environment variables)\n  const apiKey = process.env.SENDGRID_API_KEY;\n\n  // Call email service (pseudo code)\n  await emailService.send({\n    to: email,\n    subject: "Welcome!",\n    html: `<h1>Hello ${name}</h1>`\n  });\n\n  // Log to database\n  await db.createDocument("email_logs", {\n    to: email,\n    sentAt: new Date()\n  });\n\n  res.status(200).json({ success: true });\n};',
      xp: 0,
    },
    {
      id: 3,
      type: "quiz",
      question: "What parameters are passed to a Cocobase cloud function?",
      options: [
        "(req, res)",
        "(req, res, { db, auth })",
        "(event, context)",
        "(payload, callback)",
      ],
      correct: 1,
      explanation:
        "The function receives `req`, `res`, and a context object with `db` and `auth`.",
      xp: 10,
    },
    {
      id: 4,
      type: "code_lesson",
      title: "Calling a Function from Client",
      content: "Use `db.functions.execute(functionName, payload)`.",
      codeSnippet:
        'const result = await db.functions.execute("sendWelcomeEmail", {\n  email: "newuser@example.com",\n  name: "New User"\n});\n\nif (result.success) {\n  console.log("Email sent!");\n}',
      xp: 0,
    },
    {
      id: 5,
      type: "fill_code",
      question:
        "Fill the blank to call a cloud function named 'processPayment'.",
      codeTemplate: [
        "const response = await db.functions.",
        "('processPayment', { orderId: '123' });",
      ],
      blanks: [0],
      blankAnswers: ["execute"],
      wordBank: ["execute", "call", "run", "invoke"],
      explanation: "The method is `execute(functionName, payload)`.",
      xp: 15,
    },
    {
      id: 6,
      type: "code_lesson",
      title: "Accessing Database Inside a Function",
      content: "The `db` parameter works exactly like the client SDK.",
      codeSnippet:
        'export default async (req, res, { db }) => {\n  const orders = await db.listDocuments("orders", {\n    status: "pending"\n  });\n\n  // Process each order...\n  for (const order of orders) {\n    await db.updateDocument("orders", order.id, { status: "processed" });\n  }\n\n  res.json({ processed: orders.length });\n};',
      xp: 0,
    },
    {
      id: 7,
      type: "true_false",
      question:
        "Cloud functions can be triggered automatically by database events.",
      correct: false,
      explanation:
        "The current SDK doesn't mention automatic triggers. You must call them manually with `execute()`.",
      xp: 10,
    },
    {
      id: 8,
      type: "code_lesson",
      title: "Authentication Inside Functions",
      content: "You can get the current user who made the request.",
      codeSnippet:
        'export default async (req, res, { auth }) => {\n  const user = await auth.getCurrentUser();\n\n  if (!user || !user.data.isAdmin) {\n    return res.status(403).json({ error: "Forbidden" });\n  }\n\n  // Only admins can run this\n  res.json({ secretData: "Only for admins" });\n};',
      xp: 0,
    },
    {
      id: 9,
      type: "short_answer",
      question:
        "What method do you use to invoke a cloud function from the client?",
      placeholder: "e.g., execute",
      correct: "execute",
      caseSensitive: true,
      hint: "db.functions.______('name', payload)",
      explanation: "`db.functions.execute()` is the correct method.",
      xp: 15,
    },
    {
      id: 10,
      type: "reorder",
      question:
        "Arrange the steps to use a cloud function for sending a welcome email.",
      items: [
        {
          id: "a",
          text: "Call db.functions.execute('sendWelcomeEmail', { email }) from your app",
        },
        { id: "b", text: "Write the function code in Cocobase dashboard" },
        { id: "c", text: "Deploy the function" },
        { id: "d", text: "Test the function with a sample call" },
      ],
      correct: ["b", "c", "d", "a"],
      explanation: "Create → deploy → test → integrate into app.",
      xp: 15,
    },
  ],
};

// ============================================================================
// COURSE 6: FILES & BATCH OPERATIONS (📁 11 steps)
// ============================================================================
export const Course6_FilesBatch = {
  id: "cocobase-files-batch",
  title: "📁 Files & Batch Operations",
  description:
    "Upload images, create multiple documents at once, and update in bulk.",
  icon: "📁",
  color: "#e3b341",
  difficulty: "advanced",
  duration: 40,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Beyond Simple Documents",
      content:
        "<p>Real apps need file uploads (avatars, PDFs, photos) and efficient bulk operations. Cocobase gives you:</p><ul><li><strong>File uploads</strong> – directly to the server with automatic storage</li><li><strong>Batch create/update/delete</strong> – do many operations in one network call</li></ul>",
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "Uploading a Single File",
      content:
        "Use `uploadFile(file, path?)` to store a file. It returns a URL.",
      codeSnippet:
        'const fileInput = document.querySelector(\'input[type="file"]\');\nconst file = fileInput.files[0];\n\nconst result = await db.files.uploadFile(file, "avatars");\nconsole.log("File URL:", result.url);\n\n// Later, store the URL in a document\nawait db.createDocument("users", {\n  name: "Alice",\n  avatarUrl: result.url\n});',
      xp: 0,
    },
    {
      id: 3,
      type: "code_lesson",
      title: "Create Document with Files Attached",
      content:
        "Use `createDocumentWithFiles()` to upload files and create a document in one go.",
      codeSnippet:
        'const file = document.querySelector(\'#avatar\').files[0];\n\nconst newUser = await db.createDocumentWithFiles("users", {\n  name: "Bob",\n  email: "bob@example.com"\n}, {\n  avatar: file   // field name "avatar" maps to the file\n});\n\nconsole.log("User created with avatar URL:", newUser.avatar);',
      xp: 0,
    },
    {
      id: 4,
      type: "quiz",
      question: "What does `createDocumentWithFiles()` return?",
      options: [
        "Only the file URL",
        "The created document with file URLs already embedded",
        "Nothing – you must fetch separately",
        "A promise that resolves to the file ID",
      ],
      correct: 1,
      explanation:
        "It returns the full document object, and file fields are replaced with their accessible URLs.",
      xp: 10,
    },
    {
      id: 5,
      type: "code_lesson",
      title: "Batch Create Multiple Documents",
      content: "Insert several documents at once with `createDocuments()`.",
      codeSnippet:
        'const newProducts = await db.batch.createDocuments("products", [\n  { name: "Laptop", price: 999 },\n  { name: "Mouse", price: 29 },\n  { name: "Keyboard", price: 79 }\n]);\n\nconsole.log(`Created ${newProducts.length} products`);',
      xp: 0,
    },
    {
      id: 6,
      type: "code_lesson",
      title: "Batch Update Documents",
      content: "Update multiple documents in a single call.",
      codeSnippet:
        'await db.batch.updateDocuments("products", [\n  { id: "prod_1", data: { price: 899 } },\n  { id: "prod_2", data: { inStock: false } }\n]);',
      xp: 0,
    },
    {
      id: 7,
      type: "fill_code",
      question: "Fill the blank to batch delete documents by their IDs.",
      codeTemplate: [
        "await db.batch.",
        "('products', [",
        "  { id: 'prod_1' },",
        "  { id: 'prod_2' }",
        "]);",
      ],
      blanks: [0],
      blankAnswers: ["deleteDocuments"],
      wordBank: ["deleteDocuments", "removeDocuments", "delete", "batchDelete"],
      explanation:
        "`batch.deleteDocuments(collection, arrayOfIdObjects)` deletes multiple documents.",
      xp: 15,
    },
    {
      id: 8,
      type: "code_lesson",
      title: "Mix Operations in a Single Batch",
      content:
        "You can combine different types of operations (create, update, delete) in one atomic batch.",
      codeSnippet:
        'const batch = db.batch.begin();\n\nbatch.create("posts", { title: "First post" });\nbatch.update("posts", "post_1", { views: 100 });\nbatch.delete("posts", "post_2");\n\nawait batch.commit();\n\n// All succeed or none do (transaction)',
      xp: 0,
    },
    {
      id: 9,
      type: "true_false",
      question: "Batch operations reduce the number of network requests.",
      correct: true,
      explanation:
        "Yes – instead of many individual `createDocument` calls, you send one batch request.",
      xp: 10,
    },
    {
      id: 10,
      type: "match",
      question: "Match each batch method to its purpose.",
      pairs: [
        { term: "createDocuments", def: "Insert multiple new documents" },
        { term: "updateDocuments", def: "Modify existing documents" },
        { term: "deleteDocuments", def: "Remove documents by ID" },
        { term: "commit", def: "Execute a batched group of operations" },
      ],
      explanation: "Batching is a performance booster.",
      xp: 15,
    },
    {
      id: 11,
      type: "short_answer",
      question:
        "What method starts a batch transaction to combine multiple operations?",
      placeholder: "e.g., begin",
      correct: "begin",
      caseSensitive: true,
      hint: "const batch = db.batch.______()",
      explanation:
        "`db.batch.begin()` returns a batch object that you can use to add operations, then call `commit()`.",
      xp: 15,
    },
  ],
};

// ============================================================================
// COURSE 7: ADVANCED QUERY BUILDING (🔧 10 steps)
// ============================================================================
export const Course7_QueryBuilder = {
  id: "cocobase-query-builder",
  title: "🔧 Advanced Query Builder",
  description:
    "Use the `Query` interface for complex filters, multiple conditions, and field selection.",
  icon: "🔧",
  color: "#58a6ff",
  difficulty: "advanced",
  duration: 45,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "When `listDocuments` Isn't Enough",
      content:
        "<p>For complex queries (nested `OR` groups, custom field selection, combining many conditions), Cocobase offers a <strong>Query builder</strong> pattern.</p><p>Instead of a plain object, you use a `queryBuilder` function that receives a `Query` object with methods like `where()`, `orWhere()`, `select()`, `orderBy()`, `limit()`, `offset()`.</p>",
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "Basic Query Builder",
      content: "Use the `queryBuilder` parameter in `listDocuments`.",
      codeSnippet:
        'const results = await db.listDocuments("products", {\n  queryBuilder: (qb) => qb\n    .where("price", "gt", 100)\n    .where("category", "eq", "electronics")\n    .orderBy("price", "desc")\n    .limit(20)\n});',
      xp: 0,
    },
    {
      id: 3,
      type: "quiz",
      question:
        "What is the second parameter passed to the `queryBuilder` function?",
      options: ["filters", "qb (query builder object)", "sort", "aggregate"],
      correct: 1,
      explanation:
        "It's a `Query` object that provides methods like `.where()`, `.orWhere()`, etc.",
      xp: 10,
    },
    {
      id: 4,
      type: "code_lesson",
      title: "Logical OR with `orWhere`",
      content: "Combine conditions with OR using `orWhere()`.",
      codeSnippet:
        'const items = await db.listDocuments("products", {\n  queryBuilder: (qb) => qb\n    .where("price", "lt", 20)\n    .orWhere("stock", "eq", 0)\n    .orWhere("category", "eq", "clearance")\n});',
      xp: 0,
    },
    {
      id: 5,
      type: "fill_code",
      question:
        "Fill the blank to add an OR condition for `status` being 'archived'.",
      codeTemplate: [
        "const results = await db.listDocuments('posts', {",
        "  queryBuilder: (qb) => qb",
        "    .where('published', 'eq', true)",
        "    .______('status', 'eq', 'archived')",
        "});",
      ],
      blanks: [2],
      blankAnswers: ["orWhere"],
      wordBank: ["orWhere", "or", "whereOr", "orWhereCondition"],
      explanation: "`orWhere()` adds an OR condition to the query.",
      xp: 15,
    },
    {
      id: 6,
      type: "code_lesson",
      title: "Select Specific Fields",
      content:
        "Use `select()` to limit which fields are returned – reduces data transfer.",
      codeSnippet:
        '// Only get name and price, not the full document\nconst titles = await db.listDocuments("products", {\n  queryBuilder: (qb) => qb\n    .select(["name", "price"])\n    .where("price", "gt", 50)\n});',
      xp: 0,
    },
    {
      id: 7,
      type: "code_lesson",
      title: "Complex Nested Conditions",
      content: "You can nest `and`/`or` groups for advanced logic.",
      codeSnippet:
        'const results = await db.listDocuments("users", {\n  queryBuilder: (qb) => qb\n    .where("age", "gte", 18)\n    .andWhere((subQb) => subQb\n      .where("plan", "eq", "premium")\n      .orWhere("points", "gte", 1000)\n    )\n});',
      xp: 0,
    },
    {
      id: 8,
      type: "short_answer",
      question:
        "What method would you use to return only the 'name' and 'email' fields?",
      placeholder: "e.g., select",
      correct: "select",
      caseSensitive: true,
      hint: "qb.______(['name', 'email'])",
      explanation: "`select()` restricts the fields returned by the query.",
      xp: 15,
    },
    {
      id: 9,
      type: "true_false",
      question: "The query builder can be used for `countDocuments` as well.",
      correct: false,
      explanation:
        "`countDocuments` usually uses a simple filter object, but you can also pass a queryBuilder for complex counting (check docs).",
      xp: 10,
    },
    {
      id: 10,
      type: "reorder",
      question:
        "Order the steps to build a query with OR conditions, sorting, and field selection.",
      items: [
        { id: "a", text: ".where('price', 'gt', 100)" },
        { id: "b", text: ".select(['name', 'price'])" },
        { id: "c", text: ".orWhere('category', 'eq', 'refurbished')" },
        { id: "d", text: ".orderBy('price', 'desc')" },
        { id: "e", text: "qb => qb" },
      ],
      correct: ["e", "a", "c", "d", "b"],
      explanation: "Start with qb, add filters, then sort, then select fields.",
      xp: 15,
    },
  ],
};

// ============================================================================
// COURSE 8: BUILD A COMPLETE APP (🚀 12 steps)
// ============================================================================
export const Course8_FinalProject = {
  id: "cocobase-final-project",
  title: "🚀 Build a Complete App",
  description:
    "Combine everything: auth, real‑time, files, and cloud functions in a mini social platform.",
  icon: "🚀",
  color: "#39d353",
  difficulty: "advanced",
  duration: 60,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Project: Social Feed",
      content:
        "<p>We'll build a tiny social network where users can:</p><ul><li>Sign up / log in (with avatar upload)</li><li>Post text messages to a public feed</li><li>See new posts appear in real‑time</li><li>Like posts (batch update to increment likes)</li><li>Admins can delete any post (using a cloud function)</li></ul><p>This project uses almost everything we've learned.</p>",
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "Setup & Auth",
      content: "Initialise Cocobase and add auth helpers.",
      codeSnippet:
        'import { Cocobase } from "cocobase";\n\nconst db = new Cocobase({\n  apiKey: process.env.COCOBASE_KEY,\n  projectId: "my-social-app"\n});\n\n// Auth helpers\nasync function register(email, password, name, avatarFile) {\n  const { user, session } = await db.auth.register({\n    email, password,\n    data: { name }\n  });\n  if (avatarFile) {\n    const avatarUrl = await db.files.uploadFile(avatarFile, `avatars/${user.id}`);\n    await db.auth.updateUser({ data: { avatarUrl } });\n  }\n  localStorage.setItem("token", session.token);\n  return user;\n}\n\nasync function login(email, password) {\n  const { session } = await db.auth.login({ email, password });\n  localStorage.setItem("token", session.token);\n}\n\nasync function logout() {\n  await db.auth.logout();\n  localStorage.removeItem("token");\n}',
      xp: 0,
    },
    {
      id: 3,
      type: "code_lesson",
      title: "Posting a Message",
      content: "Create a document in the 'posts' collection.",
      codeSnippet:
        'async function createPost(text) {\n  const user = await db.auth.getCurrentUser();\n  if (!user) throw new Error("Not logged in");\n\n  const post = await db.createDocument("posts", {\n    text,\n    authorId: user.id,\n    authorName: user.data.name,\n    likes: 0,\n    createdAt: new Date().toISOString()\n  });\n  return post;\n}',
      xp: 0,
    },
    {
      id: 4,
      type: "code_lesson",
      title: "Real‑time Feed",
      content:
        "Use a collection watcher to update the UI when new posts arrive.",
      codeSnippet:
        'function subscribeToFeed(onNewPost) {\n  const watcher = db.realtime.collection("posts");\n  watcher.on("create", (post) => {\n    onNewPost(post);\n  });\n  watcher.subscribe();\n  return () => watcher.unsubscribe(); // cleanup\n}',
      xp: 0,
    },
    {
      id: 5,
      type: "code_lesson",
      title: "Liking a Post (Batch Update)",
      content:
        "Increment the likes count using a batch update to avoid race conditions.",
      codeSnippet:
        'async function likePost(postId, currentLikes) {\n  await db.batch.updateDocuments("posts", [{\n    id: postId,\n    data: { likes: currentLikes + 1 }\n  }]);\n}',
      xp: 0,
    },
    {
      id: 6,
      type: "code_lesson",
      title: "Cloud Function: Delete Post with Admin Check",
      content:
        "Server‑side function that verifies the user is admin before deleting.",
      codeSnippet:
        '// functions/deletePost.js\nexport default async (req, res, { db, auth }) => {\n  const { postId } = req.body;\n  const user = await auth.getCurrentUser();\n\n  if (!user || !user.data.isAdmin) {\n    return res.status(403).json({ error: "Admin only" });\n  }\n\n  await db.deleteDocument("posts", postId);\n  res.json({ success: true });\n};',
      xp: 0,
    },
    {
      id: 7,
      type: "quiz",
      question:
        "Why use a cloud function to delete posts instead of client‑side `deleteDocument`?",
      options: [
        "It's faster",
        "It allows server‑side admin verification that cannot be bypassed",
        "Client‑side delete doesn't exist",
        "Cloud functions are cheaper",
      ],
      correct: 1,
      explanation:
        "Admin checks must happen on the server – a client could fake the request otherwise.",
      xp: 10,
    },
    {
      id: 8,
      type: "code_lesson",
      title: "Calling the Admin Delete Function",
      content: "From the client, call `db.functions.execute`.",
      codeSnippet:
        'async function adminDeletePost(postId) {\n  const result = await db.functions.execute("deletePost", { postId });\n  if (result.success) {\n    console.log("Post deleted");\n  }\n}',
      xp: 0,
    },
    {
      id: 9,
      type: "fill_code",
      question: "Fill the blank to call a cloud function named 'deletePost'.",
      codeTemplate: [
        "const result = await db.functions.",
        "('deletePost', { postId });",
      ],
      blanks: [0],
      blankAnswers: ["execute"],
      wordBank: ["execute", "call", "run"],
      explanation: "`db.functions.execute()` is the correct method.",
      xp: 15,
    },
    {
      id: 10,
      type: "true_false",
      question:
        "The real‑time collection watcher automatically includes posts created by other users.",
      correct: true,
      explanation:
        "Yes – the watcher listens to all changes to the collection, regardless of who created them.",
      xp: 10,
    },
    {
      id: 11,
      type: "short_answer",
      question:
        "What method would you use to upload a profile picture and store its URL in the user's data?",
      placeholder: "e.g., uploadFile",
      correct: "uploadFile",
      caseSensitive: true,
      hint: "db.files.______(file, path)",
      explanation:
        "`uploadFile` uploads the file and returns a URL. Then you update the user's document with that URL.",
      xp: 15,
    },
    {
      id: 12,
      type: "reorder",
      question:
        "Order the steps to implement the full social feed flow (from login to real‑time update).",
      items: [
        {
          id: "a",
          text: "User submits new post → createDocument('posts', data)",
        },
        {
          id: "b",
          text: "Feed component subscribes to 'posts' collection watcher",
        },
        { id: "c", text: "User logs in via db.auth.login()" },
        {
          id: "d",
          text: "Watcher's 'create' event triggers UI update instantly",
        },
      ],
      correct: ["c", "b", "a", "d"],
      explanation:
        "Login → subscribe → create post → real‑time update appears.",
      xp: 15,
    },
  ],
};

// ============================================================================
// EXTRA COURSE 2: DATABASE DEEP DIVE (full course, 12 steps)
// ============================================================================
export const DatabaseDeepDive = {
  id: "cocobase-database-deep",
  title: "🗄️ Database Deep Dive",
  description:
    "Data modeling, indexes, relationships, and advanced CRUD patterns.",
  icon: "🗄️",
  color: "#58a6ff",
  difficulty: "intermediate",
  duration: 50,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Data Modeling in NoSQL",
      content:
        "<p>Unlike SQL, Cocobase uses flexible documents. You can embed related data or reference other documents. Learn when to embed vs. reference.</p>",
      xp: 0,
    },
    {
      id: 2,
      type: "quiz",
      question:
        "What is a typical use for embedding (storing data inside a document)?",
      options: [
        "One‑to‑many with many items (e.g., comments on a post)",
        "Many‑to‑many relationships",
        "User credentials",
        "Large binary files",
      ],
      correct: 0,
      explanation:
        "Embedding is great for one‑to‑few relationships, like comments under a post, because you can fetch everything in one query.",
      xp: 10,
    },
    {
      id: 3,
      type: "code_lesson",
      title: "Updating Documents",
      content: "Use `updateDocument` to change specific fields.",
      codeSnippet:
        "await db.updateDocument('posts', 'post_id_123', {\n  title: 'Updated Title'\n});",
      xp: 0,
    },
    {
      id: 4,
      type: "fill_code",
      question: "Fill the blank to update the 'likes' count of a post.",
      codeTemplate: ["await db.", "('posts', 'post_1', { likes: 42 });"],
      blanks: [0],
      blankAnswers: ["updateDocument"],
      wordBank: [
        "updateDocument",
        "replaceDocument",
        "modifyDocument",
        "changeDocument",
      ],
      explanation:
        "`updateDocument` performs a partial update (merges with existing fields).",
      xp: 15,
    },
    {
      id: 5,
      type: "code_lesson",
      title: "Deleting Documents",
      content: "Remove a document by its ID using `deleteDocument`.",
      codeSnippet: "await db.deleteDocument('posts', 'post_id_123');",
      xp: 0,
    },
    {
      id: 6,
      type: "true_false",
      question:
        "Deleting a document also removes all references to it from other documents automatically.",
      correct: false,
      explanation:
        "No – you must manually clean up references in other collections; it's your responsibility as the developer.",
      xp: 10,
    },
    {
      id: 7,
      type: "code_lesson",
      title: "Working with Nested Fields",
      content: "Use dot notation in filters to query nested objects.",
      codeSnippet:
        "const users = await db.listDocuments('users', {\n  'profile.address.city': { eq: 'New York' }\n});",
      xp: 0,
    },
    {
      id: 8,
      type: "short_answer",
      question: "What method would you use to get a single document by ID?",
      placeholder: "e.g., getDocument",
      correct: "getDocument",
      caseSensitive: true,
      hint: "db.______('posts', 'post_id')",
      explanation:
        "`getDocument(collection, id)` returns the document or null.",
      xp: 15,
    },
    {
      id: 9,
      type: "code_lesson",
      title: "Counting Documents",
      content: "Count how many documents match a filter without fetching them.",
      codeSnippet:
        "const count = await db.countDocuments('users', {\n  status: 'active'\n});\nconsole.log(`Active users: ${count}`);",
      xp: 0,
    },
    {
      id: 10,
      type: "quiz",
      question:
        "Which method is more efficient for getting just the number of documents?",
      options: [
        "listDocuments",
        "getDocument",
        "countDocuments",
        "aggregateDocuments",
      ],
      correct: 2,
      explanation:
        "`countDocuments` only returns a number, not the full documents, so it's much faster for large collections.",
      xp: 10,
    },
    {
      id: 11,
      type: "code_lesson",
      title: "Aggregation (Sum, Average, Group)",
      content: "Use `aggregateDocuments` to compute statistics on your data.",
      codeSnippet:
        "const totalRevenue = await db.aggregateDocuments('orders', {\n  sum: 'amount'\n});\n\nconst avgPrice = await db.aggregateDocuments('products', {\n  avg: 'price',\n  filter: { category: 'electronics' }\n});",
      xp: 0,
    },
    {
      id: 12,
      type: "reorder",
      question:
        "Order the steps to update a document and then verify the update by fetching it.",
      items: [
        {
          id: "a",
          text: "Call db.updateDocument('posts', id, { title: 'New' })",
        },
        { id: "b", text: "Call db.getDocument('posts', id)" },
        { id: "c", text: "Console.log the updated document" },
        { id: "d", text: "Await both operations" },
      ],
      correct: ["a", "d", "b", "c"],
      explanation: "Update first, await, then fetch to confirm, then log.",
      xp: 15,
    },
  ],
};

// ============================================================================
// EXTRA COURSE 3: ERROR HANDLING & BEST PRACTICES (full course, 10 steps)
// ============================================================================
export const ErrorHandling = {
  id: "cocobase-error-handling",
  title: "🛡️ Error Handling & Best Practices",
  description:
    "Write robust code with try/catch, retries, and secure patterns.",
  icon: "🛡️",
  color: "#f85149",
  difficulty: "intermediate",
  duration: 35,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Why Error Handling Matters",
      content:
        "<p>Network requests can fail – no internet, rate limits, permission errors. Your app must handle these gracefully to avoid crashes.</p>",
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "Basic Try/Catch",
      content: "Wrap every Cocobase call in try/catch.",
      codeSnippet:
        "try {\n  const result = await db.createDocument('posts', data);\n  console.log('Success:', result);\n} catch (err) {\n  console.error('Failed:', err.message);\n  showNotification('Could not save post. Please try again.');\n}",
      xp: 0,
    },
    {
      id: 3,
      type: "quiz",
      question:
        "What should you do when you get a 429 (Too Many Requests) error?",
      options: [
        "Panic and crash",
        "Retry after a delay",
        "Ignore it",
        "Delete the database",
      ],
      correct: 1,
      explanation:
        "A 429 means you've hit a rate limit. Wait a few seconds then retry, possibly with exponential backoff.",
      xp: 10,
    },
    {
      id: 4,
      type: "code_lesson",
      title: "Retry with Exponential Backoff",
      content: "Automatically retry failed requests with increasing delays.",
      codeSnippet:
        "async function fetchWithRetry(fn, retries = 3) {\n  for (let i = 0; i < retries; i++) {\n    try {\n      return await fn();\n    } catch (err) {\n      if (i === retries - 1) throw err;\n      const delay = Math.pow(2, i) * 1000;\n      console.log(`Retry ${i+1} in ${delay}ms`);\n      await new Promise(r => setTimeout(r, delay));\n    }\n  }\n}\n\n// Usage\nconst posts = await fetchWithRetry(() => db.listDocuments('posts'));",
      xp: 0,
    },
    {
      id: 5,
      type: "fill_code",
      question:
        "Fill the blank to handle a permission error (403) by redirecting to login.",
      codeTemplate: [
        "try {\n  await db.updateDocument('profile', userId, data);\n} catch (err) {\n  if (err.status === 403) {\n    ______(); // redirect\n  }\n}",
      ],
      blanks: [3],
      blankAnswers: ["redirectToLogin"],
      wordBank: ["redirectToLogin", "logout", "showError", "reload"],
      explanation:
        "A 403 means forbidden – the user may not be authenticated or lacks permissions. Redirect to login.",
      xp: 15,
    },
    {
      id: 6,
      type: "code_lesson",
      title: "Network Offline Detection",
      content: "Check if the browser is online before attempting a request.",
      codeSnippet:
        "if (!navigator.onLine) {\n  alert('No internet connection. Please try again later.');\n  return;\n}\n// Proceed with Cocobase call",
      xp: 0,
    },
    {
      id: 7,
      type: "true_false",
      question:
        "It's safe to hardcode your API key in a frontend JavaScript file.",
      correct: false,
      explanation:
        "Never expose API keys in client‑side code. Use environment variables and a backend proxy, or rely on Cocobase's security rules.",
      xp: 10,
    },
    {
      id: 8,
      type: "code_lesson",
      title: "Using Environment Variables (Vite/React)",
      content: "Store sensitive keys in .env files.",
      codeSnippet:
        "// .env\nVITE_COCOBASE_API_KEY=your_key\n\n// In your code\nconst db = new Cocobase({\n  apiKey: import.meta.env.VITE_COCOBASE_API_KEY\n});",
      xp: 0,
    },
    {
      id: 9,
      type: "short_answer",
      question: "What HTTP status code indicates 'Too Many Requests'?",
      placeholder: "e.g., 429",
      correct: "429",
      caseSensitive: false,
      hint: "4xx client error for rate limiting",
      explanation:
        "429 means you exceeded the rate limit. Implement retries with backoff.",
      xp: 15,
    },
    {
      id: 10,
      type: "reorder",
      question: "Order the steps for a robust API call.",
      items: [
        { id: "a", text: "Check navigator.onLine" },
        { id: "b", text: "Call Cocobase method inside try/catch" },
        { id: "c", text: "In catch, check status code (e.g., 429) and retry" },
        { id: "d", text: "Show user‑friendly error message" },
      ],
      correct: ["a", "b", "c", "d"],
      explanation:
        "Check connectivity first, then attempt with retry logic, finally inform the user.",
      xp: 15,
    },
  ],
};

// ============================================================================
// EXTRA COURSE 4: BUILDING WITH REACT (full course, 12 steps)
// ============================================================================
export const ReactIntegration = {
  id: "cocobase-react",
  title: "⚛️ Building with React",
  description:
    "Use Cocobase in React apps – hooks, context, real‑time updates.",
  icon: "⚛️",
  color: "#61dafb",
  difficulty: "intermediate",
  duration: 45,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "React + Cocobase",
      content:
        "<p>Integrate Cocobase into any React app. You'll learn to use hooks like useState and useEffect to fetch and display data.</p>",
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "useEffect for Initial Fetch",
      content: "Load data when the component mounts.",
      codeSnippet:
        "import { useEffect, useState } from 'react';\nimport { Cocobase } from 'cocobase';\n\nconst db = new Cocobase({ apiKey: 'YOUR_KEY' });\n\nexport default function PostList() {\n  const [posts, setPosts] = useState([]);\n\n  useEffect(() => {\n    async function load() {\n      const data = await db.listDocuments('posts');\n      setPosts(data);\n    }\n    load();\n  }, []);\n\n  return (\n    <ul>\n      {posts.map(post => <li key={post.id}>{post.title}</li>)}\n    </ul>\n  );\n}",
      xp: 0,
    },
    {
      id: 3,
      type: "quiz",
      question:
        "Which React hook is best for fetching data when a component first renders?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correct: 1,
      explanation:
        "useEffect with an empty dependency array runs once after mount – perfect for initial data fetch.",
      xp: 10,
    },
    {
      id: 4,
      type: "code_lesson",
      title: "Real‑time Updates with useSync",
      content:
        "Create a custom hook that subscribes to a collection and re‑renders on changes.",
      codeSnippet:
        "function useRealtimeCollection(collectionName) {\n  const [data, setData] = useState([]);\n\n  useEffect(() => {\n    // Initial fetch\n    db.listDocuments(collectionName).then(setData);\n\n    // Real‑time watcher\n    const watcher = db.realtime.collection(collectionName);\n    watcher.on('create', (doc) => setData(prev => [...prev, doc]));\n    watcher.on('update', (doc) => setData(prev => prev.map(p => p.id === doc.id ? doc : p)));\n    watcher.on('delete', (id) => setData(prev => prev.filter(p => p.id !== id)));\n    watcher.subscribe();\n\n    return () => watcher.unsubscribe();\n  }, [collectionName]);\n\n  return data;\n}",
      xp: 0,
    },
    {
      id: 5,
      type: "fill_code",
      question: "Fill the blank to create a context for the Cocobase client.",
      codeTemplate: [
        "import { createContext, useContext } from 'react';\nconst CocobaseContext = ______(null);\n\nexport function useCocobase() {\n  return useContext(CocobaseContext);\n}",
      ],
      blanks: [1],
      blankAnswers: ["createContext"],
      wordBank: ["createContext", "makeContext", "newContext", "Context"],
      explanation: "`createContext` creates a React context object.",
      xp: 15,
    },
    {
      id: 6,
      type: "code_lesson",
      title: "Authentication with React",
      content: "Provide auth state to the whole app.",
      codeSnippet:
        "function AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    db.auth.getCurrentUser().then(setUser);\n  }, []);\n\n  const login = async (email, password) => {\n    const { session } = await db.auth.login({ email, password });\n    localStorage.setItem('token', session.token);\n    setUser(await db.auth.getCurrentUser());\n  };\n\n  const logout = async () => {\n    await db.auth.logout();\n    localStorage.removeItem('token');\n    setUser(null);\n  };\n\n  return (\n    <AuthContext.Provider value={{ user, login, logout }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}",
      xp: 0,
    },
    {
      id: 7,
      type: "true_false",
      question:
        "You can use React Server Components with Cocobase to fetch data on the server.",
      correct: true,
      explanation:
        "Yes – Cocobase works in Node.js environments. You can fetch data in RSCs and pass it to client components.",
      xp: 10,
    },
    {
      id: 8,
      type: "code_lesson",
      title: "Optimistic Updates",
      content:
        "Update UI instantly before server responds, then rollback on error.",
      codeSnippet:
        "async function likePost(postId, currentLikes) {\n  // Optimistic update\n  setPosts(prev => prev.map(p => \n    p.id === postId ? { ...p, likes: p.likes + 1 } : p\n  ));\n\n  try {\n    await db.updateDocument('posts', postId, { likes: currentLikes + 1 });\n  } catch (err) {\n    // Rollback on error\n    setPosts(prev => prev.map(p => \n      p.id === postId ? { ...p, likes: p.likes - 1 } : p\n    ));\n    showError('Failed to like');\n  }\n}",
      xp: 0,
    },
    {
      id: 9,
      type: "short_answer",
      question:
        "What hook would you use to share the Cocobase client across many components without prop drilling?",
      placeholder: "e.g., useContext",
      correct: "useContext",
      caseSensitive: true,
      hint: "Combine with createContext to provide the client",
      explanation:
        "Create a context for the db instance and use `useContext` to consume it anywhere.",
      xp: 15,
    },
    {
      id: 10,
      type: "code_lesson",
      title: "Form Submission with Loading State",
      content:
        "Handle form submission with loading indicator and error feedback.",
      codeSnippet:
        "function CreatePostForm() {\n  const [title, setTitle] = useState('');\n  const [loading, setLoading] = useState(false);\n\n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    setLoading(true);\n    try {\n      await db.createDocument('posts', { title });\n      setTitle('');\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={title} onChange={e => setTitle(e.target.value)} disabled={loading} />\n      <button type=\"submit\" disabled={loading}>{loading ? 'Saving...' : 'Create Post'}</button>\n    </form>\n  );\n}",
      xp: 0,
    },
    {
      id: 11,
      type: "quiz",
      question: "What is the purpose of the `finally` block in the try/catch?",
      options: [
        "To run code only on error",
        "To run code regardless of success or error",
        "To return a value",
        "To break the loop",
      ],
      correct: 1,
      explanation:
        "`finally` always executes after try/catch, perfect for resetting loading states.",
      xp: 10,
    },
    {
      id: 12,
      type: "reorder",
      question:
        "Order the steps to build a React component that lists posts and adds a new post.",
      items: [
        { id: "a", text: "Call db.listDocuments('posts') in useEffect" },
        { id: "b", text: "Define a state variable posts with useState" },
        { id: "c", text: "Render the posts list" },
        {
          id: "d",
          text: "Create a form that calls db.createDocument and refreshes the list",
        },
      ],
      correct: ["b", "a", "c", "d"],
      explanation:
        "First define state, then fetch on mount, render, then provide a form to add new items.",
      xp: 15,
    },
  ],
};

// ============================================================================
// EXTRA COURSE 5: SECURITY BASICS (lesson‑only, no quizzes)
// ============================================================================
export const SecurityBasics = {
  id: "cocobase-security-basics",
  title: "🔒 Security Basics",
  description:
    "Keep your data safe – Row Level Security, API key protection, and user permissions.",
  icon: "🔒",
  color: "#f85149",
  difficulty: "beginner",
  duration: 12,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Never Expose API Keys",
      content:
        "<p>Your API key is like a password. Never hardcode it in client‑side JavaScript. Use environment variables and a backend proxy, or use Cocobase's built‑in security rules that allow you to call `createDocument` directly but restrict access via policies.</p>",
      xp: 0,
    },
    {
      id: 2,
      type: "lesson",
      title: "Row Level Security (RLS)",
      content:
        '<p>RLS lets you define who can read/write what. For example, only the author of a post can edit it. Rules are defined in the Cocobase dashboard and enforced server‑side – even if a client tries to cheat.</p><p>Example rule: <code>{ "effect": "allow", "action": ["update"], "condition": "request.userId == resource.authorId" }</code></p>',
      xp: 0,
    },
    {
      id: 3,
      type: "lesson",
      title: "User Roles",
      content:
        "<p>Assign roles like 'admin' or 'moderator' via the user's `data` field. Then check `db.auth.hasRole('admin')` on the client – but remember, critical checks must also be enforced server‑side using RLS.</p>",
      xp: 0,
    },
  ],
};

// ============================================================================
// EXTRA COURSE 6: DEPLOYMENT TIPS (lesson‑only)
// ============================================================================
export const DeploymentTips = {
  id: "cocobase-deployment",
  title: "🚀 Deployment Tips",
  description:
    "Go live with confidence – environment config, CORS, and monitoring.",
  icon: "🚀",
  color: "#e3b341",
  difficulty: "beginner",
  duration: 10,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Environment Variables in Production",
      content:
        "<p>Use different API keys for development and production. Store the production key in your hosting platform's environment variables (e.g., Vercel, Netlify, Render). Never commit `.env` files to Git.</p>",
      xp: 0,
    },
    {
      id: 2,
      type: "lesson",
      title: "CORS Settings",
      content:
        "<p>If you call Cocobase directly from a browser, ensure your project's CORS settings include your frontend domain. In the Cocobase dashboard, add your production URL to the allowed origins list.</p>",
      xp: 0,
    },
    {
      id: 3,
      type: "lesson",
      title: "Monitoring & Logs",
      content:
        "<p>Cocobase dashboard provides logs for API calls, errors, and rate limits. Monitor them to catch issues early. Set up alerts for high error rates or quota usage.</p>",
      xp: 0,
    },
  ],
};

// ============================================================================
// EXTRA COURSE 7: REAL‑WORLD EXAMPLE – BLOG PLATFORM (full course, 14 steps)
// ============================================================================
export const BlogPlatformCourse = {
  id: "cocobase-blog-platform",
  title: "📝 Build a Blog Platform",
  description:
    "Step‑by‑step creation of a full blog with authors, comments, and likes.",
  icon: "📝",
  color: "#39d353",
  difficulty: "intermediate",
  duration: 60,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Project Overview",
      content:
        "<p>We'll build a blog where authors can write posts, readers can comment, and anyone can like posts. Uses auth, database, real‑time comments, and cloud functions for email notifications.</p>",
      xp: 0,
    },
    {
      id: 2,
      type: "code_lesson",
      title: "Setting Up Collections",
      content:
        "We need three collections: `users` (handled by auth), `posts`, and `comments`.",
      codeSnippet:
        "// Example post document structure\n{\n  id: 'auto_generated',\n  title: 'My First Post',\n  content: '...',\n  authorId: 'user_id',\n  published: true,\n  likes: 0,\n  createdAt: '2025-01-01T00:00:00Z'\n}\n\n// Example comment document\n{\n  id: 'auto',\n  postId: 'post_id',\n  authorId: 'user_id',\n  text: 'Great post!',\n  createdAt: '...'\n}",
      xp: 0,
    },
    {
      id: 3,
      type: "code_lesson",
      title: "Creating a Post (Authenticated)",
      content: "Only logged‑in users can create a post.",
      codeSnippet:
        "async function createPost(title, content) {\n  const user = await db.auth.getCurrentUser();\n  if (!user) throw new Error('Login required');\n\n  const post = await db.createDocument('posts', {\n    title,\n    content,\n    authorId: user.id,\n    authorName: user.data.name,\n    published: false,\n    likes: 0,\n    createdAt: new Date().toISOString()\n  });\n  return post;\n}",
      xp: 0,
    },
    {
      id: 4,
      type: "quiz",
      question:
        "Why store `authorName` directly in the post document instead of joining on each read?",
      options: [
        "It's faster and avoids an extra query",
        "Because SQL doesn't support joins",
        "To save storage space",
        "Because it's required by law",
      ],
      correct: 0,
      explanation:
        "Denormalization (storing the author's name) is common in NoSQL to reduce round trips. If the name changes, you need to update all posts, but it's acceptable for blogs.",
      xp: 10,
    },
    {
      id: 5,
      type: "code_lesson",
      title: "Listing Published Posts",
      content: "Show only published posts, newest first.",
      codeSnippet:
        "async function getPublishedPosts() {\n  const posts = await db.listDocuments('posts', {\n    published: true,\n    sort: { field: 'createdAt', order: 'desc' }\n  });\n  return posts;\n}",
      xp: 0,
    },
    {
      id: 6,
      type: "code_lesson",
      title: "Adding Comments",
      content: "Simple function to add a comment to a post.",
      codeSnippet:
        "async function addComment(postId, text) {\n  const user = await db.auth.getCurrentUser();\n  if (!user) throw new Error('Login required');\n\n  const comment = await db.createDocument('comments', {\n    postId,\n    authorId: user.id,\n    authorName: user.data.name,\n    text,\n    createdAt: new Date().toISOString()\n  });\n  return comment;\n}",
      xp: 0,
    },
    {
      id: 7,
      type: "code_lesson",
      title: "Real‑time Comments",
      content: "Subscribe to new comments on a specific post.",
      codeSnippet:
        "function subscribeToComments(postId, onNewComment) {\n  const watcher = db.realtime.collection('comments');\n  watcher.on('create', (comment) => {\n    if (comment.postId === postId) {\n      onNewComment(comment);\n    }\n  });\n  watcher.subscribe();\n  return () => watcher.unsubscribe();\n}",
      xp: 0,
    },
    {
      id: 8,
      type: "fill_code",
      question: "Fill the blank to increment the likes count of a post.",
      codeTemplate: [
        "async function likePost(postId) {\n  const post = await db.getDocument('posts', postId);\n  await db.",
        "('posts', postId, { likes: post.likes + 1 });\n}",
      ],
      blanks: [1],
      blankAnswers: ["updateDocument"],
      wordBank: ["updateDocument", "increment", "patch", "modify"],
      explanation: "Use `updateDocument` to change the likes field.",
      xp: 15,
    },
    {
      id: 9,
      type: "code_lesson",
      title: "Cloud Function: Email on New Comment",
      content: "Notify author when someone comments on their post.",
      codeSnippet:
        "// functions/notifyComment.js\nexport default async (req, res, { db }) => {\n  const { postId, commentAuthorName } = req.body;\n  const post = await db.getDocument('posts', postId);\n  const author = await db.auth.getUserById(post.authorId);\n  \n  await sendEmail({\n    to: author.email,\n    subject: 'New comment on your post',\n    body: `${commentAuthorName} commented: \"${req.body.text}\"`\n  });\n  res.json({ sent: true });\n}",
      xp: 0,
    },
    {
      id: 10,
      type: "true_false",
      question:
        "You can call a cloud function from the client using `db.functions.call('notifyComment', data)`.",
      correct: false,
      explanation:
        "The correct method is `db.functions.execute()`, not `call`.",
      xp: 10,
    },
    {
      id: 11,
      type: "code_lesson",
      title: "Admin Dashboard (Role Check)",
      content: "Show moderation panel only to admins.",
      codeSnippet:
        "async function isAdmin() {\n  return await db.auth.hasRole('admin');\n}\n\n// In a React component\nif (await isAdmin()) {\n  // Show delete button for any post\n}",
      xp: 0,
    },
    {
      id: 12,
      type: "short_answer",
      question: "What method would you use to fetch a single post by its ID?",
      placeholder: "e.g., getDocument",
      correct: "getDocument",
      caseSensitive: true,
      hint: "db.______('posts', id)",
      explanation: "`getDocument(collection, id)` returns the document.",
      xp: 15,
    },
    {
      id: 13,
      type: "code_lesson",
      title: "Search Posts by Title",
      content: "Use the `contains` operator for text search (case‑sensitive).",
      codeSnippet:
        "async function searchPosts(keyword) {\n  const posts = await db.listDocuments('posts', {\n    title: { contains: keyword },\n    published: true\n  });\n  return posts;\n}",
      xp: 0,
    },
    {
      id: 14,
      type: "reorder",
      question:
        "Order the steps to implement a full blog post page with real‑time comments.",
      items: [
        { id: "a", text: "Fetch the post data using getDocument" },
        { id: "b", text: "Subscribe to comments real‑time watcher" },
        { id: "c", text: "Display comments list" },
        { id: "d", text: "Render a form to add a new comment" },
      ],
      correct: ["a", "b", "c", "d"],
      explanation:
        "First get post, then set up real‑time, then show existing comments, then provide form.",
      xp: 15,
    },
  ],
};

// ============================================================================
// EXTRA COURSE 8: PERFORMANCE OPTIMIZATION (lesson‑only, 4 lessons)
// ============================================================================
export const PerformanceOptimization = {
  id: "cocobase-performance",
  title: "⚡ Performance Optimization",
  description:
    "Make your app faster with pagination, field selection, and caching.",
  icon: "⚡",
  color: "#58a6ff",
  difficulty: "intermediate",
  duration: 15,
  steps: [
    {
      id: 1,
      type: "lesson",
      title: "Use `limit` and `offset` for Pagination",
      content:
        "<p>Never load all documents at once, especially for large collections. Always use `limit` and `offset` to load only what the user sees.</p><pre><code>const page = await db.listDocuments('posts', { limit: 20, offset: 0 });</code></pre>",
      xp: 0,
    },
    {
      id: 2,
      type: "lesson",
      title: "Select Only Needed Fields",
      content:
        "<p>Use the query builder's `select()` to reduce payload size. For a post list, you might only need title and date, not the full content.</p><pre><code>const posts = await db.listDocuments('posts', {\n  queryBuilder: (qb) => qb.select(['title', 'createdAt'])\n});</code></pre>",
      xp: 0,
    },
    {
      id: 3,
      type: "lesson",
      title: "Cache Frequently Used Data",
      content:
        "<p>Store data in localStorage or React Query to avoid refetching. For example, user profile can be cached for the duration of the session.</p><pre><code>const cached = localStorage.getItem('profile');\nif (cached) return JSON.parse(cached);\nconst profile = await db.getDocument('users', userId);\nlocalStorage.setItem('profile', JSON.stringify(profile));</code></pre>",
      xp: 0,
    },
    {
      id: 4,
      type: "lesson",
      title: "Batch Operations for Bulk Changes",
      content:
        "<p>Instead of 100 individual `updateDocument` calls, use `db.batch.updateDocuments` to send one request.</p><pre><code>await db.batch.updateDocuments('posts', updatesArray);</code></pre>",
      xp: 0,
    },
  ],
};

// ============================================================================
// FINAL EXPORT (array of all courses)
// ============================================================================
export const ALL_COURSES = [
  Course1_Fundamentals,
  Course2_Queries,
  Course3_Auth,
  Course4_Realtime,
  // Course5_Functions,
  Course6_FilesBatch,
  Course7_QueryBuilder,
  Course8_FinalProject,
  DatabaseDeepDive,
  ErrorHandling,
  ReactIntegration,
  SecurityBasics,
  DeploymentTips,
  BlogPlatformCourse,
  PerformanceOptimization,
];

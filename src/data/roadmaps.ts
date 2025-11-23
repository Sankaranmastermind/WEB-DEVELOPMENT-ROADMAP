import { Roadmap } from "@/types/roadmap";

export const roadmaps: Record<string, Roadmap> = {
  frontend: {
    path: "frontend",
    title: "Frontend Developer",
    description: "Master HTML, CSS, JavaScript, and modern frameworks to build beautiful user interfaces",
    steps: [
      {
        id: "html-basics",
        title: "HTML Fundamentals",
        description: "Learn the building blocks of the web. Understand semantic HTML, forms, and accessibility basics.",
        resources: [
          { title: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
          { title: "HTML Best Practices", url: "https://www.freecodecamp.org/news/html-best-practices/" },
        ],
        genAiTip: "Ask AI: 'Explain HTML semantic elements with 5 practical examples and create a simple webpage structure for a blog.'",
        optionalTask: "Build a personal portfolio page structure using only HTML",
        estimatedTime: "1-2 weeks"
      },
      {
        id: "css-fundamentals",
        title: "CSS Styling",
        description: "Master CSS for layouts, animations, and responsive design. Learn Flexbox and Grid.",
        resources: [
          { title: "CSS Tricks - Complete Guide", url: "https://css-tricks.com/guides/" },
          { title: "Flexbox Froggy Game", url: "https://flexboxfroggy.com/" },
        ],
        genAiTip: "Ask AI: 'Teach me CSS Flexbox with 3 real-world layout examples and show me how to make them responsive.'",
        optionalTask: "Style your portfolio with modern CSS including animations",
        estimatedTime: "2-3 weeks"
      },
      {
        id: "javascript-basics",
        title: "JavaScript Essentials",
        description: "Learn programming fundamentals, DOM manipulation, and ES6+ features.",
        resources: [
          { title: "JavaScript.info", url: "https://javascript.info/" },
          { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
        ],
        genAiTip: "Ask AI: 'Explain JavaScript closures, promises, and async/await with practical code examples I can run.'",
        optionalTask: "Create an interactive todo list with local storage",
        estimatedTime: "3-4 weeks"
      },
      {
        id: "react-fundamentals",
        title: "React Framework",
        description: "Build dynamic UIs with React. Learn components, hooks, state management, and routing.",
        resources: [
          { title: "React Official Docs", url: "https://react.dev/" },
          { title: "React Tutorial", url: "https://react.dev/learn" },
        ],
        genAiTip: "Ask AI: 'Create a React component tutorial that covers useState, useEffect, and custom hooks with a practical mini-project.'",
        optionalTask: "Build a weather app using React and a public API",
        estimatedTime: "3-4 weeks"
      },
      {
        id: "typescript",
        title: "TypeScript",
        description: "Add type safety to your JavaScript. Learn interfaces, types, and generics.",
        resources: [
          { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" },
          { title: "TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/" },
        ],
        genAiTip: "Ask AI: 'Explain TypeScript types, interfaces, and generics with React component examples.'",
        optionalTask: "Convert a JavaScript project to TypeScript",
        estimatedTime: "2 weeks"
      },
      {
        id: "build-tools",
        title: "Build Tools & Deployment",
        description: "Master Vite, npm, and deployment platforms. Learn Git and CI/CD basics.",
        resources: [
          { title: "Vite Guide", url: "https://vitejs.dev/guide/" },
          { title: "Git Tutorial", url: "https://www.atlassian.com/git/tutorials" },
        ],
        genAiTip: "Ask AI: 'Explain modern build tools, package managers, and show me how to deploy a React app to Vercel step by step.'",
        optionalTask: "Deploy your portfolio to a hosting platform",
        estimatedTime: "1 week"
      }
    ]
  },
  backend: {
    path: "backend",
    title: "Backend Developer",
    description: "Build robust server-side applications, APIs, and databases",
    steps: [
      {
        id: "backend-basics",
        title: "Backend Fundamentals",
        description: "Understand servers, HTTP, REST APIs, and basic networking concepts.",
        resources: [
          { title: "HTTP Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
          { title: "REST API Tutorial", url: "https://restfulapi.net/" },
        ],
        genAiTip: "Ask AI: 'Explain HTTP methods, status codes, and REST API design principles with real examples.'",
        estimatedTime: "1 week"
      },
      {
        id: "nodejs",
        title: "Node.js & Express",
        description: "Learn server-side JavaScript with Node.js and build APIs with Express.",
        resources: [
          { title: "Node.js Docs", url: "https://nodejs.org/docs/" },
          { title: "Express.js Guide", url: "https://expressjs.com/en/guide/routing.html" },
        ],
        genAiTip: "Ask AI: 'Create a complete Express.js REST API tutorial with CRUD operations, middleware, and error handling.'",
        optionalTask: "Build a RESTful API for a blog system",
        estimatedTime: "3 weeks"
      },
      {
        id: "databases",
        title: "Databases (SQL & NoSQL)",
        description: "Master PostgreSQL and MongoDB. Learn data modeling and queries.",
        resources: [
          { title: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" },
          { title: "MongoDB University", url: "https://university.mongodb.com/" },
        ],
        genAiTip: "Ask AI: 'Teach me SQL with practical examples: joins, indexes, transactions. Then compare with MongoDB queries.'",
        optionalTask: "Design a database schema for an e-commerce platform",
        estimatedTime: "3 weeks"
      },
      {
        id: "authentication",
        title: "Authentication & Security",
        description: "Implement JWT, OAuth, password hashing, and security best practices.",
        resources: [
          { title: "JWT Introduction", url: "https://jwt.io/introduction" },
          { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
        ],
        genAiTip: "Ask AI: 'Explain JWT authentication, bcrypt password hashing, and implement a secure login system with code examples.'",
        optionalTask: "Add authentication to your API",
        estimatedTime: "2 weeks"
      },
      {
        id: "testing-deployment",
        title: "Testing & Deployment",
        description: "Write tests with Jest, deploy to cloud platforms, and learn Docker basics.",
        resources: [
          { title: "Jest Documentation", url: "https://jestjs.io/docs/getting-started" },
          { title: "Docker Tutorial", url: "https://docs.docker.com/get-started/" },
        ],
        genAiTip: "Ask AI: 'Show me how to write unit and integration tests for an Express API, plus containerize it with Docker.'",
        optionalTask: "Deploy your API with Docker to a cloud platform",
        estimatedTime: "2 weeks"
      }
    ]
  },
  fullstack: {
    path: "fullstack",
    title: "Fullstack Developer",
    description: "Combine frontend and backend skills to build complete web applications",
    steps: [
      {
        id: "fullstack-html-css",
        title: "HTML & CSS",
        description: "Start with web fundamentals and styling.",
        resources: [
          { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn" },
        ],
        genAiTip: "Ask AI: 'Create a responsive landing page layout tutorial covering HTML5 semantic elements and modern CSS techniques.'",
        estimatedTime: "2 weeks"
      },
      {
        id: "fullstack-javascript",
        title: "JavaScript Full Spectrum",
        description: "Master both frontend and backend JavaScript.",
        resources: [
          { title: "JavaScript.info", url: "https://javascript.info/" },
          { title: "Node.js Guide", url: "https://nodejs.dev/learn" },
        ],
        genAiTip: "Ask AI: 'Teach me JavaScript from basics to advanced: DOM, async programming, and Node.js fundamentals in one comprehensive guide.'",
        estimatedTime: "4 weeks"
      },
      {
        id: "fullstack-react-node",
        title: "React + Node.js",
        description: "Build fullstack apps combining React frontend with Node.js backend.",
        resources: [
          { title: "React Docs", url: "https://react.dev/" },
          { title: "Express.js", url: "https://expressjs.com/" },
        ],
        genAiTip: "Ask AI: 'Guide me through building a fullstack MERN app: React frontend consuming a Node.js/Express REST API.'",
        optionalTask: "Build a fullstack task management app",
        estimatedTime: "5 weeks"
      },
      {
        id: "fullstack-database",
        title: "Database Integration",
        description: "Connect your backend to PostgreSQL or MongoDB.",
        resources: [
          { title: "Prisma ORM", url: "https://www.prisma.io/docs/" },
          { title: "Mongoose ODM", url: "https://mongoosejs.com/docs/" },
        ],
        genAiTip: "Ask AI: 'Explain ORMs, show me how to integrate Prisma with PostgreSQL in a Node.js app, including migrations.'",
        estimatedTime: "2 weeks"
      },
      {
        id: "fullstack-auth",
        title: "Authentication Flow",
        description: "Implement end-to-end authentication from frontend to backend.",
        resources: [
          { title: "Auth Best Practices", url: "https://auth0.com/docs/" },
        ],
        genAiTip: "Ask AI: 'Build a complete authentication system: JWT tokens, protected routes in React, secure backend endpoints.'",
        optionalTask: "Add user authentication to your fullstack app",
        estimatedTime: "2 weeks"
      },
      {
        id: "fullstack-deployment",
        title: "Fullstack Deployment",
        description: "Deploy frontend and backend to production platforms.",
        resources: [
          { title: "Vercel Docs", url: "https://vercel.com/docs" },
          { title: "Railway Guide", url: "https://docs.railway.app/" },
        ],
        genAiTip: "Ask AI: 'Show me how to deploy a fullstack app: React on Vercel, Node.js backend on Railway, with environment variables.'",
        optionalTask: "Deploy your complete fullstack application",
        estimatedTime: "1 week"
      }
    ]
  }
};

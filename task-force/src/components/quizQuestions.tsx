// src/components/quizQuestions.ts

export const easyQuestions = [
  // 10 Easy Questions
  {
    question: 'What is Next.js?',
    options: ['A React Framework', 'A Python Framework', 'A JavaScript Library', 'A CSS Framework'],
    correctAnswer: 'A React Framework',
  },
  {
    question: 'What command is used to create a new Next.js app?',
    options: ['npx create-next-app', 'npm create-next-app', 'next create-app', 'npm create-next'],
    correctAnswer: 'npx create-next-app',
  },
  {
    question: 'What is the default page extension in Next.js?',
    options: ['.js', '.ts', '.jsx', '.tsx'],
    correctAnswer: '.js',
  },
  {
    question: 'What feature does Next.js provide for static site generation?',
    options: ['getInitialProps', 'getStaticProps', 'getServerSideProps', 'getStaticPaths'],
    correctAnswer: 'getStaticProps',
  },
  {
    question: 'Which of these is the default build target in Next.js?',
    options: ['serverless', 'static', 'server', 'none'],
    correctAnswer: 'server',
  },
  {
    question: 'What file is used to configure Next.js?',
    options: ['next.config.js', 'config.json', 'next.json', 'nextsettings.json'],
    correctAnswer: 'next.config.js',
  },
  {
    question: 'What is the purpose of the `pages/_app.js` file in Next.js?',
    options: ['To configure global styles', 'To define custom error handling', 'To initialize the application', 'To define routes'],
    correctAnswer: 'To initialize the application',
  },
  {
    question: 'Which of these is used to add environment variables in Next.js?',
    options: ['process.env', 'env.config', '.env.local', 'config.env'],
    correctAnswer: '.env.local',
  },
  {
    question: 'What is the primary difference between `getStaticProps` and `getServerSideProps`?',
    options: ['`getStaticProps` runs at build time, `getServerSideProps` runs at request time', '`getStaticProps` runs at request time, `getServerSideProps` runs at build time', 'No difference', 'Both run at build time'],
    correctAnswer: '`getStaticProps` runs at build time, `getServerSideProps` runs at request time',
  },
  {
    question: 'Which of these is NOT supported by Next.js?',
    options: ['Static Site Generation', 'Server-Side Rendering', 'Client-Side Rendering', 'Local Storage'],
    correctAnswer: 'Local Storage',
  },
];

export const mediumQuestions = [
  // 10 Medium Questions
  {
    question: 'What does the `next/link` component do in Next.js?',
    options: ['Provides client-side navigation', 'Adds a header', 'Adds a footer', 'Links to external websites'],
    correctAnswer: 'Provides client-side navigation',
  },
  {
    question: 'How does Next.js handle CSS imports?',
    options: ['CSS files are globally imported by default', 'CSS files need to be manually bundled', 'CSS files are imported through `next.config.js`', 'CSS files are not supported'],
    correctAnswer: 'CSS files are globally imported by default',
  },
  {
    question: 'What is the default routing method in Next.js?',
    options: ['File-based routing', 'Manual routing', 'Route parameters', 'Dynamic routing'],
    correctAnswer: 'File-based routing',
  },
  {
    question: 'How does Next.js support dynamic routes?',
    options: ['By creating dynamic files in the `pages` directory', 'By using a `dynamic-routes.js` file', 'By manually defining routes in the `next.config.js` file', 'By using a third-party package'],
    correctAnswer: 'By creating dynamic files in the `pages` directory',
  },
  {
    question: 'What is the main benefit of using `getStaticProps` in Next.js?',
    options: ['Pre-renders pages at build time for faster load times', 'Allows fetching data from APIs at runtime', 'Handles real-time data fetching', 'Generates dynamic content at request time'],
    correctAnswer: 'Pre-renders pages at build time for faster load times',
  },
  {
    question: 'Which React Hook is used to handle state in Next.js?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    correctAnswer: 'useState',
  },
  {
    question: 'What is the default build behavior for images in Next.js?',
    options: ['Images are optimized automatically using `next/image`', 'Images must be manually optimized', 'Images are not supported by default', 'Images are served from the `public` folder only'],
    correctAnswer: 'Images are optimized automatically using `next/image`',
  },
  {
    question: 'Which method is used to fetch data on the server-side in Next.js?',
    options: ['getServerSideProps', 'getStaticProps', 'getInitialProps', 'useEffect'],
    correctAnswer: 'getServerSideProps',
  },
  {
    question: 'What does the `pages/_document.js` file do in Next.js?',
    options: ['It allows custom HTML structure for pages', 'It is used to define the app layout', 'It fetches data for pages', 'It initializes React components'],
    correctAnswer: 'It allows custom HTML structure for pages',
  },
  {
    question: 'How does Next.js improve performance with its built-in code splitting?',
    options: ['It automatically splits code per page', 'It manually splits code per component', 'It bundles all code into one file', 'It uses third-party libraries for code splitting'],
    correctAnswer: 'It automatically splits code per page',
  },
];

export const hardQuestions = [
  // 10 Hard Questions
  {
    question: 'How does Next.js achieve Server-Side Rendering?',
    options: ['By pre-rendering pages on the server on each request', 'By rendering pages on the client-side after loading', 'By using `getStaticProps` and `getServerSideProps` only', 'By using the `next/app` file'],
    correctAnswer: 'By pre-rendering pages on the server on each request',
  },
  {
    question: 'What is the purpose of `getInitialProps` in Next.js?',
    options: ['To fetch data before the page is rendered on the server', 'To pre-render pages at build time', 'To handle data fetching on the client-side only', 'To update the page title'],
    correctAnswer: 'To fetch data before the page is rendered on the server',
  },
  {
    question: 'How does Next.js handle image optimization?',
    options: ['By automatically optimizing images using the `next/image` component', 'By serving images through a CDN', 'By minifying image files on the server', 'By not handling image optimization'],
    correctAnswer: 'By automatically optimizing images using the `next/image` component',
  },
  {
    question: 'What is the difference between `next export` and `next build`?',
    options: ['`next export` generates a static site, while `next build` builds the app for server-side rendering', '`next export` builds for SSR, while `next build` generates a static site', 'There is no difference', '`next export` is used for dynamic content'],
    correctAnswer: '`next export` generates a static site, while `next build` builds the app for server-side rendering',
  },
  {
    question: 'How do you customize the default Next.js webpack configuration?',
    options: ['By editing the `next.config.js` file', 'By using a custom webpack.config.js file', 'By using a custom babel.config.js file', 'Next.js does not allow webpack customization'],
    correctAnswer: 'By editing the `next.config.js` file',
  },
  {
    question: 'How do you handle authentication in Next.js?',
    options: ['Using middleware', 'With `getServerSideProps` for each page', 'Through custom hooks only', 'Next.js does not handle authentication'],
    correctAnswer: 'Using middleware',
  },
  {
    question: 'How can you configure Next.js for dynamic routes with nested folders?',
    options: ['By using the file structure in the `pages` folder', 'By creating custom routes in `next.config.js`', 'By using dynamic routing with `useRouter`', 'By importing routes into the `_app.js` file'],
    correctAnswer: 'By using the file structure in the `pages` folder',
  },
  {
    question: 'What does `getStaticPaths` do in Next.js?',
    options: ['Generates dynamic routes for static pages', 'Defines custom API routes', 'Fetches data for server-side rendering', 'Handles route transitions'],
    correctAnswer: 'Generates dynamic routes for static pages',
  },
  {
    question: 'What is the main difference between `getStaticProps` and `getInitialProps`?',
    options: ['`getStaticProps` is used at build time, `getInitialProps` is used for server-side rendering', 'Both work at runtime', '`getStaticProps` is used only for static pages', 'There is no difference'],
    correctAnswer: '`getStaticProps` is used at build time, `getInitialProps` is used for server-side rendering',
  },
  {
    question: 'How can you add custom fonts in Next.js?',
    options: ['By modifying the `pages/_document.js` file', 'By using the `next/font` module', 'By adding CSS imports in `next.config.js`', 'By using the `next/fonts` file'],
    correctAnswer: 'By modifying the `pages/_document.js` file',
  },
];

export const veryHardQuestions = [
  // 10 Very Hard Questions
  {
    question: 'How does Next.js handle incremental static regeneration (ISR)?',
    options: [
      'By allowing static pages to be re-rendered on a background thread after a given time period',
      'By automatically regenerating static pages whenever a request is made',
      'By caching static pages in the browser and regenerating them only after a deployment',
      'By using dynamic content from the server-side on every request'
    ],
    correctAnswer: 'By allowing static pages to be re-rendered on a background thread after a given time period',
  },
  {
    question: 'How can you optimize the performance of a Next.js application with many dynamic routes?',
    options: [
      'By using `getServerSideProps` for dynamic routes only',
      'By enabling serverless functions for dynamic routes',
      'By using Static Site Generation (SSG) with `getStaticPaths` and `getStaticProps`',
      'By pre-building all dynamic pages during the build time'
    ],
    correctAnswer: 'By using Static Site Generation (SSG) with `getStaticPaths` and `getStaticProps`',
  },
  {
    question: 'In Next.js, what is the main difference between `getStaticProps` and `getServerSideProps` when handling dynamic content?',
    options: [
      '`getStaticProps` runs at build time, while `getServerSideProps` runs on each request',
      '`getStaticProps` pre-renders the page for a faster load, while `getServerSideProps` fetches data on the server at runtime',
      'Both methods work at runtime, but `getServerSideProps` is for pages that need to be generated dynamically and `getStaticProps` is for static pages',
      'There is no difference; they are used interchangeably'
    ],
    correctAnswer: '`getStaticProps` runs at build time, while `getServerSideProps` runs on each request',
  },
  {
    question: 'How would you implement custom server-side logic in a Next.js API route?',
    options: [
      'By creating a custom Express.js server and running Next.js within it',
      'By adding custom logic to `pages/api` directory functions',
      'By using a middleware in `next.config.js`',
      'By modifying the `server.js` file within the `pages` directory'
    ],
    correctAnswer: 'By adding custom logic to `pages/api` directory functions',
  },
  {
    question: 'How can you implement API routes with authentication and authorization in Next.js?',
    options: [
      'By using middleware and JWT tokens to protect routes',
      'By manually handling cookies and sessions in `getServerSideProps`',
      'By adding user authentication directly to the API route files',
      'Next.js does not support authentication for API routes'
    ],
    correctAnswer: 'By using middleware and JWT tokens to protect routes',
  },
  {
    question: 'What happens if you try to use `getStaticProps` with dynamic routes that are not properly handled by `getStaticPaths`?',
    options: [
      'The application will generate static pages for all dynamic routes at build time',
      'The application will return a 404 error for unhandled dynamic routes',
      'The application will fallback to server-side rendering for unhandled dynamic routes',
      'The application will automatically generate static pages for all dynamic routes at runtime'
    ],
    correctAnswer: 'The application will fallback to server-side rendering for unhandled dynamic routes',
  },
  {
    question: 'How can you perform custom error handling in Next.js?',
    options: [
      'By using `pages/_error.js` for global error handling',
      'By configuring a custom error page in `next.config.js`',
      'By using the `ErrorBoundary` component from React',
      'Next.js does not allow custom error handling'
    ],
    correctAnswer: 'By using `pages/_error.js` for global error handling',
  },
  {
    question: 'What is the purpose of `getStaticPaths` in conjunction with `getStaticProps` in dynamic routes?',
    options: [
      'To specify which dynamic paths should be pre-rendered at build time',
      'To generate API routes for dynamic pages',
      'To fetch data for static pages only',
      'To handle SSR for dynamic pages'
    ],
    correctAnswer: 'To specify which dynamic paths should be pre-rendered at build time',
  },
  {
    question: 'How can you implement server-side caching in Next.js for improved performance?',
    options: [
      'By using a custom caching layer in `getServerSideProps`',
      'By adding cache-control headers directly in `next.config.js`',
      'By using `getStaticProps` with fallback methods',
      'Next.js automatically handles server-side caching'
    ],
    correctAnswer: 'By using a custom caching layer in `getServerSideProps`',
  },
  {
    question: 'In what cases should you prefer using `getInitialProps` over `getStaticProps` or `getServerSideProps` in Next.js?',
    options: [
      'When you need to fetch data for every page request, regardless of whether the page is static or server-rendered',
      'When you need to statically generate pages at build time',
      'When you want the page to load only after all data has been fetched',
      '`getInitialProps` is deprecated in favor of `getStaticProps` and `getServerSideProps`'
    ],
    correctAnswer: 'When you need to fetch data for every page request, regardless of whether the page is static or server-rendered',
  },
];



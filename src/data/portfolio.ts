const asset = (file: string) => `/assets/${encodeURIComponent(file)}`;

export const profile = {
  name: 'Sathiskumar Nidharshan',
  firstName: 'Sathiskumar',
  lastName: 'Nidharshan',
  role: 'Software Engineer',
  tagline: 'Building intelligent solutions. Engineering better experiences.',
  location: 'Colombo, Sri Lanka',
  phoneDisplay: '+94 769-486-619',
  phoneHref: 'tel:+94769486619',
  email: 'nitharshan23s@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sathiskumar-nidharshan-a29409216/',
  github: 'https://github.com/SathiskumarNidharshan',
  cv: asset('Sathiskumar Nidharshan.pdf'),
  cvFileName: 'Sathiskumar_Nidharshan_CV.pdf',
  portrait: asset('my.jpeg'),
  about:
    "Hello, I'm a Software Engineer passionate about building modern web applications, intelligent software solutions, and systems that simplify complex business processes. I specialize in full-stack development, creating responsive user interfaces and reliable backend systems with a strong focus on performance, scalability, and usability. I enjoy solving real-world engineering challenges, improving workflows through technology, and transforming ideas into practical digital solutions. Constantly learning and exploring new technologies, I strive to write clean, maintainable code and deliver software that creates meaningful impact. Explore my work, and let's connect to build something valuable together.",
  contactIntro:
    "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out!",
  footerRoles: ['Full Stack Developer', 'MERN Stack Specialist', 'Flutter Developer', '.NET Expert'],
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof navItems)[number]['id'];

export const sectionIds = navItems.map((item) => item.id) as SectionId[];

export const highlights = [
  {
    title: 'Full-stack range',
    text: 'Hands-on across .NET, MERN, and Flutter, from interfaces through to backend systems.',
  },
  {
    title: 'Quality and deadlines',
    text: 'I take responsibility for the details and deliver finished work on time.',
  },
  {
    title: 'How I collaborate',
    text: 'Comfortable owning work independently and contributing inside a team.',
  },
  {
    title: 'What I optimise for',
    text: 'Scalable, responsive products with a clear user experience.',
  },
];

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend Technologies',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Flutter', 'Tailwind', 'Bootstrap', 'Vite'],
  },
  {
    id: 'backend',
    title: 'Backend Technologies',
    items: ['C#', '.NET', 'ASP.NET', 'Entity Framework', 'SignalR', 'JWT', 'Node.js', 'PHP', 'Laravel', 'Python', 'Java'],
  },
  {
    id: 'databases',
    title: 'Databases',
    items: ['Microsoft SQL Server', 'PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Firebase'],
  },
  {
    id: 'tools',
    title: 'Tools & Others',
    items: ['Visual Studio', 'VS Code', 'Git/GitHub', 'Azure DevOps', 'Windows', 'Ubuntu', 'Wordpress'],
  },
] as const;

export type SkillGroupId = (typeof skillGroups)[number]['id'];

export const marqueeItems = skillGroups.flatMap((group) => group.items);

export const experience = [
  {
    period: 'Feb 2026 – Present',
    role: 'Software Engineer',
    company: 'LTL Transformers (Pvt) Ltd',
    image: asset('Software student1.png'),
    summary:
      'Developing enterprise software solutions for transformer engineering, testing, and operational workflows, building systems that digitize testing processes, dispatch documentation, and engineering operations using ASP.NET Core, React, and SQL Server.',
    points: [
      'Develop enterprise software solutions for transformer engineering, testing, and operational workflows.',
      'Build a Transformer Electrical & Pressure Testing System with automated calculations, validation, and approval workflows.',
      'Develop a Dispatch Photo Management System for transformer traceability and digital dispatch documentation.',
      'Modernize legacy engineering applications and explore AI-powered process automation.',
    ],
    skills: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'React',
      'TypeScript',
      'Entity Framework Core',
      'SQL Server',
      'Git',
      'Azure DevOps',
      'AI-Assisted Development',
    ],
  },
  {
    period: 'Jun 2025 – Dec 2025',
    role: 'Associate Full Stack Developer',
    company: 'Weblook International (Private) Limited',
    image: asset('Software student2.png'),
    summary:
      'Contributed to the development and enhancement of a dynamic multivendor e-commerce marketplace, building seamless shopping experiences and efficient vendor workflows using Vue.js, Laravel, and PHP.',
    points: [
      'Enhanced order placement and streamlined checkout workflows to deliver a smoother, more intuitive shopping experience.',
      'Developed dynamic product quick-view functionality, enabling customers to explore product details without leaving the current page.',
      'Implemented vendor-side order acceptance features with real-time status updates to improve order processing and coordination.',
      'Built and enhanced frontend components and backend functionality, integrating REST APIs to support reliable data exchange.',
      'Worked with MySQL to manage marketplace data and support core e-commerce operations.',
      'Used Git for version control and collaborated on maintaining, debugging, and improving the platform.',
    ],
    skills: [
      'Vue.js',
      'Laravel',
      'PHP',
      'JavaScript',
      'MySQL',
      'REST APIs',
      'Git',
      'Full-Stack Development',
      'E-commerce Development',
    ],
  },
  {
    period: 'Mar 2025 – Jun 2025',
    role: 'Trainee Full Stack Developer',
    company: 'Weblook International (Private) Limited',
    image: asset('Software student3.png'),
    summary:
      'Contributed to the development of a feature-rich multivendor e-commerce marketplace, building interactive user interfaces, scalable backend APIs, and essential e-commerce functionalities using Vue.js, Laravel, and PHP.',
    points: [
      'Developed interactive Vue.js components with reactive data binding to deliver responsive and engaging user experiences.',
      'Built and integrated Laravel REST APIs with authentication and authorization to support secure application workflows.',
      'Contributed to payment processing integration to support smooth and reliable e-commerce transactions.',
      'Integrated notification functionality to keep users informed about relevant marketplace activities and updates.',
      'Collaborated across frontend, backend, and database layers to develop and maintain core marketplace functionality.',
      'Worked with MySQL for data management and Git for source control and collaborative development.',
    ],
    skills: [
      'Vue.js',
      'Laravel',
      'PHP',
      'JavaScript',
      'MySQL',
      'REST APIs',
      'Git',
      'Full-Stack Development',
      'E-commerce Solutions',
    ],
  },
  {
    period: 'Mar 2023 – Mar 2024',
    role: 'Software Developer Intern',
    company: 'Headstart (Pvt) Ltd',
    image: asset('Software student4.png'),
    summary:
      'Contributed to web and mobile application development, building a strong foundation in PHP, CodeIgniter, WordPress, and Flutter. Developed database-driven functionality, customized websites, and created responsive user interfaces while focusing on usability, functionality, and maintainable code.',
    points: [
      'Implemented PHP validation logic and CRUD operations using CodeIgniter to support reliable data processing and database management.',
      'Customized WordPress websites, enhanced existing functionality, and resolved technical issues to improve website reliability and usability.',
      'Developed user interfaces using HTML, CSS, and JavaScript, ensuring consistent experiences across desktop and mobile devices.',
      'Built mobile application UI components and interfaces, focusing on clean layouts, intuitive navigation, and user-friendly design.',
      'Supported website performance improvements, debugging, and ongoing maintenance across web development projects.',
      'Worked with MySQL to manage application data and support dynamic web functionality.',
    ],
    skills: [
      'PHP',
      'CodeIgniter',
      'WordPress',
      'Flutter',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript',
      'CRUD Operations',
      'Responsive Design',
      'UI Development',
    ],
  },
];

export const education = [
  {
    period: 'Feb 2024 – Feb 2025',
    title: 'BEng (Hons) Software Engineering - Top-up',
    school: 'London Metropolitan University',
    image: asset('Software Engineering.png'),
  },
  {
    period: 'Mar 2020 – Dec 2024',
    title: 'National Diploma in Technology in IT',
    school: 'Institute of Technology University of Moratuwa',
    image: asset('National Diploma in Technology in IT.png'),
  },
  {
    period: 'Jan 2014 – Aug 2018',
    title: 'Secondary Education',
    school: 'V/Vavuniya Tamil Madhya Maha Vidyalaya',
    image: asset('Secondary Education.png'),
  },
];

export const projects = [
  {
    period: 'Feb 2026 – Present',
    title: 'Transformer Electrical & Pressure Testing System',
    company: 'Enterprise Web Application',
    summary:
      'Developing an enterprise web-based solution to digitize and automate transformer electrical and pressure testing operations. The platform streamlines transformer traceability, test execution, engineering calculations, quality validation, and multi-level approval workflows.',
    points: [
      'QR-based transformer identification and production batch tracking.',
      'Digital electrical and pressure testing with configurable test parameters.',
      'Automated engineering calculations and pass/fail validation.',
      'Dynamic Quality Plan and acceptance limit management.',
      'QA, Engineering, and Final Approval workflows.',
      'Transformer hold, retesting, and release management.',
      'Instrument and calibration tracking.',
      'Automated test certificates, reports, and analytics dashboards.',
      'Role-based access control and comprehensive audit trails.',
    ],
    tags: [
      'React.js',
      'TypeScript',
      'ASP.NET Core Web API',
      'C#',
      'Entity Framework Core',
      'Microsoft SQL Server',
      'SignalR',
    ],
    image: asset('Software student1.png'),
  },
  {
    period: 'Feb 2026 – Present',
    title: 'Transformer Dispatch Photo Management System',
    company: 'Enterprise Web Application',
    summary:
      'A web-based application designed to streamline transformer dispatch photography, record management, and reporting.',
    points: [
      'Six-side transformer photo capturing and management.',
      'Serial-number-based dispatch record tracking.',
      'Automatic date, time, and GPS metadata recording.',
      'Dispatch status monitoring and record retrieval.',
      'PDF report generation with photographs and metadata.',
      'Admin dashboard with dispatch analytics.',
      'Role-based authentication and access control.',
      'Audit logging and responsive tablet/desktop interface.',
    ],
    tags: [
      'React',
      'TypeScript',
      'ASP.NET Core',
      'C#',
      'Entity Framework Core',
      'SQL Server',
    ],
    image: asset('Software student2.png'),
  },
  {
    period: 'Internship Project',
    title: 'Movie Explorer – Discover Your Favorite Films',
    company: 'React Web Application',
    summary:
      'Built a Movie Explorer web app that lets users search for films, browse trending titles, and view detailed movie information using real-time data from The Movie Database (TMDb) API.',
    points: [
      'User Login – Implemented a login interface with username and password authentication.',
      'Movie Search – Added a search bar to find movies by name and display relevant results.',
      'Movie Grid – Displayed movie posters in a grid with title, release year, and rating.',
      'Movie Details – Opened a detailed view with overview, genres, cast, trailer link, and related information.',
      'Trending Movies – Showed popular and trending films fetched from the TMDb API.',
      'Light/Dark Mode – Implemented theme switching for a better user experience.',
      'API Integration – Fetched trending movies, search results, and movie details from the TMDb API with graceful error handling.',
      'Infinite Scrolling – Loaded additional search results dynamically as users browse.',
      'State Management – Managed movie data using React Context API and persisted last search plus favorites in local storage.',
      'Extras – Supported filtering by genre, year, or rating, YouTube trailer embeds, and a Load More option for results.',
    ],
    tags: [
      'React',
      'JavaScript',
      'TMDb API',
      'REST APIs',
      'Context API',
      'localStorage',
      'Light/Dark Mode',
      'Infinite Scroll',
      'YouTube Embed',
    ],
    image: asset('Software student3.png'),
  },
  {
    period: 'Dec 2024 – Jan 2025',
    title: 'Student Management System',
    company: 'Web Application',
    summary:
      'Developed a web-based Student Management System using Laravel and MySQL to streamline academic and administrative operations, including student, teacher, batch, course, payment, and enrollment management.',
    points: [
      'Student Management – Create, update, view, and manage student records.',
      'Teacher Management – Maintain teacher information and records.',
      'Batch & Course Management – Manage academic batches, courses, and related information.',
      'Payment Management – Track and manage student payment records.',
      'Enrollment Management – Handle student course and batch enrollments.',
      'CRUD Operations – Implement complete Create, Read, Update, and Delete functionality.',
      'Database Management – Design and manage relational database structures.',
      'MVC Architecture – Develop a structured application using Laravel\'s MVC architecture.',
    ],
    tags: [
      'Laravel',
      'PHP',
      'MySQL',
      'MVC Architecture',
      'CRUD Operations',
      'Eloquent ORM',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
    ],
    image: asset('Student Management System.png'),
  },
  {
    period: 'Sep 2024 – Dec 2024',
    title: 'E-Book Sales Management System',
    company: 'Web Application',
    summary:
      'Developed a web-based E-Book Sales Management System using ASP.NET MVC and C# to manage customer accounts, book sales, orders, and customer feedback, with secure authentication and database integration.',
    points: [
      'Customer Registration & Login – Implemented customer registration and secure login functionality.',
      'User Authentication – Managed authenticated user access to system features.',
      'Order Management – Developed functionality to create, view, update, and manage customer orders.',
      'Book Search – Implemented book searching functionality to help customers find available e-books.',
      'Customer Feedback – Developed a feedback system allowing logged-in users to submit feedback.',
      'Database Management – Managed application data using SQL Server and Entity Framework.',
      'Form Validation – Implemented input validation to maintain data accuracy and integrity.',
      'MVC Architecture – Structured the application using ASP.NET MVC design principles.',
    ],
    tags: ['ASP.NET MVC', 'C#', 'SQL Server', 'Entity Framework', 'CRUD'],
    image: asset('E-Book Sales Management System.png'),
  },
  {
    period: 'Jun 2024 – Sep 2024',
    title: 'Car Dealership Management System',
    company: 'Desktop Application',
    summary:
      'Developed a desktop-based Car Dealership Management System using C# and Windows Forms, applying object-oriented programming principles to manage vehicle inventory, car parts, customer information, and sales orders with secure role-based access.',
    points: [
      'Car Management – Create, update, view, and manage vehicle information and inventory records.',
      'Car Parts Management – Manage car parts information and related inventory records.',
      'Customer Management – Maintain customer details and information.',
      'Order Management – Handle and manage customer orders and sales transactions.',
      'CRUD Operations – Implement complete Create, Read, Update, and Delete functionality.',
      'User Authentication – Implement secure user login and authentication.',
      'Role-Based Access Control – Manage user permissions based on assigned roles.',
      'Object-Oriented Programming – Apply OOP concepts to develop a modular and maintainable application.',
      'Database Management – Store and manage application data using SQL Server.',
    ],
    tags: [
      'C#',
      '.NET Framework',
      'Windows Forms',
      'SQL Server',
      'Object-Oriented Programming',
      'CRUD Operations',
      'User Authentication',
      'Role-Based Access Control (RBAC)',
    ],
    image: asset('Car Dealership Management System.png'),
  },
  {
    period: 'Jul 2024 – Nov 2024',
    title: 'MERN Stack Taxi Reservation System',
    company: 'Web Application',
    summary:
      'Developed a web-based Taxi Reservation System using the MERN stack to facilitate online taxi bookings, real-time driver location tracking, and communication between customers and drivers, with Google Maps integration and driver rating functionality.',
    points: [
      'Taxi Booking Management – Develop functionality for customers to create, manage, and track taxi reservations.',
      'User Authentication – Implement user registration, login, and secure access to system features.',
      'Real-Time Communication – Integrate Socket.IO to enable real-time communication and updates between users and drivers.',
      'Live Location Tracking – Implement real-time driver location tracking to monitor driver movements.',
      'Google Maps Integration – Integrate Google Maps API for location selection, map visualization, and route-related functionality.',
      'Driver Rating System – Enable customers to provide ratings and feedback based on their ride experience.',
      'CRUD Operations – Implement Create, Read, Update, and Delete operations for managing system records.',
      'Database Management – Use MongoDB to store and manage user, driver, booking, and related application data.',
      'Frontend Development – Build interactive and responsive user interfaces using React.',
    ],
    tags: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'Real-Time Communication',
      'Google Maps API',
      'Real-Time Location Tracking',
      'User Authentication',
      'CRUD Operations',
      'JavaScript',
      'REST APIs',
    ],
    image: asset('Taxi Reservation System.png'),
  },
];

const quizData = [
  {
    title: 'Computer Science Basics',
    level: 'Basic',
    duration: 15,
    questions: [
      {
        questionText: 'What does CPU stand for?',
        options: [
          'Central Processing Unit',
          'Computer Personal Unit',
          'Central Performance Utility',
          'Control Processing Unit',
        ],
        correctAnswer: 0,
      },
      {
        questionText: 'Which device is used to input data into a computer?',
        options: ['Monitor', 'Keyboard', 'Printer', 'Speaker'],
        correctAnswer: 1,
      },
      {
        questionText: 'What is the brain of the computer?',
        options: ['RAM', 'Hard Drive', 'CPU', 'Motherboard'],
        correctAnswer: 2,
      },
      {
        questionText: 'Which of these is an operating system?',
        options: ['Microsoft Word', 'Google Chrome', 'Windows', 'Intel'],
        correctAnswer: 2,
      },
      {
        questionText: 'What does RAM stand for?',
        options: [
          'Random Access Memory',
          'Read Access Memory',
          'Rapid Action Memory',
          'Run Access Memory',
        ],
        correctAnswer: 0,
      },
      {
        questionText: 'Which language is primarily used for web pages?',
        options: ['Python', 'Java', 'JavaScript', 'C'],
        correctAnswer: 2,
      },
      {
        questionText: 'Which of these is a storage device?',
        options: ['CPU', 'RAM', 'Hard Disk', 'Cache'],
        correctAnswer: 2,
      },
      {
        questionText: 'What does HTTP stand for?',
        options: [
          'HyperText Transfer Protocol',
          'High Transfer Text Protocol',
          'Hyper Tool Transfer Program',
          'Host Transfer Text Process',
        ],
        correctAnswer: 0,
      },
      {
        questionText: 'Which unit measures computer processing speed?',
        options: ['Bytes', 'Hertz', 'Pixels', 'Volts'],
        correctAnswer: 1,
      },
      {
        questionText: 'Which of these is NOT a programming language?',
        options: ['Python', 'HTML', 'Java', 'C++'],
        correctAnswer: 1,
      },
      {
        questionText: 'Which component stores data permanently?',
        options: ['RAM', 'Cache', 'Hard Disk', 'Register'],
        correctAnswer: 2,
      },
      {
        questionText: 'Which of these is an output device?',
        options: ['Keyboard', 'Mouse', 'Monitor', 'Scanner'],
        correctAnswer: 2,
      },
      {
        questionText: 'What does GUI stand for?',
        options: [
          'Graphical User Interface',
          'General Utility Interface',
          'Global User Interaction',
          'Graphical Unified Interface',
        ],
        correctAnswer: 0,
      },
      {
        questionText: 'Which company developed Windows OS?',
        options: ['Apple', 'Google', 'Microsoft', 'IBM'],
        correctAnswer: 2,
      },
      {
        questionText: 'Binary numbers are made up of which digits?',
        options: ['0 and 1', '1 and 2', '0 and 9', '2 and 3'],
        correctAnswer: 0,
      },
    ],
  },

  {
    title: 'Internet & Web Design (CSC 471)',
    level: 'Intermediate',
    duration: 20,
    questions: [
      {
        questionText: 'Who invented the World Wide Web?',
        options: [
          'Bill Gates',
          'Tim Berners-Lee',
          'Mark Zuckerberg',
          'Steve Jobs',
        ],
        correctAnswer: 1,
      },
      {
        questionText: 'The Internet is best described as:',
        options: ['A website', 'A global network', 'A browser', 'A web page'],
        correctAnswer: 1,
      },
      {
        questionText: 'Which protocol is used for web communication?',
        options: ['FTP', 'SMTP', 'HTTP', 'SNMP'],
        correctAnswer: 2,
      },
      {
        questionText: 'What does URL stand for?',
        options: [
          'Uniform Resource Locator',
          'Universal Resource Link',
          'Uniform Routing Link',
          'Universal Routing Locator',
        ],
        correctAnswer: 0,
      },
      {
        questionText: 'Which part of a URL identifies the protocol?',
        options: ['Domain name', 'File name', 'http://', 'Directory'],
        correctAnswer: 2,
      },
      {
        questionText: 'Which device responds to client requests?',
        options: ['Browser', 'Server', 'Router', 'Switch'],
        correctAnswer: 1,
      },
      {
        questionText: 'Which software is used to browse the web?',
        options: ['Compiler', 'Browser', 'Editor', 'Interpreter'],
        correctAnswer: 1,
      },
      {
        questionText: 'HTML stands for:',
        options: [
          'HyperText Markup Language',
          'HighText Machine Language',
          'HyperTool Markup Language',
          'Hyper Transfer Markup Language',
        ],
        correctAnswer: 0,
      },
      {
        questionText: 'Which HTML tag defines a paragraph?',
        options: ['<h>', '<p>', '<div>', '<span>'],
        correctAnswer: 1,
      },
      {
        questionText: 'Which CSS property changes text color?',
        options: ['font', 'color', 'background', 'style'],
        correctAnswer: 1,
      },
      {
        questionText: 'JavaScript is mainly used for:',
        options: ['Styling', 'Structure', 'Interactivity', 'Database'],
        correctAnswer: 2,
      },
      {
        questionText: 'Which HTML tag is used for images?',
        options: ['<image>', '<img>', '<src>', '<pic>'],
        correctAnswer: 1,
      },
      {
        questionText: 'Which file extension is used for CSS?',
        options: ['.html', '.css', '.js', '.php'],
        correctAnswer: 1,
      },
      {
        questionText: 'Which HTML element contains visible content?',
        options: ['<head>', '<title>', '<body>', '<meta>'],
        correctAnswer: 2,
      },
      {
        questionText: 'Client–server communication mainly follows which model?',
        options: ['Peer-to-peer', 'Request-response', 'Ring', 'Mesh'],
        correctAnswer: 1,
      },
    ],
  },

  {
    title: 'Object-Oriented Programming (CSC 461)',
    level: 'Advanced',
    duration: 30,
    questions: [
      {
        questionText: 'What is Object-Oriented Programming?',
        options: [
          'Programming using functions',
          'Programming based on objects',
          'Low-level programming',
          'Markup programming',
        ],
        correctAnswer: 1,
      },
      {
        questionText: 'Which of these is NOT an OOP concept?',
        options: [
          'Encapsulation',
          'Inheritance',
          'Compilation',
          'Polymorphism',
        ],
        correctAnswer: 2,
      },
      {
        questionText: 'What is a class?',
        options: [
          'An object instance',
          'A blueprint for objects',
          'A variable',
          'A method',
        ],
        correctAnswer: 1,
      },
      {
        questionText: 'What is an object?',
        options: [
          'A class definition',
          'An instance of a class',
          'A method',
          'A data type',
        ],
        correctAnswer: 1,
      },
      {
        questionText: 'Encapsulation is best described as:',
        options: [
          'Code duplication',
          'Hiding data implementation',
          'Multiple inheritance',
          'Method overloading',
        ],
        correctAnswer: 1,
      },
      {
        questionText: 'Which OOP concept allows code reuse?',
        options: ['Encapsulation', 'Inheritance', 'Abstraction', 'Overloading'],
        correctAnswer: 1,
      },
      {
        questionText: 'Polymorphism means:',
        options: [
          'One class only',
          'Many forms',
          'Single inheritance',
          'Data hiding',
        ],
        correctAnswer: 1,
      },
      {
        questionText: 'Abstraction focuses on:',
        options: [
          'Implementation details',
          'Essential features',
          'Code duplication',
          'Data storage',
        ],
        correctAnswer: 1,
      },
      {
        questionText: 'Which access modifier restricts access the most?',
        options: ['public', 'protected', 'private', 'default'],
        correctAnswer: 2,
      },
      {
        questionText: 'Which concept binds data and methods together?',
        options: [
          'Inheritance',
          'Encapsulation',
          'Abstraction',
          'Polymorphism',
        ],
        correctAnswer: 1,
      },
      {
        questionText: 'Which OOP concept improves security?',
        options: ['Encapsulation', 'Inheritance', 'Compilation', 'Linking'],
        correctAnswer: 0,
      },
      {
        questionText: 'Which is an example of OOP language?',
        options: ['C', 'Pascal', 'Java', 'Assembly'],
        correctAnswer: 2,
      },
      {
        questionText:
          'Which feature allows same method name with different parameters?',
        options: ['Overriding', 'Overloading', 'Inheritance', 'Encapsulation'],
        correctAnswer: 1,
      },
      {
        questionText: "Which relationship represents 'has-a'?",
        options: ['Inheritance', 'Aggregation', 'Polymorphism', 'Abstraction'],
        correctAnswer: 1,
      },
      {
        questionText: 'OOP is mainly based on:',
        options: [
          'Real-world entities',
          'Machine language',
          'Binary logic',
          'Procedural steps',
        ],
        correctAnswer: 0,
      },
    ],
  },
];

module.exports = quizData;

const quizData = [
  {
    title: "Computer Science Basics",
    level: "Basic",
    questions: [
      {
        questionText: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Performance Utility",
          "Control Processing Unit"
        ],
        correctAnswer: 0
      },
      {
        questionText: "Which device is used to input data into a computer?",
        options: ["Monitor", "Keyboard", "Printer", "Speaker"],
        correctAnswer: 1
      },
      {
        questionText: "What is the brain of the computer?",
        options: ["RAM", "Hard Drive", "CPU", "Motherboard"],
        correctAnswer: 2
      },
      {
        questionText: "Which of these is an operating system?",
        options: ["Microsoft Word", "Google Chrome", "Windows", "Intel"],
        correctAnswer: 2
      },
      {
        questionText: "What does RAM stand for?",
        options: [
          "Random Access Memory",
          "Read Access Memory",
          "Rapid Action Memory",
          "Run Access Memory"
        ],
        correctAnswer: 0
      },
      {
        questionText: "Which language is primarily used for web pages?",
        options: ["Python", "Java", "JavaScript", "C"],
        correctAnswer: 2
      },
      {
        questionText: "Which of these is a storage device?",
        options: ["CPU", "RAM", "Hard Disk", "Cache"],
        correctAnswer: 2
      },
      {
        questionText: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "High Transfer Text Protocol",
          "Hyper Tool Transfer Program",
          "Host Transfer Text Process"
        ],
        correctAnswer: 0
      },
      {
        questionText: "Which unit measures computer processing speed?",
        options: ["Bytes", "Hertz", "Pixels", "Volts"],
        correctAnswer: 1
      },
      {
        questionText: "Which of these is NOT a programming language?",
        options: ["Python", "HTML", "Java", "C++"],
        correctAnswer: 1
      }
    ]
  },

  {
    title: "Intermediate Computer Science",
    level: "Intermediate",
    questions: [
      {
        questionText: "What is a database?",
        options: [
          "A collection of unrelated files",
          "A structured collection of data",
          "A programming language",
          "A computer virus"
        ],
        correctAnswer: 1
      },
      {
        questionText: "Which data structure uses FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: 1
      },
      {
        questionText: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Advanced Programming Internet",
          "Application Process Integration",
          "Automated Program Instruction"
        ],
        correctAnswer: 0
      },
      {
        questionText: "Which HTTP method is used to create data?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 1
      },
      {
        questionText: "What is Big O notation used for?",
        options: [
          "Measuring memory size",
          "Analyzing algorithm performance",
          "Writing documentation",
          "Debugging code"
        ],
        correctAnswer: 1
      },
      {
        questionText: "Which of these is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        correctAnswer: 2
      },
      {
        questionText: "What is recursion?",
        options: [
          "A loop structure",
          "A function calling itself",
          "A database query",
          "An error-handling method"
        ],
        correctAnswer: 1
      },
      {
        questionText: "Which sorting algorithm is fastest on average?",
        options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
        correctAnswer: 2
      },
      {
        questionText: "What does MVC stand for?",
        options: [
          "Model View Controller",
          "Main Visual Code",
          "Multiple View Control",
          "Model Variable Component"
        ],
        correctAnswer: 0
      },
      {
        questionText: "Which protocol is used for secure web communication?",
        options: ["HTTP", "FTP", "SMTP", "HTTPS"],
        correctAnswer: 3
      }
    ]
  },

  {
    title: "Advanced Computer Science",
    level: "Advanced",
    questions: [
      {
        questionText: "What is a deadlock in operating systems?",
        options: [
          "A system crash",
          "Processes waiting indefinitely for resources",
          "A memory leak",
          "CPU overheating"
        ],
        correctAnswer: 1
      },
      {
        questionText: "Which algorithm is used in Dijkstra’s shortest path?",
        options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
        correctAnswer: 0
      },
      {
        questionText: "What is normalization in databases?",
        options: [
          "Encrypting data",
          "Reducing data redundancy",
          "Indexing tables",
          "Backing up data"
        ],
        correctAnswer: 1
      },
      {
        questionText: "Which data structure is best for implementing LRU cache?",
        options: ["Array", "Stack", "HashMap + Doubly Linked List", "Queue"],
        correctAnswer: 2
      },
      {
        questionText: "What does ACID stand for in databases?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Accuracy, Clarity, Integrity, Durability",
          "Access, Control, Index, Data",
          "Atomic, Concurrent, Indexed, Durable"
        ],
        correctAnswer: 0
      },
      {
        questionText: "Which scheduling algorithm minimizes average waiting time?",
        options: ["FCFS", "Round Robin", "SJF", "Priority"],
        correctAnswer: 2
      },
      {
        questionText: "What is a race condition?",
        options: [
          "Hardware malfunction",
          "Two processes competing for CPU",
          "Unexpected behavior due to concurrent access",
          "Network latency issue"
        ],
        correctAnswer: 2
      },
      {
        questionText: "Which tree is self-balancing?",
        options: ["Binary Tree", "AVL Tree", "Heap", "Trie"],
        correctAnswer: 1
      },
      {
        questionText: "What is sharding?",
        options: [
          "Encrypting database data",
          "Splitting data across multiple databases",
          "Backing up data",
          "Caching results"
        ],
        correctAnswer: 1
      },
      {
        questionText: "Which concept allows multiple inheritance behavior in Java?",
        options: ["Classes", "Interfaces", "Abstract methods", "Packages"],
        correctAnswer: 1
      }
    ]
  }
];

module.exports = quizData;
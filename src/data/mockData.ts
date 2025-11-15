// Mock Data - All keys in English, display text in Portuguese

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  status: "Disponível" | "Emprestado" | "Manutenção";
  category: string;
  loanHistory: LoanHistoryEntry[];
}

export interface Movie {
  id: string;
  title: string;
  director: string;
  year: number;
  genre: string;
  status: "Disponível" | "Locado" | "Manutenção";
  loanHistory: LoanHistoryEntry[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  memberId: string;
  status: "Ativo" | "Inativo";
  booksOut: string[];
  moviesOut: string[];
}

export interface LoanHistoryEntry {
  userId: string;
  borrowerName: string;
  dateOut: string;
  dateDue: string;
  dateIn: string | null;
}

export const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    title: "A Ascensão do ASP.NET",
    author: "Ada Lovelace",
    isbn: "978-0123456789",
    status: "Emprestado",
    category: "Tecnologia",
    loanHistory: [
      { userId: "u1", dateOut: "2025-10-01", dateDue: "2025-10-15", dateIn: null, borrowerName: "João Silva" },
    ]
  },
  {
    id: "2",
    title: "C# Essentials",
    author: "Bjarne Stroustrup",
    isbn: "978-0987654321",
    status: "Disponível",
    category: "Programação",
    loanHistory: []
  },
  {
    id: "3",
    title: "Azure Cloud Architecture",
    author: "Grace Hopper",
    isbn: "978-1234567890",
    status: "Emprestado",
    category: "Cloud Computing",
    loanHistory: [
      { userId: "u2", dateOut: "2025-11-01", dateDue: "2025-11-08", dateIn: null, borrowerName: "Maria Oliveira" },
    ]
  },
  {
    id: "4",
    title: "Entity Framework Core",
    author: "Margaret Hamilton",
    isbn: "978-2345678901",
    status: "Disponível",
    category: "Database",
    loanHistory: []
  },
  {
    id: "5",
    title: "Blazor WebAssembly",
    author: "Alan Turing",
    isbn: "978-3456789012",
    status: "Manutenção",
    category: "Web Development",
    loanHistory: []
  },
  {
    id: "6",
    title: "Design Patterns in C#",
    author: "Linus Torvalds",
    isbn: "978-4567890123",
    status: "Disponível",
    category: "Programação",
    loanHistory: [
      { userId: "u1", dateOut: "2025-09-15", dateDue: "2025-09-30", dateIn: "2025-09-28", borrowerName: "João Silva" },
    ]
  },
  {
    id: "7",
    title: "Microservices Architecture",
    author: "Tim Berners-Lee",
    isbn: "978-5678901234",
    status: "Emprestado",
    category: "Arquitetura",
    loanHistory: [
      { userId: "u3", dateOut: "2025-11-10", dateDue: "2025-11-24", dateIn: null, borrowerName: "Pedro Santos" },
    ]
  },
  {
    id: "8",
    title: "SignalR Real-Time Apps",
    author: "Barbara Liskov",
    isbn: "978-6789012345",
    status: "Disponível",
    category: "Web Development",
    loanHistory: []
  },
  {
    id: "9",
    title: "LINQ Mastery",
    author: "Donald Knuth",
    isbn: "978-7890123456",
    status: "Emprestado",
    category: "Programação",
    loanHistory: [
      { userId: "u4", dateOut: "2025-10-20", dateDue: "2025-10-27", dateIn: null, borrowerName: "Ana Costa" },
    ]
  },
  {
    id: "10",
    title: "Xamarin Cross-Platform",
    author: "Ken Thompson",
    isbn: "978-8901234567",
    status: "Disponível",
    category: "Mobile",
    loanHistory: []
  },
  {
    id: "11",
    title: "ASP.NET Core Security",
    author: "Dennis Ritchie",
    isbn: "978-9012345678",
    status: "Disponível",
    category: "Segurança",
    loanHistory: []
  },
  {
    id: "12",
    title: "DevOps with Azure",
    author: "Guido van Rossum",
    isbn: "978-0123498765",
    status: "Emprestado",
    category: "DevOps",
    loanHistory: [
      { userId: "u5", dateOut: "2025-09-01", dateDue: "2025-09-15", dateIn: null, borrowerName: "Carlos Mendes" },
    ]
  },
];

export const MOCK_MOVIES: Movie[] = [
  {
    id: "m1",
    title: "O Paradigma do Core",
    director: "Grace Hopper",
    year: 2024,
    genre: "Ficção Científica",
    status: "Locado",
    loanHistory: [
      { userId: "u1", dateOut: "2025-11-10", dateDue: "2025-11-17", dateIn: null, borrowerName: "João Silva" },
    ]
  },
  {
    id: "m2",
    title: "A Teia de Dados",
    director: "Alan Turing",
    year: 2023,
    genre: "Documentário",
    status: "Disponível",
    loanHistory: []
  },
  {
    id: "m3",
    title: "Código Limpo",
    director: "Robert Martin",
    year: 2022,
    genre: "Drama",
    status: "Locado",
    loanHistory: [
      { userId: "u2", dateOut: "2025-11-12", dateDue: "2025-11-19", dateIn: null, borrowerName: "Maria Oliveira" },
    ]
  },
  {
    id: "m4",
    title: "A Revolução Cloud",
    director: "Werner Vogels",
    year: 2024,
    genre: "Documentário",
    status: "Disponível",
    loanHistory: []
  },
  {
    id: "m5",
    title: "Arquitetura Moderna",
    director: "Martin Fowler",
    year: 2023,
    genre: "Educacional",
    status: "Manutenção",
    loanHistory: []
  },
  {
    id: "m6",
    title: "O Compilador",
    director: "Bjarne Stroustrup",
    year: 2021,
    genre: "Thriller",
    status: "Disponível",
    loanHistory: [
      { userId: "u3", dateOut: "2025-10-01", dateDue: "2025-10-08", dateIn: "2025-10-07", borrowerName: "Pedro Santos" },
    ]
  },
  {
    id: "m7",
    title: "DevOps: A Jornada",
    director: "Gene Kim",
    year: 2023,
    genre: "Documentário",
    status: "Locado",
    loanHistory: [
      { userId: "u4", dateOut: "2025-11-05", dateDue: "2025-11-12", dateIn: null, borrowerName: "Ana Costa" },
    ]
  },
  {
    id: "m8",
    title: "Padrões de Design",
    director: "Gang of Four",
    year: 2022,
    genre: "Educacional",
    status: "Disponível",
    loanHistory: []
  },
  {
    id: "m9",
    title: "A Era do Microserviço",
    director: "Sam Newman",
    year: 2024,
    genre: "Documentário",
    status: "Locado",
    loanHistory: [
      { userId: "u5", dateOut: "2025-11-01", dateDue: "2025-11-08", dateIn: null, borrowerName: "Carlos Mendes" },
    ]
  },
  {
    id: "m10",
    title: "Continuous Delivery",
    director: "Jez Humble",
    year: 2023,
    genre: "Educacional",
    status: "Disponível",
    loanHistory: []
  },
  {
    id: "m11",
    title: "O Sistema Distribuído",
    director: "Leslie Lamport",
    year: 2022,
    genre: "Ficção Científica",
    status: "Disponível",
    loanHistory: []
  },
  {
    id: "m12",
    title: "Refatoração Extrema",
    director: "Kent Beck",
    year: 2024,
    genre: "Drama",
    status: "Locado",
    loanHistory: [
      { userId: "u6", dateOut: "2025-10-25", dateDue: "2025-11-01", dateIn: null, borrowerName: "Beatriz Lima" },
    ]
  },
];

export const MOCK_USERS: User[] = [
  {
    id: "u1",
    name: "João Silva",
    email: "joao.silva@exemplo.com",
    memberId: "MEM-001",
    status: "Ativo",
    booksOut: ["1", "9"],
    moviesOut: ["m1"]
  },
  {
    id: "u2",
    name: "Maria Oliveira",
    email: "maria.oliveira@exemplo.com",
    memberId: "MEM-002",
    status: "Ativo",
    booksOut: ["3"],
    moviesOut: ["m3"]
  },
  {
    id: "u3",
    name: "Pedro Santos",
    email: "pedro.santos@exemplo.com",
    memberId: "MEM-003",
    status: "Ativo",
    booksOut: ["7"],
    moviesOut: []
  },
  {
    id: "u4",
    name: "Ana Costa",
    email: "ana.costa@exemplo.com",
    memberId: "MEM-004",
    status: "Ativo",
    booksOut: ["9"],
    moviesOut: ["m7"]
  },
  {
    id: "u5",
    name: "Carlos Mendes",
    email: "carlos.mendes@exemplo.com",
    memberId: "MEM-005",
    status: "Ativo",
    booksOut: ["12"],
    moviesOut: ["m9"]
  },
  {
    id: "u6",
    name: "Beatriz Lima",
    email: "beatriz.lima@exemplo.com",
    memberId: "MEM-006",
    status: "Ativo",
    booksOut: [],
    moviesOut: ["m12"]
  },
  {
    id: "u7",
    name: "Ricardo Alves",
    email: "ricardo.alves@exemplo.com",
    memberId: "MEM-007",
    status: "Inativo",
    booksOut: [],
    moviesOut: []
  },
  {
    id: "u8",
    name: "Fernanda Rocha",
    email: "fernanda.rocha@exemplo.com",
    memberId: "MEM-008",
    status: "Ativo",
    booksOut: [],
    moviesOut: []
  },
  {
    id: "u9",
    name: "Lucas Martins",
    email: "lucas.martins@exemplo.com",
    memberId: "MEM-009",
    status: "Inativo",
    booksOut: [],
    moviesOut: []
  },
  {
    id: "u10",
    name: "Juliana Souza",
    email: "juliana.souza@exemplo.com",
    memberId: "MEM-010",
    status: "Ativo",
    booksOut: [],
    moviesOut: []
  },
];

// Mock do usuário autenticado
export const MOCK_AUTH_USER = MOCK_USERS[0];

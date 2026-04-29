import { Company } from '../models/company.model';

export const COMPANY_LIST: Company[] = [
  {
    id: 1,
    name: 'Google',
    package: '30 LPA',
    minPackage: '28 LPA',
    date: 'Oct 25, 2024',
    cgpa: 8.5,
    branches: 'CSE, IT, ECE',
    roles: ['Software Engineer', 'Product Manager', 'Data Scientist'],
    salary: {
      base: '25 LPA',
      bonus: '5 LPA',
      total: '30 LPA'
    },
    rounds: 4,
    selectionProcess: ['Online Assessment', 'Technical Round 1', 'Technical Round 2', 'HR Round'],
    workLocation: 'Bangalore, Hyderabad',
    companyLink: 'https://google.com'
  },
  {
    id: 2,
    name: 'Microsoft',
    package: '28 LPA',
    minPackage: '26 LPA',
    date: 'Nov 10, 2024',
    cgpa: 8.0,
    branches: 'CSE, IT',
    roles: ['Software Developer', 'Cloud Engineer', 'AI/ML Engineer'],
    salary: {
      base: '24 LPA',
      bonus: '4 LPA',
      total: '28 LPA'
    },
    rounds: 4,
    selectionProcess: ['Online Test', 'Code Interview', 'System Design', 'HR Discussion'],
    workLocation: 'Bangalore, Hyderabad, Pune',
    companyLink: 'https://microsoft.com'
  },
  {
    id: 3,
    name: 'TCS',
    package: '7 LPA',
    minPackage: '6.5 LPA',
    date: 'Nov 02, 2024',
    cgpa: 6.5,
    branches: 'All Branches',
    roles: ['System Engineer', 'Associate Engineer'],
    salary: {
      base: '7 LPA',
      total: '7 LPA'
    },
    rounds: 3,
    selectionProcess: ['Written Exam', 'Technical Interview', 'HR Round'],
    workLocation: 'Multiple Locations',
    companyLink: 'https://tcs.com'
  },
  {
    id: 4,
    name: 'Amazon',
    package: '32 LPA',
    minPackage: '30 LPA',
    date: 'Oct 15, 2024',
    cgpa: 8.5,
    branches: 'CSE, IT',
    roles: ['SDE', 'SDE Intern', 'Data Engineer'],
    salary: {
      base: '26 LPA',
      bonus: '6 LPA',
      total: '32 LPA'
    },
    rounds: 4,
    selectionProcess: ['Online Assessment', 'Two Technical Rounds', 'Bar Raiser Round', 'HR Round'],
    workLocation: 'Bangalore',
    companyLink: 'https://amazon.com'
  },
  {
    id: 5,
    name: 'Infosys',
    package: '8 LPA',
    minPackage: '7.5 LPA',
    date: 'Dec 01, 2024',
    cgpa: 6.0,
    branches: 'All Branches',
    roles: ['Systems Engineer', 'Specialist Programmer'],
    salary: {
      base: '8 LPA',
      total: '8 LPA'
    },
    rounds: 2,
    selectionProcess: ['Online Assessment', 'Interview'],
    workLocation: 'Various Cities',
    companyLink: 'https://infosys.com'
  },
  {
    id: 6,
    name: 'Meta',
    package: '35 LPA',
    minPackage: '33 LPA',
    date: 'Sep 20, 2024',
    cgpa: 8.8,
    branches: 'CSE, IT',
    roles: ['Software Engineer', 'Research Engineer', 'Analytics Engineer'],
    salary: {
      base: '28 LPA',
      bonus: '7 LPA',
      total: '35 LPA'
    },
    rounds: 4,
    selectionProcess: ['Coding Challenge', 'Phone Screen', 'Technical Interview', 'Onsite/Final Round'],
    workLocation: 'Bangalore',
    companyLink: 'https://meta.com'
  }
];

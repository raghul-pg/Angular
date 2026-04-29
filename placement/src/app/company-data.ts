export interface Company {
  name: string;
  package: string;
  date: string;
  cgpa: number;
  branches: string;
  logo: string;
}

export const COMPANY_LIST: Company[] = [
  {
    name: 'Google',
    package: '30 LPA',
    date: 'Oct 25, 2024',
    cgpa: 8.5,
    branches: 'CSE, IT',
    logo: 'https://clearbit.com'
  },
  {
    name: 'TCS',
    package: '7 LPA',
    date: 'Nov 02, 2024',
    cgpa: 6.5,
    branches: 'All Branches',
    logo: 'https://clearbit.com'
  }
];
export interface Company {
  id: number;
  name: string;
  package: string;
  minPackage?: string;
  date: string;
  cgpa: number;
  branches: string;
  roles: string[];
  salary: {
    base: string;
    bonus?: string;
    total: string;
  };
  rounds: number;
  selectionProcess: string[];
  workLocation?: string;
  companyLink?: string;
}

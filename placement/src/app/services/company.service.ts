import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { FilterCriteria } from '../models/filter.model';
import { COMPANY_LIST } from '../data/company-data';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companiesSubject = new BehaviorSubject<Company[]>(COMPANY_LIST);
  public companies$ = this.companiesSubject.asObservable();

  private filteredCompaniesSubject = new BehaviorSubject<Company[]>(COMPANY_LIST);
  public filteredCompanies$ = this.filteredCompaniesSubject.asObservable();

  constructor() {}

  getAllCompanies(): Company[] {
    return this.companiesSubject.value;
  }

  filterCompanies(criteria: FilterCriteria): Company[] {
    let filtered = this.companiesSubject.value;

    // Filter by CGPA - show companies where user's CGPA is >= company's minimum CGPA
    if (criteria.cgpa > 0) {
      filtered = filtered.filter(c => c.cgpa <= criteria.cgpa);
    }

    // Filter by branch
    if (criteria.selectedBranch && criteria.selectedBranch !== 'All') {
      filtered = filtered.filter(c =>
        c.branches.toLowerCase().includes(criteria.selectedBranch!.toLowerCase())
      );
    }

    this.filteredCompaniesSubject.next(filtered);
    return filtered;
  }

  getCompanyById(id: number): Company | undefined {
    return this.companiesSubject.value.find(c => c.id === id);
  }

  getUniqueBranches(): string[] {
    const branches = new Set<string>();
    this.companiesSubject.value.forEach(c => {
      c.branches.split(',').forEach(b => branches.add(b.trim()));
    });
    return Array.from(branches).sort();
  }
}

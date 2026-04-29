import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyService } from './services/company.service';
import { Company } from './models/company.model';
import { FilterCriteria } from './models/filter.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  filteredCompanies: Company[] = [];
  uniqueBranches: string[] = [];
  
  // Filter criteria
  userCGPA: number = 0;
  selectedBranch: string = 'All';
  
  // UI state
  expandedCompanyId: number | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companies = this.companyService.getAllCompanies();
    this.filteredCompanies = [...this.companies];
    this.uniqueBranches = this.companyService.getUniqueBranches();
  }

  onFilterChange() {
    const criteria: FilterCriteria = {
      cgpa: this.userCGPA,
      selectedBranch: this.selectedBranch
    };

    this.filteredCompanies = this.companyService.filterCompanies(criteria);
  }

  toggleDetails(companyId: number) {
    this.expandedCompanyId = this.expandedCompanyId === companyId ? null : companyId;
  }

  resetFilters() {
    this.userCGPA = 0;
    this.selectedBranch = 'All';
    this.filteredCompanies = [...this.companies];
    this.expandedCompanyId = null;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loan-application.html',
  styleUrls: ['./loan-application.css']
})
export class LoanApplicationComponent {

  formData = {
    applicant: {
      dob: '',
      email: '',
      employmentType: '',
      lengthOfEmployment: '',
      income: {
        incomeFrequency: '',
        primaryIncomeAmt: null,
        rentOwn: '',
        rentPayment: null
      },
      address: {
        addressType: '',
        streetName: '',
        streetNbr: '',
        city: '',
        state: '',
        country: '',
        zip: ''
      }
    },
    channel: 'WEB',
    externalApplicationId: '',
    productType: '',
    requestedAmount: null,
    termMonths: null,
    ssn: ''
  };

  decisionResult: any = null;
  errorMessage: string = '';

  constructor(private loanService: LoanService) {}

submitApplication() {

  this.loanService.submitApplication(this.formData)
    .subscribe({
      next: (response) => {

        console.log("Backend Response:", response);

        this.decisionResult = response;

      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  }
}
export interface LoanResponse {

  id: number;

  externalApplicationId: string;

  applicationNumber: string;

  requestedAmount: number;

  termMonths: number;

  productType: string;

  channel: string;

  decisionResult: string;

  status: string;

  decisionReasons: {
    decision: string;
    reasons: string[];
  };

  applicant: any;

  createdAt: string;

}
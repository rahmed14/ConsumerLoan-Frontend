# 4️⃣ README — `Consumerloan-Frontend`

# Tech Stack
•	Angular 
•	TypeScript 
•	HTML 
•	CSS 
•	REST API integration 
•	Docker 
•	Nginx 
•	AWS EC2 
 
# Features
•	Loan application form UI 
•	Applicant data input 
•	API integration with backend 
•	Display response on UI 
•	Simple full-stack demo flow 
•	Docker-ready frontend deployment 
•	Static deployment using Nginx 
 
# Main Screens
•	Application intake form 
•	Applicant details section 
•	Income and address inputs 
•	Response / result display 
 
# How to Run Locally
1. Clone the repository
git clone <your-github-link>
cd Consumerloan-Frontend
2. Install dependencies
npm install
3. Configure backend API URL
Make sure your Angular service points to the backend endpoint:
Example:
http://localhost:9097/consumerloans/loan/applications
4. Run locally
ng serve
5. Open in browser
http://localhost:4200
 
# Production / Deployment Notes
This frontend can be built and deployed as a static app using Nginx.
Build production bundle
ng build --configuration production
Docker-ready deployment
Can be deployed using Docker + Nginx and hosted on AWS EC2.
 
# Future Enhancements
•	Better form validation 
•	Response page improvements 
•	Better UI styling / responsiveness 
•	Add decision timeline display 
•	Add error handling and loading indicators 

---

# 🔥 RECOMMENDED EXTRA FILES FOR ALL REPOS

For each repo, also add:

## `.gitignore`
If not already there.

## `screenshots/`
Later add:
- UI screenshots
- Postman screenshots
- architecture image

## `LICENSE` (optional)
MIT License is fine.

---
## `README.md`

```md
# ConsumerLoan Frontend

## Overview
ConsumerLoan Frontend is the Angular-based user interface for the Consumer Loan Decision Engine system.

It provides a simple web interface where users can:
- enter loan application details
- submit a loan application
- view the response / decision result

This frontend communicates with the backend ConsumerLoans Main Service using REST APIs.

---

## What It Does

This project serves as the frontend client for the loan decisioning system.

It allows users to:
- input applicant and application data
- submit loan requests to the backend
- display application response results
- simulate a real-world lending application intake UI

This project is intended to demonstrate full-stack integration between Angular and Spring Boot services.

---

## Architecture Diagram

```text
User
 |
 v
Angular Frontend
 |
 v
ConsumerLoans Main Service
 |---------------------> Fraud Service
 |---------------------> Post-Bureau Service
UI Flow
Loan Application Form
        |
        v
Submit to Backend API
        |
        v
Receive Response
        |
        v
Display Result / Decision
 



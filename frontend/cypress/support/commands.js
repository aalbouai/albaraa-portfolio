// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to login as admin
Cypress.Commands.add('loginAsAdmin', () => {
  cy.visit('/signin');
  cy.get('input[name="email"]').type('admin@portfolio.com');
  cy.get('input[type="password"]').type('admin123');
  cy.get('button[type="submit"]').click();
  cy.contains('admin', { timeout: 10000 }).should('be.visible');
});

// Custom command to logout
Cypress.Commands.add('logout', () => {
  cy.contains('Sign Out').click();
  cy.contains('Sign In').should('be.visible');
});


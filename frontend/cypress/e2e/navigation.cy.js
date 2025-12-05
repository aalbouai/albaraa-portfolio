describe('Portfolio Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page', () => {
    cy.contains('Albaraa').should('be.visible');
    cy.contains('Web Application Developer').should('be.visible');
  });

  it('should navigate to About page', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Me').should('be.visible');
  });

  it('should navigate to Projects page', () => {
    cy.contains('Projects').click();
    cy.url().should('include', '/projects');
    cy.contains('My Projects').should('be.visible');
  });

  it('should navigate to Education page', () => {
    cy.contains('Education').click();
    cy.url().should('include', '/education');
    cy.contains('Education').should('be.visible');
  });

  it('should navigate to Contact page', () => {
    cy.contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.contains('Get In Touch').should('be.visible');
  });
});


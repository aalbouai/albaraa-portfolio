describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('should display contact form', () => {
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="subject"]').should('be.visible');
    cy.get('textarea[name="message"]').should('be.visible');
  });

  it('should submit contact form successfully', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="subject"]').type('Test Subject');
    cy.get('textarea[name="message"]').type('This is a test message from Cypress E2E testing.');
    
    cy.get('button[type="submit"]').click();
    
    // Wait for success message
    cy.contains('Message sent successfully', { timeout: 10000 }).should('be.visible');
  });

  it('should show validation errors for empty fields', () => {
    cy.get('button[type="submit"]').click();
    
    // Check for HTML5 validation or custom error messages
    cy.get('input[name="name"]:invalid').should('exist');
  });
});


describe('Authentication Flow', () => {
  it('should navigate to sign in page', () => {
    cy.visit('/');
    cy.contains('Sign In').click();
    cy.url().should('include', '/signin');
  });

  it('should navigate to sign up page', () => {
    cy.visit('/');
    cy.contains('Sign Up').click();
    cy.url().should('include', '/signup');
  });

  it('should sign in as admin', () => {
    cy.visit('/signin');
    
    cy.get('input[name="email"]').type('admin@portfolio.com');
    cy.get('input[type="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    
    // Wait for redirect and check for admin username
    cy.contains('admin', { timeout: 10000 }).should('be.visible');
    cy.contains('Dashboard').should('be.visible');
  });

  it('should access admin dashboard', () => {
    // First sign in as admin
    cy.visit('/signin');
    cy.get('input[name="email"]').type('admin@portfolio.com');
    cy.get('input[type="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    
    // Navigate to dashboard
    cy.contains('Dashboard', { timeout: 10000 }).click();
    cy.url().should('include', '/dashboard');
    cy.contains('Admin Dashboard').should('be.visible');
  });

  it('should sign out successfully', () => {
    // First sign in
    cy.visit('/signin');
    cy.get('input[name="email"]').type('admin@portfolio.com');
    cy.get('input[type="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    
    // Wait for sign in to complete
    cy.contains('admin', { timeout: 10000 }).should('be.visible');
    
    // Sign out
    cy.contains('Sign Out').click();
    
    // Verify signed out
    cy.contains('Sign In').should('be.visible');
  });
});


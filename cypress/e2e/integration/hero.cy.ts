describe('Tests for the root page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('must render a "Start Cooking" button that upon being clicked redirects to the Login page', () => {
    cy.findByRole('button', { name: /Start Cooking/ }).click();
    cy.findByRole('button', { name: /Sign in/ });
  });
});

describe('Test Testing', () => {
  it('Check main page', () => {
    cy.visit('/')
    cy.contains('Hello, World!')
  })
})

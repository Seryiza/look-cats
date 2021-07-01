const IMAGES_PER_PAGE = 3

describe('Cat images tests', () => {
  it('Start page contains some images and can load more', () => {
    cy.visit('/')
    cy.get('img').should('have.lengthOf', 1 * IMAGES_PER_PAGE)

    cy.contains('Load more').click()
    cy.get('img').should('have.lengthOf', 2 * IMAGES_PER_PAGE)
  })
})

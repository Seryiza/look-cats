import { applyMediaBlockFixtures } from '../support/fixturesAppliers'

const IMAGES_PER_PAGE = 4

describe('Cat images tests', () => {
  it('Start page contains some images and can load more', () => {
    applyMediaBlockFixtures()

    cy.visit('/')
    cy.get('[data-cy="cat-photo"]').should('have.lengthOf', 1 * IMAGES_PER_PAGE)

    cy.get('[data-cy="load-more-button"]').click()
    cy.get('[data-cy="cat-photo"]').should('have.lengthOf', 2 * IMAGES_PER_PAGE)
  })
})

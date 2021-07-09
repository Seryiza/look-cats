import { applyMediaBlockFixtures } from '../support/fixturesAppliers'

describe('Cat facts tests', () => {
  it('Start page contains a fact and can load more', () => {
    applyMediaBlockFixtures()

    cy.visit('/')
    cy.get('[data-cy="cat-fact"]').should('not.empty')
    cy.get('[data-cy="cat-fact"]').should('have.lengthOf', 1)

    cy.get('[data-cy="load-more-button"]').click()
    cy.get('[data-cy="cat-fact"]').should('have.lengthOf', 2)
  })
})

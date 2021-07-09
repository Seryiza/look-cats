export const applyMediaBlockFixtures = () => {
  cy.intercept('GET', 'https://cataas.com/cat?json=true', { fixture: 'catPhoto.json' })
  cy.intercept('GET', 'https://cat-facts-proxy.seryiza.xyz/random-fact', { fixture: 'catFact.json' })
}

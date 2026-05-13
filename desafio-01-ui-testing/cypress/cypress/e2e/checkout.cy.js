describe('Checkout', () => {

  beforeEach(() => {

    cy.visit('/')

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
  })

  it('Deve realizar checkout completo com sucesso', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    cy.get('.shopping_cart_link')
      .click()

    cy.get('[data-test="checkout"]')
      .click()

    cy.get('[data-test="firstName"]')
      .type('Matheus')

    cy.get('[data-test="lastName"]')
      .type('Souza')

    cy.get('[data-test="postalCode"]')
      .type('87000-000')

    cy.get('[data-test="continue"]')
      .click()

    cy.get('[data-test="finish"]')
      .click()

    cy.contains('Thank you for your order!')
      .should('be.visible')
  })
})
describe('Carrinho de compras', () => {

  beforeEach(() => {

    cy.visit('/')

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
  })

  it('Deve adicionar produto ao carrinho', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1')
  })

  it('Deve remover produto do carrinho', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .click()

    cy.get('.shopping_cart_badge')
      .should('not.exist')
  })
})
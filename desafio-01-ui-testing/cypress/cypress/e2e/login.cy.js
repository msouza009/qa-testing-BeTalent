describe('Realizando Login no sistema', () => {
  const realizarLogin = (usuario) => {
    cy.visit('/')
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  }

  it('Deve realizar login com sucesso utilizando usuário padrão', () => {
    realizarLogin('standard_user')
    cy.get('.app_logo').should('be.visible')
  })

  it('Deve exibir mensagem de erro ao tentar login com usuário bloqueado', () => {
    realizarLogin('locked_out_user')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.')
  })

  it('Deve realizar login com usuário problem_user', () => {
    realizarLogin('problem_user')
    cy.get('.app_logo').should('be.visible')
  })

  it('Deve realizar login com usuário performance_glitch_user', () => {
    realizarLogin('performance_glitch_user')
    cy.get('.app_logo').should('be.visible')
  })

  it('Deve realizar login com usuário error_user', () => {
    realizarLogin('error_user')
    cy.get('.app_logo').should('be.visible')
  })

  it('Deve realizar login com usuário visual_user', () => {
    realizarLogin('visual_user')
    cy.get('.app_logo').should('be.visible')
  })
  
  it('Deve deslogar com usuário standard', () => {
    realizarLogin('standard_user')
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('[data-test="username"]').should('be.visible')
  })
  
})
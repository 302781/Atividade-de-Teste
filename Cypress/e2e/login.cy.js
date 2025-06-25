describe('Teste sauce demo', () => {
  it('Teste login valido', (standerd_user) => {
    //Login Valido
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user"),
      cy.get('[data-test="password"]').type("secret_sauce"),
      cy.get('[data-test="login-button"]').click();

    //Login Invalido
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("locked_out_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="error"]')
    cy.get('[data-test="login-button"]').click();

    //Logout
    cy.get('.header_label')
    cy.get('react-burger-menu-btn').click();
    cy.get('.bm-menu')
    cy.get('[data-test="logout-sidebar-link"]').click();


  })
});
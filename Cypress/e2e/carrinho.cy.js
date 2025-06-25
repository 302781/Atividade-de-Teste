describe('Teste sauce demo', () => {
  it('Teste carrinho valido', (standerd_user) => {
    //login
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user"),
    cy.get('[data-test="password"]').type("secret_sauce"),
    cy.get('[data-test="login-button"]').click();
    
    //Adicionar ao carrinho
    cy.get(':nth-child(1) > [data-test="inventory-item-description"]')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();

    //Validaçao de Itens
    cy.get('[data-test="cart-list"]')

    //remover do carrinho
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="continue-shopping"]').click();

    //Finalizar compra
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="continue-shopping"]').click();

  })
})
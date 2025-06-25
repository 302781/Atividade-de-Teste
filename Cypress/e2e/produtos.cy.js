describe('Teste sauce demo', () => {
  it('Teste produtos valido', (standerd_user) => {
    //login
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user"),
    cy.get('[data-test="password"]').type("secret_sauce"),
    cy.get('[data-test="login-button"]').click();
    
    //lista de Produtos
    cy.get('[data-test="inventory-container"]')

    //Ordem dos Produtos
    cy.get('[data-test="product-sort-container"]')
    cy.get('.select_container').click();

    //Produto1
  //cy.get(':nth-child(1) > [data-test="inventory-item-description"]')
  //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    //Produto2
  //cy.get(':nth-child(2) > [data-test="inventory-item-description"]')
  //cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    //Produto3
  //cy.get(':nth-child(3) > [data-test="inventory-item-description"]')
  //cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    //Produto4
  //cy.get(':nth-child(4) > [data-test="inventory-item-description"]')
  //cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

    //Produto5
  //cy.get(':nth-child(5) > [data-test="inventory-item-description"]')
  //cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();

    //Produto6
  //cy.get(':nth-child(6) > [data-test="inventory-item-description"]')
  //cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

  })
})
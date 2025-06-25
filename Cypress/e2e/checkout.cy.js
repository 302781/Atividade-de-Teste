describe('Teste sauce demo', () => {
  it('Teste checkount valido', (standerd_user) => {
    //login
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user"),
      cy.get('[data-test="password"]').type("secret_sauce"),
      cy.get('[data-test="login-button"]').click();

    //Adicionar ao carrinho
    cy.get(':nth-child(1) > [data-test="inventory-item-description"]')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    //Carrinho de Compras
    cy.get('[data-test="shopping-cart-link"]').click();

    //checkout
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="checkout-info-container"]')

    //Informaçoes
    cy.get('.checkout_info')
    cy.get('[data-test="firstName"]').type("Maria")
    cy.get('[data-test="lastName"]').type("Silva")
    cy.get('[data-test="postalCode"]').type("00.000-000")

    //Botao Continuar
    cy.get('[data-test="continue"]').click();

    //Descriçao do produto
    cy.get('[data-test="checkout-summary-container"] > :nth-child(1)')
    cy.get('[data-test="cart-list"]')

    //Informaçao de Pagamento
    cy.get('[data-test="payment-info-label"]')
    cy.get('[data-test="payment-info-value"]')

    cy.get('[data-test="shipping-info-label"]')
    cy.get('[data-test="shipping-info-value"]')

    cy.get('[data-test="total-info-label"]')
    cy.get('[data-test="subtotal-label"]')
    cy.get('[data-test="tax-label"]')
    cy.get('[data-test="total-label"]')


    //Botao para finalizar/cancelar
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="cancel"]')

    //Mensagem de finalizado as compras
    cy.get('[data-test="checkout-complete-container"]')
    cy.get('[data-test="back-to-products"]')
  })
})
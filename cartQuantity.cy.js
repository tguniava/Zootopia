describe('Cart functionality', () => {

  it('User should add product to cart', () => {

    cy.openSite()

    cy.get('.product-card').first().click()

    cy.contains('კალათაში დამატება').click()

    cy.get('.cart-icon').click()

    cy.contains('კალათა').should('exist')
    cy.get('.cart-item').should('have.length.greaterThan', 0)

  })

})
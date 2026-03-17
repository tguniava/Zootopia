describe("Cart Tests", () => {

it("User adds product to cart", () => {

cy.fixture("user").then((user)=>{

cy.login(user.email,user.password)

})

cy.contains("პროდუქტები").click()

cy.get(".add-to-cart").first().click()

cy.get(".cart-count").should("contain","1")
cy.contains("კალათა").click()

cy.get(".cart-item").should("exist")

})

})
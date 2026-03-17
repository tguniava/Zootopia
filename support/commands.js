describe("Login Test", () => {

it("User logs in", () => {

cy.login("testuser123@gmail.com","Test12345")

cy.url().should("include","profile")
cy.contains("პროფილი").should("exist")

})

})
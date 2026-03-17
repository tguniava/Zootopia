describe("Registration Tests", () => {

it("User registers successfully", () => {

cy.visit("https://testzootopia.loremipsum.ge/ka")

cy.contains("რეგისტრაცია").click()

cy.get("#name").type("Tamar guniava")
cy.get("#email").type("test@gmail.com")
cy.get("#password").type("Tamara123")

cy.get("button").contains("რეგისტრაცია").click()

cy.url().should("include", "profile")
cy.contains("პროფილი").should("exist")

})

it("Registration fails with empty fields", () => {

cy.visit("https://testzootopia.loremipsum.ge/ka")

cy.contains("რეგისტრაცია").click()

cy.get("button").contains("რეგისტრაცია").click()

cy.contains("აუცილებელია").should("exist")
cy.url().should("include", "register")

})

})
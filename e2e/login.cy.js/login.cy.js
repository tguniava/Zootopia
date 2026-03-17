describe("Login Tests", () => {

it("User logs in successfully", () => {

cy.fixture("user").then((user)=>{

cy.login(user.email, user.password)

})

cy.url().should("include","profile")
cy.contains("პროფილი").should("exist")

})

it("Login fails with wrong password", () => {

cy.visit("https://testzootopia.loremipsum.ge/ka")

cy.contains("შესვლა").click()

cy.get("[type=email]").type("tamara@gmail.com")
cy.get("[type=password]").type("wrongpassword")

cy.get("button").contains("შესვლა").click()

cy.contains("არასწორი").should("exist")
cy.url().should("include","login")

})

})
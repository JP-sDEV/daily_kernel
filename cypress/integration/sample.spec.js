describe("tech-news", () =>{

    it("has a news title", () => {
        cy.visit("localhost:3000")
        cy.contains('Wikimedia')
    })
})
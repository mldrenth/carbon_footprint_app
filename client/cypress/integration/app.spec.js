describe('App', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    }) // ADDED
    
    it("Loads the app", () => {
        const header = cy.get('h1')
    })

    it("Electricity value is set to 4500", () =>{
        const elecInput = cy.get('#electricity-input')
  })

})
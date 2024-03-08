
it("To test the Autocompletion Feature of cypress",()=>{
    cy.visit("https://www.google.com/")
    cy.get("textarea[name='q']").type("cypress")
    cy.get("[role='option']").each(function($ele,index,$list){

        if($ele.text().includes("cypress documentation")){
            cy.wrap($ele).click()
        }
    })
})
it.only("To test the Autocompletion Feature of cypress",()=>{
    cy.visit("https://www.google.com/")
    cy.get("textarea[name='q']").type("{shift+alt+b}cypress")
})
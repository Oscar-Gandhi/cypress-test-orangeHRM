/// <reference types = "cypress" />
describe("To test UserManagment Page",function(){
    before(()=>{
        cy.fixture("crediantials.json").then(data=>{
            this.username = data.username
            this.password = data.password
        })
        cy.fixture("userManagment.json").then(data=>{
            this.testdata = data
        })
    })
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.loginToHRM(this.username,this.password)
    })
    it("To test UserManagment",()=>{

    })
})
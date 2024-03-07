/// <reference types = "cypress" />
import userManagementModules from "../modules/userManagementModules"
describe("To test UserManagment Page",function(){
    before(()=>{
        cy.fixture("userManagment.json").then(data=>{
            this.testdata = data
        })
    })
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.loginToHRM(this.username,this.password)
    })
    it("To test UserManagment",()=>{
        const userData = this.testdata[0]
        userManagementModules.createUser(userData)
    })
})
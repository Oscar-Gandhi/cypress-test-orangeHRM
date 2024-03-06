import loginPageModules from "../modules/loginPageModules"


describe("To test Login Page Functionality",function(){
    before(() => {
        cy.fixture("loginPage.json").then(data=>{
            this.testdata = data
        })
    })
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("Login to orangeHRM as Admin and check the title of the page",()=>{
        //with valid username and password
        const loginData = this.testdata[0]
        loginPageModules.loginToHRM(loginData)
    })
    it("Logout from orangeHRM as Admin",()=>{
        //with valid username and password
        const loginData = this.testdata[0]
        loginPageModules.loginToHRM(loginData)
        loginPageModules.logoutFromHRM(loginData)
    })

})
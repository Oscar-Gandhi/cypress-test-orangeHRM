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
    it("Login to OrangeHrm using invalid cred and check error message",()=>{
        //with invalid username and password
        const loginData = this.testdata[1]
        loginPageModules.loginToHRM(loginData)
    })
    it("Login to OrangeHrm using Correct Username and Wrong Password and check error message",()=>{
        //with valid username and invalid password
        const loginData = this.testdata[2]
        loginPageModules.loginToHRM(loginData)
    })
    it("Login to OrangeHrm giving no Username and password",()=>{
        //with valid username and invalid password
        const loginData = this.testdata[3]
        loginPageModules.loginToHRM(loginData)
    })
    it("Verify Forgot password",()=>{
        //with valid username and invalid password
        loginPageModules.forgotPassword()
    })

})
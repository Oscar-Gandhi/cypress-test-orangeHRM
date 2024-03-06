
class loginPageLocators{

    elements = {
        userName: ()=> cy.get("input[name='username']"),
        password:()=> cy.get("input[name='password']"),
        loginButton:()=> cy.get("button[type='submit']"),
        titleCheck:()=> cy.contains("OrangeHRM"),
        userAbout: ()=> cy.get("p.oxd-userdropdown-name"),
        logoutButton: ()=> cy.get("a[href='/web/index.php/auth/logout']"),
        credErrorMessage: ()=> cy.contains("Invalid credentials"),
        noCred:()=> cy.contains("Required"),
        forgotPassword: ()=> cy.contains("Forgot your password? "),
        resetPassButton: ()=> cy.get("button[type='submit']")
    }
}

export default new loginPageLocators()
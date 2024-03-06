
class loginPageLocators{

    elements = {
        userName: ()=> cy.get("input[name='username']"),
        password:()=> cy.get("input[name='password']"),
        loginButton:()=> cy.get("button[type='submit']"),
        titleCheck:()=> cy.contains("OrangeHRM"),
        userAbout: ()=> cy.get("p.oxd-userdropdown-name"),
        logoutButton: ()=> cy.get("a[href='/web/index.php/auth/logout']"),
    }
}

export default new loginPageLocators()
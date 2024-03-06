import loginPageLocators from "../locators/loginPageLocators";

const elements = loginPageLocators.elements

class loginPageModules{

    loginToHRM(data){
        //Enter UserName 
        elements.userName().should("exist").type(data.userName)
        //Enter Password
        elements.password().should("exist").type(data.password)
        //Click on LoginButton 
        elements.loginButton().should("be.visible").click()
        //Check the title of the page
        elements.titleCheck().should("include.text",data.title)
    }

    logoutFromHRM(data){
        //Click on User About section
        elements.userAbout().should("exist").click()
        //click on Logout Button 
        elements.logoutButton().should("exist").click()
        //check the Title of the page again 
        elements.titleCheck().should("include.text",data.title)
    }


}

export default new loginPageModules
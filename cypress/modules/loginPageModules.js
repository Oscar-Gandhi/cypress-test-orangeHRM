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
        if(data.validCred == "Yes"){
        //Check the title of the page
        elements.titleCheck().should("include.text",data.title)
        }
        else if(data.validCred == "No"){
            elements.credErrorMessage().should("include.text",data.errorMessage)
        }
        else if(data.noCred == "Yes"){
            elements.noCred().should("be.visible").and("have.text",data.noCredText)
        }
}

    logoutFromHRM(data){
        //Click on User About section
        elements.userAbout().should("exist").click()
        //click on Logout Button 
        elements.logoutButton().should("exist").click()
        //check the Title of the page again 
        elements.titleCheck().should("include.text",data.title)
    }
    forgotPassword(data){
        //Click on Forgot password 
        elements.forgotPassword().should("be.visible").click()
        //Verify Reset Password Button
        elements.resetPassButton().should("be.visible")
    }


}

export default new loginPageModules
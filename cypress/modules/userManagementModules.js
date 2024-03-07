import userManagementlocators from "../locators/userManagementlocators";

const elements = userManagementlocators.elements
class userManagementModules {

    createUser(data){
        //Click on Admin Page and create a user 
        elements.adminPage().should("exist").click()
        elements.addUser().should("be.visible").click()
        //Add User Role 
        elements.userRole().should("exist").click()
        cy.wait(1500)
        elements.empName().should("be.visible").clear().type(data.empName)
        elements.userStatus().should("be.visible").click()
        cy.wait(1500)
    }

}

export default new userManagementModules
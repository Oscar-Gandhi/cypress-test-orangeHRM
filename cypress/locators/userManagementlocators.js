class userManagement{

    elements = {

        adminPage:()=> cy.contains("Admin"),
        addUser:()=> cy.contains(" Add "),
        userRole: ()=> cy.get("div.oxd-select-text-input").first(),
        userStatus: ()=> cy.get("div.oxd-select-text-input").last(),
        empName: ()=> cy.get("input[placeholder='Type for hints...']"),
    }
}

export default new userManagement()
class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    enterUsername(username) {
        cy.get('input[name="username"]').type(username)
    }

    enterPassword(password) {
        cy.get('input[name="password"]').type(password)
    }

    clickSubmit() {
        cy.get('button[type="submit"]').click()
    }
}

export default LoginPage

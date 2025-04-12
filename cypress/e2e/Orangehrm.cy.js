import LoginPage from '../support/LoginPage'

const loginPage = new LoginPage()

describe('Login Tests for OrangeHRM', () => {

    beforeEach(() => {
        loginPage.visit()
    })

    it(' Suceesfully Login', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickSubmit()
        cy.get('h6').should('contain', 'Dashboard')
    })

    it('Failed Login, wrong Username', () => {
        loginPage.enterUsername('Adminn')
        loginPage.enterPassword('admin123')
        loginPage.clickSubmit()
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
    })

    it('Failed Login, Wrong Password', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('salahPassword')
        loginPage.clickSubmit()
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
    })

    it('Failed Login fill blank username & password', () => {
        loginPage.clickSubmit()
        cy.get('.oxd-input-field-error-message').should('contain', 'Required').and('have.length', 2)
    })

})

describe('Testing Menu PIM', () => {
    it.only('Successfully add Employee', () => {
      // Login
      cy.login('Admin', 'admin123')
  
      // Tunggu sampai dashboard muncul (tanda login berhasil)
      cy.get('.oxd-topbar-header-breadcrumb', { timeout: 10000 })
        .should('contain', 'Dashboard')

        // Klik menu PIM
      cy.contains('.oxd-main-menu-item', 'PIM').click()
      cy.contains('.oxd-topbar-body-nav-tab-item','Add Employee').click()
  
      // Isi form employee pakai custom command
      cy.FormEmployee({
        FirstName: 'Irfan',
        MiddleName: 'baru',
        LastName: 'ghafur',
        id: '3207'// harus diganti setiap saat melakukan pengujian
      })
    cy.contains('button', 'Save').click()
      //cy.get('.oxd-button.oxd-button--medium oxd-button--secondary orangehrm-left-space').click()
      //cy.url().should('include', '/pim/viewPersonalDetails')
      cy.get('.orangehrm-main-title').should('contain', 'Personal Details')
    })
    it('Successfully searches employee by name', () => {
        cy.login('Admin', 'admin123')
      
        cy.get('.oxd-topbar-header-breadcrumb', { timeout: 10000 })
          .should('contain', 'Dashboard')
      
        cy.contains('.oxd-main-menu-item', 'PIM').click()
      
        // Isi kolom nama dan klik saran yang muncul
        cy.get('input[placeholder="Type for hints..."]').first().type('Irfan')
        cy.wait(1000) // tunggu dropdown suggestion muncul
        cy.contains('.oxd-autocomplete-option', 'Irfan').click()
      
        // Klik tombol Search
        cy.contains('button', 'Search').click()
      
        // Verifikasi hasil
        cy.get('.oxd-table-cell').should('contain', 'Irfan')
      })
      
    })
  
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add('cadastro', (name, email, password, password2) => {
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password2)
    cy.get('[data-test="register-submit"]').click()
})

Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add('criarPerfil', (profile) => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('#mui-component-select-status').click()
    cy.get('[data-value="QAE Pleno"]').click()
    cy.get('[data-test="profile-company"]').type('Via Hub')
    cy.get('[data-test="profile-webSite"]').type('https://www.google.com/')
    cy.get('[data-test="profile-location"]').type('Maringá, PR')
    cy.get('[data-test="profile-skills"]').type('Testes manuais, Automação Cypress - API, FRONT, Regressão Visual')
    cy.get('[data-test="profile-gitHub"]').type('https://github.com/adsguilherme')
    cy.get('[data-test="profile-bio"]').type(profile)
    cy.get('[data-test="profile-submit"]').click()
})

Cypress.Commands.add('criarPerfilError', (profile) => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('[data-test="profile-company"]').type('Via Hub')
    cy.get('[data-test="profile-webSite"]').type('https://www.google.com/')
    cy.get('[data-test="profile-location"]').type('Maringá, PR')
    cy.get('[data-test="profile-gitHub"]').type('https://github.com/adsguilherme')
    cy.get('[data-test="profile-bio"]').type(profile)
    cy.get('[data-test="profile-submit"]').click()
})


// parâmetros: email e senha
/// <reference types="cypress" />

const faker = require('faker-br')

describe('US0002 - Funcionalidade: Cadastro', () => {

  beforeEach(() => {
    cy.visit('cadastrar')
  })

/*

before: Antes de tudo

beforeEach: Antes de cada cenário

after: Depois de tudo

afterEach: Depois de cada cenário


*/

  it('Deve fazer cadastro com sucesso', () => {

    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('guilhermesousa')
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
    cy.get('[data-test="register-submit"]').click()

    // Resultado esperado
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo guilhermesousa')
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Dashboard')
    cy.get('[data-test="dashboard-createProfile"]').should('exist')
    
  })
})
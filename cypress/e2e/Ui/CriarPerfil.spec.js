/// <reference types="cypress" />

const faker = require('faker-br')

var name = faker.name.firstName()
var name2 = faker.name.firstName()
var email = faker.internet.email()
var email2 = faker.internet.email()
var password = '123456'
var passwordTwo = '123456'

var profile = faker.lorem.paragraph()

describe('US0003 - Funcionalidade: Perfil', () => {

  beforeEach(() => {
    cy.visit('cadastrar')
  })

  it('Deve criar perfil com sucesso', () => {

    cy.cadastro(name, email, password, passwordTwo)
    cy.criarPerfil(profile)

    cy.url().should('contain', 'https://conexaoqa.herokuapp.com/criar-perfil')
    cy.url().should('contain', 'https://conexaoqa.herokuapp.com/dashboard')
    cy.get('[data-test="alert"]').should('be.visible')
  })

  it('Não deve cadastrar perfil sem preencher campos obrigatórios', () => {

    cy.cadastro(name2, email2, password, passwordTwo)
    cy.criarPerfilError(profile)

    cy.get('#mui-component-select-status').should('have.value', '')
    cy.get('.MuiFormHelperText-root').contains('Conhecimentos é obrigatório').should('be.visible') // Outra forma: cy.contains('p', 'Conhecimentos é obrigatório').should('be.visible')
    cy.url().should('contain', 'https://conexaoqa.herokuapp.com/criar-perfil')
  })
})


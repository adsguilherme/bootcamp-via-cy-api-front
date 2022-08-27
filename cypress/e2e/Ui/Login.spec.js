/// <reference types="cypress" />

describe('US0001 - Funcionalidade: Login', () => {
  
  beforeEach(() => {
    cy.visit('login')
  })

  it('Deve fazer login com sucesso', () => {
    //cy.visit('login')

    /*
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('guilherme.sousa-ext@viavarejo.com.br')
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('050718')
    cy.get('[data-test="login-submit"]').click()
    */

    cy.login('guilherme.sousa-ext@viavarejo.com.br', '050718')

    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo guilhermesousa') // no lugar do contain podemos usar também o have.text
  })

  it('Validar mensagem de erro quando inserir usuário ou senha inválida', () => {
   // cy.visit('login')

    /*
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('Invalidoguilherme.sousa-ext@viavarejo.com.br')
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('Invalido050718')
    cy.get('[data-test="login-submit"]').click()
    */

    cy.login('Invalidoguilherme.sousa-ext@viavarejo.com.br', 'Invlaido050718')

    cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
  })

})

/*
Funcionalidade: Login
Eu como usuário das Conexão QA
Quero fazer o login
Para editar meu perfil

Cenário: Login com sucesso
AAA
Arange - Dado - Pré-requisito -> Dado que esteja na tela de login
Action - Quando - Ação do usuário -> Quando eu inserir usuário e senha
Assert - Então - Resultado esperado -> Então deve me direcionar para o Dashboard 

---

Esquema do cenario Quando eu inserir <usuario>
E <senha>
Entao
Exemplos:
| usuario | senha |
| “fabio@bootcamp.com" | “teste@123" |
| “ana@via.com"        | “teste@123" |

---

Cenário: Validar mensagem de erro

---

Cenário: Recuperar senha

*/


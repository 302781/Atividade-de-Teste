# 🧪 Testes Automatizados com Cypress

Este projeto tem como objetivo realizar testes automatizados de uma aplicação web utilizando o framework **Cypress**. A estrutura contempla testes de login, navegação por produtos, carrinho de compras e processo de checkout.

---

## 📁 Estrutura do Projeto

```plaintext
Atividade-de-Teste-main/
├── Cypress/
│   ├── e2e/
│   │   ├── login.cy.js          # Testes de autenticação
│   │   ├── produtos.cy.js       # Testes de navegação pelos produtos
│   │   ├── carrinho.cy.js       # Testes de funcionalidades do carrinho
│   │   └── checkout.cy.js       # Testes de finalização de compra
│   ├── fixtures/
│   │   └── example.json         # Dados simulados para os testes
│   └── support/
│       ├── commands.js          # Comandos customizados do Cypress
│       └── e2e.js               # Arquivo de configuração global
├── package-lock.json
├── Cenario BDD.Teste.pdf        # Documento com o cenário de teste em BDD
```

---

## 🚀 Como executar os testes

### 1. Pré-requisitos

* Node.js instalado (recomendado usar [nvm](https://github.com/nvm-sh/nvm))
* Cypress instalado globalmente ou localmente no projeto

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar os testes

Para abrir a interface gráfica do Cypress:

```bash
npx cypress open
```

Ou para rodar os testes em modo headless (linha de comando):

```bash
npx cypress run
```

---

## 📋 Cenários de Teste

Os testes automatizados cobrem os seguintes fluxos principais:

### 🔐 Login

* Acesso com credenciais válidas
* Validação de erros com dados incorretos

### 🛍️ Produtos

* Listagem e visualização de produtos
* Ações disponíveis por item

### 🛒 Carrinho

* Adição e remoção de itens
* Atualização de quantidade

### 💳 Checkout

* Simulação de finalização de compra
* Validação de campos obrigatórios

---

## 📄 Documentação BDD

O arquivo `Cenario BDD.Teste.pdf` contém os cenários escritos em **linguagem Gherkin**, facilitando a leitura e entendimento dos testes por pessoas não técnicas.

---

## 🧠 Observações

* Você pode adicionar mais testes à pasta `Cypress/e2e/`.
* Arquivos de suporte podem conter comandos reutilizáveis para facilitar a manutenção.
* O Cypress gera relatórios de execução automaticamente (pasta `downloads/`).

---

## 🛠 Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/)
* JavaScript (ES6)
* Node.js

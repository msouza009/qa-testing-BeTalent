# Desafio 01 - UI Testing (SauceDemo)

Este projeto contém a validação funcional e automação da plataforma SauceDemo.

---

# Objetivo

Validar os principais fluxos da aplicação:
- login
- gerenciamento de produtos
- carrinho
- checkout
- logout
- navegação

---

# Tecnologias Utilizadas

- Cypress
- JavaScript
- Markdown

---

# Estrutura do Projeto

```bash
desafio-01-ui-testing/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── carrinho_compras.cy.js
│   │   └── checkout.cy.js
│   ├── fixtures/
│   ├── support/
│   ├── cypress.config.js
│   └── package.json
├── evidencias/
│   ├── login/
│   ├── carrinho/
│   └── checkout/
├── bugs.md
├── improvements.md
├── risks.md
├── test-cases.md
├── test-plan.md
└── README.md
```

# Cenários Testados

## Login

- login com usuário válido
- login com usuário bloqueado
- login com usuários especiais do SauceDemo
- validação de mensagens de erro

## Produtos

- listagem de produtos
- ordenação de produtos
- navegação entre páginas
- validação de imagens e botões

## Carrinho

- adicionar produtos
- remover produtos
- persistência de itens
- reset do carrinho

## Checkout

- fluxo completo de compra
- validação de campos obrigatórios
- cancelamento de checkout
- resumo da compra

## Logout

- logout com sucesso
- bloqueio de acesso após logout

---

# Automação

Os testes automatizados foram desenvolvidos utilizando Cypress.

---

# Pré-requisitos

Antes de executar os testes, é necessário possuir instalado:

- Node.js
- npm

---

# Como Executar

## Instalar dependências

```bash
npm install
```

## Executar Cypress em modo visual

```bash
npx cypress open
```

## Executar testes via terminal

```bash
npx cypress run
```

---

# Evidências

As evidências estão organizadas na pasta:

```
evidencias/
```

Contendo:

- screenshots
- gravações
- validações executadas

---

# Documentações

## Plano de Testes

[test-plan.md](test-plan.md)

## Casos de Teste

[test-cases.md](test-cases.md)

## Bugs Encontrados

[bugs.md](bugs.md)

## Melhorias Sugeridas

[improvements.md](improvements.md)

## Análise de Riscos

[risks.md](risks.md)

---

# Observações

Foram identificadas inconsistências visuais e comportamentais em usuários específicos disponibilizados pela própria plataforma SauceDemo.

Os usuários especiais disponibilizados pela plataforma foram utilizados para validação de cenários negativos e comportamentos inesperados da aplicação.
# Desafio 02 - API Testing (Restful Booker)

Este projeto contém a validação funcional da API Restful Booker.

---

# Objetivo

Validar os principais endpoints da API:
- autenticação
- criação de reservas
- consulta de reservas
- atualização de reservas
- exclusão de reservas
- validações de dados
- tratamento de erros

---

# Tecnologias Utilizadas

- Postman
- JSON
- Markdown

---

# Estrutura do Projeto

```bash
desafio-02-restful-booker/
├── collections/
├── documentation/
│   ├── bugs.md
│   ├── improvements.md
│   ├── risks.md
│   └── test-cases.md
├── environments/
├── evidences/
│   ├── auth/
│   └── booking/
│       ├── create/
│       ├── get/
│       ├── update/
│       └── delete/
└── README.md
```

# Cenários Testados

## Autenticação

- geração de token válido
- tentativa de autenticação inválida

## Booking

- criação de reserva
- consulta de reserva existente
- consulta de reserva inexistente

## Validações

- criação sem campos obrigatórios
- tipos inválidos de dados
- validação de estrutura JSON

## Segurança

- tentativa de atualização sem autenticação
- tentativa de exclusão sem autenticação

---

# Collection

A collection do Postman encontra-se em:

```
collections/
```

---

# Environment

As variáveis de ambiente utilizadas encontram-se em:

```
environments/
```

---

# Como Executar

## Importar Collection

Importar no Postman o arquivo localizado em:

```
collections/
```

## Importar Environment

Importar no Postman o arquivo localizado em:

```
environments/
```

## Executar Requests

Executar os cenários manualmente através da collection organizada no Postman.

---

# Evidências

As evidências estão organizadas em:

```
evidences/
```

Contendo:

- screenshots
- respostas da API
- validações executadas

---

# Documentações

## Casos de Teste

[documentation/test-cases.md](documentation/test-cases.md)

## Bugs Encontrados

[documentation/bugs.md](documentation/bugs.md)

## Melhorias Sugeridas

[documentation/improvements.md](documentation/improvements.md)

## Análise de Riscos

[documentation/risks.md](documentation/risks.md)

---

# Bugs Encontrados

Durante os testes foram identificadas inconsistências nos endpoints:

- `PUT /booking/{id}`
- `DELETE /booking/{id}`

Mesmo utilizando token válido recém-gerado, os endpoints retornaram 403 Forbidden.

A análise detalhada encontra-se em:

[documentation/bugs.md](documentation/bugs.md)

---

# Observações

Por se tratar de uma API pública compartilhada, alguns comportamentos inconsistentes podem ocorrer devido à instabilidade do ambiente.

Todos os cenários executados seguiram a documentação oficial disponibilizada pela API Restful Booker.
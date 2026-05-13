
# Risks - Restful Booker API

## Riscos identificados durante os testes

---

## 1. Instabilidade do ambiente público

Foi identificado comportamento inconsistente nos endpoints autenticados da API pública.

Impacto:
- falhas intermitentes
- dificuldade de reprodução
- inconsistência entre ambientes

Risco:
Alto

---

## 2. Falta de detalhamento nos erros

Os retornos de erro possuem pouca informação para troubleshooting.

Exemplo:
- `403 Forbidden`
- `404 Not Found`

Impacto:
- dificulta investigação
- aumenta tempo de análise

Risco:
Médio

---

## 3. Possível inconsistência no controle de ownership

Mesmo utilizando token válido recém-gerado, algumas operações autenticadas retornaram `403 Forbidden`.

Impacto:
- operações críticas podem falhar
- inconsistência funcional

Risco:
Alto

---

## 4. Ausência de validações robustas

A API aparenta possuir validações limitadas em alguns campos obrigatórios.

Impacto:
- possibilidade de dados inválidos
- inconsistência de registros

Risco:
Médio

---

## 5. Dependência de ambiente público

Por se tratar de uma API pública compartilhada:
- dados podem ser alterados por terceiros
- reservas podem ser removidas externamente
- comportamento pode variar

Impacto:
- baixa previsibilidade dos testes

Risco:
Alto
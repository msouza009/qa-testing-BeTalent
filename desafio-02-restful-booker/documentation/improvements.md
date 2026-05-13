# Improvements - Restful Booker API

## Melhorias sugeridas

### 1. Melhorar consistência dos endpoints autenticados
Durante os testes foi identificado comportamento inconsistente nos endpoints `PUT /booking/{id}` e `DELETE /booking/{id}`, retornando `403 Forbidden` mesmo utilizando token válido recém-gerado.

Sugestão:
- Revisar controle de autenticação e ownership das reservas
- Garantir consistência entre criação e gerenciamento da reserva

---

### 2. Melhorar documentação da autenticação
A documentação poderia detalhar melhor:
- formato esperado do header `Cookie`
- tempo de expiração do token
- limitações do ambiente público

---

### 3. Implementar rate limiting documentado
A API pública aparenta possuir comportamentos inconsistentes após múltiplas requisições.

Sugestão:
- documentar limites de uso
- adicionar headers de controle de requisição

---

### 4. Melhorar padronização das respostas de erro
Atualmente o retorno `403 Forbidden` não fornece detalhes suficientes para troubleshooting.

Sugestão:
- retornar mensagens mais descritivas
- incluir códigos internos de erro

Exemplo:
```json
{
  "error": "Invalid booking ownership"
}
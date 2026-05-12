# Bugs Encontrados - Sauce Demo

## BUG-01

### Título
Carrinho mantém itens após logout

### Severidade
Média

### Prioridade
Alta

### Passos para reprodução

1. Realizar login
2. Adicionar produtos ao carrinho
3. Realizar logout
4. Fazer login novamente

### Resultado Atual
Os itens permanecem no carrinho após novo login.

### Resultado Esperado
O carrinho deveria ser limpo após encerramento da sessão.

---

## BUG-02

### Título
Mensagem de erro genérica no login inválido

### Severidade
Baixa

### Prioridade
Baixa

### Resultado Atual
Mensagem pouco descritiva para o usuário.

### Resultado Esperado
Mensagem mais clara indicando erro de autenticação.

---

## BUG-03

### Título
Possível lentidão durante carregamento de produtos

### Severidade
Baixa

### Prioridade
Baixa

### Resultado Atual
Tempo de carregamento inconsistente em algumas execuções.

### Resultado Esperado
Carregamento estável e consistente.
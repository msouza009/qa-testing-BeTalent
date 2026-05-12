# Casos de Teste - Sauce Demo

| ID | Cenário | Passos | Resultado Esperado | Prioridade | Status |
|---|---|---|---|---|---|
| LOGIN-01 | Login com usuário válido | Inserir usuário e senha válidos | Usuário autenticado com sucesso | Alta | ⏳ |
| LOGIN-02 | Login com usuário inválido | Inserir usuário inexistente | Exibir mensagem de erro | Alta | ⏳ |
| LOGIN-03 | Login com senha inválida | Inserir senha incorreta | Exibir mensagem de erro | Alta | ⏳ |
| LOGIN-04 | Login com campos vazios | Clicar em login sem preencher dados | Exibir validação | Alta | ⏳ |
| LOGIN-05 | Login com usuário bloqueado | Utilizar locked_out_user | Exibir mensagem de bloqueio | Média | ⏳ |
| PRODUCT-01 | Visualizar lista de produtos | Realizar login | Produtos devem ser exibidos | Alta | ⏳ |
| PRODUCT-02 | Ordenar produtos A-Z | Selecionar filtro A-Z | Produtos ordenados alfabeticamente | Média | ⏳ |
| PRODUCT-03 | Ordenar produtos Z-A | Selecionar filtro Z-A | Produtos ordenados inversamente | Média | ⏳ |
| PRODUCT-04 | Ordenar por menor preço | Selecionar filtro Low to High | Produtos ordenados por menor preço | Média | ⏳ |
| PRODUCT-05 | Ordenar por maior preço | Selecionar filtro High to Low | Produtos ordenados por maior preço | Média | ⏳ |
| CART-01 | Adicionar item ao carrinho | Clicar em Add to Cart | Produto adicionado corretamente | Alta | ⏳ |
| CART-02 | Remover item do carrinho | Remover produto adicionado | Produto removido corretamente | Alta | ⏳ |
| CART-03 | Validar contador do carrinho | Adicionar múltiplos produtos | Quantidade atualizada corretamente | Média | ⏳ |
| CART-04 | Acessar carrinho | Clicar no ícone do carrinho | Página do carrinho aberta | Alta | ⏳ |
| CHECKOUT-01 | Finalizar compra | Executar checkout completo | Compra finalizada com sucesso | Alta | ⏳ |
| CHECKOUT-02 | Checkout sem nome | Não preencher nome | Exibir mensagem de validação | Média | ⏳ |
| CHECKOUT-03 | Checkout sem sobrenome | Não preencher sobrenome | Exibir mensagem de validação | Média | ⏳ |
| CHECKOUT-04 | Checkout sem CEP | Não preencher CEP | Exibir mensagem de validação | Média | ⏳ |
| NAV-01 | Navegação entre páginas | Abrir detalhes do produto e retornar | Navegação realizada corretamente | Média | ⏳ |
| LOGOUT-01 | Logout da aplicação | Realizar logout pelo menu | Usuário redirecionado para login | Alta | ⏳ |
# Test Cases - Restful Booker API

| ID | Cenário | Método | Resultado Esperado | Status |
|---|---|---|---|---|
| TC_API_001 | Gerar token com credenciais válidas | POST /auth | Retornar token e status 200 | Passou |
| TC_API_002 | Gerar token com senha inválida | POST /auth | Retornar erro de autenticação | Passou |
| TC_API_003 | Criar reserva válida | POST /booking | Retornar bookingid e status 200 | Passou |
| TC_API_004 | Buscar reserva existente | GET /booking/{id} | Retornar dados da reserva | Passou |
| TC_API_005 | Buscar reserva inexistente | GET /booking/{id} | Retornar 404 Not Found | Passou |
| TC_API_006 | Atualizar reserva com token válido | PUT /booking/{id} | Atualizar reserva e retornar 200 | Falhou |
| TC_API_007 | Excluir reserva com token válido | DELETE /booking/{id} | Excluir reserva e retornar 201/200 | Falhou |
| TC_API_008 | Criar reserva sem firstname | POST /booking | Validar campo obrigatório | Passou |
| TC_API_009 | Criar reserva com tipo inválido em totalprice | POST /booking | Validar tipo de dado | Passou |
| TC_API_010 | Atualizar reserva sem autenticação | PUT /booking/{id} | Retornar 403 Forbidden | Passou |
| TC_API_011 | Excluir reserva sem autenticação | DELETE /booking/{id} | Retornar 403 Forbidden | Passou |
| TC_API_012 | Validar estrutura JSON da reserva | GET /booking/{id} | Retornar JSON válido | Passou |
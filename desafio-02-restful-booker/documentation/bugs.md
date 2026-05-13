## Bug - Endpoint PUT retornando 403 Forbidden

### Endpoint

`PUT /booking/{id}`

### Descrição

Durante a tentativa de atualização de uma reserva previamente criada via `POST /booking`, o endpoint retornou `403 Forbidden`, mesmo utilizando token válido recém-gerado pelo endpoint `/auth`.

### Reserva utilizada

`bookingid: 2018`

### Configuração utilizada

#### Headers

```http
Accept: application/json
Content-Type: application/json
Cookie: token=c85b22eeb833f71
```

#### Authorization

```txt
No Auth
```

### Fluxo executado

1. Geração de token via `POST /auth`
2. Criação de reserva via `POST /booking`
3. Consulta da reserva via `GET /booking/{id}`
4. Tentativa de atualização via `PUT /booking/{id}`

### Resultado esperado

Atualização da reserva com retorno `200 OK`.

### Resultado obtido

Retorno `403 Forbidden`.

### Observações

O comportamento aparenta estar relacionado à instabilidade ou inconsistência do ambiente público disponibilizado pela API Restful Booker, uma vez que:

* o token foi gerado com sucesso
* a reserva foi criada corretamente
* a reserva pôde ser consultada via GET
* os headers seguiram exatamente a documentação oficial da API


## Bug - Endpoint DELETE retornando 403 Forbidden

### Endpoint

`DELETE /booking/{id}`

### Descrição

Durante a tentativa de remoção de uma reserva previamente criada e validada via `GET`, o endpoint retornou `403 Forbidden`, mesmo utilizando token válido recém-gerado.

### Reserva utilizada

`bookingid: 2018`

### Configuração utilizada

#### Headers

```http
Content-Type: application/json
Cookie: token=c85b22eeb833f71
```

#### Authorization

```txt
No Auth
```

### Fluxo executado

1. Geração de token via `POST /auth`
2. Criação de reserva via `POST /booking`
3. Consulta da reserva via `GET /booking/{id}`
4. Tentativa de exclusão via `DELETE /booking/{id}`

### Resultado esperado

Remoção da reserva com retorno `201 Created` ou `200 OK`.

### Resultado obtido

Retorno `403 Forbidden`.

### Observações

O comportamento aparenta estar relacionado à instabilidade ou limitação do ambiente público da API Restful Booker, visto que:

* o token foi gerado corretamente
* a reserva foi criada com sucesso
* a reserva pôde ser consultada normalmente
* a configuração seguiu exatamente a documentação oficial da API

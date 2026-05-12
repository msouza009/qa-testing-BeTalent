# Análise de Riscos - Sauce Demo

## 📌 Objetivo

Identificar possíveis riscos funcionais, técnicos e de usabilidade que possam impactar a experiência do usuário ou comprometer funcionalidades críticas da aplicação.

---

# 📋 Matriz de Riscos

| ID | Risco | Impacto | Probabilidade | Mitigação |
|---|---|---|---|---|
| RISK-01 | Falha no processo de login | Alto | Médio | Executar testes de autenticação em toda regressão |
| RISK-02 | Carrinho não atualizar corretamente | Alto | Médio | Validar contador e sincronização dos itens |
| RISK-03 | Falha no processo de checkout | Alto | Médio | Priorizar testes E2E do fluxo de compra |
| RISK-04 | Sessão permanecer ativa após logout | Médio | Médio | Validar limpeza de sessão e cache |
| RISK-05 | Ordenação incorreta de produtos | Médio | Baixo | Executar validações em todos os filtros |
| RISK-06 | Lentidão durante carregamento | Médio | Médio | Monitorar tempo de resposta da aplicação |
| RISK-07 | Problemas de responsividade mobile | Médio | Alto | Executar testes em diferentes resoluções |
| RISK-08 | Mensagens de erro pouco claras | Baixo | Alto | Melhorar feedback visual e mensagens |
| RISK-09 | Campos obrigatórios sem validação | Alto | Baixo | Executar testes negativos no checkout |
| RISK-10 | Instabilidade do ambiente público | Médio | Médio | Reexecutar cenários em caso de inconsistência |

---

# ⚠️ Riscos Prioritários

## Fluxo de Checkout
O processo de checkout é o fluxo mais crítico da aplicação, pois qualquer falha impacta diretamente a finalização da compra.

---

## Gerenciamento de Sessão
Problemas relacionados à persistência de sessão podem causar inconsistências no carrinho e comportamento inesperado após logout.

---

## Responsividade
Falhas em dispositivos móveis podem prejudicar significativamente a experiência do usuário.

---

# ✅ Estratégia de Mitigação

- Priorizar testes dos fluxos críticos
- Executar regressão antes de novas entregas
- Automatizar cenários principais
- Monitorar comportamento em múltiplas resoluções
- Validar mensagens e feedbacks visuais
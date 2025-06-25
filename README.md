# Como utilizar o commit com cz-git

Este projeto utiliza o cz-git para padronizar mensagens de commit. Siga o passo a passo abaixo para realizar um commit:

1. Execute o comando:
   ```sh
   npm run commit
   ```

2. Siga as etapas do prompt interativo:

- **Selecione o tipo de commit:**
  Escolha o tipo de alteração (ex: feat, fix, docs, etc). Cada tipo possui um emoji e uma breve descrição.

- **Scope (módulo/arquivo) – opcional:**
  Informe o escopo afetado (ex: nome do arquivo ou módulo). Você pode digitar ou escolher 'custom' para inserir manualmente.

- **Descrição curta (imperativo):**
  Escreva um resumo breve e objetivo da alteração.

- **Descrição longa – opcional:**
  Detalhe as mudanças realizadas. Use '|' para quebrar linhas, se necessário.

- **Referência a issues (ex: #123) – opcional:**
  Informe os números das issues relacionadas, separados por espaço (ex: #123 #456). Se não houver, pode deixar em branco.

- **Confirmação:**
  Revise a mensagem gerada e confirme para concluir o commit.

Veja abaixo um exemplo visual do processo:

![Exemplo de uso do cz-git](https://github.com/marcos-roberto-dev/poc-padrao-commit/blob/master/assets/commit-exemplo.jpg)

Cada etapa do prompt corresponde a uma parte da mensagem de commit, garantindo padronização e clareza no histórico do projeto.

> Dica: Para pular etapas opcionais, basta pressionar Enter sem digitar nada.

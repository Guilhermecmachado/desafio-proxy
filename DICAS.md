# Dicas para Uso do Projeto

## Instruções para Uso

1. **Instale as Dependências**

   Antes de iniciar os containers, acesse a pasta da aplicação e instale as dependências do Node.js:

   ```bash
   cd app
   npm install
   ```

   **Nota:** É importante executar `npm install` para garantir que todas as bibliotecas necessárias estejam disponíveis antes de subir os containers.

2. **Suba os Containers**

   Com as dependências instaladas, volte para a raiz do projeto e suba os containers com o Docker Compose:

   ```bash
   cd ..
   docker-compose up -d
   ```

3. **Adicionar Nomes**

   Para adicionar um nome à tabela `people`, utilize a seguinte rota:

   ```
   http://localhost:8080/add-name/{NOME}
   ```

   Substitua `{NOME}` pelo nome que você deseja adicionar.

4. **Visualizar a Lista de Nomes**

   Após adicionar nomes, você pode visualizar a lista acessando:

   ```
   http://localhost:8080
   ```

## Notas

- Certifique-se de que o Docker e o Docker Compose estão instalados e funcionando corretamente em sua máquina.
- A aplicação Node.js deve estar escutando na porta 3000, e o Nginx deve estar configurado para encaminhar requisições para essa porta.
- Caso ocorra um erro **502 Bad Gateway**, verifique os logs do Nginx e da aplicação Node.js para diagnosticar possíveis problemas de conexão.

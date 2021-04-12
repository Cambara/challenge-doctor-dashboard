# Challenge Doctor Dashboard

## Arquitetura em camadas

```bash

├── .env                                      <- Arquivo de configuração de ambiente
├── src                                       <- Código fonte do projeto
|   ├── http                                  <- Pasta com as configurações da camada de http
|   |   ├── app.ts                            <- Configurações para o uso do express
|   |   ├── middlewares.ts                    <- Middlewares do express
|   |   ├── routes.ts                         <- Arquivo que contém as rotas do projeto
|   ├── modules                               <- Pasta que contém os modulos do projeto
|   |   ├── <nome_modulo>                     <- Módulo 
|   |   |   ├── <submodulo>                   <- Submódulo
|   |   |   |   ├── index.ts                  <- Factory para criar as instâncias das classes que serão expostas
|   |   |   |   ├── <nome>.controller.ts      <- Classe controlladora do módulo
|   |   |   |   ├── <nome>.dto.ts             <- Interfaces para troca de informações entre objetos
|   |   |   |   ├── <nome>.service.ts         <- Arquivo que executa a regra de negócio
|   |   |   |   ├── <nome>.validator.ts       <- Arquivo para validação da requisição
|   |   |   ├── models                        <- Pasta contendo a regra de negócio
|   |   |   |   ├── <nome>.model.ts           <- Interface com a regra de negócio
|   |   |   ├── schemas                       <- Pasta contendo os schemas da base de dados
|   |   |   |   ├── <nome>.schema.ts          <- Arquivo que contém o Document, Schema e Model do mongoose
|   |   |   ├── default.validator.ts          <- Arquivo para validação da requisição
|   |   |   ├── <nome>.repository.ts          <- Arquivo com repositório referente ao módulo
|   |   |   ├── index.ts                      <- Arquivo para expor os submódulos
|   |   ├── index.ts                          <- Arquivo para expor os módulos
|   ├── providers                             <- Pasta contendo as bibliotecas utilizadas
|   ├── shared                                <- Pasta com abstrações que podem ser utilizadas em diferentes módulos
|   |   ├── controllers                       <- Contém os arquivos controladores com abstrações
|   |   ├── enums                             <- Contém os arquivos de enums que podem ser utilizados em diferentes módulos
|   |   ├── helpers                           <- Contém os arquivos de ajuda que podem ser utilizados em diferentes módulos
|   |   |   ├── env.helper.ts                 <- Arquivo com o valor default das variáveis utilizadas na aplicação
|   |   |   ├── http-response.helper.ts       <- Arquivo para padronizar as respostas da aplicação
|   |   ├── repositories                      <- Contém os repositórios que podem ser utilizados em diferentes módulos eo repositório abstrato
|   |   ├── services                          <- Contém os serviços que podem ser utilizados em diferentes módulos
|   ├── server.ts                             <- Arquivo para inicializar o servidor

```

## Instruções de uso

- Instalar as dependências utilizando ```npm i``` ou ```yarn install```;
- Utilizar no ambiente local ```npm start``` ou ```yarn start```;
- Utilizar o arquivo **.env** caso queira alterar o valor default de alguma variável de ambiente;

## Ambiente de testes

https://challengedoctordashboard.herokuapp.com/


## Documentação da API

[Link](doc/README.md)

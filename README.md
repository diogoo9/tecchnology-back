<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Projeto desenvolvido com nestjs typeorm

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Começando com o docker para inciar nosso banco de dados postgres

### Verifique se tem o docker instalado na sua maquina

```bash
$ docker version
```

### Se tiver pode iniciar com

```bash
$ docker-compose up --build -d
```

### vocë pode verificar se deu certo tentando conectar com algum SGBD com os dados

- PASSWORD: 1234
- USER: user
- DB: senai

### após finalizar precisamos iniciar o projeto

## iniciando o app

```bash
# executar as migrations - criação das tabelas na base
$ npm run migration:run

# criação dos dados inicias - usuários e estados
$ npm run seed:run

# instalar as dependencias
$ npm install

# iniciar o back end e
$ npm run dev

```

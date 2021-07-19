<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Installation

```bash
$ yarn

$ yarn dev
```

## Create module

```bash
# create complete module
$ nest g resource todos

# create module
$ nest generate module users

# create controller of module
$ nest generate controller users

# create service of module (Database doing stuff)
$ nest g service users
```

```Login path
$ http://localhost:3000/login/

local-auth.guard -> local.strategy -> validate -> authService.login -> jwt access token

$ http://localhost:3000/protected/

jwt-auth.guard -> jwt.strategy -> validate -> usersService.getUserById -> User
```

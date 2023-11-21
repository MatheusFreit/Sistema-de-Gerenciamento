# Sistema de Gerenciamento de Funcionários
Este projeto consiste em um sistema de gerenciamento de funcionários desenvolvido utilizando Angular para o frontend, C# (ASP.NET Core) para o backend e MySQL como banco de dados.

## Backend - C# (ASP.NET Core):

O backend é construído em C# usando o framework ASP.NET Core. Ele oferece uma API RESTful para interação com o frontend. Abaixo estão as principais características do backend:

FuncionárioController: Este controlador é responsável por lidar com as operações relacionadas aos funcionários, como criação, leitura, atualização e exclusão (CRUD).

* GET: Oferece endpoints para recuperar todos os funcionários ou um funcionário específico com base no ID.
* POST: Permite a criação de um novo funcionário.
* PUT (InativaFuncionario): Desativa um funcionário com base no ID.
* PUT: Atualiza as informações de um funcionário existente.
* DELETE: Exclui um funcionário com base no ID.

FuncionarioModel: Este modelo representa a estrutura de dados de um funcionário, incluindo suas propriedades como nome, cargo, etc.

IfuncionarioInterface: Define uma interface para o serviço de funcionários, garantindo um contrato para as operações CRUD.

ServiceResponse: Um modelo para encapsular a resposta do serviço, incluindo dados e mensagens.

ConnectionStrings: A string de conexão do banco de dados MySQL, definindo o local (127.0.0.1), usuário (root), senha (vazia) e o nome do banco de dados (FuncionarioWebApi).

## Banco de Dados - MySQL:

O banco de dados MySQL é utilizado para armazenar as informações dos funcionários. A string de conexão especifica os detalhes para se conectar ao banco.

## Frontend - Angular:

O frontend é construído em Angular, proporcionando uma interface de usuário interativa e amigável. As principais funcionalidades incluem:

* Listagem de Funcionários: Exibe a lista de todos os funcionários.
* Detalhes do Funcionário: Mostra informações detalhadas de um funcionário específico.
* Cadastro de Funcionário: Permite adicionar um novo funcionário ao sistema.
* Edição de Funcionário: Permite modificar as informações de um funcionário existente.
* Exclusão de Funcionário: Permite remover um funcionário do sistema.

O projeto Angular faz solicitações HTTP para os endpoints fornecidos pelo backend em C# para realizar as operações CRUD.

Esse sistema integrado fornece uma solução completa para o gerenciamento eficiente de funcionários, oferecendo uma interface intuitiva para interação com os dados armazenados no banco de dados MySQL.

## Video do projeto 

Drive: https://drive.google.com/file/d/15028-Lo7aJkICxMgbRhLiriTb5xu8xxL/view?usp=sharing

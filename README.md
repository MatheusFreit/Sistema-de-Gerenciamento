# 👨‍💼 Sistema de Gerenciamento de Funcionários

Este projeto é um sistema completo de gerenciamento de funcionários, desenvolvido com uma stack fullstack moderna:

- **Frontend:** Angular  
- **Backend:** C# com ASP.NET Core (API RESTful)  
- **Banco de Dados:** MySQL

> 🎯 Ideal para demonstrar domínio de CRUD completo com integração entre front e back.

---
## 🛠️ Tecnologias Utilizadas

![CSharp](https://img.shields.io/badge/-CSharp-0D1117?style=for-the-badge&logo=csharp&labelColor=0D1117)
![ASP.NET Core](https://img.shields.io/badge/-ASP.NET_Core-0D1117?style=for-the-badge&logo=dotnet&labelColor=0D1117)
![Angular](https://img.shields.io/badge/-Angular-0D1117?style=for-the-badge&logo=angular&labelColor=0D1117)
![MySQL](https://img.shields.io/badge/-MySQL-0D1117?style=for-the-badge&logo=mysql&labelColor=0D1117)

---
## 🔧 Backend – C# (ASP.NET Core)

O backend é uma API RESTful construída com ASP.NET Core. Ele realiza as operações de CRUD (Create, Read, Update, Delete) dos funcionários através do `FuncionarioController`.

### Principais funcionalidades:

- `GET`: Retorna todos os funcionários ou um funcionário específico por ID.
- `POST`: Criação de um novo funcionário.
- `PUT`: Atualiza dados ou desativa funcionário (via `InativaFuncionario`).
- `DELETE`: Remove um funcionário por ID.

### Estrutura:

- **FuncionarioModel**: Representa os dados (nome, cargo, status, etc).
- **IFuncionarioInterface**: Interface com os métodos esperados no serviço.
- **ServiceResponse**: Formato padrão das respostas da API.
- **ConnectionStrings**: Define os parâmetros de conexão com o MySQL (host, user, password, database).

## 🗄️ Banco de Dados – MySQL

Utilizado para armazenar todos os dados persistentes dos funcionários.  

## 💻 Frontend – Angular

O frontend foi desenvolvido em Angular, consumindo a API do backend. A interface é amigável e responsiva.

### Funcionalidades:

- 📋 **Listagem de Funcionários**  
- 🔍 **Visualização de detalhes**  
- ➕ **Cadastro de novo funcionário**  
- ✏️ **Edição de dados**  
- 🗑️ **Exclusão ou desativação de funcionário**

## 🎥 Demonstração do Projeto

Você pode visualizar o funcionamento completo neste vídeo:

📎 [Assista no Google Drive](https://drive.google.com/file/d/15028-Lo7aJkICxMgbRhLiriTb5xu8xxL/view?usp=sharing)



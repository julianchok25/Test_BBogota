# Application that manage a Person with all CRUD -Restful API

Given the following model, create a Restful API.
![class_model](https://i.imgur.com/VIFIuAz.jpg)

## Stack

- Backend:
  - NodeJS
  - Route handling: Express
  - PostgreSQL
- Frontend:
  - AngularJS
- Container:
  - Docker with compose
- Automation:
  - Circle CI

## Installation

Download and install node.js runtime with LTS stable current version and docker desktop to provide the PostgreSql container. This software contains the engine and docker compose. Also, you can use any text editor like Visual Studio code (recommended) because is easy to manage plugins, javascript snippets and linters. Lastly, install git to clone this project and run the code. Links below:

[node.js] || [Docker] || [VsCode] || [git]

## Configuration

1. Clone this repository and acces to the project.

```sh
git clone https://github.com/julianchok25/Test_BBogota
cd Test_BBogota
```

2. Open your text editor and install node dependencies in the local node_modules folder.

   - Using a terminal, either bash shell, zsh for linux or powershell for windows, type:

```sh
npm install
```

    - Now, you'll see the next structure:

![project_structure](https://i.imgur.com/wOTmygH.jpg)

3. Deploy postgreSql and PgAdmin4 with docker compose.

```sh
docker-compose up -d
```

    - The services should start in the background. Postgresql is running on port 5432 and pgadmin4 on 8080. Everything in localhost.

![docker_containers](https://i.imgur.com/GsGsnc1.jpg)

    - You can test in web browser the pgadmin application typing: **http://localhost:8080**
    Access with **julian.villegasplus@gmail.com** as username and **admin** as password:

![pgadmin_login](https://i.imgur.com/JrN4J5b.jpg)

## Usage

## Bugs

No known bugs at this time.

## License

Public Domain. No copy write protection.

[//]: # "These are reference links used in the body of this note"
[node.js]: https://nodejs.org/en/
[docker]: https://www.docker.com/products/docker-desktop
[vscode]: https://code.visualstudio.com/
[git]: https://git-scm.com/

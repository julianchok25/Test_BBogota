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

Download and install **node.js** runtime with LTS stable current version and **docker** desktop to provide the **PostgreSql** container. This software contains the engine and docker compose. Also, you can use any text editor like **Visual Studio code** (recommended) because is easy to manage plugins, javascript snippets and linters. Lastly, install **git** to clone this project and run the code. Links below:

[node.js] || [Docker] || [VsCode] || [git]

## Configuration and Usage

1. Clone this repository and acces to the project.

```sh
$ git clone https://github.com/julianchok25/Test_BBogota
$ cd Test_BBogota
```

2. Open your text editor and install node dependencies in the local node_modules folder.

- Using a terminal, either bash shell, zsh for linux or powershell for windows, type:

```sh
$ npm install
```

- Now, you'll see the next structure:

![project_structure](https://i.imgur.com/wOTmygH.jpg)

3. Deploy postgreSql and PgAdmin4 with docker compose.

```sh
$ docker-compose up -d
```

- The services should start in the background. Postgresql is running on port 5432 and pgadmin4 on 8080. Everything in localhost.

![docker_containers](https://i.imgur.com/GsGsnc1.jpg)

- As you can see, the port 8080 and 5432 are opened by the docker-proxy service.

```sh
$ netstat -tlpn
```

- To see active containers and how the ports are mapped, run the following command:

```sh
$ docker ps
```

As you can see, for the db service, the Docker host port 5432 is mapped to the container TCP port 5432.
For the pgadmin service, the Docker host port 8080 is mapped to the container TCP port 80.
![docker_ps](https://i.imgur.com/LVm4Cqf.jpg)

- You can test in web browser the pgadmin application typing: **http://localhost:8080**
  Access with **julian.villegasplus@gmail.com** as username and **admin** as password:

![pgadmin_login](https://i.imgur.com/JrN4J5b.jpg)

![pgadmin_structure](https://i.imgur.com/WOyC1oFm.jpg)

- Now, you can see the database created in the left tree panel. But we don't still have data. Let's import with docker options..!!

4. Import Database template located in **database/database.sql**

```sh
$ docker cp ./database/database.sql test_bbogota_db_1:/var/lib/postgresql/data/database.sql
$ docker exec -u root test_bbogota_db_1 psql banco-bogota admin -f var/lib/postgresql/data/database.sql
```

> NOTE: if you use Git bash shell, probably you should use **winpty** before docker command

- Here it is in generic form:

```sh
> docker cp ./localfile.sql containername:/container/path/file.sql
> docker exec -u linuxuser containername psql dbname postgresuser -f /container/path/file.sql
```

5. Access to container and database to query the table.

```sh
$ docker exec -it test_bbogota_db_1 psql -U admin banco-bogota
psql (12.2 (Debian 12.2-2.pgdg100+1))
Type "help" for help.

banco-bogota=# select * from person;
```

![query_table](https://i.imgur.com/Z4eVq1y.jpg)

6. Finally, run the server. **nodemon** dependency will be listening for any request to the server.

```sh
$ npm run dev
```

![run_server](https://i.imgur.com/bzD7isY.jpg)

## End points

In Postman client, you can test de API endpoints from **http://localhost:3000**
![end_points](https://i.imgur.com/fL8Ppqv.jpg)

## Next Steps

Backend is Ready.!! Now, let's go to this repository: **https://github.com/julianchok25/Angular10Crud** to download and deploy the Frontend side.

## Bugs

No known bugs at this time.

## License

Public Domain. No copy write protection.

[//]: # "These are reference links used in the body of this note"
[node.js]: https://nodejs.org/en/
[docker]: https://www.docker.com/products/docker-desktop
[vscode]: https://code.visualstudio.com/
[git]: https://git-scm.com/

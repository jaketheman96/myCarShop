# Projeto Car Shop!!

-Mais um projeto individual realizado pelo curso da Trybe, abordando os princípios de Programação Orientada a Objetos para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. O banco de dados utilizado para esse projeto foi o `MongoDB` (NoSQL) com o framework `Mongoose`.

# Caso for rodar com docker(recomendo):

-Para esse projeto a Trybe configurou um orquestrador de container (docker-compose) e um dockerfile na raiz do projeto, portanto, caso queira utilizá-lo lembre-se de rodar os containers com:

`docker-compose up -d`

-Para acessar o terminal do container rode:

`docker exec -it <nome do container> bash`

-Assim que estiver no terminal do container é só rodar o `npm run dev`, assim a aplicação já estará pronta para o uso.

# Testes:

-Fiz vários testes para realizar o BDD (Behavior Driven Development), testando apenas o comportamento da aplicação e para encontrá-lo é só abrir a pasta `tests -> unit`.

-Para rodar os testes utilize: 

`npm run test:mocha` ou `npm run test:coverage`

# Obrigado!!

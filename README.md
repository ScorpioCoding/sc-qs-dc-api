![image](quickstart-github-banner.png)

# sc-qs-dc-php-lemp-mvc

ScorpioCoing QuickStart Docker Apline Nginx Php MySql (LEMP) stack with MVC
Model-View-Controller Application Setup

## Basic Usage

- clone git
- open terminal and go into \_dockerfiles
- run docker command to start
  ```
  docker compose up -d
  ```
- run docker command to stop

  ```
  docker compose down
  ```

- The frontend http://localhost:6080

- The Api http://localhost:6082

- phpMyadmin http://localhost:6084

- The Database http://localhost:6086

1. Get All Movies  
   http://localhost/api/readall/movies  
   Route : api/readall/{table}  
   Request-type: GET  
   Expected Response format -> json_encode

2. Get A Movie  
   http://localhost/api/read/movies/1  
   Route : api/read/{table}/{id:\d+}  
   Request-type: GET  
   Expected Response format -> json_encode

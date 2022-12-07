# Readme.md ng

# Coopers API

### ***IMPORTANTE:***

***A primeira requisição demora cerca de 30s a 1 minuto para ser realizada
Site utilizado [https://render.com/](https://render.com/)***

## Base URL:

## [https://coopersapi.onrender.com](https://coopersapi.onrender.com/)

## User Routes

- POST- /user
    
    `/register`
    
    ```json
    {
    	"username":"admin",
    	"email":"admin@admin.com",
    	"password":"Adm!n1234",
    	"confirmPassword":"Adm!n1234"
    }
    ```
    
     `SUCCESS - 201 Created`
    
    ```json
    {
    	"message": "User created with success"
    }
    ```
    
     `Wrong username - 400 Bad Request`
    
    ```json
    {
    	"message": "Username: Minimun 3 characters, Can`t user special caracters."
    }
    ```
    
     `Missing password condition - 400 Bad Request`
    
    ```json
    {
    	"message": "Password: Minimun 8 characters;At least a number;At least an uppercase letter;At least a lowercase letter;A special character"
    }
    ```
    
     `different passwords - 400 Bad Request`
    
    ```json
    {
    	"message": "Different passwords"
    }
    ```
    
     `Loggin - 200 OK`
    
    `/login`
    
    ```json
    {
    	"username":"admin",
    	"password":"A!dmin1234"
    }
    ```
    
     `Success - 200 OK`
    
    ```json
    {
    	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2NjkwOTEyOTcsImV4cCI6MTY2OTE3NzY5N30.k4b1oHNvBZvnu_MHLVfjIO63-E2SL9wzJVEpEW6085o"
    }
    ```
    
     `Invalid user or password - 401 Unauthorized`
    
    ```json
    {
    	"message": "Wrong user or password!"
    }
    ```
    
- POST- /tasks
    
    `AUTHORIZATION TOKEN REQUIRED`
    
    `/create`
    
    ```json
    {
    	"description":"Fazer um bolo para o café da tarde"
    }
    ```
    
     `SUCCESS - 201 Created`
    
    ```json
    {
    	"id": "ad97c33a-3354-4715-87d0-77d31756175b",
    	"done": false,
    	"description": "Fazer um bolo para o café da tarde",
    	"userId": "30276a2d-a381-42d9-b9af-2fbc7374e2bb"
    }
    ```
    
     `Missing authorization token - 401 Unauthorized` 
    
    ```json
    {
    	"message": "Missing authorization token."
    }
    ```
    
- GET- /tasks
    
    `AUTHORIZATION TOKEN REQUIRED`
    
    `/ - 200 OK`
    
    ```json
    [
    	{
    		"id": "f33eb428-9b15-412a-a90b-02aa65a19676",
    		"done": true,
    		"description": "Fazer um bolo para o café da tarde",
    		"userId": "b9687f44-ba7b-4323-bf80-5c8a93f90cd7"
    	},
    	{
    		"id": "03165803-ad9a-4840-9af0-33e6398b18e6",
    		"done": false,
    		"description": "Comprar batatas",
    		"userId": "b9687f44-ba7b-4323-bf80-5c8a93f90cd7"
    	},
    	{
    		"id": "50406e19-1a58-4a9b-af6d-31cca2800250",
    		"done": false,
    		"description": "Visitar a dona Odelaide",
    		"userId": "b9687f44-ba7b-4323-bf80-5c8a93f90cd7"
    	},
    ...
    ]
    ```
    
    `Missing authorization token - 401 Unauthorized`
    
    ```json
    {
    	"message": "Missing authorization token."
    }
    ```
    
- DELETE- /tasks
    
    `AUTHORIZATION TOKEN REQUIRED`
    
    Delete a **specific** item
    
    `/delete/:id - 204 No Content` 
    
    ```json
    No body returned for response
    ```
    
    Delete all items of a **specific** list
    
     `/delete/done or to-do - 204 No Content` 
    
    ```json
    No body returned for response
    ```
    
     `Wrong id - 404 Not Found` 
    
    ```json
    {
    	"message": "Task not found"
    }
    ```
    
     `task from another user - 203 Non-Authorative information` 
    
    ```json
    {
    	"message": "would you like the others to mess up your stuff?"
    }
    ```
    
     `Missing authorization token - 401 Unauthorized` 
    
    ```json
    {
    	"message": "Missing authorization token."
    }
    ```
    
- PATCH- /tasks
    
    `AUTHORIZATION TOKEN REQUIRED`
    
    `/edit/:id` 
    
    ```json
    {
    	"done":true,
    	"description":"editando"
    }
    ```
    
     `sucess - 200 OK` 
    
    ```json
    {
    	"id": "db6f887a-3636-4ef2-8ad7-a895ada0ec06",
    	"done": true,
    	"description": "editando",
    	"userId": "cb3f0932-aba9-4e6a-848d-5c219a999b3d"
    }
    ```
    
     `Wrong id - 404 Not Found` 
    
    ```json
    {
    	"message": "Task not found"
    }
    ```
    
     `task from another user - 203 Non-Authorative information` 
    
    ```json
    {
    	"message": "would you like the others to mess up your stuff?"
    }
    ```
    
     `Missing authorization token - 401 Unauthorized` 
    
    ```json
    {
    	"message": "Missing authorization token."
    }
    ```
    
- GET- /messages
    
    `AUTHORIZATION TOKEN REQUIRED`
    
    `/ - 200 OK`
    
    ```json
    [
    	{
    		"id": "7daa5a06-10b9-48ad-85c6-0e512dca4df0",
    		"username": "claudio",
    		"email": "claudinho@gmail.com",
    		"telephone": "(11) 91111-1111",
    		"message": "O quão util isso pode ser para mim?",
    		"createdAt": "2022-11-29T17:37:53.989Z"
    	},
    	{
    		"id": "052c4f15-6880-4d83-949b-8372e2573e80",
    		"username": "Creuza",
    		"email": "Creuzinha.1980@gmail.com",
    		"telephone": "(11) 91111-1111",
    		"message": "Gostaria de saber se é possivel organizar a minha vida em casa e no trabalho?",
    		"createdAt": "2022-11-29T17:38:23.737Z"
    	},...
    ]
    ```
    
- POST- /messages
    
    `/`
    
    ```json
    {
    	"username":"Creuzadapenha",
    	"email":"Creuzinha.1980@gmail.com",
    	"telephone":"(11) 91111-1111",
    	"message":"Gostaria de saber se é possivel organizar a minha vida em casa e no trabalho?"
    }
    
    ```
    
    `/ - 200 OK`
    
    ```json
    {
    	"id": "2b271fdf-9a0a-4823-ae36-c9044d025e93",
    	"username": "Creuzadapenha",
    	"email":"Creuzinha.1980@gmail.com",
    	"telephone":"(11) 91111-1111",
    	"message":"Gostaria de saber se é possivel organizar a minha vida em casa e no trabalho?",
    	"createdAt": "2022-12-02T21:55:57.388Z"
    }
    ```
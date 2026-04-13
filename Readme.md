http module - This allow nodeJs to transfer data over the hypertext transfer protocol, and we use it to create servers, handle requests from clients, and provide responses to those requests.

Request Response Cycle -> 
Request: 
- Method: GET, POST, PUT, DELETE
- Request Path: /api, /users, /products
- Data: query strings/ path params / request body / headers / cookies 

Handle Request: 
- Filtering data
- Throwing an error
- Generate a response


Response: 
- Status code: 200, 404, 500
- Status message: OK, NOT FOUND, INTERNAL SERVER ERROR
- Headers: Content-Type, Content-Length
- Data: JSON, HTML, text
- Cookies: Set-Cookie
- Content-type: application/json, text/html, text/plain
- Resource: (JSON) - Data that is being sent to the client



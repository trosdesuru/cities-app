curl -v http://localhost:8080/users -X POST -d '{"name":"Peter","surname":"Parker","role":"user","email":"peter@parker.com","username":"peterparker","password":"123123123","passwordRepeat":"123123123"}' -H "Content-Type: application/json"
# curl -v http://localhost:8080/users -X POST -d '{"name":"Mary","surname":"Jane","role":"user","email":"mary@jane.com","username":"maryjane","password":"password456","passwordRepeat":"password456"}' -H "Content-Type: application/json"
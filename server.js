const http =require("http")
const app =require("./app")
//createServer accepte un callback qui a comme paramétre la requete et la réponse
const port =process.env.PORT || 5001
app.set("port", port)
const server =http.createServer(app)
server.listen(port,() => { //c'est l'arrow function
    console.log("Listening on" + port)
    //heka aalh ki aamlt node server sur cmd marajaali chay
})
//si pas de variable d'environnement PORT, on va écouter le port 5000

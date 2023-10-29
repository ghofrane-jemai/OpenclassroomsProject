const express =require("express")
const mongoose=require("mongoose")
const Task =require("./models/task")
const taskRoutes = require ("./routes/task")
const Book = require("./models/book");
const bookRoutes = require ("./routes/book")
const User = require("./models/user");
const userRoutes = require ("./routes/user")
const middlewares = require ("./middlewares/auth")

mongoose 
.connect(
    "mongodb://localhost:27017/task",//tasks lena heya esm BD
    {useNewUrlParser:true, useUnifiedTopology:true}
)
.then(() => console.log("connexion à MongoBD réussie!"))
.catch((e) => console.log("connexion à MongoBD échouée!",e))//e m'aide à afficher l'erreur
const app=express()

app.use((req, res, next) => {//le middleware ne prend pas d'adresse en premier paramètre, afin de s'appliquer à toutes les routes
    res.setHeader('Access-Control-Allow-Origin', '*');//accéder à notre API depuis n'importe quelle origine ( '*' ) 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');//envoyer des requêtes avec les méthodes mentionnées ( GET ,POST
    next();
  });
  app.use(express.json())//hedhi pour post weli jey sauf get
// app.use((req, res,next) =>{
//     console.log("requete reçue !")
//     next()//ken na7i next hedhi manjmch naaml affichage mtaa lokhrin jemla 
    
// })
// app.use((req, res,next) =>{ //middleware hedha(app.use)
//     res.status(201)
//     next()
    
// })
// app.use((req, res,next) =>{
//     res.status(200).json({message:"votre requete a bien été reçue! "})//hedha bch yji aala serveur
//     next()
    
// })
// app.use((req, res,next) =>{
//     console.log("reponse envoyee avec succées !")//hedha aala terminal
// }

// )
app.use("/api/tasks",taskRoutes) //cette ligne remplace moi tt les requêtes get w post w denya lkol mtaa router.X : router.patch("/:id", auth.loggedMiddleware, taskController.updateTaskWithPatch);
app.use("/api/books", bookRoutes)
app.use("/api/auth", userRoutes)


module.exports=app
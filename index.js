import express from 'express'; 
//mport path from "path";
const app = express()
const door = 8080

import { router_variaveis } from './routers/variaveis_router.js';
import { router_arrays } from './routers/arrays_routers.js';
import { router_operadores } from './routers/operadores_router.js';
import { router_condicoes } from './routers/condicoes_router.js';
import { router_loops } from './routers/loops_router.js';
import { router_json } from './routers/json_router.js';

app.use(express.Router())

app.get('/', (req , res)=>{
    res.send("I love my life!")
})

app.use("/exVariaveis", router_variaveis)

//Operadores

app.use("/exOperadores", router_operadores)

//Condicionais
app.use('/exCondicoes', router_condicoes)

//Loops
app.use('/exLoops', router_loops)

//Arrays

app.use("/exArrays", router_arrays)

//Json
app.use("/exJson", router_json)

app.listen(door, ()=>{
    console.log(`O servidor está aberto na porta ${door}`)
})
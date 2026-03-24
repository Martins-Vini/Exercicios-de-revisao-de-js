import express from 'express';
const router_variaveis = express();

import calculoCircunferencia from "../exercicios_js/exVariaveis/ex1.js"
import showName from '../exercicios_js/exVariaveis/ex2.js'
import showPeople from '../exercicios_js/exVariaveis/ex3.js'

//Variáveis

router_variaveis.get('/calccircuferencia/:id', (req,res)=>{
    let id = req.params.id
    let raio = Number(id)
    res.json({"Circunferência":calculoCircunferencia(raio)});
});

router_variaveis.get('/printarnome/:id', (req,res)=>{
    let id = req.params.id
    res.json({"Nome":showName(id)})
});

router_variaveis.get('/mostrarpessoas/:id', (req,res)=>{
    let id = req.params.id
    let idx = Number(id)
    res.json({"Pessoa":showPeople(idx)})
});

export {router_variaveis}
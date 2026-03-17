import express from 'express';
const router_variaveis = express();

import calculoCircunferencia from "../exercicios_js/exVariaveis/ex1.js"
import showName from '../exercicios_js/exVariaveis/ex2.js'
import showPeople from '../exercicios_js/exVariaveis/ex3.js'

//Variáveis

router_variaveis.get('/calccircuferencia', (req,res)=>{
    const piValue = 3.141591;
    res.json({"Circunferência":calculoCircunferencia(piValue)});
});

router_variaveis.get('/printarnome', (req,res)=>{
    res.json({"Nome":showName()})
});

router_variaveis.get('/mostrarpessoas', (req,res)=>{
    res.json({"Pessoa":showPeople()})
});

export {router_variaveis}
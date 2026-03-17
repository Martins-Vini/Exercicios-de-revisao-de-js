import express from 'express';
const router_condicoes = express()

import validateNumber from '../exercicios_js/exCondicoes/ifElse/ex1.js';
import validatecnh from '../exercicios_js/exCondicoes/ifElse/ex2.js';
import {validateGrade, getGrade} from '../exercicios_js/exCondicoes/ifElse/ex3.js';
import validateVelocity from '../exercicios_js/exCondicoes/ifElse/ex4.js';
import {calc, getNumbers} from '../exercicios_js/exCondicoes/switchCase/ex1.js';

//Condicionais

router_condicoes.get('/positivoounegativo', (req,res)=>{
    res.json({"Mensagem": validateNumber()})
});

router_condicoes.get('/cnh', (req,res)=>{
    res.json({"Verificação": validatecnh(21)})
})

router_condicoes.get('/verificarnota', (req,res)=>{
    res.json({"Estado":validateGrade(getGrade())})
});

router_condicoes.get('/validatevelocity', (req,res)=>{
    res.json({"Aviso": validateVelocity(75)})
})

router_condicoes.get('/calculadora', (req,res)=>{
    res.json({"Resultado": calc(getNumbers())})
});


export {router_condicoes}



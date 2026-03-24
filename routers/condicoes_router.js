import express from 'express';
const router_condicoes = express()

import validateNumber from '../exercicios_js/exCondicoes/ifElse/ex1.js';
import validatecnh from '../exercicios_js/exCondicoes/ifElse/ex2.js';
import {validateGrade, getGrade} from '../exercicios_js/exCondicoes/ifElse/ex3.js';
import validateVelocity from '../exercicios_js/exCondicoes/ifElse/ex4.js';
import {calc, getNumbers} from '../exercicios_js/exCondicoes/switchCase/ex1.js';

//Condicionais

router_condicoes.get('/positivoounegativo/:id', (req,res)=>{
    let id = req.params.id
    let idade = Number(id)
    res.json({"Mensagem": validateNumber(idade)})
});

router_condicoes.get('/cnh/:id', (req,res)=>{
    let id = req.params.id
    let idade = Number(id)
    res.json({"Verificação": validatecnh(idade)})
})

router_condicoes.get('/verificarnota/:id', (req,res)=>{
    let id = req.params.id
    let nota = Number(id)
    res.json({"Estado":validateGrade(getGrade(nota))})
});

router_condicoes.get('/validatevelocity/:id', (req,res)=>{
    let id = req.params.id
    let velo = Number(id)
    res.json({"Aviso": validateVelocity(velo)})
})

router_condicoes.get('/calculadora/:n1/:n2/:op', (req,res)=>{
    let n1 = req.params.n1
    let num1 = Number(n1)
    let n2 = req.params.n2
    let num2 = Number(n2)
    let op = req.params.op
    res.json({"Resultado": calc(num1,num2,op)})
});


export {router_condicoes}



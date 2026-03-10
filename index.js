import express from 'express' 
const app = express()
const door = 8080

import calculoCircunferencia from "./exercicios_js/exVariaveis/ex1.js"
import showName from './exercicios_js/exVariaveis/ex2.js'
import showPeople from './exercicios_js/exVariaveis/ex3.js'
import verifyNumberPair from './exercicios_js/exOperadores/aritimeticos/ex1.js'
import notaFinal from './exercicios_js/exOperadores/aritimeticos/ex2.js'
import {getTemperature, castTemperature} from './exercicios_js/exOperadores/aritimeticos/ex3.js'
import incrementoDecremento from './exercicios_js/exOperadores/aritimeticos/ex4.js'
import areaRet from './exercicios_js/exOperadores/aritimeticos/ex5.js'
import imc from './exercicios_js/exOperadores/aritimeticos/ex6.js'
import discount from './exercicios_js/exOperadores/aritimeticos/ex7.js'
import sumArrayNumbers from './exercicios_js/exArrays/ex1.js'
import buscarFruta from './exercicios_js/exArrays/ex2.js'

app.get('/', (req , res)=>{
    res.send("I love my life!")
})

app.get('/calccircuferencia', (req,res)=>{
    const piValue = 3.141591
    res.json({"Circunferência":calculoCircunferencia(piValue)})
});

app.get('/printarnome', (req,res)=>{
    res.json({"Nome":showName()})
});

app.get('/mostrarpessoas', (req,res)=>{
    res.json({"Pessoa":showPeople()})
});

app.get('/verificarnum', (req,res)=>{
    res.json({"Resultado":verifyNumberPair()})
});

app.get('/notafinal', (req,res)=>{
    res.json({"Nota":notaFinal()})
});

app.get('/conversaotemperatura', (req,res)=>{
    const temp = getTemperature()
    res.json({"Conversão":castTemperature(temp)})
});

app.get('/Incrementoedecremento', (req,res)=>{
    res.json({"Resultados": incrementoDecremento()})
});

app.get('/arearet', (req,res)=>{
    res.json({"Resultados": areaRet()})
});

app.get('/imc', (req,res)=>{
    res.json({"Resultados": imc()})
});

app.get('/desconto', (req,res)=>{
    res.json({"Resultados": discount(250, 25)})
});


app.get('/somaarrays', (req,res)=>{
    res.json({"Soma": sumArrayNumbers()})
})

app.get('/buscarFruta', (req,res)=>{
    res.json({"Ìndice": buscarFruta()})
});


app.listen(door, ()=>{
    console.log(`O servidor está aberto na porta ${door}`)
})
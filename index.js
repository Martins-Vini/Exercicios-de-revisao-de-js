import express from 'express'; 
import path from "path";
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
import acessProfile from './exercicios_js/exOperadores/logicos/ex1.js'
import catchUmbrella from './exercicios_js/exOperadores/logicos/ex3.js'
import verifyEquality from './exercicios_js/exOperadores/relacionais/ex1.js'
import verifyOrderAlfabetico from './exercicios_js/exOperadores/relacionais/ex3.js'
import verifyTypeValue from './exercicios_js/exOperadores/relacionais/ex5.js'
import validateNumber from './exercicios_js/exCondicoes/ifElse/ex1.js'
import {validateGrade, getGrade} from './exercicios_js/exCondicoes/ifElse/ex3.js'
import {calc, getNumbers} from './exercicios_js/exCondicoes/switchCase/ex1.js'
import showCont from './exercicios_js/exLoops/ex1.js'
import multTableFive from './exercicios_js/exLoops/ex3.js'
import showCity from './exercicios_js/exLoops/ex5.js'
import sumArrayNumbers from './exercicios_js/exArrays/ex1.js'
import buscarFruta from './exercicios_js/exArrays/ex2.js'
import showProduto from './exercicios_js/exJson/ex1.js'

app.get('/', (req , res)=>{
    res.send("I love my life!")
})

//Variáveis

app.get('/calccircuferencia', (req,res)=>{
    const piValue = 3.141591;
    res.json({"Circunferência":calculoCircunferencia(piValue)});
});

app.get('/printarnome', (req,res)=>{
    res.json({"Nome":showName()})
});

app.get('/mostrarpessoas', (req,res)=>{
    res.json({"Pessoa":showPeople()})
});

//Operadores aritméticos

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

//Operadores relacionais

app.get('/compararnumeros', (req,res)=>{
    res.json({"Verificação": verifyEquality(12, "12")})
});

app.get('/verordemalfa', (req,res)=>{
    res.json({"Ordem": verifyOrderAlfabetico("Maçã", "Banana")})
});

app.get('/tipovalor', (req,res)=>{
    res.json({"Tipo": verifyTypeValue(0)})
});

//Operadores Lógicos

app.get('/acessarPerfil', (req,res)=>{
    res.json({"Status_do_Acesso": acessProfile("admin", "123")})
});

app.get('/pegarGuardachuva', (req,res)=>{
    res.json({"Tem_Guarda-chuva": catchUmbrella()})
});

//Condicionais

app.get('/positivoounegativo', (req,res)=>{
    res.json({"Mensagem": validateNumber()})
});

app.get('/verificarnota', (req,res)=>{
    res.json({"Estado":validateGrade(getGrade())})
});

app.get('/calculadora', (req,res)=>{
    res.json({"Resultado": calc(getNumbers())})
});

//Loops

app.get('/contadorreverso', (req,res)=>{
    res.json({"contador": showCont()})
});

app.get('/tabuada5', (req,res)=>{
    res.json({"tabuada": multTableFive()})
});

app.get('/vercidade', (req,res)=>{
    res.json({"Cidade": showCity()})
});

//Arrays

app.get('/somaarrays', (req,res)=>{
    res.json({"Soma": sumArrayNumbers()})
})

app.get('/buscarFruta', (req,res)=>{
    res.json({"Ìndice": buscarFruta()})
});

//Json

app.get('/mostrarpessoa', (req,res)=>{
    res.json({"Pessoa": showProduto()})
});


app.listen(door, ()=>{
    console.log(`O servidor está aberto na porta ${door}`)
})
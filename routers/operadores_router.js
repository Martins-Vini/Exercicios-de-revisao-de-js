import express from "express";
const router_operadores = express();

import verifyNumberPair from '../exercicios_js/exOperadores/aritimeticos/ex1.js'
import notaFinal from '../exercicios_js/exOperadores/aritimeticos/ex2.js'
import castTemperature from '../exercicios_js/exOperadores/aritimeticos/ex3.js'
import incrementoDecremento from '../exercicios_js/exOperadores/aritimeticos/ex4.js'
import areaRet from '../exercicios_js/exOperadores/aritimeticos/ex5.js'
import imc from '../exercicios_js/exOperadores/aritimeticos/ex6.js'
import discount from '../exercicios_js/exOperadores/aritimeticos/ex7.js'

import acessProfile from '../exercicios_js/exOperadores/logicos/ex1.js'
import settingColor from '../exercicios_js/exOperadores/logicos/ex2.js';
import catchUmbrella from '../exercicios_js/exOperadores/logicos/ex3.js'

import verifyEquality from '../exercicios_js/exOperadores/relacionais/ex1.js'
import validateAge from '../exercicios_js/exOperadores/relacionais/ex2.js';
import verifyOrderAlfabetico from '../exercicios_js/exOperadores/relacionais/ex3.js'
import validateStock from '../exercicios_js/exOperadores/relacionais/ex4.js';
import verifyTypeValue from '../exercicios_js/exOperadores/relacionais/ex5.js'
import validateGrades from '../exercicios_js/exOperadores/relacionais/ex6.js';


router_operadores.get('/verificarnum', (req,res)=>{
    let {num} = req.query
    let numValue = Number(num)
    res.json({"Resultado":verifyNumberPair(numValue)})
});

router_operadores.get('/notafinal', (req,res)=>{
    res.json({"Nota":notaFinal()})
});

router_operadores.get('/conversaotemperatura', (req,res)=>{
    let {fahrenheit} = req.query;
    let tempF = Number(fahrenheit);
    res.json({"Conversão":castTemperature(tempF)});
});

router_operadores.get('/Incrementoedecremento', (req,res)=>{
    res.json({"Resultados": incrementoDecremento()})
});

router_operadores.get('/arearet', (req,res)=>{
    let {c, l, h} = req.query;
    let cValue = Number(c);
    let lValue = Number(l);
    let hValue = Number(h);
    res.json({"Resultados": areaRet(cValue, lValue, hValue)})
});

router_operadores.get('/imc', (req,res)=>{
    res.json({"Resultados": imc()})
});

router_operadores.get('/desconto', (req,res)=>{
    let {price, disc} = req.query
    let priceValue = Number(price);
    let discValue = Number(disc);
    res.json({"Resultados": discount(priceValue, discValue)});
});

//Operadores relacionais

router_operadores.get('/compararnumeros', (req,res)=>{
    let {n1, n2} = req.query
    let n1Value = Number(n1)
    let n2Value = Number(n2)
    res.json({"Verificação": verifyEquality(n1Value, n2Value)})
});

router_operadores.get('/validateage', (req,res)=>{
    res.json({"Verificação": validateAge(20)})
})

router_operadores.get('/verordemalfa', (req,res)=>{
    let {fruta1, fruta2} = req.query
    res.json({"Ordem": verifyOrderAlfabetico(fruta1, fruta2)})
});

router_operadores.get('/validatestock', (req,res)=>{
    res.json({"Quantidade": validateStock(50,50)})
})

router_operadores.get('/tipovalor', (req,res)=>{
    let {val} = req.query
    let valValue = Number(val)
    res.json({"Tipo": verifyTypeValue(valValue)})
});

router_operadores.get('/validategrade', (req,res)=>{
    res.json({"Resultado": validateGrades(7)})
})

//Operadores Lógicos

router_operadores.get('/acessarPerfil', (req,res)=>{
    let {user, password} = req.query
    let userValue = String(user)
    let passwordValue = String(password)
    res.json({"Status_do_Acesso": acessProfile(userValue, passwordValue)})
});

router_operadores.get('/settingcolor', (req,res)=>{
    res.json({"Cor final": settingColor("black","white")})
})

router_operadores.get('/pegarGuardachuva', (req,res)=>{
    let {chuva} = req.query
    let chuvaValue = Boolean(chuva)
    res.json({"Tem_Guarda-chuva": catchUmbrella(chuvaValue)})
});

export {router_operadores}
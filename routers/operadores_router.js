import express from "express";
const router_operadores = express();

import verifyNumberPair from '../exercicios_js/exOperadores/aritimeticos/ex1.js'
import notaFinal from '../exercicios_js/exOperadores/aritimeticos/ex2.js'
import {getTemperature, castTemperature} from '../exercicios_js/exOperadores/aritimeticos/ex3.js'
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
    res.json({"Resultado":verifyNumberPair()})
});

router_operadores.get('/notafinal', (req,res)=>{
    res.json({"Nota":notaFinal()})
});

router_operadores.get('/conversaotemperatura', (req,res)=>{
    const temp = getTemperature()
    res.json({"Conversão":castTemperature(temp)})
});

router_operadores.get('/Incrementoedecremento', (req,res)=>{
    res.json({"Resultados": incrementoDecremento()})
});

router_operadores.get('/arearet', (req,res)=>{
    res.json({"Resultados": areaRet()})
});

router_operadores.get('/imc', (req,res)=>{
    res.json({"Resultados": imc()})
});

router_operadores.get('/desconto', (req,res)=>{
    res.json({"Resultados": discount(250, 25)})
});

//Operadores relacionais

router_operadores.get('/compararnumeros', (req,res)=>{
    res.json({"Verificação": verifyEquality(12, "12")})
});

router_operadores.get('/validateage', (req,res)=>{
    res.json({"Verificação": validateAge(20)})
})

router_operadores.get('/verordemalfa', (req,res)=>{
    res.json({"Ordem": verifyOrderAlfabetico("Maçã", "Banana")})
});

router_operadores.get('/validatestock', (req,res)=>{
    res.json({"Quantidade": validateStock(50,50)})
})

router_operadores.get('/tipovalor', (req,res)=>{
    res.json({"Tipo": verifyTypeValue(0)})
});

router_operadores.get('/validategrade', (req,res)=>{
    res.json({"Resultado": validateGrades(7)})
})

//Operadores Lógicos

router_operadores.get('/acessarPerfil', (req,res)=>{
    res.json({"Status_do_Acesso": acessProfile("admin", "123")})
});

router_operadores.get('/settingcolor', (req,res)=>{
    res.json({"Cor final": settingColor("black","white")})
})

router_operadores.get('/pegarGuardachuva', (req,res)=>{
    res.json({"Tem_Guarda-chuva": catchUmbrella()})
});

export {router_operadores}
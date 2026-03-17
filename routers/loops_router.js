import express from 'express';
const router_loops = express()

import showCont from '../exercicios_js/exLoops/ex1.js'
import numberSeven from '../exercicios_js/exLoops/ex2.js';
import multTableFive from '../exercicios_js/exLoops/ex3.js'
import newVetor from '../exercicios_js/exLoops/ex4.js';
import showCity from '../exercicios_js/exLoops/ex5.js'

router_loops.get('/contadorreverso', (req,res)=>{
    res.json({"contador": showCont()})
});

router_loops.get('/numberseven', (req,res)=>{
    res.json({"Retorno": numberSeven(5)})
});

router_loops.get('/tabuada5', (req,res)=>{
    res.json({"tabuada": multTableFive()})
});

router_loops.get('/newVetor', (req,res)=>{
    res.json({"Vetor": newVetor()})
})

router_loops.get('/vercidade', (req,res)=>{
    res.json({"Cidade": showCity()})
});

export {router_loops}
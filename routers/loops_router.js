import express from 'express';
const router_loops = express()

import showCont from '../exercicios_js/exLoops/ex1.js'
import numberSeven from '../exercicios_js/exLoops/ex2.js';
import multTable from '../exercicios_js/exLoops/ex3.js'
import newVetor from '../exercicios_js/exLoops/ex4.js';
import showCity from '../exercicios_js/exLoops/ex5.js'

router_loops.get('/contadorreverso', (req,res)=>{
    const {i} = req.query
    res.json({"contador": showCont(i)})
});

router_loops.get('/numberseven', (req,res)=>{
    let {num} = req.query
    res.json({"Retorno": numberSeven(num)})
});

router_loops.get('/tabuada', (req,res)=>{
    const {number} = req.query
    res.json({"tabuada": multTable(number)})
});

router_loops.get('/newVetor', (req,res)=>{
    let {numbers} = req.query
    let vetor = JSON.parse(numbers)
    res.json({"Vetor": newVetor(vetor)})
})

router_loops.get('/vercidade', (req,res)=>{
    let {n} = req.query
    let num = Number(n)
    res.json({"Cidade_idx": showCity(num)})
});

export {router_loops}
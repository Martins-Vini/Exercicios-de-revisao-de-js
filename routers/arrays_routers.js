import express from "express";
const router_arrays = express()
import sumArrayNumbers from '../exercicios_js/exArrays/ex1.js'
import buscarFruta from '../exercicios_js/exArrays/ex2.js'

router_arrays.get('/somaarrays', (req,res)=>{
    res.json({"Soma": sumArrayNumbers()})
})

router_arrays.get('/somaarrays/:id', (req,res)=>{
    let seq = req.params.id;
    let value = JSON.parse(seq)
    res.json({"Soma": sumArrayNumbers(value)})
})

router_arrays.get('/buscarFruta/:id', (req,res)=>{
    let fruta = req.params.id
    res.json({"Ìndice": buscarFruta(fruta)})
});

export {router_arrays}
import express from "express";
const router_arrays = express()
import sumArrayNumbers from '../exercicios_js/exArrays/ex1.js'
import buscarFruta from '../exercicios_js/exArrays/ex2.js'

router_arrays.get('/somaarrays', (req,res)=>{
    res.json({"Soma": sumArrayNumbers()})
})

router_arrays.get('/buscarFruta', (req,res)=>{
    res.json({"Ìndice": buscarFruta()})
});

export {router_arrays}
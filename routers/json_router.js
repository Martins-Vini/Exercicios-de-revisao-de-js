import express from 'express'
const router_json = express()

import showProduto from '../exercicios_js/exJson/ex1.js'

router_json.get('/mostrarproduto/:id', (req,res)=>{
    let id = req.params.id
    let idx = Number(id)
    res.json({"Produto": showProduto(idx)})
});


export {router_json}
import express from 'express'
const router_json = express()

import showProduto from '../exercicios_js/exJson/ex1.js'

router_json.get('/mostrarpessoa', (req,res)=>{
    res.json({"Pessoa": showProduto()})
});


export {router_json}
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProducts } from './action' 

import ProductList from '../../components/manager/ProductList'
import axios from 'axios'


const List = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)
    
    

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <ProductList />
    )
}

export default List
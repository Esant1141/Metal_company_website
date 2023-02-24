import React from 'react'
import Layout from '../../Layout'
import ProductsCards from './products-cards/ProductsCards'
import { TabTitle } from "../../Title";

const Products = () => {
  TabTitle('Products | God Gift International')
  return (
    <Layout>
    <ProductsCards />
    </Layout>
  )
}

export default Products
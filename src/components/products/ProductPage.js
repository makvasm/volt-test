import React, { useEffect, useState } from 'react'
import { GET } from '../../utils'
import { useParams } from 'react-router-dom'
import Table from '../Table'

export default function ProductPage() {

  let {product_id: id} = useParams()
  const [productInfo, setInfo] = useState(null)

  useEffect(() => {
    GET(`/api/products/${id}`)
      .then(data => setInfo(data))
  }, [])


  if(!productInfo) return null
  return (
    <div>
      <Table cols={["Name", "Price"]} config="products" rows={[productInfo]} />
    </div>
  )
}

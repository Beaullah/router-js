import React from 'react'
import {useParams} from 'react-router-dom'

export default function ServiceDetail() {
    const {serviceid} = useParams()
  return (
    <div>
        <h1>Service Detail : {serviceid}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam incidunt, dolorum impedit maiores quidem quos sed temporibus, labore expedita earum recusandae doloremque quisquam enim eaque. Nemo in voluptatum corrupti officiis.</p>
    </div>
  )
}

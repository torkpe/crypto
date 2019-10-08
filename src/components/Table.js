import React from 'react';

export default function TableRow (props) {
  return (
    <tr>
      <th scope="row">{props.crypto.symbol}</th>
      <td>{props.crypto.name}</td>
      <td>{props.crypto.quote.USD.price}</td>
      <td>{props.crypto.num_market_pairs}</td>
    </tr>
  )
}
import React, { useState } from 'react'
import Count from './Count'


const Cart = () => {
                        //???
    const [totalCount1, setTotalCount1] = useState(null)
    const [totalCount2, setTotalCount2] = useState(null)
    const [totalCount3, setTotalCount3] = useState(null)

    const [totalSum1, setTotalSum1] = useState(null)
    const [totalSum2, setTotalSum2] = useState(null)
    const [totalSum3, setTotalSum3] = useState(null)

  
  return (
    <div>
      <table border="4" cellpadding="7" cellspacing="0">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>Constructor Lego</td>
            <Count
              value={300}
              setTotalCount={setTotalCount1}
              setTotalSum={setTotalSum1}
            />
          </tr>
          <tr>
            <td>Train Station</td>
            <Count
              value={200}
              setTotalCount={setTotalCount2}
              setTotalSum={setTotalSum2}

            />
          </tr>
          <tr>
            <td>Hot Wheels Track</td>
            <Count
              value={150}
              setTotalCount={setTotalCount3}
              setTotalSum={setTotalSum3}

            />
          </tr>
          <tr>
            <th colspan="2">Totals</th>
            <th>{totalSum1 + totalSum2 + totalSum3}</th>
            <th>{totalCount1 + totalCount2 + totalCount3}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );





}

export default Cart
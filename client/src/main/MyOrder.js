import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Cart.css';
import k3 from './k3.jpg';
import k2 from './k2.jpg';

const  MyOrder= () => {

  return (
    <>
        <div className="container">
    		<h1 className="text-center">My Order</h1>
    		<hr/>
    		<table className="MainTable text-center">
    			<tr>
    				<th>SNO.</th>
    				<th>Name</th>
    				<th>Image</th>
    				<th>Price</th>
    				<th>Quantity</th>
    				<th>Total Price</th>
    			</tr>
    			<tr>
    				<td>1</td>
    				<td>Orange</td>
    				<td><img src={k2} className="pppcart" alt="k2"/></td>
    				<td>225</td>
    				<td>555</td>
    				<td>555</td>
    			</tr>
    			<tr>
    				<td>2</td>
    				<td>Orange</td>
    				<td><img src={k2} className="pppcart" alt="k2"/></td>
    				<td>225</td>
    				<td>555</td>
    				<td>555</td>
    			</tr>
    			<tr>
    				<td>3</td>
    				<td>Orange</td>
    				<td><img src={k2} className="pppcart" alt="k2"/></td>
    				<td>225</td>
    				<td>555</td>
    				<td>555</td>
    			</tr>
    			<tr>
    				<td>4</td>
    				<td>Orange</td>
    				<td><img src={k2} className="pppcart" alt="k2"/></td>
    				<td>225</td>
    				<td>555</td>
    				<td>555</td>
    			</tr>
    		</table><br/>
    	</div>
    </>
  );
}

export default MyOrder;

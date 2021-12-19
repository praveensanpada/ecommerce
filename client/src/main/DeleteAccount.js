import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

const  DeleteAccount = () => {

		const id1 = 4;
		const id2 = 2;

		const history = useHistory();

 			const Delete = () => {
	     Axios.post("http://localhost:8089/user/delete",{id1:id1, id2:id2}).then((response)=>{
	     	history.push('/');
          console.log("Done");
        })
      }

  return (
    <>
        <div className="container">
        	<br/>
			<div className="text-center">
				<button type="submit" className="btn btn-primary"  onClick={Delete}>Delete</button>
			</div>
			<br/>
		</div>
    </>
  );
}

export default DeleteAccount;

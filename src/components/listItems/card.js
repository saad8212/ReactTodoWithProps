import {Link} from 'react-router-dom';
function Cards(props) {     
    return ( 
        <>          
            <tr>
               <td>{props.id}</td>
               <td>{props.common}</td>             
               <td>{props.official}</td>             
               <td>{props.languages}</td>             
               <td><Link to ={`/details/${props.id}`}>View</Link></td>             
            </tr>   
        </>
     );
}

export default Cards

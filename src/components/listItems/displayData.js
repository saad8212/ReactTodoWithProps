import CreateItems from "../createItem.js/createItem";
import Cards from './card';
import './displayData.css';

function DisplayData(props) {
    const userDataHandler = (userData) => {
        props.countryName(userData);  
    } 
     
 
    return ( 
        <div id="listData" className='mb-5'>
            <CreateItems userData = {userDataHandler} />
            <main>
                <section className="task-list text-center">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <table className='table container'>
                                <thead className="thead-info">
                                     
                                        <th scope='col'><h1>#</h1></th>
                                        <th><h1>Common Name</h1></th>
                                        <th><h1>Official Name</h1></th>
                                        <th><h1>Languages</h1></th>
                                        <th><h1>Action</h1></th>
                                    
                                </thead>
                                <tbody> 
                                   {props.Data.map((res) =>{
                                    return  <Cards id = {res.id} common = {res.data.name.common} official = {res.data.name.official} languages = {Object.values(res.data.languages).join(",")}/>
                                   }) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        </div>
     );
}

export default DisplayData;
import React, {useState} from "react"
function CreateItemsForm(props) {
    const [title, changeTitle] = useState('');
     
    const titleChangeHandler = (event) =>{
        changeTitle(event.target.value);
    }
     
     

    const userDataHandler = (event) => {
        if(event.target.value !== '') {
            event.preventDefault();
            props.userData(title);
            changeTitle('');
        } else{
            alert("please enter a valid title")
        }
    } 

    
    return ( 
        <form id="new-task-form" onSubmit={userDataHandler}>
            <div className="row mt-5">
                <div className={`form-group col-md-10 offset-md-1`}>  
                    <input type="text" value = {title} onChange={titleChangeHandler} className="form-control" id="inputTitle4" placeholder="Enter Country Name.."/>
                </div>
            </div>
            <div className="row mt-2">
                <div  className="form-group col-md-4 offset-md-4 text-center">
                    <button style={{width:"100%", backgroundColor:"#323C50", color:"#A7A1AE", fontWeight:"bold"}} className="btn mt-3" type="submit">Fetch</button>
                </div>
            </div>
        </form>
     );
}
export default CreateItemsForm;
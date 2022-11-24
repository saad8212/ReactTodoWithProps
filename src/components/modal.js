import React, {useState} from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalData(props) {
    const [tags, setTags] = useState([...Object.values(props.filteredData[0].data.languages)]);
    props.filteredData[0].data.languages = [...tags];
    const  addTags = (event) =>{
      
      let obj = props.filteredData[0].data.languages;
      if (event.key === "Enter" && event.target.value !=='') {
        let data = event.target.value;
        let languages = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
        console.log(languages);
        if(Object.values(obj).includes(languages) !== true){
          setTags([...tags, languages]);
          event.target.value = "";
        }
        else {
          alert("already included");
          event.target.value = "";
          return false;
        } 
      }
    }

    const removeTags = (index) =>{
      setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]); 
    }

    const updateLang = () =>{
      props.filteredData[0].data.languages = [...tags]
    }
  return (
    <div> 
        <Modal isOpen={props.modalCheck}>
          <ModalHeader style={{backgroundColor:"#323C50", color:"#4DC3FA"}}>
            <div style={{display:"flex",width:"100%", flexDirection:"row", justifyContent:"space-between"}}>
              <div>Languages</div>
              <div role="button" onClick={() => updateLang()}><i className="fa fa-times text-danger"  onClick = {props.toggle}></i></div>
            </div>
          </ModalHeader>
          <ModalBody>
              <div className="row tagInput">
                  <input type ="text"  onKeyUp={event => addTags(event)}
                  placeholder="Enter Language..."/><br/>
                 {tags?.map((tag, index) => (
                <div key={index} className="tags">
                    <span className="tagName">{tag}</span>
                    <i className="fa fa-times cross-btn" onClick={() => removeTags(index)}>
                    </i>
                </div>
              ))}
              </div>
              
          </ModalBody>
          <ModalFooter 
            style={{height:"10vh",backgroundColor:"#323C50", color:"#4DC3FA"}}>
             <div style={{width:"100%",fontWeight:"bold"}} className="text-center center-text">{props.filteredData[0].data.name.official}</div>  
          </ModalFooter>
        </Modal>
    </div>
  )
}

export default ModalData

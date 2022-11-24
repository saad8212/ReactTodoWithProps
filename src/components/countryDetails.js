import { useParams} from "react-router-dom"
import React,{useState} from 'react'
import './countryDetails.css'
import ModalData from "./modal";
function CountryDetails({Data}) {
    const [modal, setModal] = useState(false); 
    const {id} = useParams();    
     let filteredData = Data.filter(res =>{
        return res.id === Number(id)
     })
     console.log(filteredData);
    const toggle = () =>{
        setModal(!modal);
    }   
     
  return (
    <div>      
        {filteredData.map(res =>{
            return (
                <div className="country-card">
                    <div className="image-container">
                        <div className="cover-image product-image">
                            <img src={res.data.flags.png} alt=""/>
                        </div>
                    </div>

            <div className="country-info">
                <h1><span color='blue'>&lt;</span>{res.data.name.common}<span className="blue">&gt;
                </span><span className="yellow">Details</span></h1>
                <table className='listData' style={{tableLayout:"fixed"}}> 
                    <tr className="discount-price">
                        <td>Currencies: </td>
                        <td>{Object.values(res.data.currencies)[0].symbol} 
                        {Object.values(res.data.currencies)[0].name}</td>
                    </tr>
                    <tr className="discount-price">
                        <td>Region: </td><td>{Object.values(res.data.region)}</td>
                    </tr>
                    <tr className="discount-price">
                        <td>SubRegion: </td><td>{Object.values(res.data.subregion)}</td>
                    </tr>
                    <tr className="discount-price">
                        <td>See on Map: </td>
                        <td>
                            <a target = "_black" 
                                href = {Object.values(res.data.maps.openStreetMaps).join("")}>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>    Map
                            </a>
                        </td>
                    </tr>
                    <tr className="discount-price mt-2">
                        <td>Languages: </td>
                        <td role = "button" onClick = {toggle}
                            style={{backgroundColor:"#1F2739", borderRadius:"5px",textAlign:"center", width:"30%",marginRight:"25%"}}>
                            <span style={{paddingRight:"10px"}}>Add</span> 
                            <i className='fa fa-plus'></i>
                        </td>
                    </tr>
                    <tr style={{wordBreak:"break-all",width:"80%", textAlign:"center", color:"#4dc3fa",marginTop:"20px"}}>
                        <td style={{textDecoration:"underline",fontStyle:"italic",width:"100%"}}>{Object.values(res.data.languages).join(",")}</td>
                    </tr>
                </table>
            </div>
            <ModalData modalCheck = {modal} 
            toggle = {toggle} filteredData = {filteredData}/>
        </div>
            )
        })
        }   
    </div>
  )
}

export default CountryDetails

import React from 'react';
import { useState } from 'react';
import './tr.css';

function Tr(props){

    const [show,setShow] = useState(false);
    const closeModalHandler = ()=> setShow(false)
    const {name,username,email ,phone,address,website,company} = props;

    const [nameValue,setName] = useState(name);
    const [UsernameValue,setUserName] = useState(username);
    const [EmailValue,setEmail] = useState(email);
    const [AddressValue,setAddress] = useState(address);
    const [CompanyValue,setCompany] = useState(company);
    const [WebsiteValue,setWebsite] = useState(website);
    const [PhoneValue,setPhone] = useState(phone);

    const handlerSubmit =(e)=>{
        e.preventDefault();
    }
    const G = (e) =>{
        setName(e.target.value)
    }    
    const A = (e) =>{
        setUserName(e.target.value)
    }  
    const B = (e) =>{
        setEmail(e.target.value)
    }  
    const C = (e) =>{
        setCompany(e.target.value)
    }  
    const D = (e) =>{
        setWebsite(e.target.value)
    }  
    const E = (e) =>{
        setPhone(e.target.value)
    }  
    const F = (e) =>{
        setAddress(e.target.value)
    }  

    return(
        <>
         <div className="modal-wrapper"
      style={{
        transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
      >
        <div className="modal-header">
            <p> Updating </p>
            <span className="close-modal-btn"onClick={closeModalHandler} >X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">

                <input type="text" onChange={G}  placeholder={name}/>
                <input type="text" onChange={A}  placeholder={username}/>
                <input type="text" onChange={B}  placeholder={email}/>
                <input type="text" onChange={C}  placeholder={company}/>
                <input type="text" onChange={F}  placeholder={address}/>
                <input type="text" onChange={E}  placeholder={phone}/>
                <input type="text" onChange={D} placeholder={website}/>


            </div>
            <div className="modal-footer">
                <button className="btn-cancel" onClick={handlerSubmit}>Update</button>
            </div>
        </div>
      </div>
           <tr onClick={()=>setShow(true)}>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{company}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{website}</td>
           </tr>
        </>
    )
}


export default Tr;
import React from 'react';
import { useState } from 'react';
import './tr.css';
import client from './Requete'; 

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

    try {
        const data  = client({
            method: 'put',
            url: 'https://jsonplaceholder.typicode.com/users',
            data: {
                name: nameValue ,
                username: UsernameValue ,
                email: EmailValue,
                address: {
                  street: "",
                  suite: "",
                  city: AddressValue,
                  zipcode: "",
                  geo: {
                    lat: "",
                    lng: ""
                  }
                },
                phone: PhoneValue ,
                website: WebsiteValue,
                company: {
                  name: CompanyValue,
                  catchPhrase: "",
                  bs: ""
                }
                

            }
        });
    
        console.log("data");
    } catch (err) {
        if (err.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(err.message);
        }
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
            <span className="close-modal-btn"onClick={closeModalHandler} >X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handlerSubmit}>

                <input type="text" onChange={G}  placeholder={name}/>
                <input type="text" onChange={A}  placeholder={username}/>
                <input type="text" onChange={B}  placeholder={email}/>
                <input type="text" onChange={C}  placeholder={company}/>
                <input type="text" onChange={F}  placeholder={address}/>
                <input type="text" onChange={E}  placeholder={phone}/>
                <input type="text" onChange={D} placeholder={website}/>

                </form>
            </div>
            <div className="modal-footer">
                <button className="btn-cancel">Update</button>
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
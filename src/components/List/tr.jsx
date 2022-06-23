import React from 'react';
import { useState } from 'react';
import './tr.css';

function Tr(props){

    const [show,setShow] = useState(false);
    const closeModalHandler = ()=> setShow(false)
    const {name,username,email ,phone,address,website,company} = props;
    
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

                <input type="text"   placeholder={name}/>
                <input type="text"   placeholder={username}/>
                <input type="text"   placeholder={email}/>
                <input type="text"   placeholder={company}/>
                <input type="text"   placeholder={address}/>
                <input type="text"   placeholder={phone}/>
                <input type="text"   placeholder={website}/>


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
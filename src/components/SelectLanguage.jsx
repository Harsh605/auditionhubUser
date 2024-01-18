import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './SelectLanguage.css'; // Import your CSS file

function SelectLanguage() {
  const navigate = useNavigate();

  return (
    
    <div className="p-10 md:pt-24 md:px-24 sm:p-10 bg-gradient-to-b from-[#000120] to-[#220056]">
      <div>
     <div className="language-container-in">
      <div >
     
      <h1 style={{color:"#4680EF",fontFamily:"arial"}}  className="form-title">Fill Up This Form</h1>
     <div className='font-container-in' style={{display:"flex"}}>
      
      <button style={{border:"none",padding:"0px 90px"}} className="my-4 md:my-16 mx-8 px-14 md:px-24 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full" href="image" onClick={() => navigate("/RegistrationPage")}> English</button>
      
      <button style={{border:"none",padding:"0px 100px"}} className="my-4 md:my-16 mx-8 px-14 md:px-24 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full" href="image" onClick={() => navigate("/HindiRegistrationPage")}>Hindi</button>
      </div>
      </div>
     </div>
     </div>
    </div>
  );
}

export default SelectLanguage;



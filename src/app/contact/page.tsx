import { FaFacebook, FaLinkedin, FaPhoneVolume } from "react-icons/fa";
import Layout from "../components/Layout";
import ProfilePic from "../components/ProfilePic";
import { MdEmail } from "react-icons/md";
import { PiReadCvLogoFill } from "react-icons/pi";

export default function Contact(){
    return (
         <Layout>
              <div style={{display:"flex" , height:"80vh" , width:"100%" , alignItems:"center" }}>
              <div style={{  display:"flex"   , flexDirection: "row"  , alignItems:"center" ,  justifyContent:"space-between" , width:"90%"  }}>
                <div style={{flexShrink: 0 , width:250 , height:250}}>
                <ProfilePic />
                </div>
                <div style={{width:"75%"}}>
                <p style={{fontSize:60 , marginRight: 30 , fontFamily:"initial"}}>Contacts</p>
                <div style={{display:"flex" , alignItems:"center" , justifyContent:"flex-start"  }}>
                <FaPhoneVolume className="hover:scale-125"></FaPhoneVolume>
                <p style={{marginLeft:6}}>+40755548214</p>
                </div>
                <div style={{display:"flex" , alignItems:"center" , justifyContent:"flex-start"  }}>
                <a href="https://www.facebook.com/carlos.1.1.1.1.q3">
                <FaFacebook className="hover:scale-125"></FaFacebook></a>
                <p style={{marginLeft:6}}>Fodor Carlos</p>
                </div>
                <div style={{display:"flex" , alignItems:"center" , justifyContent:"flex-start"  }}>
                <a href="https://www.linkedin.com/in/fodor-l%C3%A1szl%C3%B3-carlos-23779a271/">
                <FaLinkedin className="hover:scale-125"></FaLinkedin></a>
                <p style={{marginLeft:6}}>Fodor László-Carlos</p>
                </div>
                <div style={{display:"flex" , alignItems:"center" , justifyContent:"flex-start"  }}>
                <MdEmail className="hover:scale-125"></MdEmail>
                <p style={{marginLeft:6}}>fodorlaszlocarlos@gmail.com</p>
                </div>
                <div style={{display:"flex" , alignItems:"center" , justifyContent:"flex-start"  }}>
                <a href="/Fodor László-Carlos CV.pdf"><PiReadCvLogoFill className="hover:scale-125"></PiReadCvLogoFill></a>
                <p style={{marginLeft:6}}>View My Resume</p>
                </div>
                </div>
              </div>
              </div>
            </Layout>
    );
}
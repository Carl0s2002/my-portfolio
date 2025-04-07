import { FaFacebook, FaGithub, FaLinkedin, FaPhoneVolume } from "react-icons/fa";
import Layout from "../components/Layout";
import ProfilePic from "../components/ProfilePic";
import { MdEmail } from "react-icons/md";
import { PiReadCvLogoFill } from "react-icons/pi";

export default function Contact() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[80vh] w-full p-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
          <div className="w-40 h-40 shrink-0">
            <ProfilePic />
          </div>

          <div className="w-full md:w-3/4 space-y-4">
            <p className="text-4xl md:text-5xl font-serif">Contacts</p>

            <div className="flex items-center space-x-2">
              <FaPhoneVolume className="hover:scale-125 transition-transform" />
              <p>+40755548214</p>
            </div>

            <div className="flex items-center space-x-2">
              <a href="https://www.facebook.com/carlos.1.1.1.1.q3" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:scale-125 transition-transform" />
              </a>
              <p>Fodor Carlos</p>
            </div>

            <div className="flex items-center space-x-2">
              <a href="https://www.linkedin.com/in/fodor-l%C3%A1szl%C3%B3-carlos-23779a271/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:scale-125 transition-transform" />
              </a>
              <p>Fodor László-Carlos</p>
            </div>

            <div className="flex items-center space-x-2">
              <MdEmail className="hover:scale-125 transition-transform" />
              <p>fodorlaszlocarlos@gmail.com</p>
            </div>

            <div className="flex items-center space-x-2">
              <a href="https://github.com/Carl0s2002" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:scale-125 transition-transform" />
              </a>
              <p>Fodor Carlos</p>
            </div>

            <div className="flex items-center space-x-2">
              <a href="/Fodor László-Carlos CV.pdf" target="_blank" rel="noopener noreferrer">
                <PiReadCvLogoFill className="hover:scale-125 transition-transform" />
              </a>
              <p>View My Resume</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

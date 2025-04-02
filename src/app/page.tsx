import Layout from "./components/Layout";
import ProfilePic from "./components/ProfilePic";
export default function Home() {
  return (
    <Layout>
      <div style={{display:"flex" , height:"80vh" , width:"100%" , alignItems:"center" }}>
      <div style={{  display:"flex"   , flexDirection: "row"  , alignItems:"center" ,  justifyContent:"space-between" , width:"90%"  }}>
        <div style={{flexShrink: 0 , width:250 , height:250}}>
        <ProfilePic />
        </div>
        <div style={{width:"75%"}}>
        <p style={{fontSize:60 , marginRight: 30 , fontFamily:"initial"}}>About me</p>
        <p>I am Fodor László-Carlos, a 22-year-old graduate of Sapientia Hungarian University of Transylvania, with a deep passion for computer science and problem-solving. My journey into IT began in eighth grade when I became curious about what it truly meant to be a software engineer. Rather than just wondering, I decided to immerse myself in the field, leading me to pursue an intensive computer science program at Bolyai Farkas Theoretical High School.

Those four years built a strong foundation, guiding me toward Sapientia University, where I was exposed to a wide range of technologies and real-world challenges. During my studies, I participated in the Codespring mentorship program and summer internship, gaining valuable hands-on experience by contributing to a real-world software project.

Beyond my technical interests, I love learning new things, solving puzzles, and pushing my limits. Having played football for 10 years, I also developed strong teamwork skills—something I carry into every aspect of my professional and personal growth. I am highly persistent, adaptable, and always eager for new challenges, seeing them as opportunities to grow and expand my expertise.</p>
        </div>
      </div>
      </div>
    </Layout>
  );
}

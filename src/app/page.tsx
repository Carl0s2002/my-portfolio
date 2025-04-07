import Layout from "./components/Layout";
import ProfilePic from "./components/ProfilePic";
export default function Home() {
  return (
    <Layout>
       <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 py-10 md:py-20">
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0">
          <ProfilePic />
        </div>
        <div className="md:ml-10 w-full md:w-3/4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">About me</h1>
          <p className="text-base md:text-lg text-justify">
        I am Fodor László-Carlos, a 23-year-old graduate of Sapientia Hungarian University of Transylvania, with a deep passion for computer science and problem-solving. My journey into IT began in eighth grade when I became curious about what it truly meant to be a software engineer. Rather than just wondering, I decided to immerse myself in the field, leading me to pursue an intensive computer science program at Bolyai Farkas Theoretical High School.

Those four years built a strong foundation, guiding me toward Sapientia University, where I was exposed to a wide range of technologies and real-world challenges. During my studies, I participated in the Codespring mentorship program and summer internship, gaining valuable hands-on experience by contributing to a real-world software project.

Beyond my technical interests, I love learning new things, solving puzzles, and pushing my limits. Having played football for 10 years, I also developed strong teamwork skills—something I carry into every aspect of my professional and personal growth. I am highly persistent, adaptable, and always eager for new challenges, seeing them as opportunities to grow and expand my expertise.</p>
        </div>
      </div>
    </Layout>
  );
}

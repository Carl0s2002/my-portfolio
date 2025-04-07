import Layout from "../components/Layout";
import Timeline from "../components/Timeline";
import { ExperiencesType } from "../types/Experiences";

export default function Experiences(){
    const experiences:ExperiencesType[] = [
        { year: "2022-2024", title: "Codespring Mentorship Program", description: "I signed up for the mentorship programme to gain insight into how the technologies I learned about at university can be applied into well thought out projects. I also learned about the essentials of teamwork, communication and perseverency." },
        { year: "2024", title: "Codespring Internship", description: "I got the chance to join as an intern during the summer. In 10 weeks I learned to use React-Native, Firebase as a backend, git for project management, and my collegue and I followed the Agile workflow. It was a short, but effective insight into the life of a programmer. " },
        { year: "2024", title: "Scientific Student Conference", description: "I didn’t miss the opportunity to present my work at this conference. Thanks to all the other times I held a presentation, I feel like I’ve gotten better at it. It paid off because my collegue and I won a special prize for the presentation afterwards." },
        { year: "2024", title: "Reea Internship", description: "In the two weeks, I had available, I created a weather app project using Flutter and Dart programming language. It was a great learning experience, thanks to the two mentors I had during this time." }
      ];

    return(
        <Layout>
            <Timeline content={experiences} />
        </Layout>
    );
}
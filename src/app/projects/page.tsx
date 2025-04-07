import Layout from "../components/Layout";
import TimelineProjects from "../components/TimelineProjects";
import { ProjectsType } from "../types/ProjectExp";

export default function Projects(){
    const projects:ProjectsType[] = [
        { year: "2023-2024", title: "BicyHub", description: "The Bicyhub project aimed to unite a community of cycling enthusiasts through a dedicated platform. I developed this project during my time at Codespring, a software company, and it also served as the foundation for my thesis in my final year of university. It was an in-depth, comprehensive project, and the full documentation can be accessed by pressing this project title." , link:"/Allamvizsga_dokumentacio.pdf" },
        { year: "2024" , title: "Weather app", description: "The Weather App was a short-term project I completed over the course of two weeks. Its main purpose was to explore a new mobile development technology—Flutter. Having previously worked with React Native, I wanted to gain hands-on experience with Flutter to compare the two frameworks and broaden my skill set in cross-platform development. The GitHub repository can be accessed by pressing the project title." , link:"https://github.com/Carl0s2002/WeatherApp"}
    ]
    return (
        <Layout>
            <TimelineProjects content={projects} /> 
        </Layout>
    );
}
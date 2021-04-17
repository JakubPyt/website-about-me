import React from "react";
import SL_SQL from '../images/certificates/SL_SQL.jpg';
import Kaggle_Python from "../images/certificates/Kaggle_Python.jpg";
import SL_CSharp from "../images/certificates/SL_CSharp.jpg";
import SL_CSS from "../images/certificates/SL_CSS.jpg";
import SL_DataScience from "../images/certificates/SL_DataScience.jpg";
import SL_HTML from "../images/certificates/SL_HTML.jpg";
import SL_IntermediatePython from "../images/certificates/SL_IntermediatePython.jpg";
import SL_JS from "../images/certificates/SL_JS.jpg";
import SL_MachineLearning from "../images/certificates/SL_MachineLearning.jpg";
import SL_Python3 from "../images/certificates/SL_Python3.jpg";
import SL_PythonDataStructures from "../images/certificates/SL_PythonDataStructures.jpg";
import SL_PythonForBeginners from "../images/certificates/SL_PythonForBeginners.jpg";
import Udemy_CSharp from "../images/certificates/Udemy_CSharp.jpg";
import Udemy_FullStack from "../images/certificates/Udemy_FullStack.jpg";
import Udemy_Git from "../images/certificates/Udemy_Git.jpg";
import { Card } from "react-bootstrap";
import './hardSkills-certificates.css';
class HardSkillsCertificates extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //Data about certificates
            certificatesPython: [
                {
                    name: "Intermediate Python",
                    link:
                        "https://www.sololearn.com/certificates/course/en/16942149/1158/landscape/png",
                    pic: SL_IntermediatePython,
                },
                {
                    name: "Python Data Structures",
                    link:
                        "https://www.sololearn.com/certificates/course/en/16942149/1159/landscape/png",
                    pic: SL_PythonDataStructures,
                },
                {
                    name: "Python for Beginners",
                    link:
                        "https://www.sololearn.com/certificates/course/en/16942149/1157/landscape/png",
                    pic: SL_PythonForBeginners,
                },
                {
                    name: "Python 3",
                    link:
                        "https://www.sololearn.com/certificates/course/en/16942149/1073/landscape/png",
                    pic: SL_Python3,
                },
                {
                    name: "Python",
                    link: "https://www.kaggle.com/learn/certification/jakubpyt/python",
                    pic: Kaggle_Python,
                },
            ],
            certificatesCsharp: [
                {
                    name: "C#",
                    link:
                        "https://www.sololearn.com/certificates/course/en/16942149/1080/landscape/png",
                    pic: SL_CSharp,
                },
                {
                    name: "C# .NET od Podstaw do Tworzenia Aplikacji w WPF i XAML",
                    link:
                        "https://www.udemy.com/certificate/UC-ccb0a31c-7f3f-484f-984f-9a37ef78e84b/",
                    pic: Udemy_CSharp,
                },
            ],
            certificatesDB: [
                {
                    name: "SQL",
                    link:
                        "https://www.sololearn.com/certificates/course/en/16942149/1060/landscape/png",
                    pic: SL_SQL,
                },
            ],
            certificatesGit: [
                {
                    name: "GIT od podstaw dla każdego",
                    link:
                        "https://www.udemy.com/certificate/UC-cdd5282f-3e78-4df2-83b5-1b0ac67e70d3/",
                    pic: Udemy_Git,
                },
            ],
            certificatesWebDev: [
                {
                    name:
                        "Bootcamp programistyczny 2020(PL): Web dev Full stack(HTML, CSS, JavaScript, Angular 7, React 16, Python 3, Django 2, NativeScript 5)",
                    link:
                        "https://www.udemy.com/certificate/UC-5d7d37d8-f783-4c74-aa4f-4885f0752f4c/",
                    pic: Udemy_FullStack,
                },
                {
                    name: "HTML",
                    link: "https://www.sololearn.com/Certificate/1014-16942149/jpg/",
                    pic: SL_HTML,
                },
                {
                    name: "CSS",
                    link: "https://www.sololearn.com/Certificate/1023-16942149/jpg/",
                    pic: SL_CSS,
                },
                {
                    name: "JavaScript",
                    link: "https://www.sololearn.com/Certificate/1014-16942149/jpg/",
                    pic: SL_JS,
                },
            ],
            certificatesDataScience: [
                {
                    name: "Data Science",
                    link:
                        "https://www.sololearn.com/certificates/course/en/16942149/1093/landscape/png",
                    pic: SL_DataScience,
                },
                {
                    name: "Machine Learning",
                    link:
                        "https://www.sololearn.com/certificates/course/en/16942149/1094/landscape/png",
                    pic: SL_MachineLearning,
                },
            ],
        }
    }
    //Function generate div with certificates cards by type 
    createCards(certificates) {
        return (
            <div className="divWithCertificates">
                {certificates.map((cert) => (
                    <a href={cert.link}>
                        <Card key={cert.name}>
                            <Card.Img src={cert.pic} variant="top" />
                            <Card.Body>
                                <Card.Title>{cert.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                ))}
            </div>
        );
    };

    render() {
        return(
            <div>
            </div>
        )
    }
}
export { HardSkillsCertificates };
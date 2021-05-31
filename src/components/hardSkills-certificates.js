import React from "react";
import "./hardSkills-certificates.css";

class HardSkillsCertificates extends React.Component {
  constructor(props) {
    super(props);
    //Data about certificates
    //To add ccertificate, embed image, change state below and func createCards do rest
    //To embaded photos use website: https://www.labnol.org/embed/google/photos/
    this.state = {
      certificatesPython: [
        {
          name: "Scientific Computing with Python",
          link: "https://freecodecamp.org/certification/jakubpyt/scientific-computing-with-python-v7",
          pic: "https://lh3.googleusercontent.com/iaSgMN0BLeGUEdOslax0MCbG3l1WbCkB4o689lvC0hxVqADYzZJeQI8hKONWUi4kg-HpHq9t2ledyL9tiwmbGiwRHa124t4nX1cD-K9BzHillay-xra-NT0L37rNslqMKwTxIfySRg=w2400"
        },
        {
          name: "Intermediate Python",
          link: "https://www.sololearn.com/certificates/course/en/16942149/1158/landscape/png",
          from: "SoloLearn"
        },
        {
          name: "Python Data Structures",
          link: "https://www.sololearn.com/certificates/course/en/16942149/1159/landscape/png",
          from: "SoloLearn"
        },
        {
          name: "Python for Beginners",
          link: "https://www.sololearn.com/certificates/course/en/16942149/1157/landscape/png",
          from: "SoloLearn"
        },
        {
          name: "Python 3",
          link: "https://www.sololearn.com/certificates/course/en/16942149/1073/landscape/png",
          from: "SoloLearn"
        },
        {
          name: "Python",
          link: "https://www.kaggle.com/learn/certification/jakubpyt/python",
          from: "Kaggle"
        },
      ],
      certificatesCsharp: [
        {
          name: "C#",
          link: "https://www.sololearn.com/certificates/course/en/16942149/1080/landscape/png",
          from: "SoloLearn"
        },
        {
          name: "C# .NET od Podstaw do Tworzenia Aplikacji w WPF i XAML",
          link: "https://www.udemy.com/certificate/UC-ccb0a31c-7f3f-484f-984f-9a37ef78e84b/",
          from: "Udemy"
        },
      ],
      certificatesDB: [
        {
          name: "SQL",
          link: "https://www.sololearn.com/certificates/course/en/16942149/1060/landscape/png",
          from: "SoloLearn"
        },
      ],
      certificatesGit: [
        {
          name: "GIT od podstaw dla każdego",
          link: "https://www.udemy.com/certificate/UC-cdd5282f-3e78-4df2-83b5-1b0ac67e70d3/",
          from: "Udemy"
        },
      ],
      certificatesWebDev: [
        {
          name: "Bootcamp programistyczny 2020 (PL): Web dev Full stack (HTML, CSS, JavaScript, Angular 7, React 16, Python 3, Django 2, NativeScript 5)",
          link: "https://www.udemy.com/certificate/UC-5d7d37d8-f783-4c74-aa4f-4885f0752f4c/",
          from: "Udemy"
        },
        {
          name: "HTML",
          link: "https://www.sololearn.com/Certificate/1014-16942149/jpg/",
          from: "SoloLearn"
        },
        {
          name: "CSS",
          link: "https://www.sololearn.com/Certificate/1023-16942149/jpg/",
          from: "SoloLearn"
        },
        {
          name: "JavaScript",
          link: "https://www.sololearn.com/Certificate/1014-16942149/jpg/",
          from: "SoloLearn"
        },
      ],
      certificatesDataScience: [
        {
          name: "Data Science",
          link: "https://www.sololearn.com/certificates/course/en/16942149/1093/landscape/png",
          from: "SoloLearn"
        },
        {
          name: "Machine Learning",
          link: "https://www.sololearn.com/certificates/course/en/16942149/1094/landscape/png",
          from: "SoloLearn"
        },
        {
          name: "Data Analysis with Python",
          link: "https://freecodecamp.org/certification/jakubpyt/data-analysis-with-python-v7",
          pic: "https://lh3.googleusercontent.com/XC2bYKm7mDkoMpw-at7h-Tz_HpOI6V22gZlj12F6WqCWF93o_g5kTEi3G6CNDV5vzawg_TZChcivCr8S8ZseaYV4mpAJjX-BZnd8FiI1l6k1r86GcJ_EbkTSKz4hmhjb8KHAn4pLKA=w2400"
        },
      ],
    };
  }

  //Method generate div with certificates cards by type
  createCards(certificates){
    return(
      // In div below will be all certificates from choosen type
      <div className="placeForCertificates"> 
        {/* Div includes title and list of certificates */}
        <h3 className="title-certificates">Certyfikaty</h3>
        <ul>
        {certificates.map((cert) => (
          <li key={cert.name}>
            <div  className="certificate-div">
              {/* Each item of list includes inscription about certificate and button to show confirmation */}
              <button className='btn-confirm-cert' href={cert.link} >Otwórz potwierdzenie</button>
              <p className="p-cert"> {">>>"} ({cert.from}) - {cert.name}</p>
            </div>
          </li>
        ))}
        </ul>
      </div>
    )
  }

  //Func call createCards func by type, to display it
  renderSwitch(type) {
    switch (type) {
      case "Python":
        return this.createCards(this.state.certificatesPython);
      case "Csharp":
        return this.createCards(this.state.certificatesCsharp);
      case "Databases":
        return this.createCards(this.state.certificatesDB);
      case "Git":
        return this.createCards(this.state.certificatesGit);
      case "WebDev":
        return this.createCards(this.state.certificatesWebDev);
      case "DataScience":
        return this.createCards(this.state.certificatesDataScience);
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        {/* Type of certificates is download from hardSkils, then renderSwitch chooses 
                right function, createCards generate div with cards and then, card is display in hardSkills Component
                */}
        {this.renderSwitch(this.props.type)}
      </div>
    );
  }
}
export { HardSkillsCertificates };

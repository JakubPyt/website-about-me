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
          name: "Intermediate Python",
          link:
            "https://www.sololearn.com/certificates/course/en/16942149/1158/landscape/png",
          pic:
            "https://lh3.googleusercontent.com/JfwjW1oC83O5WOzzdUdys4OVCcxC9bTx-wKD1guL3Xx46ishcnP6t2Uu6yieoYQUpUjdzuemBmAmntperATATIbXsu4Y5PJtDu7H1O2uwLYvPuAd2BD1sPgdb-gXA2828B9ePSjYpw=w2400",
        },
        {
          name: "Python Data Structures",
          link:
            "https://www.sololearn.com/certificates/course/en/16942149/1159/landscape/png",
          pic:
            "https://lh3.googleusercontent.com/rWZWL7VcKyKuZWTmSlcXSmwAj21mb_xyVETMgUX7Z4CPu6MsE9pkWym_0NZECgTS_l1tZdFVcgfvhSCf2LRCsXSNzly4po7xyexpQdSNlReQ2r6yT2DlPhyngsUE7N1GRXUMaoDvqA=w2400",
        },
        {
          name: "Python for Beginners",
          link:
            "https://www.sololearn.com/certificates/course/en/16942149/1157/landscape/png",
          pic:
            "https://lh3.googleusercontent.com/g9pcQ4zi8yEzwlRSyNfiE01cGCOh4WKiBnO7I8-P6XFmvXdefWfg39GKNC1-33hA6rC9-avgPLvUDj3aYEuSa83sby0ATpo-YVnPToTH_R0xw7ZntTbo-m7HFCaMS1_TtPVOBUo-DQ=w2400",
        },
        {
          name: "Python 3",
          link:
            "https://www.sololearn.com/certificates/course/en/16942149/1073/landscape/png",
          pic:
            "https://lh3.googleusercontent.com/hNSCeIuiZNCYukhUFSgBksh2CZzQtrhKk8VOCZT4wnigAO11QkM2987CgiZMIvim5vum3t7596mONvYwni2OvVlNW6CRAdZFrbYRFpwaKhANqDzQTM-wsBCxZjMtasQnzTeEbQhNCA=w2400",
        },
        {
          name: "Python",
          link: "https://www.kaggle.com/learn/certification/jakubpyt/python",
          pic:
            "https://lh3.googleusercontent.com/haK-lj0_YENaNebrxAc_BRp3mqpUx3678fEGK2smCu0W8YH6FwqQGhWxyOGOw_cOWC4Xz9MLyqnEGUn97nt4l_2U0i-pVBE0UHSFlo1aQ0QnK6ZqqtFNn8dEabT3x3CvhZIGz0wdhQ=w2400",
        },
      ],
      certificatesCsharp: [
        {
          name: "C#",
          link:
            "https://www.sololearn.com/certificates/course/en/16942149/1080/landscape/png",
          pic:
            "https://lh3.googleusercontent.com/gufeWQjwTp91lXOMHU8pTRF0x3R-mfgHaATou7_DEUAcGBGszEqwAgPdEdkZma5xtFnx0E0Qxk_cmKAxo_RQliDHdQ1CPUMMjJlCe0eNmHdJbsaHcQMNJLnHEBgmjmtU7SB1BYiG2w=w2400",
        },
        {
          name: "C# .NET od Podstaw do Tworzenia Aplikacji w WPF i XAML",
          link:
            "https://www.udemy.com/certificate/UC-ccb0a31c-7f3f-484f-984f-9a37ef78e84b/",
          pic:
            "https://lh3.googleusercontent.com/jw0uglXdKTC8Fb2S827eu-sEunC1NsN1ZzlPHPP8ovRRDkq6FLSL9L8DIR0Lh3eN0GLvvxYqo_sB_I6OzEsidJ-f7Ep8_1ny0e52lpuKtFA9oZMsIjqs8tRVdpLOAtKtQE1FRt91MA=w2400",
        },
      ],
      certificatesDB: [
        {
          name: "SQL",
          link:
            "https://www.sololearn.com/certificates/course/en/16942149/1060/landscape/png",
          pic:
            "https://lh3.googleusercontent.com/Y6tkA5vKOK-_FclKBt3Mo2MZZsqW4fQkU-5Dv8zghawHpBgWpQMgG4rzyJ3FJoaHu07uYBkx4M2gFHd0ahPOr0uG4giHnXi5RxzG4ylBZW_IOThKPp5lxO-j8jSNbeNT75Q415IABA=w2400",
        },
      ],
      certificatesGit: [
        {
          name: "GIT od podstaw dla każdego",
          link:
            "https://www.udemy.com/certificate/UC-cdd5282f-3e78-4df2-83b5-1b0ac67e70d3/",
          pic:
            "https://lh3.googleusercontent.com/baQxo5s3DYQHQXegXeTxxmRILwOmCgdf_Xco5u31ZJAfLCSGWZB7Aw1oUzID4bFAHzjtcSZHzfURxDhQEH7y3-hHsdtLPjzp95DcNrq8zonGtyV7W1F6xAKiZ4BqIjn5qE9rV6E67w=w2400",
        },
      ],
      certificatesWebDev: [
        {
          name:
            "Bootcamp programistyczny 2020 (PL): Web dev Full stack (HTML, CSS, JavaScript, Angular 7, React 16, Python 3, Django 2, NativeScript 5)",
          link:
            "https://www.udemy.com/certificate/UC-5d7d37d8-f783-4c74-aa4f-4885f0752f4c/",
          pic:
            "https://lh3.googleusercontent.com/iWkIEumGp7-JdVsFGRHT3UfqjfAcDdmAvFSf61JE9HlSz2The9xZdEmh1SHFvbKF459IkKkc8R9wKiLrxlsE0c5VgUX34qdEGUNh7qd0LyXHA7bseGk63fVjL5lY6hmIgnzDFSef4w=w2400",
        },
        {
          name: "HTML",
          link: "https://www.sololearn.com/Certificate/1014-16942149/jpg/",
          pic:
            "https://lh3.googleusercontent.com/735tbL7taDHbSnFTmr2zUt9tBzlzEjk-nlhspqWjFjq6IsuHqjwHulDR8ihd7KWCtSFwCPkPlCsQiQX3ncuo7xLsvv566oQtePx0f_T-MvKbPR-5yAf8y8QCVWqn7Wm5zJB3w-zlAQ=w2400",
        },
        {
          name: "CSS",
          link: "https://www.sololearn.com/Certificate/1023-16942149/jpg/",
          pic:
            "https://lh3.googleusercontent.com/BigR3Edw0wA73Txg1ykNV0tI5YmLwZTn2I1JV2MLGmWVsz98R3K6ZCLWHHcx67o-u_AoqMdipVeyfjUTStsSri3F-lpvRIQAYnl7t9D7oZzyw5XmNAN_VH7XuQXO-TgKwEbZW2A0eQ=w2400",
        },
        {
          name: "JavaScript",
          link: "https://www.sololearn.com/Certificate/1014-16942149/jpg/",
          pic:
            "https://lh3.googleusercontent.com/dUGgpqZfWWf5FeEMXsKR1pjPqpfr9Xb72MQ5yzHdvqP7GRnlKI0ytmpF8Ze2_EyLnOMWQ57wIgEejaNOamaiSzrgWqlQ0MTFaygJ8tjv4GR4BgaS8DUCAHTCuReNEshGVWg7fYmiBA=w2400",
        },
      ],
      certificatesDataScience: [
        {
          name: "Data Science",
          link:
            "https://www.sololearn.com/certificates/course/en/16942149/1093/landscape/png",
          pic:
            "https://lh3.googleusercontent.com/f_3tsCMVPMhlsolMs4WeuoTahboXMAa3Xiq_Wq_-8n0c74Za3-WmzC262TNFE-fa0-iw9KnmWY6dRcI6WDOa7J7d-AiEx0gQkdAmUZ-YUdYBSpuY7KMh4tHZS9U5m_xhGxg07ZmMog=w2400",
        },
        {
          name: "Machine Learning",
          link:
            "https://www.sololearn.com/certificates/course/en/16942149/1094/landscape/png",
          pic:
            "https://lh3.googleusercontent.com/aMhHSifF1rtYnTYrp4u_g_kYjj9ML5ntRtwiCm3Wv43pDRazIAB4P9gFu6XGLMGWaXuG3P9uX-ElSbZrMq3Cpek3Mmy7RFOJUWIwQRUkvqLetKRq4lMH-C4jtXoSI5uf2ooRkpu4fQ=w2400",
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
              <p className="p-cert"> {">>>"} (sololearn) - {cert.name}</p>
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

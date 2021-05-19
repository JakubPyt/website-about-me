import React from "react";
import "./projects-cards.css";
import { Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

class ProjectsCards extends React.Component {
  constructor(props) {
    super(props);
    // Here is all information about the projects
    // The order matters
    // If you want to add a new project just add an object with the arguments below
    this.state = {
      // =========================
      // Machine Learning Projects
      // =========================
      projectsMachineLearning: [
        {
          title: "Tabular Playground Series-Apr 2021",
          star: true,
          mainTech: "Python, MLPClassifier",
          modules: ["Sklearn", "Pandas", "Seaborn", "Plotly", "Matplotlib"],
          tools: ["Google Colaboratory", "Github"],
          description:
            'Projekt stworzony w ramach kwietniowego (2021) konkursu na stronie Kaggle. W ramach projektu zająłem się problemem klasyfikacji binarnej. Stworzony przeze mnie model osiągnął dokładność na poziomie 0,79813. Zapraszam do obejrzenia projektu w Google Colab, pod przyciskiem "Uruchom" ;) .',
          link_run:
            "https://colab.research.google.com/drive/1MEkcEmXTamiuudCsBM__ja_cxud6tTK2?usp=sharing",
          link_git:
            "https://github.com/JakubPyt/Tabular_Playground_Series-Apr_2021",
        },
        {
          title: "Predict Health Costs",
          star: false,
          mainTech: "Python, Sequential",
          modules: ["Tensorflow", "Pandas", "Seaborn", "Matplotlib"],
          tools: ["Google Colaboratory", "Github"],
          description:
            'Projekt stworzony w ramach kursu "Machine Learning with Python" na stronie freecodecamp.org. W ramach projektu moim celem była predykcja kosztów leczenia. Zapraszam do obejrzenia projektu na Google Colab(przycisk Uruchom).',
          link_run:
            "https://colab.research.google.com/drive/1UkEIjC4ngs_1Xv7sXnBB5Ve0kCVm7sSl?usp=sharing",
          link_git: "https://github.com/JakubPyt/Predict_Health_Costs",
        },
      ],
      // ================================
      // Analytical Applications Projects
      // ================================
      projectsAnalyticalApps: [
        {
          title: "Budget App",
          star: true,
          mainTech: "Python",
          modules: ["Tkinter", "Matplotlib", "Pandas"],
          tools: ["PyCharm", "Github", "Replit.com"],
          description:
            'Aplikacja do obsługi finansów. Po jej uruchomieniu masz możliwość dodawać wpłaty i wypłaty do swojej książki finansowej (panas DataFrame). Dodatkowo, dzięki wgranemu modułowi matplotlib możesz wizualizować stan swojego rachunku, a wydatki zobaczysz na wykresie kołowym (stworzonym wedle kategorii). Przycisk "Uruchom" otworzy aplikację online, na stronie replit.com (uruchomienie projektu na stronie trochę trwa, ale mam nadzieję że nie będziesz żałować ;) ).',
          link_run: "https://replit.com/@JakubPyt/Budget-App#main.py",
          link_git: "https://github.com/JakubPyt/Budget-App",
        },
        {
          title: "Matrix Calculator",
          star: false,
          mainTech: "Python",
          modules: ["Numpy"],
          tools: ["PyCharm", "Github"],
          description:
            "Prosta aplikacja konsolowa, stworzona w celu przećwiczenia obsługi modułu numpy, który gra w niej pierwsze skrzypce. Przycisk uruchom przeniesie Cię do strony replit.com, gdzie będziesz mieć możliwość zobaczenia kalkulatora macierzy w akcji.",
          link_run: "https://replit.com/@JakubPyt/Matrix-Calculator-1#main.py",
          link_git: "https://github.com/JakubPyt/Matrix-Calculator",
        },
      ],
      // ========================
      // Web Development Projects
      // ========================
      projectsWebDev: [
        {
          title: "Ta strona",
          star: true,
          mainTech: "React",
          modules: [
            "React-Bootstrap",
            "React-Icons",
            "React-Scroll",
            "gh-pages",
          ],
          tools: [
            "Visual Studio Code",
            "Github",
            "Github Pages",
            "Embed Google Photos"
          ],
          description:
            "Strona stworzona w celu zebrania wszystkich moich projektów i osiągnięć programistycznych w jednym miejscu. ",
          link_run: "",
          link_git: "https://github.com/JakubPyt/website-about-me",
        },
        {
          title: "Tribute Page",
          star: false,
          mainTech: "HTML, CSS",
          modules: [],
          tools: ["Visual Studio Code", "Github", "Github Pages"],
          description:
            'Projekt stworzony podczas kursu "Responsive Web Design" na stronie freecodecamp.org. W ramach projektu stworzyłem stronę hołdu dla Alberta Einsteina. Przycisk uruchom przeniesie Cię na tą stronę w GitHub Pages. ',
          link_run: "https://jakubpyt.github.io/Tribute-Page/",
          link_git: "https://github.com/JakubPyt/Tribute-Page",
        },
      ],
      // ===================================
      // Analysis and Visualisation Projects
      // ===================================
      projectsDataAnalysis: [
        {
          title: "Demographic Data Analyzer",
          star: true,
          mainTech: "Python",
          modules: ["Pandas", "Matplotlib", "Seaborn", "Plotly"],
          tools: ["Jupyter Notebook", "Google Colaboratory"],
          description:
            'Projekt stworzony w ramach kursu "Data Analysis" na stronie freecodecamp.org, przy czym rozbudowałem zakres moich zadań w tym notatniku. W tym projekcie moim głównym celem było przećwiczenie umiejętności związanych z modułem Pandas. Zaś ogólnym celem projektu było wybranie konkretnych danych z DataFrame. Dodatkowo postanowiłem dla każdego z zadań stworzyć wizualną odpowiedź. Przycisk uruchom przeniesie Cię do mojego notatnika w Google Colab.',
          link_run:
            "https://colab.research.google.com/drive/1sGyA4vC3_4Wi3bHTRG54Wjwx6BhmSH8r?usp=sharing",
          link_git: "https://github.com/JakubPyt/Demographic_Data_Analyzer",
        },
        {
          title: "Medical Data Visualizer",
          star: false,
          mainTech: "Python",
          modules: ["Pandas", "Numpy", "Seaborn"],
          tools: ["Jupyter Notebook", "Google Colaboratory"],
          description:
            'Projekt stworzony w ramach kursu "Data Analysis" na stronie freecodecamp.org. W tym projekcie moim zadaniem była praca z danymi medycznymi: dodawanie wyliczonych kolumn, normalizacja, sprzątanie danych oraz ich wizualizacja. Przycisk uruchom przeniesie Cię do mojego notatnika w Google Colaboratory. ',
          link_run:
            "https://colab.research.google.com/drive/1J657ce9urZj-U4nv9pYYUuIcs-cJp0iB?usp=sharing",
          link_git: "https://github.com/JakubPyt/Medical_Data_Visualizer",
        },
        {
          title: "Page View Time Series Visualizer",
          star: false,
          mainTech: "Python",
          modules: ["Pandas", "Numpy", "Seaborn", "Matplotlib"],
          tools: ["Jupyter Notebook", "Google Colaboratory"],
          description:
            'Projekt stworzony w ramach kursu "Data Analysis" na stronie freecodecamp.org. Głównym celem tego projektu była wizualizacja danych wyświetleń forum freeCodeCamp. Przycisk uruchom przeniesie Cię do mojego notatnika w Google Colaboratory. ',
          link_run:
            "https://colab.research.google.com/drive/1HRgcZxwUxjjp59GVi0MGKJxHgZpChHRz?usp=sharing",
          link_git:
            "https://github.com/JakubPyt/Page_View_Time_Series_Visualizer",
        },
        {
          title: "Sea level predictor",
          star: false,
          mainTech: "Python",
          modules: ["Pandas", "Matplotlib", "Scipy"],
          tools: ["Jupyter Notebook", "Google Colab"],
          description:
            'Projekt stworzony w ramach kursu "Data Analysis" na stronie freecodecamp.org. W tym projekcie moim zadaniem było zwizualizowanie danych poziomu morza od roku 1880 i za pomocą modułu Scipy wyznaczenie dwóch linii najlepszego dopasowania do danych. Jedna linia uwzględniała dane od roku 1880, druga zaś tylko od roku 2000. Wnioski są dosyć smutne. Przycisk uruchom przeniesie Cię do mojego notatnika w Google Colaboratory. ',
          link_run:
            "https://colab.research.google.com/drive/1cy4GF4V0MlTnEp4XjHrCDgtbadKCsBpY?usp=sharing",
          link_git: "https://github.com/JakubPyt/Sea_Level_Predictor",
        },
      ],
    };
  }
  
  // This function generate place for cards with cards from one type
  createCards(projects) {
    return (
      // It generates field
      <div className="placeForProjects">
        {
          // This map get all projects(from one catgory) from state
          projects.map((project) => (
            // The whole card(each project has one)
            <Card key={project.name} className="projectCard">
              {/* Header */}
              <Card.Header className="projectCardHeader">
                {project.title} {project.star == true ? <AiFillStar /> : null}
              </Card.Header>

              <Card.Body className="projectCardBody">
                {/* mainTech */}
                Technologia przewodnia:{" "}
                <p className="projectCardMainTech"> {project.mainTech} </p>
                {/* tools */}
                {/* Not displayed if empty */}
                {project.tools.length == [] ? null : (
                  <div>
                    <p className="projectCardListHeader">Narzędzia:</p>
                    <div className="projectCardList">
                      {project.tools.map((tool) => (
                        <p className="projectCardListElement"># {tool}</p>
                      ))}
                    </div>
                  </div>
                )}
                {/* modules */}
                {/* Not displayed if empty */}
                {project.modules.length == [] ? null : (
                  <div>
                    <p className="projectCardListHeader">Dodatkowe moduły:</p>
                    <div className="projectCardList">
                      {project.modules.map((module) => (
                        <p className="projectCardListElement"># {module}</p>
                      ))}
                    </div>
                  </div>
                )}
                {/* description */}
                Opis:{" "}
                <div className="projectCardDesc">{project.description}</div>
                {/* buttons */}
                <div className="projectCardButtonsSection">
                  {/* Run button */}
                  {/* Not displayed if empty */}
                  {project.link_run == "" ? null : (
                    <a href={project.link_run}>
                      <button className="projectCardButton">Uruchom</button>
                    </a>
                  )}

                  {/* Git button */}
                  <a href={project.link_git}>
                    <button className="projectCardButton">
                      Zobacz na GitHubie
                    </button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    );
  }

  // This function switch which type of projects has to be displayed
  renderSwitch(type) {
    switch (type) {
      case "AA": // Analytical Applications
        return this.createCards(this.state.projectsAnalyticalApps);
      case "DA": // Data Analysis
        return this.createCards(this.state.projectsDataAnalysis);
      case "WD": // Web Dev
        return this.createCards(this.state.projectsWebDev);
      case "ML": // Machine Learning
        return this.createCards(this.state.projectsMachineLearning);
      default:
        return null;
    }
  }
  // render function get type of projects from Projects component
  // and send this type to render switch function
  // render switch call create cards function 
  // and place for cards with cards is returned to be display
  render() {
    return <div>{this.renderSwitch(this.props.type)}</div>;
  }
}

export { ProjectsCards };

import React from "react";
import "./projects.css";
import { Card } from "react-bootstrap";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    // Here is all information about the projects
    // The order matters
    // If you want to add a new project just add an object with the arguments below
    this.state = {
      projects: [
        {
          title: "Ta strona",
          type: "Front end",
          mainTech: "React",
          modules: ["React-Bootstrap", "React-Icons", "React-Scroll", 'gh-pages'],
          tools: ["Visual Studio Code", "Github", "Github Pages", 'Embadded Google Photos'],
          description:
            "Strona stworzona w celu zebrania wszystkich moich projektów i osiągnięć programistycznych w jednym miejscu. ",
          link_run: "",
          link_git: "#",
        },
        {
          title: "Budget App",
          type: "Aplikacja desktopowa",
          mainTech: "Python",
          modules: ["Tkinter", "Matplotlib", "Pandas"],
          tools: ["PyCharm", "Github"],
          description:
            'Aplikacja do obsługi finansów. Po jej uruchomieniu masz możliwość dodawać wpłaty i wypłaty do swojej książki finansowej(panas DataFrame).\
                    Dodatkowo, dzięki wgranemu modułowi matplotlib możesz wizualizować stan swojego rachunku, a wydatki zobaczysz na \
                    wykresie kołowym(stworzonym wedle kategorii). Przycisk "Uruchom" otworzy aplikację  \
                    online, na stronie replit.com (uruchomienie projektu na stronie trochę trwa, ale mam nadzieję że nie będziesz żałować ;) ).',
          link_run: "https://replit.com/@JakubPyt/Budget-App#main.py",
          link_git: "https://github.com/JakubPyt/Budget-App",
        },
        {
          title: "Matrix Calculator",
          type: "Aplikacja konsolowa",
          mainTech: "Python",
          modules: ["Numpy"],
          tools: ["PyCharm", "Github"],
          description:
            "Prosta aplikacja konsolowa, stworzona w celu przećwiczenia obsługi modułu numpy, który gra w niej pierwsze skrzypce. Przycisk uruchom przeniesie Cię\
                    do strony replit.com, gdzie będziesz mieć możliwość zobaczenia kalkulatora macierzy w akcji.",
          link_run: "https://replit.com/@JakubPyt/Matrix-Calculator-1#main.py",
          link_git: "https://github.com/JakubPyt/Matrix-Calculator",
        },
        {
          title: "Demographic Data Analyzer",
          type: "Analiza danych",
          mainTech: "Python",
          modules: ["Pandas"],
          tools: ["Jupyter Notebook", "Google Colab"],
          description:
            'Projekt stworzony w ramach kursu "Data Analysis" na stronie freecodecamp.org. W tym projekcie moim głównym celem było przećwiczenie umiejętności \
                    związanych z modułem Pandas. Zaś ogólnym celem projektu było wybranie konkretnych danych z DataFrame. \
                    Przycisk uruchom przeniesie Cię do mojego notatnika w Google Colaboratory.',
          link_run:
            "https://colab.research.google.com/drive/1U2QpwL8ZpFlFBEf_hKffKUY3A-vWBnqB?usp=sharing",
          link_git:
            "https://github.com/JakubPyt/Demographic_Data_Analyzer/blob/main/Demographic_Data_Analyzer.ipynb",
        },
        {
          title: "Medical Data Visualizer",
          type: "Analiza danych i wizualizacja",
          mainTech: "Python",
          modules: ["Pandas", "Numpy", "Seaborn"],
          tools: ["Jupyter Notebook", "Google Colab"],
          description:
            'Projekt stworzony w ramach kursu "Data Analysis" na stronie freecodecamp.org. W tym projekcie moim zadaniem była praca z danymi medycznymi: \
                    dodawanie wyliczonych kolumn, normalizacja, sprzątanie danych oraz ich wizualizacja. \
                    Przycisk uruchom przeniesie Cię do mojego notatnika w Google Colaboratory. ',
          link_run:
            "https://colab.research.google.com/drive/1J657ce9urZj-U4nv9pYYUuIcs-cJp0iB?usp=sharing",
          link_git:
            "https://github.com/JakubPyt/Medical_Data_Visualizer/blob/main/Medical_Data_Visualizer.ipynb",
        },
        {
          title: "Page View Time Series Visualizer",
          type: "Wizualizacja danych",
          mainTech: "Python",
          modules: ["Pandas", "Numpy", "Seaborn", "Matplotlib"],
          tools: ["Jupyter Notebook", "Google Colab"],
          description:
            'Projekt stworzony w ramach kursu "Data Analysis" na stronie freecodecamp.org. Głównym celem tego projektu była wizualizacja danych \
                    wyświetleń forum freeCodeCamp.\
                    Przycisk uruchom przeniesie Cię do mojego notatnika w Google Colaboratory. ',
          link_run:
            "https://colab.research.google.com/drive/1HRgcZxwUxjjp59GVi0MGKJxHgZpChHRz?usp=sharing",
          link_git:
            "https://github.com/JakubPyt/Page_View_Time_Series_Visualizer/blob/main/Page_View_Time_Series_Visualizer.ipynb",
        },
        {
          title: "Sea level predictor",
          type: "Wizualizacja danych + predykcja",
          mainTech: "Python",
          modules: ["Pandas", "Matplotlib", "Scipy"],
          tools: ["Jupyter Notebook", "Google Colab"],
          description:
            'Projekt stworzony w ramach kursu "Data Analysis" na stronie freecodecamp.org. W tym projekcie moim zadaniem było zwizualizowanie \
                    danych poziomu morza od roku 1880 i za pomocą modułu Scipy wyznaczenie dwóch linii najlepszego dopasowania do danych. Jedna linia uwzględniała dane\
                    od roku 1880, druga zaś tylko od roku 2000. Wnioski są dosyć smutne. \
                    Przycisk uruchom przeniesie Cię do mojego notatnika w Google Colaboratory. ',
          link_run:
            "https://colab.research.google.com/drive/1cy4GF4V0MlTnEp4XjHrCDgtbadKCsBpY?usp=sharing",
          link_git:
            "https://github.com/JakubPyt/Sea_Level_Predictor/blob/main/Sea_Level_Predictor.ipynb",
        },
        {
          title: "Tribute Page",
          type: "Front end",
          mainTech: "HTML, CSS",
          modules: [],
          tools: ["Visual Studio Code", "Github", "Github Pages"],
          description:
            'Projekt stworzony podczas kursu "Responsive Web Design" na stronie freecodecamp.org. \
                    W ramach projektu stworzyłem stronę hołdu dla Alberta Einsteina. Przycisk uruchom przeniesie Cię na tą stronę w GitHub Pages. ',
          link_run: "https://jakubpyt.github.io/Tribute-Page/",
          link_git: "https://github.com/JakubPyt/Tribute-Page",
        },
      ],
    };
  }

  // The function generates a field with cards with information from state
  createProjectsCards(projects) {
    return (
      // It generates field
      <div className="placeForProjects">
        {
          // This map get all projects from state
          projects.map((project) => (
            // The whole card
            <Card key={project.name} className="projectCard">
              {/* Header */}
              <Card.Header className="projectCardHeader">
                {project.title}
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
              {/* type */}
              <div className="projectType">{project.type}</div>
            </Card>
          ))
        }
      </div>
    );
  }
  render() {
    return (
      <div 
        className="projectsDiv" //For style
        name="projects" // For navigation
        >

        <h1 className="projectsHeader">Moje projekty</h1>

        {/* Function below generates whole content */}
        {this.createProjectsCards(this.state.projects)}
      </div>
    );
  }
}

export { Projects };

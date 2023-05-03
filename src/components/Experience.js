export function Experience() {
    return (
        <div className="experience">
        <section className="work-section">
          <div className="work-section-summary">
            <h2 className="decorator-variant decorator-two" id="a">
              <span className="letter">A</span>
              Summary</h2>
            <p>
              I’m looking for interesting job as front-end developer. I’m honest
              and punctual, I work well in a team but also on my own as I like
              to set myself goals which I will achieve. I enjoy running - in
              such way I keep my mind clear. Ask me about my first marathon-you
              will be my best friend.
            </p>
          </div>
          <div className="work-section-skills">
            <h2 className="decorator-variant decorator-two" id="b">
              <span className="letter">B</span>
              Skills Highlights</h2>
            <div className="skills-list">
              <ul className="list-one">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <ul className="list-two">
                <li>React</li>
                <li>Ember</li>
                <li>Jest Testing Library</li>
              </ul>
            </div>
          </div>

      
          <div className="work-section-work">
            <h2 className="decorator-variant decorator-two" id="c">
              <span className="letter">C</span>
              Work experience</h2>

            <div className="work-list">
              <p className=""><span>Name of employer:</span> BC Riel</p>
              <p>
                <span>Dates of employment:</span> September 2021 - April 2022
              </p>
              <p className=""><span>Job title:</span> Civil engineer</p>
              <p>
                <span>Project/Role description:</span>
                <a href="https://riel.ua/" target="_blank">BC Riel</a>
                Implementation of the BIM process at the stages of planning and
                implementation of the project life cycle. Training project
                participants to use the model as a data environment for project
                analysis.
              </p>
            </div>

            <div className="work-list previous">
              <p className=""><span>Name of employer:</span> LLP Altis-Holding</p>
              <p>
                <span>Dates of employment:</span> September 2013 - April 2021
              </p>
              <p className=""><span>Job title:</span> BIM coordinator/manager</p>
              <p>
                <span>Project/Role description:</span> Calculation of reinforced
                concrete structures: Design using Revit, Dynamo, PythonShell.
              </p>
            </div>
            </div>
            
          <div className="work-section-education">
            <h2 className="decorator-variant decorator-two" id="d">
              <span className="letter">D</span>
              Education</h2>
            <div className="education-list">
              <p><span>Dates of studying:</span> September 2008 - 2013</p>
              <p>
                <span>Name of institution:</span> Kyiv national university of
                construction and architecture
              </p>
              <p>
                <span>Degree and major:</span> MS, Industrial and civil
                construction (diploma with honours)
              </p>
            </div>
            </div>
            
          <div className="work-section-projects">
            <h2 className="decorator-variant decorator-two" id="e">
              <span className="letter">E</span>
              Projects</h2>
            <table >
              <h2>My repositories</h2>
              <tbody className="project-list">
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </tbody>
              <div className="loader">Loading...</div>
            </table>
          </div>
        </section>
        </div>
    )
}

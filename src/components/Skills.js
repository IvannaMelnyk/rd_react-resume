import { WorkExperienceList } from './ExperienceList'; 

export function Skills() {
    return (
        <div className="experience">
        <section className="work-section">
          <div className="work-section-summary">
            <h2 className="decorator-variant decorator-two" id="a">
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
            <WorkExperienceList/>
          <div className="work-section-education">
            <h2 className="decorator-variant decorator-two" id="d">
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

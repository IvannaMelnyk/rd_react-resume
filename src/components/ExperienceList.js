import { Experience } from './Experience';
import React, { useState } from "react";

export function WorkExperienceList() {
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
    const [link, setLink] = useState("");
    
    const addWorkExperience = (event) => {
    event.preventDefault();

    const newWorkExperience = {
      title,
      description,
      name,
      link,
    };

        setWorkExperienceList([...workExperienceList, newWorkExperience]);
        
    setTitle("");
    setDescription("");
    setName("");
    setLink("");
    };
      return (
          <div className="work-section">
              
      <h2 className="decorator-variant decorator-two" id="c">
                  Work Experience
              </h2>
              <div className="work-list">
              <p className=""><span>Job title:</span> Civil engineer</p>
              <p>
                <span>Project/Role description:</span>
                Implementation of the BIM process at the stages of planning and
                implementation of the project life cycle. Training project
                participants to use the model as a data environment for project
                analysis.
                  </p>
                  
                  <p className=""><span>Name of employer:</span> BC Riel</p>
                  
                  <span>Link: <a href="https://riel.ua/" target="_blank" rel="noopener noreferrer">BC Riel</a></span>
            </div>

      {workExperienceList.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
              
      <form onSubmit={addWorkExperience}>
        <h2>Add Work Experience</h2>
        <div>
          <label>Job title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Project/Role description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Name of employer:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <button className='add-button' type="submit">Add</button>
      </form>
    </div>
  );
}


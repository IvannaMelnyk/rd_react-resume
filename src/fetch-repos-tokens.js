import React, { useState, useEffect } from 'react';

const GITHUB_URL_BASE = 'https://api.github.com';
const GITHUB_USER = 'IvannaMelnyk';
//GITHUB_TOKEN hide in token folder

class GithubApi {
  constructor(token, username) {
    this.token = token;
    this.username = username;
  }

  async getRepos() {
    const url = `${GITHUB_URL_BASE}/users/${this.username}/repos?q=created:">2022-09-30"&sort=stars&order=desc&per_page=15`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Token ${this.token}`
      }
    });
    const data = await response.json();
    return data;
  }
}

const MyMyRepos = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const githubApi = new GithubApi(GITHUB_TOKEN, GITHUB_USER);

    const fetchData = async () => {
      try {
        const data = await githubApi.getRepos();
        if (data.length > 0) {
          setProjects(data);
        }
        setLoading(false);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  const renderProjects = () => {
    if (loading) {
      return <div className="loader">Loading...</div>;
    }

    if (projects.length === 0) {
      return <div>No projects found.</div>;
    }

    return (
      <table className="project-list">
        <tbody>
          {projects.map((project) => (
            <tr className="project" key={project.id}>
              <td>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  {project.full_name}
                </a>
              </td>
              {project.description && <td>{project.description}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <h1>My Projects</h1>
      {renderProjects()}
    </>
  );
};

export default MyRepos;

// one work place
export function Experience({ title, description, name, link }) {
  return (
      <div className="work-list">
          
      <p>
        <span>Job title: {title}</span> 
      </p>
      <p>Project/Role description: {description}</p>
      <p>
        <span>Link:</span>{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </p>
      <p>Name of employer: {name}</p>
    </div>
  );
}

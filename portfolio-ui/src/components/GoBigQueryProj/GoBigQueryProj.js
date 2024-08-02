// ProjectTile.js
import React from 'react';
import './GoBigQueryProj.css';

function GoBigQueryProj({ title, description, svgPath, link }) {
  return (
    <div className="project-tile">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-svg-container">
        <img src={svgPath} alt={`${title} architecture`} className="project-svg" />
      </div>
      <a href={link} className="project-link">Learn More</a>
    </div>
  );
}

export default GoBigQueryProj;

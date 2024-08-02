// Home.js
import React from 'react';
import './Home.css';
import dataPipelineSvg from '../assets/data-pipeline-architecture.svg'; // make sure to place the SVG in the correct path
import GoBigQueryProj from './GoBigQueryProj/GoBigQueryProj';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Code Vertigo</h1>
      <p className="home-description">Everything in the intersection of, but not exclusive to, SDE and Data</p>
      <div className="projects-container">
        <GoBigQueryProj
          title="Data Pipeline Project"
          description="A robust data pipeline for processing and analyzing large datasets."
          svgPath={dataPipelineSvg}
          link="/projects/data-pipeline"
        />
        <GoBigQueryProj
          title="Data Pipeline Project"
          description="A robust data pipeline for processing and analyzing large datasets."
          svgPath={dataPipelineSvg}
          link="/projects/data-pipeline"
        />
      </div>
    </div>
  );
}

export default Home;

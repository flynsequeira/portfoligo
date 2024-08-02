// About.js
import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faAws, faJava, faNode, faJsSquare, faAngular, faDocker } from '@fortawesome/free-brands-svg-icons';
import data from '../assets/data.png';

function About() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">FLYN SEQUEIRA</h1>
      <h2 className="resume-subtitle">SDE | USA | +1 682 583 1665 | flyns3694@gmail.com</h2>
      
      <section className="resume-section">
        <h3 className="section-title">SKILLS</h3>
        <div className="skills-container">
          <div className="skills-tile">
            <h4 className="skills-title">SDE</h4>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faPython} size="2x" title="Python" />
              <FontAwesomeIcon icon={faAws} size="2x" title="AWS" />
              <FontAwesomeIcon icon={faJava} size="2x" title="Java" />
              <FontAwesomeIcon icon={faNode} size="2x" title="Node.js" />
              <FontAwesomeIcon icon={faJsSquare} size="2x" title="JavaScript" />
              <FontAwesomeIcon icon={faAngular} size="2x" title="Angular" />
              <FontAwesomeIcon icon={faDocker} size="2x" title="Docker" />
            </div>
          </div>
          <div className="skills-tile">
            <h4 className="skills-title">Data</h4>
            <div className="skills-icons">
              <img src={data} alt="Data" title="Data" className="custom-icon" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="resume-section">
        <h3 className="section-title">EXPERIENCE</h3>
        <div className="experience-item">
          <h4>UnitedHealth Group | Optum (Employer: Smart IT Frame)</h4>
          <p>Data Engineer | Remote (Dallas), TX, USA</p>
          <p>Nov 2023 – Present</p>
          <ul>
            <li>Successfully implemented POC to replace inhouse Go based data tool with Databricks Structured Streaming with custom data architecture for serving scalable, low-latency, high-throughput analytics data.</li>
            <li>Reduced latency by 80% to meet SLA using Liquid Clustering, Denormalization, HIVE meta store optimization, and improving transformations and joins by analyzing the DAG. Reduced compute costs by about 30% by ensuring full core utilization, and compute switch between full load and incremental.</li>
            <li>Improved data onboarding speed by 70% using configuration-based solution for data bricks.</li>
            <li>Developed POC of low-latency, scalable, distributed, high-performance, PHI-compliant healthcare data migration project, using Go Lang based data pipelining tools between legacy and language agnostic databases.</li>
            <li>Enhanced data integrity by implementing atomic caching with Redis using Go Plugin for stable transformations and improved failure recovery with Dead Letter Queue management.</li>
            <li>Mentored two Tech Development Program (TDP) candidates with Pilot Project Development.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h4>E2log Inc.</h4>
          <p>Machine Learning Engineer | Houston (Remote - Dallas), TX, USA</p>
          <p>Jan 2022 – Sept 2023</p>
          <ul>
            <li>Developed a data ingestion pipeline using AWS Serverless, Java Spring Boot, and distributed communication protocols for optimizing performance and scalability.</li>
            <li>Created real-time shipment and fleet tracking system with Google Maps and document management with AWS S3.</li>
            <li>Designed and implemented a data integration and analytics solution using serverless architecture, optimizing for performance with materialized views for AWS Quick Sight analytics.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h4>Software Engineering Intern | Houston (Remote - Dallas), TX, USA</h4>
          <p>Aug 2020 – Dec 2021</p>
          <ul>
            <li>Developed logistics dashboards for clients requiring analysis of sustainability and carbon footprint.</li>
            <li>Engineered algorithms to maximize shipment container usage and optimize truck routes using Google OR Tools.</li>
            <li>Prototyped a deep learning model using BERT for classifying 100k classes of tax codes from product description.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h4>DQ Labs (Subsidiary Software Company - Xamplay)</h4>
          <p>Full Stack Developer | Bangalore, Karnataka, India</p>
          <p>Nov 2017 – Dec 2018</p>
          <ul>
            <li>Developed solution that enhanced student-organization communication, slashing SLA by 80%.</li>
            <li>Enhanced MongoDB infrastructure for scalable support and peak performance amid rapid user growth.</li>
            <li>Created a 'next topic to learn' recommendation, implementing advanced data structure for dynamic learning paths.</li>
            <li>Managed successful data migration from legacy CRM to the new platform, for legacy system user.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h4>Euprime</h4>
          <p>Data Scientist and Software Developer | Bangalore, Karnataka, India</p>
          <p>Jan 2017 – Oct 2017</p>
          <ul>
            <li>Developed Statistical Tests and ANOVA tables for statistical analysis of core analytics website using Python Flask.</li>
            <li>Designed and developed NoSQL databases and full-stack applications for patients and healthcare practitioners.</li>
            <li>Led the Data team in curating and transforming healthcare datasets, enriching data portfolios for health diagnosis.</li>
          </ul>
        </div>
      </section>
      
      <section className="resume-section">
        <h3 className="section-title">EDUCATION</h3>
        <p>Visvesvaraya Technological University, Bangalore, Karnataka, India</p>
        <p>June 2016</p>
        <p>Bachelor of Engineering (B.E.) | Major- Information Science</p>
      </section>
    </div>
  );
}

export default About;

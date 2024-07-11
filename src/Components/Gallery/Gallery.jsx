import React, { useState } from 'react';
import ModalImage from "react-modal-image";
import "./Gallery.css";

import project1Preview from '../../assets/project1.png';
import project1_1 from '../../assets/project1/project1_1.png';
import project1_2 from '../../assets/project1/project1_2.png';
import project1_3 from '../../assets/project1/project1_3.png';
import project1_4 from '../../assets/project1/project1_4.png';
import project1_5 from '../../assets/project1/project1_5.png';
import project1_6 from '../../assets/project1/project1_6.png';
import project1_7 from '../../assets/project1/project1_7.png';
import project1_8 from '../../assets/project1/project1_8.png';
import project1_9 from '../../assets/project1/project1_9.png';
import project1_10 from '../../assets/project1/project1_10.png';

import project2Preview from '../../assets/project2.png';
import project2_1 from '../../assets/project2/project2_1.png';
import project2_2 from '../../assets/project2/project2_2.png';
import project2_3 from '../../assets/project2/project2_3.png';
import project2_4 from '../../assets/project2/project2_4.png';
import project2_5 from '../../assets/project2/project2_5.png';
import project2_6 from '../../assets/project2/project2_6.png';
import project2_7 from '../../assets/project2/project2_7.png';

import project3Preview from '../../assets/project3.png';
import project3_1 from '../../assets/project3/project3_1.png';
import project3_2 from '../../assets/project3/project3_2.png';
import project3_3 from '../../assets/project3/project3_3.png';
import project3_4 from '../../assets/project3/project3_4.png';
import project3_5 from '../../assets/project3/project3_5.png';
import project3_6 from '../../assets/project3/project3_6.png';

import project4Preview from '../../assets/project4.png';
import project4_1 from '../../assets/project4/project4_1.png';
import project4_2 from '../../assets/project4/project4_2.png';
import project4_3 from '../../assets/project4/project4_3.png';
import project4_4 from '../../assets/project4/project4_4.png';
import project4_5 from '../../assets/project4/project4_5.png';
import project4_6 from '../../assets/project4/project4_6.png';
import project4_7 from '../../assets/project4/project4_7.png';

import project5Preview from '../../assets/project5.png';
import project5_1 from '../../assets/project5/project5_1.png';
import project5_2 from '../../assets/project5/project5_2.png';
import project5_3 from '../../assets/project5/project5_3.png';
import project5_4 from '../../assets/project5/project5_4.png';
import project5_5 from '../../assets/project5/project5_5.png';
import project5_6 from '../../assets/project5/project5_6.png';

import project6Preview from '../../assets/project6.png';
import project6_1 from '../../assets/project6/project6_1.png';
import project6_2 from '../../assets/project6/project6_2.png';
import project6_3 from '../../assets/project6/project6_3.png';
import project6_4 from '../../assets/project6/project6_4.png';
import project6_5 from '../../assets/project6/project6_5.png';
import project6_6 from '../../assets/project6/project6_6.png';
import project6_7 from '../../assets/project6/project6_7.png';

const projects = [
  {
    title: "Inground Pool Installation",
    preview: project1Preview,
    images: [
      project1_1,
      project1_2,
      project1_3,
      project1_4,
      project1_5,
      project1_6,
      project1_7,
      project1_8,
      project1_9,
      project1_10
    ]
  },
  {
    title: "Outdoor Kitchen and BBQ Area",
    preview: project2Preview,
    images: [
      project2_1,
      project2_2,
      project2_3,
      project2_4,
      project2_5,
      project2_6,
      project2_7
    ]
  },
  {
    title: "Restaurant Interior Stone Wall",
    preview: project3Preview,
    images: [
      project3_1,
      project3_2,
      project3_3,
      project3_4,
      project3_5,
      project3_6
    ]
  },
  {
    title: "Stone Fire Pit and Patio",
    preview: project4Preview,
    images: [
      project4_1,
      project4_2,
      project4_3,
      project4_4,
      project4_5,
      project4_6,
      project4_7
    ]
  },
  {
    title: "Garden Stone Wall and Pathway",
    preview: project5Preview,
    images: [
      project5_1,
      project5_2,
      project5_3,
      project5_4,
      project5_5,
      project5_6
    ]
  },
  {
    title: "Cobblestone Driveway Installation",
    preview: project6Preview,
    images: [
      project6_1,
      project6_2,
      project6_3,
      project6_4,
      project6_5,
      project6_6,
      project6_7
    ]
  }
];

const Gallery = () => {
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <div className="Gallery" id="Gallery">
      <h2>Gallery</h2>
      <div className="Gallery-content">
        {projects.map((project, index) => (
          <div className="Gallery-item" key={index} onClick={() => setCurrentProject(project)}>
            <img src={project.preview} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {currentProject && (
        <div className="Modal">
          <button className="Close-button" onClick={() => setCurrentProject(null)}>Close</button>
          <div className="Modal-content">
            {currentProject.images.map((image, index) => (
              <div key={index} className="Modal-image">
                <ModalImage
                  small={image}
                  large={image}
                  alt={`${currentProject.title} - ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
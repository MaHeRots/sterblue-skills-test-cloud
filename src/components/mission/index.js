import React from "react";
import '../components.css';
import {mission1} from "../../stories/mission.js";
import {Structure} from "../structure/index.js";

export class Mission extends React.Component {
  /**/
  render() {
    return (
      <div id='bigDiv'>
        <div className='header'>
          <h2>{mission1.executionDate}</h2>
          <h1>Mission - {mission1.id}</h1>
          <h3>{mission1.operators[0].name}</h3>
        </div>
        <div className='block'>
          <h1 titleText='Structure'>Structures</h1>
            <div id='MyStructures'>
              <div className='card'>
                <h2>{mission1.structures[0].id} </h2>
                <p>Nombre d'images :</p>
                <p>Nombre d'anomalies :</p>
              </div>
              <Structure />
            </div>
        </div>
        <div className='block'>
          <h1>Images</h1>
          <div id='MyPictures'>
            <div className='card'>
              <h2>{mission1.images.structures}</h2>
              <a src={mission1.images[0].url} className='image' rounded/>
              <p>Nombre d'anomalies :</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

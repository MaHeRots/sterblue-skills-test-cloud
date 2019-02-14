import React from "react";
import {structures} from "../../stories/structure.js";
import {mission1} from "../../stories/mission.js";
import '../components.css';

export class Structure extends React.Component {
  render() {
    /*TEST POUR RETOURNER LE NOMBRE D'IMAGES DE LA STRUCTURE
    return(
      <div className='card'>
        <h2>{mission1.structures[1].id} </h2>
        <p>Nombre d'images : {mission1.structures[1].images[].length}</p>
      </div>
    ); */
    /* sensé retourner le nombre d'images prisent de la structure {mission1.structures[1].images.length} ?*/


    // get structures();
    // let structureList = structures.map(somewhere =><h2>{somewhere}</h2> );
    // à l'endroit où nous voulons l'afficher : {somewhere}

    return(
      <div className='card'>
        <h2>{mission1.structures[1].id} </h2>
        <p>Nombre d'images :<br />
        Nombre d'anomalies :</p>
      </div>
    );
  }
}

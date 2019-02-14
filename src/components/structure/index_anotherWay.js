import React from "react";
import {structures} from "../../stories/structure.js";
import {mission1} from "../../stories/mission.js";
import '../components.css';

export class Structure extends React.Component {
  render() {
    return(
      <div id='MyStructures'>
        // Ok, là je veux afficher toutes mes structures sous forme de "carte"
        // Choix 1 : ForEach
        // Choix 2 : .map (qui ,il paraît, est mieux que le forEach)
        {structures.map((structure, i) => { // Selon i et la structure donnée..
         console.log("Et ça marche !"); //montre-moi que je suis entrée dans la boucle
         // Return the element. Also pass key
         return (
           <div className='card'>
            <structure key={i} structure={structures} />//...affiche moi les structures
            <p>Nombre d'images :<br />
            Nombre d'anomalies :</p>
           </div>//et ça ne marche pas
      )})}
      </div>
    );
  }
}

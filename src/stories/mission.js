import React from "react";
import { storiesOf } from "@storybook/react";
import { Mission } from "../components/mission/index.js";

// Mock Datas to test the fonctionalities | Export to ../components/mission/index.js
export const mission1 = {
  "id": "LaFaimDesHaricots",
  "executionDate": "08/01/2019 - 21:40:30",
  "operators": [
    {
      "name": "SarahCroche",
      "id": "userId1"
    }
 ],
  "structures": [
    {
      "id": "structureId1"
    },
    {
      "id": "structureId2"
    }
   ],
  "images": [
    {
      "id": "imageId1",
      "url":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1eZGlDaYElwYjPR26tyN9Qvs77d-COq8uH-MBpVGfISUVjp11g",
      "anomalies": [
        {
          "id": "anomalyId1"
        },
        {
          "id": "anomalyId2"
        }
      ],
      "structures": [{ "id": "structureId1" }]
    }
  ]
}


storiesOf("Mission", module)
  .add("with styledProp1 set to true", () => (
    <Mission data={mission1} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <Mission data={mission1} styleProp1={false} />
  ));

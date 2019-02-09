import React from "react";
import { storiesOf } from "@storybook/react";
import { Mission } from "../components/mission";

export const mockData1 = {
  "id": "LaFaimDesHaricots",
  "executionDate": "2019-01-08T21:40:30",
  "operators": [
    {
      "name": "Sarah Croche",
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
    <Mission data={mockData1} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <Mission data={mockData1} styleProp1={false} />
  ));

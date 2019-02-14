import React from "react";
import { storiesOf } from "@storybook/react";
import { Anomaly } from "../components/anomaly";

// Mock Datas to test the fonctionalities | Export to ../components/anomaly/index.js
const anomaly1 = {
  "id": "anomalyId1",
  "type": "corosion",
  "images": [
    {
      "id": "imageId1",
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1eZGlDaYElwYjPR26tyN9Qvs77d-COq8uH-MBpVGfISUVjp11g"
    }
  ],
  "structure": {
    "id": "structureId1"
  }
};


storiesOf("Anomaly", module)
  .add("with styledProp1 set to true", () => (
    <Anomaly data={anomaly1} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <Anomaly data={anomaly1} styleProp1={false} />
  ));

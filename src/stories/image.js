import React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "../components/image";

// Mock Datas to test the fonctionalities | Export to ../components/image/index.js
const image1 = {
  "id": "imageId1",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1eZGlDaYElwYjPR26tyN9Qvs77d-COq8uH-MBpVGfISUVjp11g",
  "anomalies": [
    {
      "id": "anomalyId1"
    },
    {
      "id": "anomalyId2"
    }
  ],
  "structures": [
    {
      "id": "structureId1"
    }
  ]
};

storiesOf("Image", module)
  .add("with styledProp1 set to true", () => (
    <Image data={image1} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <Image data={image1} styleProp1={false} />
  ));

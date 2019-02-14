import React from "react";
import { storiesOf } from "@storybook/react";
import { Structure } from "../components/structure/index.js";

// Mock Datas to test the fonctionalities | Export to ../components/structure/index.js
export const structures = {
  "structure1" : [
    "id": "structureId1",
    "type" : "MediumVoltagePylon",
    "missions" : [
      {
        "id": "LaFaimDesHaricots"
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
          ]
        }
      ],
      "anomalies": [
        {
          "id": "anomalyId1"
        },
        {
          "id": "anomalyId2"
        }
      ]
    ],
    "structure2" : [
      "id": "structureId2",
      "type" : "MediumVoltagePylon",
      "missions" : [
        {
          "id": "LaFaimDesHaricots"
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
            ]
          }
        ],
        "anomalies": [
          {
            "id": "anomalyId1"
          },
          {
            "id": "anomalyId2"
          }
        ]
  ]
};


storiesOf("Structure", module)
  .add("with styledProp1 set to true", () => (
    <Structure data={structures} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <Structure data={structures} styleProp1={false} />
  ));

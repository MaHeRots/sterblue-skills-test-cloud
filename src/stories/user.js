import React from "react";
import { storiesOf } from "@storybook/react";
import { User } from "../components/user";

// Mock Datas to test the fonctionalities | Export to ../components/user/index.js
const user1 = {
  "name": "SarahCroche",
  "email": "user1@mail.com",
  "id": "userId1",
  "missions": [
    {
      "id": "missionId1"
    }
  ]
};

storiesOf("User", module)
  .add("with styledProp1 set to true", () => (
    <User data={user1} styleProp1={true} />
  ))
  .add("with styledProp1 set to false", () => (
    <User data={user1} styleProp1={false} />
  ));

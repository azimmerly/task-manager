import React from "react";
import { Card, Text, Img } from "./style";
import getStarted from "../../assets/getStarted.svg";

function GetStarted() {
  return (
    <Card>
      <Text>All done! Add a task to get started...</Text>
      <Img src={getStarted} alt="get started" />
    </Card>
  );
}

export default GetStarted;

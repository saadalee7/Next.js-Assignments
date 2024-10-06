import React from "react";
import Card from "./components/card";

export default function Home() {
  return (
    <>
      <Card
        name={"Muhammad Saad Amir"}
        rollNo={152166}
        distanceLearning={"No"}
        city={"Karachi"}
        center={"Governer House Karachi"}
        campus={"Main"}
        daysTime={"Monday - 02:00 PM - 05:00 PM"}
        batch={1}
      />{" "}
      <br />
      <Card
        name={"Muhammad Umair"}
        rollNo={152167}
        distanceLearning={"No"}
        city={"Karachi"}
        center={"Governer House Karachi"}
        campus={"Main"}
        daysTime={"Monday - 02:00 PM - 05:00 PM"}
        batch={1}
      />{" "}
      <br />
      <Card
        name={"Muhammad Mursaleen"}
        rollNo={152168}
        distanceLearning={"No"}
        city={"Karachi"}
        center={"Governer House Karachi"}
        campus={"Main"}
        daysTime={"Monday - 02:00 PM - 05:00 PM"}
        batch={1}
      />{" "}
      <br />
    </>
  );
}

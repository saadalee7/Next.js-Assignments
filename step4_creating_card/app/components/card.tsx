import React from "react";
import Image from "next/image";

interface Iprops {
  name: string;
  rollNo: number;
  distanceLearning: string;
  city: string;
  center: string;
  campus: string;
  daysTime: string;
  batch: number;
}

const Card = (props: Iprops) => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="relative justify-items-center max-w-sm rounded overflow-hidden shadow-lg bg-white p-5 m-4 border border-gray-300">
          <Image src={"/logo.png"} alt={"logo"} width={50} height={50} />
          <h1>
            <strong className="text-blue-400">Name:</strong> {props.name}
          </h1>
          <h1>
            <strong className="text-blue-400">Roll No:</strong> {props.rollNo}
          </h1>
          <h1>
            <strong className="text-blue-400">Distance Learning:</strong>{" "}
            {props.distanceLearning}
          </h1>
          <h1>
            <strong className="text-blue-400">City:</strong> {props.city}
          </h1>
          <h1>
            <strong className="text-blue-400">Center:</strong> {props.center}
          </h1>
          <h1>
            <strong className="text-blue-400">Campus:</strong> {props.campus}
          </h1>
          <h1>
            <strong className="text-blue-400">Days/Time:</strong>{" "}
            {props.daysTime}
          </h1>
          <h1>
            <strong className="text-blue-400">Batch</strong> {props.batch}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Card;

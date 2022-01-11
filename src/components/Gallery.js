import React from "react";
import { useNasa } from "../contexts/NasaProvider";
import Card from "./Card";
import Loading from "./Loading";

export default function Gallery() {
  const { pics, fetchInProg } = useNasa();
  return (
    <div className="w-160 flex flex-col mx-auto">
      {fetchInProg ? (
        <Loading />
      ) : (
        pics.map((pic) => (
          <Card
            date={pic.date}
            explanation={pic.explanation}
            hdurl={pic.hdurl}
            url={pic.url}
            title={pic.title}
            copyright={pic.copyright}
            key={pic.title}
          />
        ))
      )}
    </div>
  );
}

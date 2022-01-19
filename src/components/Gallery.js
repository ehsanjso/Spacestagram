import React from "react";
import { useNasa } from "../contexts/NasaProvider";
import Card from "./Card";
import Loading from "./Loading";
import { find, propEq } from "ramda";

export default function Gallery() {
  const { pics, fetchInProg, likePic, likes } = useNasa();
  return (
    <div className="w-160 flex flex-col mx-auto">
      {fetchInProg ? (
        <Loading />
      ) : (
        pics.map((pic) => {
          const likedPic = find(propEq("id", pic.title))(likes);
          const isLiked = likedPic ? likedPic.liked : false;
          return (
            <Card
              date={pic.date}
              explanation={pic.explanation}
              hdurl={pic.hdurl}
              url={pic.url}
              title={pic.title}
              copyright={pic.copyright}
              key={pic.title}
              likePic={likePic}
              isLiked={isLiked}
            />
          );
        })
      )}
    </div>
  );
}

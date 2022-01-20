import React from "react";
import { find, propEq } from "ramda";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNasa } from "../contexts/NasaProvider";
import Card from "./Card";
import Loading from "./Loading";

export default function Gallery() {
  const { pics, fetchInProg, setPageNumber, likePic, likes } = useNasa();
  return (
    <div className="w-160 flex flex-col mx-auto">
      {fetchInProg ? (
        <Loading />
      ) : (
        <InfiniteScroll
          dataLength={pics.length}
          next={() => {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
          }}
          hasMore={true}
          loader={<h4 className="w-full text-center my-3">Loading...</h4>}
        >
          {pics.map((pic) => {
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
          })}
        </InfiniteScroll>
      )}
    </div>
  );
}

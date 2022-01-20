import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { format, subDays } from "date-fns";
import { host } from "../consts/host";
import { useSafeLocalStorage } from "../hooks/useSafeLocalStorage";
import { find, propEq, curry, map, when, assoc, reverse } from "ramda";

const NasaContext = React.createContext();

export function useNasa() {
  return useContext(NasaContext);
}

export function NasaProvider({ children }) {
  const [likes, setLikes] = useSafeLocalStorage("spacetogram-likes", []);
  const [pics, setPics] = useState([]);
  const [fetchInProg, setFetchInProg] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const apiKey = process.env.REACT_APP_NASA_KEY;

  useEffect(() => {
    async function getNasa() {
      const today = format(new Date(), "yyyy-MM-dd");
      const startDate = format(subDays(new Date(), 10), "yyyy-MM-dd");
      const endDate = today;
      try {
        const { data } = await axios.get(
          `${host}/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
        );
        setPics(reverse(data));
      } catch (error) {}
      setFetchInProg(false);
    }
    getNasa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const likePic = (pic) => {
    const needUpdate = find(propEq("id", pic))(likes);
    const alter = curry((checked, key, items) =>
      map(when(propEq("id", key), assoc("liked", checked)), items)
    );

    let newLikes = [...likes];

    if (needUpdate) {
      newLikes = alter(!needUpdate.liked, pic, likes);
    } else {
      newLikes.push({ id: pic, liked: true });
    }

    setLikes(newLikes);
  };

  useEffect(() => {
    if (pageNumber > 0) {
      fetchMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const fetchMore = useCallback(async () => {
    const startDate = format(
      subDays(new Date(), (pageNumber + 1) * 10),
      "yyyy-MM-dd"
    );
    const endDate = format(
      subDays(new Date(), pageNumber * 10 + 1),
      "yyyy-MM-dd"
    );
    try {
      const { data } = await axios.get(
        `${host}/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
      );
      setPics((prevPics) => {
        return [...prevPics, ...reverse(data)];
      });
    } catch (error) {}
  }, [pageNumber, apiKey]);

  return (
    <NasaContext.Provider
      value={{ pics, fetchInProg, likePic, likes, setPageNumber }}
    >
      {children}
    </NasaContext.Provider>
  );
}

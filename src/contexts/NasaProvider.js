import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format, subDays } from "date-fns";
import { host } from "../consts/host";
import { useNavigate } from "react-router-dom";

const NasaContext = React.createContext();

export function useNasa() {
  return useContext(NasaContext);
}

export function NasaProvider({ children }) {
  const navigation = useNavigate();
  const [pics, setPics] = useState([]);
  const [fetchInProg, setFetchInProg] = useState(true);
  const apiKey = process.env.REACT_APP_NASA_KEY;

  const today = format(new Date(), "yyyy-MM-dd");
  const startDate = format(subDays(new Date(), 10), "yyyy-MM-dd");
  const endDate = today;

  useEffect(() => {
    async function getNasa() {
      try {
        const { data } = await axios.get(
          `${host}/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
        );
        setPics(data.reverse());
      } catch (error) {}
      setFetchInProg(false);
    }
    getNasa();
  }, []);

  return (
    <NasaContext.Provider value={{ pics, fetchInProg }}>
      {children}
    </NasaContext.Provider>
  );
}

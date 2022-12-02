import { useState, useEffect } from "react";
import axios from "axios";
import rozdelenie from "./rozdelenie";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const UseFetch = () => {
  const [nacitanie, setNacitanie] = useState(true);
  const [error, setError] = useState(false);
  const [ludia, setLudia] = useState([]);

  const fetchDát = async () => {
    setNacitanie(true);
    try {
      const { data } = await axios(url);
      setNacitanie(false);
      setLudia(rozdelenie(data));
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDát();
  }, []);

  return { nacitanie, error, ludia };
};

export default UseFetch;

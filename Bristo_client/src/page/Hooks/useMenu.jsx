import { useState } from "react";
import { useEffect } from "react";

const useMenu = () => {
  const [Menu, setManu] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./manu.json")
      .then((res) => res.json())
      .then((data) => {
        setManu(data);
        setLoading(false);
      });
  }, []);
  return [Menu, Loading];
};
export default useMenu;

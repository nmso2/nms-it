import { useEffect, useState } from "react";

const useNewServices = () => {
  const [newServices, setNewServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://nms-it.herokuapp.com/newServices")
      .then((res) => res.json())
      .then((data) => {
        setNewServices(data);
        setIsLoading(false);
      });
  }, []);

  return { newServices, setNewServices, isLoading };
};

export default useNewServices;

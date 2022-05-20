import { useEffect, useState } from "react";

const useNewServices = () => {
  const [newServices, setNewServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/newServices")
      .then((res) => res.json())
      .then((data) => {
        setNewServices(data);
        setIsLoading(false);
      });
  }, []);

  return { newServices, setNewServices, isLoading };
};

export default useNewServices;

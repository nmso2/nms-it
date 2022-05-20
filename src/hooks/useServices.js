import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        setCount(data.count);
        setIsLoading(false);
      });
  }, []);

  return { count, services, setServices, isLoading };
};

export default useServices;

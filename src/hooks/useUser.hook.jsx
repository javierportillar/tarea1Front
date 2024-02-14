import { useState, useEffect } from "react";
import { useUsersService } from "../services/users.service";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    useUsersService()
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
}
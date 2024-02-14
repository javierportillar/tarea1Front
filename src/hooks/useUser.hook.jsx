import { useState, useEffect, useRef } from "react";
import { useUsersService } from "../services/users.service";
import { useCreateUserService } from "../services/users.service";

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

export const useCreateUser = (userData) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    if(isMounted.current) {
      isMounted.current = false;
      return;
    }

    if (userData && userData.name && userData.age) {
      setLoading(true);
      useCreateUserService(userData)
        .then(() => setLoading(false))
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [userData]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return { loading, error };
}
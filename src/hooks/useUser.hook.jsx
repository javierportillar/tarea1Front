import { useState, useEffect } from 'react';
import { fetchUsersService, createUserService, deleteUserService, updateUserService } from '../services/users.service';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState([]);

  const loadUsers = () => {
    setLoading(true);
    fetchUsersService()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  const createUser = (userData) => {
    setLoading(true);
    createUserService(userData)
      .then(() => {
        loadUsers();
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const userChoosed = (user) => {
    setSelectedUser(user);
  }

  const updateUser = (id, userData) => {
    setLoading(true);
    updateUserService(id, userData)
      .then(() => { loadUsers() })
      .catch(err => { setError(err.message) })
      .finally(() => { setLoading(false) });
  }

  const deleteUser = (id) => {
    setLoading(true);
    deleteUserService(id)
    .then(() => { loadUsers() })
    .catch(err=>{setError(err.message)})
    .finally(() => { setLoading(false) });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return { users, loading, error, createUser, updateUser, userChoosed, selectedUser, deleteUser };
};

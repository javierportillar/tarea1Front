import { useState, useEffect } from 'react';
import { fetchUsersService, createUserService, deleteUserService, updateUserService } from '../services/users.service';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState([]);

  async function loadUsers() {
    setLoading(true);
    await fetchUsersService()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  async function createUser(userData) {
    setLoading(true);
    await createUserService(userData)
      .then(newUser => {
        setUsers(prevUsers => [newUser, ...prevUsers]);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  async function userChoosed(user) {
    setSelectedUser(user);
  }

  async function updateUser(id, userData) {
    setLoading(true);
    await updateUserService(id, userData)
      .then(updateUser => {
        setUsers(prevUsers => prevUsers.map(user => user.id === id ? updateUser : user))
        console.log('setUsers');
      })
      .catch(err => { setError(err.message) })
      .finally(() => { setLoading(false) });
  }

  async function deleteUser(id) {
    setLoading(true);
    await deleteUserService(id)
      .then(() => {
        setUsers(prevUsers => prevUsers.filter(user=> user.id !== id));
      })
      .catch(err => { setError(err.message) })
      .finally(() => { setLoading(false) });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return { users, loading, error, createUser, updateUser, userChoosed, selectedUser, deleteUser };
};

import { useState, useEffect } from 'react';
import { fetchUsersService, createUserService, deleteUserService, updateUserService } from '../services/users.service';

export const useUsers = () => {

  // Loading Home Page //

  const [addUserState, setAddUserState] = useState(false);
  const [editUserState, setEditUserState] = useState(false);
  const [deletUserState, setDeletUserState] = useState(false);

  const openEditUserState = () => {
    setEditUserState(true);
  }

  const closeEditUserState = () => {
    setEditUserState(false);
  }

  const openDeletUserState = () => {
    setDeletUserState(true)
  }

  const closeDeletUserState = () => {
    setDeletUserState(false)
  }

  const openCreateNewUserDiv = () => {
    setAddUserState(true);
  }

  const closeCreateNewUser = () => {
    setAddUserState(false);
  }


  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState([]);

  async function loadUsers() {
    setLoading(true);
    try {
      const users = await fetchUsersService()
      setLoading(false);
      setUsers(users);
    }
    catch (err) {
      setError(err.message);
    }
    finally { setLoading(false); }
  };

  async function createUser(userData) {
    setLoading(true);
    try {
      const newUser = await createUserService(userData);
      setUsers(prevUsers => [newUser, ...prevUsers]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  async function userChoosed(user, param) {
    setSelectedUser(user);
    if (param === 'edit') {
      openEditUserState();
    } else{
      openDeletUserState();
    }
  }

  async function updateUser(id, userData) {
    setLoading(true);
    try {
      const updateUser = await updateUserService(id, userData);
      setUsers(prevUsers => prevUsers.map(user => user.id === id ? updateUser : user));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id) {
    setLoading(true);
    try {
      await deleteUserService(id);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    loading,
    error,
    createUser,
    updateUser,
    userChoosed,
    selectedUser,
    deleteUser,
    openEditUserState,
    closeEditUserState,
    openDeletUserState,
    closeDeletUserState,
    openCreateNewUserDiv,
    closeCreateNewUser,
    addUserState,
    editUserState,
    deletUserState
  };
};

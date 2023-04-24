import React, { useState } from 'react';

import AddUser from './components/Users/AddUser/AddUser';
import UserList from './components/Users/UserList/UserList'

const USERS = [

];

function App() {

  const [users, setUsers] = useState(USERS);

  const addUserHandler = user => {
    setUsers(prevUsers => {
      return [...prevUsers, user]
    });
  }

  return (
    <div>
        <AddUser onAddUser={addUserHandler}/>
        <UserList users={users}/>
    </div>
  );
}

export default App;

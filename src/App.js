import React,{ useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UserList';


function App() {
  const [userList,setUsersList]=useState([]);

const addUserHandler=(uName,uAge)=>{
  setUsersList((prevUserList)=>{
    return [...prevUserList,{name: uName,age:uAge, id: Math.random().toString}]
  })
}

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>

    </div>
  );
}

export default App;

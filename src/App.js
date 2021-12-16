import React,{useState} from 'react';
import User from './Components/Users/User';
import UsersList from './Components/Users/UsersList';

const App = () => {

  const [users, setUsers] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUsers(prevUsers => {
      return ([...prevUsers, {name : uName, age : uAge, id : Math.random().toString()}]);
    });
  }

  return (
    <div>
      <User onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
};

export default App;
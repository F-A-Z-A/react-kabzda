import React, {useState} from "react";

export default {
  title: "ReactMemoDemo"
}

const NewCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}

const SecretUsers = (props: { users: string[] }) => {
  return <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
}
const Users = React.memo(SecretUsers)

export const Example = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Andrey", "Segey", "Anna"]);
  
  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={() => {
      const newUsers = [...users, "NewName" + new Date().getTime()]
      setUsers(newUsers)
    }}>add user
    </button>
    <NewCounter count={counter}/>
    <Users users={users}/>
  </>
}

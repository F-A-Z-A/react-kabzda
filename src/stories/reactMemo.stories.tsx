import React, {useState} from "react";

export default {
  title: "ReactMemoDemo"
}

const Counter = (props: { count: number }) => {
  console.log("Counter")
  return <div>{props.count}</div>
}

const Users = (props: { users: string[] }) => {
  console.log("Users")
  return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const UsersRM = React.memo(Users)
const CounterRM = React.memo(Counter)

export const Example = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Andrey", "Sergey", "Anna"]);
  
  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={() => {
      const newUsers = [...users, "NewName" + new Date().getTime()]
      setUsers(newUsers)
    }}>add user
    </button>
    <CounterRM count={counter}/>
    <UsersRM users={users}/>
  </>
}
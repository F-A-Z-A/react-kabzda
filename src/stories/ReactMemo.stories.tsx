import React, { useState } from "react";

export default {
  title: "React.memo demo",
};

const NewMassagesCounter = React.memo((props: { count: number }) => {
  console.log("Counter: ", props.count);
  return <div>{props.count}</div>;
});

const Users = React.memo((props: { users: string[] }) => {
  console.log("Users: ", props.users.length);
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
});

export const Example1 = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["AAA", "BBB", "CCC"]);

  const addUser = () => {
    users.push("DDD " + new Date().getTime());
    setUsers([...users]);
  };

  return (
    <>
      {console.log("Example1 rendered")}
      <button onClick={() => setCounter(counter + 1)}>+ count</button>
      <button onClick={addUser}>+ user</button>
      <NewMassagesCounter count={counter} />
      <Users users={users} />
    </>
  );
};

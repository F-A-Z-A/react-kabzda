import React, { useMemo, useState } from "react";

export default {
  title: "useMemo",
};

export const DifficultCountExample = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResult = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 500000000) {
        fake++;
      }
      tempResult = tempResult * i;
    }
    return tempResult;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <div>
        A: <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      </div>
      <div>
        B: <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      </div>
      <div>result for A: {resultA}</div>
      <div>result for B: {resultB}</div>
    </>
  );
};

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

export const HelpToReactMemo = () => {
  console.log("HelpToReactMemo");
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["AAA", "BBB", "CCC"]);

  const newArray = useMemo(() => {
    return users.filter((u) => u.length > 1);
  }, [users]);

  const addUser = () => {
    users.push("DDD " + new Date().getTime());
    setUsers([...users]);
  };

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+ count</button>
      <button onClick={addUser}>+ user</button>
      {counter}
      <Users users={newArray} />
    </>
  );
};

export const SelectToReactMemo = () => {
  // console.log("HelpToReactMemo");
  // const [counter, setCounter] = useState(0);
  // const [users, setUsers] = useState(["AAA", "BBB", "CCC"]);
  //
  // const newArray = useMemo(() => {
  //   return users.filter((u) => u.length > 1);
  // }, [users]);
  //
  // const addUser = () => {
  //   users.push("DDD " + new Date().getTime());
  //   setUsers([...users]);
  // };
  //
  // return (
  //   <>
  //     <Select onChange={} items={} />
  //     <Select onChange={} items={} />
  //     <Select onChange={} items={} />
  //   </>
  // );
};

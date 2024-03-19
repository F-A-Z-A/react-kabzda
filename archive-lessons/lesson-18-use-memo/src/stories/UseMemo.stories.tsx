import React, {useMemo, useState} from "react";

export default {
  title: "useMemo"
}

export const DifficultCountExample = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);
  
  let resultA = 1;
  let resultB = 1;
  
  resultA = useMemo(() => {
    let tempResult = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random()
      }
      resultA *= i;
    }
    return resultA
  }, [a]);
  
  
  for (let i = 1; i <= b; i++) {
    resultB *= i;
  }
  
  
  return <>
    <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
    <div>
      Result for a: {resultA}
    </div>
    <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
    <div>
      Result for b: {resultB}
    </div>
  </>
}

const SecretUsers = (props: { users: string[] }) => {
  console.log("USERS_SECRET")
  return <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
}
const Users = React.memo(SecretUsers)

export const HelpsToReactMemo = () => {
  console.log("EXAMPLE_1")
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Andrey", "Segey", "Anna"]);
  
  const newArray = useMemo(() => {
    return users.filter(u => u.toLowerCase().indexOf("e") > -1)
  }, [users]);
  
  const addUser = () => {
    setUsers([...users, "NewName" + new Date().getTime()])
  }
  
  return <>
    <div>
      <button onClick={() => setCounter(counter + 1)}>+counter+</button>
    </div>
    {counter}
    <div>
      <button onClick={addUser}>add user</button>
    </div>
    <Users users={newArray}/>
  </>
}
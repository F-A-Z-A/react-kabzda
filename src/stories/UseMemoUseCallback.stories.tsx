import React, { useCallback, useMemo, useState } from "react";

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
      <div>{counter}</div>
      <Users users={newArray} />
    </>
  );
};

export const LikeUseCallback = () => {
  console.log("LikeUseCallback");
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"]);

  const addBook = useCallback(() => {
    books.push("BBB " + new Date().getTime());
    setBooks([...books]);
  }, [books]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+ count</button>
      <div>{counter}</div>
      <Books addBook={addBook} />
    </>
  );
};

const Books = React.memo((props: { addBook: () => void }) => {
  console.log("Books: ");
  return (
    <div>
      <button onClick={props.addBook}>+ book</button>
    </div>
  );
});

import React, {useCallback, useMemo, useState} from "react";

export default {
  title: "UseMemoUseCallback"
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
      while (fake < 10000) {
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
  return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
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

export const LikeUseCallback = () => {
  console.log("LikeUseCallback")
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"]);
  
  // const addBook = () => {
  //   setBooks([...books, "Angular" + new Date().getTime()])
  // }
  
  // const memoizedAddBook = useMemo(() => {
  //   return () => {
  //     setBooks([...books, "Angular" + new Date().getTime()])
  //   }
  // }, [books])
  
  const memoizedAddBook = useCallback(() => {
    setBooks([...books, "Angular" + new Date().getTime()])
  }, [books])
  
  return <>
    <div>
      <button onClick={() => setCounter(counter + 1)}>+counter+</button>
    </div>
    {counter}
    
    {/*<Books books={newArray} addBook={addBook}/>*/}
    <Books addBook={memoizedAddBook}/>
  </>
}


type SecretBooksPropsType = {
  // books: string[]
  addBook: () => void
}
const SecretBooks = (props: SecretBooksPropsType) => {
  console.log("BOOKS_SECRET")
  
  return <div>
    <button onClick={props.addBook}>add book</button>
    {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}*/}
  </div>
}
const Books = React.memo(SecretBooks)
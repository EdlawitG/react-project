import { useEffect, useState } from "react";

function Nav() {
  const [users, setUser] = useState([]);
  const [isloading, setLoading] = useState(true)
  const [click, setClick] = useState(false)
  const handle =()=>{
    console.log('cicked')
    setClick(true)
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUser(data));
      setLoading(false)
      
      
  }, [click]);
  return (
    <div>
        <button onClick={handle}>show me</button>
        <div>
           
        {click ?users.map(user=>(
            <p>{user.title}</p>
        )):<p>Loading</p>}
        
        </div>
      
    </div>
  );
}

export default Nav;

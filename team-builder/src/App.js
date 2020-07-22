import React , { useState } from 'react';
import Members from '../Component/Members.js';
import MemberForm from '../Component/MemberForm.js';
import logo from './logo.svg';
import './App.css';

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      fname: "Gary",
      lname: "Do",
      profession: "SL",
      email: "Gary@lambda.com"
    },
    {
    id:2,
    fname: "Kim",
    lname: "Robinson",
    email: "Kim@lambda.com",
    profession: "Web Devoleper"
    },
    {
      id: 3,
      fname: "Tieirra",
      lname: "Singleton",
      profession: "TL",
      email: "Tieirra@Lambda.com"
    }
  ]);

  const delMember = id => {
    const newArray = members.filter(member => {
      return member.id !== id;
    });
    setMembers(newArray);
  };

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      fname: member.fname,
      lname: member.lname,
      email:member.email,
      profession:member.profession
    };
    setMembers([...members, newMember]);
  };

return (
  <div className="App">
    <header className="App-header">
    <div className='container' >
    <MemberForm  addMemberFn={addMember} />

    <Members membersList={members} delMemberFn={delMember} />
    </div>
    </header>
  </div>
);

}

export default App;

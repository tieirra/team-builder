import React from 'react';

const Members = props => {
    return (
        <div className='membersBox' >
            {props.membersList.map(members => {
                return (
                    <div className='memberDiv'key={members.id}>
                        <div className= 'member-info' >
                            <p>First Name: {members.fname}</p>
                            <p>Last Name:{members.lname}</p>
                            <p>E-mail: {members.email}</p>
                            <p>Profession: {members.profession}</p>
                        </div>
                        <div className="removeBtn" >
                            <button id='remove-btn' onClick={() => props.delMemberFn(members.id)}>x</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default Members; 
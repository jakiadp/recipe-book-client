import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Profile = ({ email }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then(res => res.json())
      .then(data => {
        const matchedUser = data.find(u => u.email === email);
        setUser(matchedUser);
      })
      .catch(err => console.error(err));
  }, [email]);

  if (!user) return <p>Loding...</p>;

  return (
    <div className="max-w-md mx-auto my-10 bg-base-200 p-6 rounded shadow hover:shadow-2xl">
      <img src={user.photo} alt="user" className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-bold text-center">{user.name}</h2>
      <p className="text-center text-gray-500">{user.email}</p>
      <p className="text-center mt-2">{user.bio || 'No bio available'}</p>
       <div className="mt-4 text-left space-y-2">
        <p><span className="font-semibold">📍 Address:</span> {user.address || 'Not added'}</p>
        <p><span className="font-semibold">📞 Phone:</span> {user.phone || 'Not added'}</p>
      </div>
      <Link className='bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold btn w-full my-5' to="/upadateProfile">Upadate profile</Link>
    </div>
  );
};

export default Profile;

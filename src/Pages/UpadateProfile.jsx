import React, { useEffect, useState } from 'react';

import { auth } from '../Firebase/firebase.init';


const UpadateProfile = () => {
  
  const currentUser = auth.currentUser;

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Form fields
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const email = currentUser?.email;

  // Load user info from MongoDB
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:3000/users/${email}`)
        .then(res => res.json())
        .then(data => {
          setUser(data);
          setName(data.name || '');
          setPhoto(data.photo || '');
          setAddress(data.address || '');
          setPhone(data.phone || '');
        });
    }
  }, [email]);

  // Update user info
  const handleUpdate = async () => {
    const updatedUser = {
      name,
      photo,
      address,
      phone,
    };

    const res = await fetch(`http://localhost:3000/users/${email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    });

    const data = await res.json();
    if (data.modifiedCount > 0 || data.upsertedCount > 0) {
      alert("Updated successfully ✅");
      setEditMode(false);
      setUser({ ...user, ...updatedUser });
    }
  };

  if (!user) return <p><span className="loading loading-spinner loading-xl"></span></p>;

  return (
    <div className="max-w-md mx-auto bg-base-200 p-6 rounded-lg shadow-md mt-10">
      <div className="text-center">
        <img
          src={photo || "https://i.ibb.co/yFdrH0v/default-profile.png"}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        {editMode ? (
          <>
            <input
              type="text"
              className="input input-bordered w-full mt-2"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Photo URL"
            />
          </>
        ) : null}

        <h2 className="text-2xl font-bold">{editMode ?
          <input
            className="input input-bordered w-full mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> : name}</h2>

        <p className="text-gray-500">{email}</p>

        <div className="text-left mt-4 space-y-2">
          <p>
            <span className="font-semibold">📍 Address:</span>
            {editMode ? (
              <input
                className="input input-bordered w-full"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            ) : (
              <span> {address || 'Not added'}</span>
            )}
          </p>

          <p>
            <span className="font-semibold">📞 Phone:</span>
            {editMode ? (
              <input
                className="input input-bordered w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <span> {phone || 'Not added'}</span>
            )}
          </p>
        </div>

        <div className="mt-6">
          {editMode ? (
            <>
              <button className="btn btn-success mr-2" onClick={handleUpdate}>
                Save
              </button>
              <button className="btn btn-outline" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={() => setEditMode(true)}>
              ✏️ Update Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpadateProfile;

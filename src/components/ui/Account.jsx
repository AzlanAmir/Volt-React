import React, { useState, useContext } from 'react';
import { AccountContext } from '../../context/AccountContext';

function Account() {
    const { account, setAccount } = useContext(AccountContext);

    const [name, setName] = useState(account.name);
    const [type, setType] = useState(account.type);
    const [profileImage, setProfileImage] = useState(account.profileImage);
    const [isEditing, setIsEditing] = useState(false);

    const handleFileChange = (e) => {
        setProfileImage(e.target.files[0]);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setAccount({ name, type, profileImage });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setName(account.name);
        setType(account.type);
        setProfileImage(account.profileImage);
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-white flex justify-center items-center py-10 px-4">
            <div className="border-1 border-gray-500 bg-black text-white rounded-lg shadow-lg w-full max-w-2xl p-8 space-y-6">

                {/* Top Header */}
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <div>
                        <h2 className="text-3xl">Account</h2>
                        <p className="text-sm text-gray-400">Manage your account information</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                        {isEditing && (
                            <button
                                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        )}
                        <button
                            className={`px-4 py-2 rounded text-sm font-medium ${isEditing
                                    ? 'bg-blue-500 hover:bg-blue-600'
                                    : 'bg-blue-500 hover:bg-blue-700'
                                }`}
                            onClick={isEditing ? handleSave : () => setIsEditing(true)}
                        >
                            {isEditing ? 'Save Changes' : 'Edit Profile'}
                        </button>
                    </div>
                </div>

                {/* User Profile Box */}
                <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center text-xl font-bold uppercase">
                        {profileImage ? (
                            <img
                                src={
                                    profileImage instanceof File
                                        ? URL.createObjectURL(profileImage)
                                        : profileImage
                                }
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span>{name?.[0] || 'U'}</span>
                        )}
                    </div>

                    <div>
                        <div className="font-semibold text-lg">{name}</div>
                        <div className="text-sm text-gray-400">Joined {new Date().toLocaleDateString()}</div>
                    </div>
                </div>

                {/* Account Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-[#2b2b2b] p-2 rounded text-white"
                            disabled={!isEditing}
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Upload Profile Image</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full bg-[#2b2b2b] p-2 rounded text-white"
                            disabled={!isEditing}
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Type</label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full bg-[#2b2b2b] p-2 rounded text-white"
                            disabled={!isEditing}
                        >
                            <option value="User">User</option>
                            <option value="Student">Student</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Account;

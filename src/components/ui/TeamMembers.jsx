import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../assets/profile-img.jpg'; // Make sure this path is correct

const members = [
  {
    name: 'Jheela',
    status: 'Online',
    statusColor: 'bg-green-500',
    action: 'Invite',
    img: profileImage,
  },
  {
    name: 'Shahid Jutt',
    status: 'In a meeting',
    statusColor: 'bg-amber-400',
    action: 'Message',
    img: profileImage,
  },
  {
    name: 'Feeka',
    status: 'Offline',
    statusColor: 'bg-red-500',
    action: 'Invite',
    img: profileImage,
  },
  {
    name: 'Billa',
    status: 'Online',
    statusColor: 'bg-green-500',
    action: 'Message',
    img: profileImage,
  },
];

function TeamMembers() {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 pb-4 border-b-2">
        <h2 className="text-base lg:text-sm font-semibold text-gray-900">Team members</h2>
        <button className="text-sm lg:text-xs font-medium text-blue-800 bg-blue-100 px-4 lg:px-2 py-2 lg:py-1 rounded-lg hover:bg-blue-200 transition">
          See all
        </button>
      </div>

      {/* Members List */}
      <div className="space-y-6">
        {members.map((member, idx) => (
          <div key={idx} className="flex justify-between items-center">
            {/* Avatar and Info */}
            <div className="flex items-center gap-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-base lg:text-sm font-semibold text-gray-900">
                  {member.name}
                </h4>
                <div className="flex items-center gap-2 text-sm lg:text-xs text-gray-500">
                  <span className={`w-2 h-2 rounded-full ${member.statusColor}`}></span>
                  {member.status}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm lg:text-xs px-4 lg:px-2 py-2 lg:py-1 rounded-lg transition">
              <FontAwesomeIcon
                icon={member.action === 'Invite' ? faCalendarCheck : faMessage}
                className="text-sm lg:text-xs"
              />
              {member.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileExport, faShareAlt } from '@fortawesome/free-solid-svg-icons';

function NewTask() {
    return (
        <div className="flex flex-wrap gap-2 items-center justify-between px-4 rounded-md">
            {/* New Task Button on Left */}
            <button className="flex items-center space-x-1 sm:space-x-2 bg-black text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded-md transition-all duration-200 hover:bg-gray-800">
                <FontAwesomeIcon icon={faPlus} />
                <span>New Task</span>
            </button>

            {/* Export and Share Buttons on Right */}
            <div className="flex">
                <button className="flex items-center space-x-1 sm:space-x-2 border border-gray-400 text-gray-700 text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded-l-md transition-all duration-200 hover:bg-black hover:text-white">
                    <FontAwesomeIcon icon={faFileExport} />
                    <span>Export</span>
                </button>
                <button className="flex items-center space-x-1 sm:space-x-2 border-t border-b border-r border-gray-400 text-gray-700 text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded-r-md transition-all duration-200 hover:bg-black hover:text-white -ml-px">
                    <FontAwesomeIcon icon={faShareAlt} />
                    <span>Share</span>
                </button>
            </div>
        </div>
    );
}

export default NewTask;

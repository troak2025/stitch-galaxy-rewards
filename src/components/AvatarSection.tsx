
import React from 'react';

export const AvatarSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-4">
        {/* Avatar Container with Glow */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1 shadow-2xl">
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
              alt="Sophia's Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        {/* Level Badge */}
        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full px-3 py-1 shadow-lg">
          <span className="text-white text-sm font-bold">12</span>
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute -top-1 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-2 -right-3 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
      </div>
      
      {/* User Info */}
      <h2 className="text-2xl font-bold text-white mb-1">Sophia</h2>
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-4 py-1">
        <span className="text-white text-sm font-semibold">Level 12</span>
      </div>
      
      {/* XP Bar */}
      <div className="w-48 h-3 bg-purple-900 rounded-full mt-3 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-3/4 relative">
          <div className="absolute inset-0 bg-white opacity-30 animate-pulse rounded-full"></div>
        </div>
      </div>
      <p className="text-purple-300 text-sm mt-1">2,340 / 3,000 XP</p>
    </div>
  );
};

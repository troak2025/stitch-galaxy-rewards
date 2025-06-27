
import React, { useState } from 'react';
import { Diamond, LucideIcon } from 'lucide-react';

interface RewardCardProps {
  reward: {
    id: number;
    day: string;
    reward: string;
    icon: LucideIcon;
    claimed: boolean;
  };
  onClaim: () => void;
}

export const RewardCard: React.FC<RewardCardProps> = ({ reward, onClaim }) => {
  const [isClicking, setIsClicking] = useState(false);

  const handleClaim = () => {
    if (reward.claimed) return;
    
    setIsClicking(true);
    setTimeout(() => {
      onClaim();
      setIsClicking(false);
    }, 300);
  };

  return (
    <div className="relative">
      {/* Card Background with 3D Effect */}
      <div className="bg-gradient-to-br from-purple-800/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25">
        
        {/* Day Label */}
        <div className="text-purple-300 text-sm font-medium mb-2">{reward.day}</div>
        
        {/* Diamond Icon with Animation */}
        <div className="flex justify-center mb-3">
          <div className="relative">
            <Diamond 
              className={`w-12 h-12 transition-all duration-500 ${
                reward.claimed 
                  ? 'text-gray-500' 
                  : 'text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]'
              } ${!reward.claimed ? 'animate-pulse' : ''}`}
              fill={reward.claimed ? 'currentColor' : 'url(#diamondGradient)'}
            />
            
            {/* Sparkle Effects for Unclaimed */}
            {!reward.claimed && (
              <>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1 -right-2 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
              </>
            )}
          </div>
        </div>
        
        {/* Reward Text */}
        <div className="text-white text-center font-semibold mb-4">{reward.reward}</div>
        
        {/* Claim Button */}
        <button
          onClick={handleClaim}
          disabled={reward.claimed}
          className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 transform ${
            reward.claimed
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : `bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 active:scale-95 ${
                  isClicking ? 'animate-pulse bg-gradient-to-r from-pink-600 to-purple-700' : ''
                }`
          }`}
        >
          <span className={`${isClicking ? 'animate-bounce' : ''}`}>
            {reward.claimed ? 'Claimed ✓' : 'Claim'}
          </span>
          
          {/* Ripple Effect */}
          {isClicking && (
            <div className="absolute inset-0 bg-white/30 rounded-xl animate-ping"></div>
          )}
        </button>
      </div>
      
      {/* Claimed Glow Effect */}
      {reward.claimed && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-600/20 pointer-events-none animate-pulse"></div>
      )}
      
      {/* SVG Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

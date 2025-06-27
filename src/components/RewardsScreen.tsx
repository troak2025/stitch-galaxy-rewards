
import React, { useState } from 'react';
import { Diamond } from 'lucide-react';
import { AvatarSection } from './AvatarSection';
import { RewardCard } from './RewardCard';
import { AnimatedBackground } from './AnimatedBackground';

const RewardsScreen = () => {
  const [claimedRewards, setClaimedRewards] = useState<number[]>([]);

  const handleClaimReward = (rewardId: number) => {
    setClaimedRewards(prev => [...prev, rewardId]);
  };

  const dailyRewards = [
    { id: 1, day: 'Day 1', reward: '50 Gems', icon: Diamond, claimed: claimedRewards.includes(1) },
    { id: 2, day: 'Day 2', reward: '75 Gems', icon: Diamond, claimed: claimedRewards.includes(2) },
    { id: 3, day: 'Day 3', reward: '100 Gems', icon: Diamond, claimed: claimedRewards.includes(3) },
    { id: 4, day: 'Day 4', reward: '150 Gems', icon: Diamond, claimed: claimedRewards.includes(4) },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <div className="relative z-10 pt-12 pb-8">
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Daily Rewards
        </h1>
        <p className="text-center text-purple-300">Claim your daily treasures!</p>
      </div>

      {/* Avatar Section */}
      <div className="relative z-10 px-6 mb-8">
        <AvatarSection />
      </div>

      {/* Rewards Grid */}
      <div className="relative z-10 px-6 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {dailyRewards.map((reward) => (
            <RewardCard
              key={reward.id}
              reward={reward}
              onClaim={() => handleClaimReward(reward.id)}
            />
          ))}
        </div>
      </div>

      {/* Stitch Character */}
      <div className="fixed bottom-8 right-6 z-20">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
          <span className="text-2xl">🧬</span>
        </div>
      </div>
    </div>
  );
};

export default RewardsScreen;

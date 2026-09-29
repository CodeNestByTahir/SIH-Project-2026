export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getLevelTitle = (level: number): string => {
  const titles = [
    'Curious Traveler',
    'Cultural Explorer',
    'Heritage Seeker',
    'History Scholar',
    'Culture Guardian',
    'Bharat Master',
  ];
  return titles[Math.min(level - 1, titles.length - 1)] || 'Bharat Master';
};

export const getPointsForLevel = (level: number): number => {
  const thresholds = [0, 100, 300, 600, 1000, 2000];
  return thresholds[Math.min(level - 1, thresholds.length - 1)];
};

export const formatPoints = (points: number): string => {
  if (points >= 1000) return `${(points / 1000).toFixed(1)}k`;
  return points.toString();
};

export const getDifficultyColor = (difficulty: string): string => {
  const map: Record<string, string> = {
    easy: 'text-green-400',
    medium: 'text-yellow-400',
    hard: 'text-red-400',
  };
  return map[difficulty] || 'text-gray-400';
};

export const getCategoryIcon = (category: string): string => {
  const map: Record<string, string> = {
    traditional: '🏺',
    wooden: '🪵',
    clay: '🏮',
    cloth: '🎎',
    metal: '⚔️',
    bamboo: '🎋',
  };
  return map[category] || '🎭';
};

export const BADGE_DEFINITIONS = [
  { id: 'first_explorer', name: 'Explorer', description: 'Visited your first state', icon: '🗺️', color: '#FF6B35', requirement: 'Visit 1 state' },
  { id: 'historian', name: 'Historian', description: 'Explored 3 states', icon: '📜', color: '#D4A843', requirement: 'Visit 3 states' },
  { id: 'game_starter', name: 'Game Starter', description: 'Played your first game', icon: '🎮', color: '#059669', requirement: 'Play 1 game' },
  { id: 'champion', name: 'Champion', description: 'Completed 5 games', icon: '🏆', color: '#7C3AED', requirement: 'Complete 5 games' },
  { id: 'culture_keeper', name: 'Culture Keeper', description: 'Viewed 10 cultural objects', icon: '🎨', color: '#EC4899', requirement: 'View 10 toys' },
  { id: 'collector', name: 'Collector', description: 'Ordered your first toy', icon: '🛒', color: '#F59E0B', requirement: 'Order 1 toy' },
  { id: 'heritage_champion', name: 'Heritage Champion', description: 'Explored all starter states', icon: '⭐', color: '#EF4444', requirement: 'Visit all 3 states' },
];

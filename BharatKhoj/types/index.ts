export interface Tradition {
  name: string;
  description: string;
  image?: string;
}

export interface Festival {
  name: string;
  month: string;
  description: string;
  image?: string;
}

export interface FoodItem {
  name: string;
  description: string;
  image?: string;
}

export interface ClothingItem {
  name: string;
  gender: 'male' | 'female' | 'unisex';
  description: string;
  image?: string;
}

export interface Personality {
  id: string;
  name: string;
  period: string;
  role: string;
  description: string;
  image?: string;
}

export interface Monument {
  id: string;
  name: string;
  location: string;
  period: string;
  description: string;
  image?: string;
}

export interface FolkArt {
  name: string;
  description: string;
  image?: string;
}

export interface Toy {
  id: string;
  name: string;
  stateId: string;
  stateName: string;
  period: string;
  category: 'traditional' | 'wooden' | 'clay' | 'cloth' | 'metal' | 'bamboo';
  description: string;
  significance: string;
  materials: string[];
  howUsed: string;
  history: string;
  images: string[];
  model3D?: string;
  model2_5D?: string[];
  price: {
    physical?: number;
    printed3D?: number;
  };
  inStock: boolean;
  vendorId?: string;
  relatedToys: string[];
  badge?: string;
}

export type GameType = 'quiz' | 'memory' | 'puzzle' | 'timeline' | 'matching' | 'word';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  image?: string;
}

export interface MemoryCard {
  id: string;
  image: string;
  label: string;
  matchId: string;
}

export interface TimelineEvent {
  id: string;
  event: string;
  year: string;
  description: string;
  image?: string;
}

export interface Game {
  id: string;
  name: string;
  type: GameType;
  stateId: string;
  stateName: string;
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number;
  points: number;
  description: string;
  instructions: string[];
  thumbnail: string;
  data: QuizQuestion[] | MemoryCard[] | TimelineEvent[] | any;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  requirement: string;
}

export interface GameResult {
  gameId: string;
  gameName: string;
  score: number;
  maxScore: number;
  completedAt: string;
  stateId: string;
}

export interface Order {
  id: string;
  toyId: string;
  toyName: string;
  type: 'physical' | '3d_print';
  status: 'pending' | 'accepted' | 'manufacturing' | 'shipped' | 'delivered';
  price: number;
  address: string;
  createdAt: string;
}

export interface UserProgress {
  uid: string;
  displayName: string;
  photoURL?: string;
  email: string;
  points: number;
  level: number;
  badges: string[];
  exploredStates: string[];
  completedGames: GameResult[];
  viewedToys: string[];
  orders: Order[];
  createdAt: string;
}

export interface State {
  id: string;
  slug: string;
  name: string;
  capital: string;
  region: string;
  language: string[];
  established: string;
  tagline: string;
  description: string;
  history: string;
  culture: string;
  traditions: Tradition[];
  festivals: Festival[];
  food: FoodItem[];
  clothing: ClothingItem[];
  personalities: Personality[];
  monuments: Monument[];
  toys: Toy[];
  games: Game[];
  folkArts: FolkArt[];
  images: {
    hero: string;
    collage: string[];
    thumbnail: string;
    mapPreview: string;
  };
  mapCoordinates: { x: string; y: string };
  accentColor: string;
  secondaryColor: string;
}

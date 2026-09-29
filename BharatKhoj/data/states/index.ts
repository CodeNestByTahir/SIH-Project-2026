import maharashtra from './maharashtra';
import rajasthan from './rajasthan';
import gujarat from './gujarat';
import bihar from './bihar';
import tamilNadu from './tamil-nadu';
import { State } from '@/types';

// All states in the project
export const states: State[] = [maharashtra, rajasthan, gujarat, bihar, tamilNadu];

// Active states available in BharatKhoj prototype
export const activeStates: State[] = [maharashtra, bihar, tamilNadu];

// States map for O(1) slug lookup
export const statesMap: Record<string, State> = {
  maharashtra,
  rajasthan,
  gujarat,
  bihar,
  'tamil-nadu': tamilNadu,
};

export const getStateBySlug = (slug: string): State | undefined =>
  statesMap[slug];

export const getAllStates  = (): State[] => states;
export const getActiveStates = (): State[] => activeStates;

export default states;

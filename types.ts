
export interface PlanExtra {
  label: string;
  value: string | number;
}

export interface HostingPlan {
  id: string;
  name: string;
  price: number;
  ram: string;
  cpu: string;
  storage: string;
  extras: PlanExtra[];
  recommended?: boolean;
}

export interface VPSPlan {
  id: string;
  name: string;
  cpu: string;
  ram: string;
  storage: string;
  ip: string;
  location: string;
  network: string;
  price: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Reward {
  invites?: number;
  boosts?: number;
  ram: string;
  cpu: string;
  storage: string;
  emoji?: string;
}

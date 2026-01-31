export interface AgentResponse {
  success: boolean;
  timestamp: string;
  data?: any;
  error?: string;
}

export interface ProductPriceLog {
  id: string;
  oldPrice: number;
  newPrice: number;
  agentId: string;
  timestamp: string;
}
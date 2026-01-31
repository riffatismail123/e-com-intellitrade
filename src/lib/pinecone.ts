// Mock Vector DB configuration for RAG features
export const pineconeConfig = {
  indexName: "aether-products-v1",
  dimension: 1536, // Standard for OpenAI embeddings
  metric: "cosine",
};
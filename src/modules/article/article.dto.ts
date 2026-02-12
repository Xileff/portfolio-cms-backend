export type ArticleResponseDTO = {
  id: string;
  title: string;
  summary?: string | null;
  slug: string;
  createdAt: Date;
};

export interface WorkFeature {
  title: string;
  description: string;
}

export interface WorkProjectDetail {
  platform?: string;
  supports?: string;
  stack?: string;
  collaborator?: string;
}

export interface Work {
  slug: string;
  filter: string[];
  cover: string;
  thumbnail?: string;
  source?: string;
  title: string;
  description: string;
  year?: string;
  role?: string;
  projectDetail?: WorkProjectDetail;
  features?: WorkFeature[];
  gallery?: string[];
}

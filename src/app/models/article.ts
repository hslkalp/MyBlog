import { Category } from "./category";

export class Article {
  id!: number;
  title!: string;
  content_summary !: string;
  content_main !: string;
  publish_date !: Date;
  picture_url !: string;
  category_id !: number;
  view_count !: number;
  comment_count !: number;
  category !: Category;
}

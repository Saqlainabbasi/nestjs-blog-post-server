import { Comment } from '../../comments/entities/comment.entity';

export class Post {
  title: string;
  description: string;
  comments: Comment[];
}

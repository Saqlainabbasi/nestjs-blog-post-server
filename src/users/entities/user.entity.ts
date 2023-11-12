import { Post } from '../../posts/entities/post.entity';

export class User {
  name: string;
  dob: number;
  email: string;
  password: string;
  posts: Post[];
}

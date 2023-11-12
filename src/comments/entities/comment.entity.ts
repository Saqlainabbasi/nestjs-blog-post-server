import { User } from '../../users/entities/user.entity';

export class Comment {
  id: number;
  text: string;
  user: User;
}

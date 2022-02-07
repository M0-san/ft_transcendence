import { BaseEntity, Column } from 'typeorm';

export class User extends BaseEntity {
  @Column({ unique: true })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  avatar?: string;

  @Column({ default: 0 })
  gamesCount: number;

  @Column({ default: 0 })
  gamesWon: number;

  @Column({ default: false })
  is2FAEnabled: boolean;
}

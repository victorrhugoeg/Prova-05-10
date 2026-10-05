import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Episodes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  show_name: string;

  @Column()
  title: string;

  @Column({ type: 'float' })
  duration: number;

  @Column()
  audio_url: string;
}

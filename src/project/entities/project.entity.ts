import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum ProjectStatus {
  Pending = 'pendeng',
  Active = 'active',
  Cancelled = 'cancelled',
  Completed = 'completed',
}

@Entity()
export class Project {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  started_at: Date;
  @Column()
  cancelled_at: Date;
  @Column()
  forecasted_at: Date;
  @Column()
  status: ProjectStatus;
}

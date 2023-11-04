import type Emoji from './Emoji';

export default interface IEntry {
  id: number;
  body: string;
  emoji: Emoji | null;
  createdAt: Date;
}

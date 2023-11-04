import type { InjectionKey } from 'vue';
import type IUser from './User';
export const userInjectionKey = Symbol() as InjectionKey<IUser>;

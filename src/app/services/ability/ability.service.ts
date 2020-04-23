/*import { Injectable } from '@angular/core';
import { defineAbility } from '@casl/ability';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  constructor() { }

  defineAbilitiesFor() {
    return defineAbility((can) => {
      can('add', 'ManageOptions', 'admin');
      can('update', 'admin');
      can('delete', 'admin');
    });
  }
}
*/
import { AbilityBuilder, Ability, detectSubjectType, AbilityClass, InferSubjects } from '@casl/ability';

// 4 abilities level - 1. action (below (what user can actually do in the app)) 2. subject  3. fields   4. conditions
type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
type Subjects = InferSubjects<any> | 'all';

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;

export function defineAbilitiesFor(role: string) {
  const { can, rules } = new AbilityBuilder<AppAbility>();
  if (role === 'admin') {
    can('manage', 'all');
  } else {
    can('read', 'all');
    can('manage', 'any', { assignee: 'me' });
  }
  return rules;
}

function detectAppSubjectType(subject?: Subjects) {
  if (subject && typeof subject === 'object' && subject.kind) {
    return subject.kind;
  }

  return detectSubjectType(subject);
}

export function createAbility() {
  return new AppAbility(defineAbilitiesFor('member'), {
    detectSubjectType: detectAppSubjectType,
  });
}
/*
import { Ability, ForcedSubject } from '@casl/ability';

const actions = ['manage', 'invite'] as const;
const subjects = ['User', 'all'] as const;
type AppAbilities = [
  typeof actions[number],
  typeof subjects[number] | ForcedSubject<Exclude<typeof subjects[number], 'all'>>
];
export type AppAbility = Ability<AppAbilities>;*/
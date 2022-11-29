import { Injectable } from '@angular/core';

export class User {
  id: number;

  name: string;
}

const types: User[] = [{
  id: 1, name: 'Студенты',
}, {
  id: 2, name: 'Сотрудники',
},
];

@Injectable()
export class TypeUsersService {
  getTypes() {
    return types;
  }
}

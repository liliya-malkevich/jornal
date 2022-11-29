import { Injectable } from '@angular/core';

export class Status {
  id: number;

  name: string;
}

const statuses: Status[] = [{
  id: 1, name: 'Не начато',
}, {
  id: 2, name: 'В процессе',
}, {
  id: 3, name: 'Перенаправлено',
}, {
  id: 4, name: 'Выполнено',
},
];

@Injectable()
export class StatusService {
  getStatuses() {
    return statuses;
  }
}

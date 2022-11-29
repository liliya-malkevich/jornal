import { Injectable } from '@angular/core';
import moment from 'moment'

export class ProblemsStudent{
  idProblem: number;

  NameFacult: string;
  FIO: string;
  Number: string;
  DateO: Date;
  DateE: Date;
  DescProblem: string;
  KeysID: number[];
  Redirect: string;
  SolProblems: string;
  DopFiles: string;
  StudNumber:string;
  IdStatus: number;
  Note1: string;
  Note2: string;
}

export class Keys {
  ID: number;

  NameKeys : string;
}

const students: ProblemsStudent[] = [{
  idProblem: 1,

  NameFacult: 'bio',
  FIO: 'Анна',
  Number: '2356',
  DateO: new Date(2022, 9, 1),
  DateE: new Date(2022, 9, 11),
  DescProblem: 'Что-то не работает',
  KeysID: [2,3],
  Redirect: 'Отдел 1',
  SolProblems: 'Что-то починили Что-то починили Что-то починилиЧ то-то починили',
  DopFiles: '',
  StudNumber:'21212',
  IdStatus: 1,
  Note1: 'прим1',
  Note2: ''
}, {
  idProblem: 2,

  NameFacult: 'Подразделение 1',
  FIO: 'Сергей',
  Number: '3456',
  DateO: new Date(2022, 10, 11),
  DateE: new Date(2022, 10, 12),
  DescProblem: 'Что-то не печатает',
  KeysID: [1,2],
  Redirect: '',
  SolProblems: 'Что-то печатает',
  DopFiles: '',
  StudNumber:'2134212',
  IdStatus: 2,
  Note1: 'прим2прим прим примечание',
  Note2: 'прим 3 прим32323'
}, {
  idProblem: 3,

  NameFacult: 'Подразделение 4',
  FIO: 'Имя',
  Number: '2579',
  DateO: new Date(2022, 8, 21),
  DateE: new Date(2022, 9, 2),
  DescProblem: 'Что-то не показывает',
  KeysID: [4,2],
  Redirect: 'отдел 3232',
  SolProblems: 'Что-то показывает',
  DopFiles: '',
  StudNumber:'21212',
  IdStatus: 1,
  Note1: 'прим4',
  Note2: ''
}, {
  idProblem: 4,

  NameFacult: 'Подразделение 443',
  FIO: 'Николай',
  Number: '2579',
  DateO: new Date(2022, 8, 11),
  DateE: new Date(2022, 9, 12),
  DescProblem: 'Что-то не выводит',
  KeysID: [1,4,3],
  Redirect: '',
  SolProblems: 'Что-то выводит',
  DopFiles: '',
  StudNumber:'21212',
  IdStatus: 3,
  Note1: '',
  Note2: ''
}, {
  idProblem: 5,

  NameFacult: 'Подразделение 4',

  FIO: 'Имя',
  Number: '2579',
  DateO: new Date(2022, 8, 21),
  DateE: new Date(2022, 9, 2),
  DescProblem: 'Что-то не показывает',
  KeysID: [1,5],
  Redirect: 'отдел 3232',
  SolProblems: 'Что-то показывает',
  DopFiles: '',
  StudNumber:'21212',
  IdStatus: 4,
  Note1: 'прим1 прим прим',
  Note2: 'еуеуееу'
},  {
  idProblem: 6,

  NameFacult: 'Подразделение 24',
  FIO: 'Инна',
  Number: '253479',
  DateO: new Date(2022, 8, 1),
  DateE: new Date(2022, 9, 2),
  DescProblem: 'Что-то не показывает',
  KeysID: [3],
  Redirect: '',
  SolProblems: 'Что-то показывает',
  DopFiles: '',
  StudNumber:'21212',
  IdStatus: 1,
  Note1: 'прим1 прим прим',
  Note2: ''
}, {
  idProblem: 7,

  NameFacult: 'Подразделение 6',
  FIO: 'Имя',
  Number: '2579',
  DateO: new Date(2022, 8, 11),
  DateE: new Date(2022, 8, 11),
  DescProblem: 'Что-то не показывает',
  KeysID: [2],
  Redirect: 'отдел 3232',
  SolProblems: 'Что-то показывает',
  DopFiles: '',
  StudNumber:'21212',
  IdStatus: 1,
  Note1: 'щгщшгуаг',
  Note2: 'еуеуееу'
}];

const keys: Keys[] = [{
  ID: 1,
  NameKeys : 'Ключ слово',
},
{
  ID: 2,
  NameKeys : 'каоточка',
},
{
  ID: 3,
  NameKeys : 'Ключ слово1',
},
{
  ID: 4,
  NameKeys : 'личный кабинет',
},
{
  ID: 5,
  NameKeys : 'банк',
}
];

@Injectable()
export class ProblemsStudService  {
  getStudentByDate(month: number = new Date().getMonth() + 1,year:number = new Date().getFullYear()){
    const todayDate = new Date(year,month);
    //alert(todayDate);
    const startDayOfPrevMonth = moment(todayDate).subtract(0, 'month').startOf('month').format('LLLL');
    //alert(startDayOfPrevMonth);
    const lastDayOfPrevMonth = moment(todayDate).subtract(0, 'month').endOf('month').format('LLLL');
   // alert(lastDayOfPrevMonth);
    return students.filter(e => {
      const launchDate = e.DateO;
      //alert(moment(launchDate).isBetween(startDayOfPrevMonth, lastDayOfPrevMonth));
      return moment(launchDate).isBetween(startDayOfPrevMonth, lastDayOfPrevMonth,undefined,"[]");
    });

  }

  getStudents() {
    return students;
  }

  getKeys() {
    return keys;
  }
}

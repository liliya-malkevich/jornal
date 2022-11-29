import { Injectable } from '@angular/core';
import { StatusService, } from '../status.service';
import moment from 'moment'

export class PrEmployee{
  idProblem: number;

  idDept: number;

  IDAplication: number;

  FIO: string;
  Number: string;
  DateO: Date;
  DateE: Date;
  DescProblem: string;
  KeysID: number[];
  IdRedirect: number;
  SolProblems: string;
  DopFiles: string;
  IdStatus: number;
  Note1: string;
  Note2: string;
}

export class Keys {
  ID: number;
  NameKeys : string;
}


export class Aplications {
  IDApl: number;
  NameAplication : string;
}

export class Dept{
  idDept: number;
  idParent: number;
  NameDept: string;

}


const employees: PrEmployee[] = [{
  idProblem: 1,

  idDept: 3,
  IDAplication: 3,
  FIO: 'Анна',
  Number: '2356',
  DateO: new Date(2022, 9, 1),
  DateE: new Date(2022, 9, 11),
  DescProblem: 'Что-то не работает',
  KeysID: [2,3],
  IdRedirect: 1,
  SolProblems: 'Что-то починили Что-то починили Что-то починилиЧ то-то починили',
  DopFiles: '',
  IdStatus: 1,
  Note1: '',
  Note2: ''
}, {
  idProblem: 2,

  idDept: 5,
  IDAplication: 4,
  FIO: 'Светлана',
  Number: '3456',
  DateO: new Date(2022, 10, 11),
  DateE: new Date(2022, 10, 12),
  DescProblem: 'Что-то не печатает',
  KeysID: [1,2],
  IdRedirect: 2,
  SolProblems: 'Что-то печатает',
  DopFiles: '',
  IdStatus: 2,
  Note1: 'прим прим прим',
  Note2: 'прим'
}, {
  idProblem: 3,

  idDept: 3,
  IDAplication: 3,
  FIO: 'Имя',
  Number: '2579',
  DateO: new Date(2022, 8, 21),
  DateE: new Date(2022, 9, 2),
  DescProblem: 'Что-то не показывает',
  KeysID: [4,2],
  IdRedirect: 0,
  SolProblems: 'Что-то показывает',
  DopFiles: '',
  IdStatus: 1,
  Note1: 'примечание',
  Note2: ''
}, {
  idProblem: 4,

  idDept: 3,
  IDAplication: 5,
  FIO: 'Николай',
  Number: '2579',
  DateO: new Date(2022, 8, 11),
  DateE: new Date(2022, 9, 12),
  DescProblem: 'Что-то не выводит',
  KeysID: [1,4,3],
  IdRedirect: 0,
  SolProblems: 'Что-то выводит',
  DopFiles: '',
  IdStatus: 3,
  Note1: 'прим56565',
  Note2: ''
}, {
  idProblem: 5,

  idDept: 6,
  IDAplication: 1,
  FIO: 'Имя',
  Number: '2579',
  DateO: new Date(2022, 8, 21),
  DateE: new Date(2022, 9, 2),
  DescProblem: 'Что-то не показывает',
  KeysID: [1,5],
  IdRedirect: 6,
  SolProblems: 'Что-то показывает',
  DopFiles: '',
  IdStatus: 4,
  Note1: 'примечание примечание',
  Note2: 'прим прим'
},  {
  idProblem: 6,

  idDept: 5,
  IDAplication: 4,
  FIO: 'Инна',
  Number: '253479',
  DateO: new Date(2022, 8, 1),
  DateE: new Date(2022, 9, 2),
  DescProblem: 'Что-то не показывает',
  KeysID: [3],
  IdRedirect: 4,
  SolProblems: 'Что-то показывает',
  DopFiles: '',
  IdStatus: 1,
  Note1: 'примечааааание прим прим',
  Note2: '21212'
}, {
  idProblem: 7,

  idDept: 6,
  IDAplication: 3,
  FIO: 'Имя',
  Number: '2579',
  DateO: new Date(2022, 8, 11),
  DateE: new Date(2022, 8, 11),
  DescProblem: 'Что-то не показывает',
  KeysID: [2],
  IdRedirect: 0,
  SolProblems: 'Что-то показывает',
  DopFiles: '',
  IdStatus: 1,
  Note1: 'рпимрарра',
  Note2: ''
}];

const keys: Keys[] = [{
  ID: 1,
  NameKeys : 'Ключ слово',
},
{
  ID: 2,
  NameKeys : 'показ',
},
{
  ID: 3,
  NameKeys : 'Ключ слово1',
},
{
  ID: 4,
  NameKeys : 'Ключ слово2',
},
{
  ID: 5,
  NameKeys : 'вывод',
}
];




const apl: Aplications[] = [{
  IDApl: 1,
  NameAplication : 'приложение 1',
},
{
  IDApl: 2,
  NameAplication : 'прил 1',
},
{
  IDApl: 3,
  NameAplication : 'личный кабинет 1',
},
{
  IDApl: 4,
  NameAplication : 'деканат',
},
{
  IDApl: 5,
  NameAplication : 'студенты',
}
];


const depts: Dept[] = [{
  idDept: 1,
  idParent: 0,
  NameDept: 'Podr1',
},
{
  idDept: 2,
  idParent: 1,
  NameDept: 'Podr1.1',
}
,
{
  idDept: 3,
  idParent: 1,
  NameDept: 'Podr1.2',
}
,
{
  idDept: 4,
  idParent: 0,
  NameDept: 'Podr2',
}
,
{
  idDept: 5,
  idParent: 4,
  NameDept: 'Podr2.1',
}
,
{
  idDept: 6,
  idParent: 5,
  NameDept: 'Podr2.1.1',
}
]

@Injectable()
export class ProblemsEmpService  {

  getEmployeesByDate(month: number = new Date().getMonth() + 1,year:number = new Date().getFullYear()){
    const todayDate = new Date(year,month);
    //alert(todayDate);
    const startDayOfPrevMonth = moment(todayDate).subtract(0, 'month').startOf('month').format('LLLL');
    //alert(startDayOfPrevMonth);
    const lastDayOfPrevMonth = moment(todayDate).subtract(0, 'month').endOf('month').format('LLLL');
   // alert(lastDayOfPrevMonth);
    return employees.filter(e => {
      const launchDate = e.DateO;
      //alert(moment(launchDate).isBetween(startDayOfPrevMonth, lastDayOfPrevMonth));
      return moment(launchDate).isBetween(startDayOfPrevMonth, lastDayOfPrevMonth,undefined,"[]");
    });

  }
 // month: number = new Date().getMonth() + 1,year:number = new Date().getFullYear()
  getEmployees() {
    return employees;
  }

  getKeys() {
    return keys;
  }

  getDepts(){
    return depts;
  }

  getApl(){
    return apl;
  }
}

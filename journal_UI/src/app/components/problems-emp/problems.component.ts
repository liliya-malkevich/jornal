import { ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import dxDataGrid from 'devextreme/ui/data_grid';
import { ProblemsEmpService,PrEmployee,Keys,Dept,Aplications } from '../../services/problems/problems-employee.service';
import TagBox from "devextreme/ui/tag_box";
import { Status,StatusService } from 'src/app/services/status.service';
import config from 'devextreme/core/config';
import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';

@Component({
  selector: 'problems',
  templateUrl: './problems.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProblemsComponent {
  @ViewChild('problemsGrid', { static: false }) private _problemsGrid!: DxDataGridComponent;
  PrEmp: PrEmployee[];
keys: Keys[];
statuses: Status[];
status: Status;
editorOptions: object;
depts:Dept[];
currentDept: Dept;
aplications: Aplications[];
editorOptionsDept: object;
editorOptionsRedirect:object;
editorOptionsApl: object;


public date: Date | any; // <- very bad
  constructor(private _EmpService: ProblemsEmpService,private _StService: StatusService, private router: Router) {
    this.editorOptions = {
      itemTemplate: 'statusTemplate',
    };
    this.editorOptionsDept = {
      itemTemplate: 'deptTemp',
    };
    this.editorOptionsRedirect = {
      itemTemplate: 'redTemp',
    };
    this.editorOptionsApl = {
      itemTemplate: 'aplTemp',
    };

    this.PrEmp = _EmpService.getEmployees();
    this.keys = _EmpService.getKeys();
    this.statuses = _StService.getStatuses();
    this.date = new Date();
    this.depts = _EmpService.getDepts();
    this.currentDept = this.depts[0];
    this.aplications = _EmpService.getApl();
  }

  //for editing keywords
  onSelectionChanged(selectedRowKeys, cellInfo, dropDownBoxComponent) {
    cellInfo.setValue(selectedRowKeys[0]);
    if (selectedRowKeys.length > 0) {
      dropDownBoxComponent.close();
    }
  }

//fixing current date
  onEditorPreparing(e) {
    if (e.dataField === "DateO" && e.parentType === "dataRow" && e.editorOptions.value == null) {
        e.editorOptions.value = new Date;
    }}


//for display keywords in column
  cellTemplate(container, options) {
    const noBreakSpace = '\u00A0';
    const text = (options.value || []).map((element) => options.column.lookup.calculateCellValue(element)).join(' | ');
    container.textContent = text || noBreakSpace;
    container.title = text;
  }

  //for filtering display keywords
  calculateFilterExpression(filterValue, selectedFilterOperation, target) {
    if (target === 'search' && typeof (filterValue) === 'string') {
      return [(this as any).dataField, 'contains', filterValue];
    }
    return function (data) {
      return (data.KeysID || []).indexOf(filterValue) !== -1;
    };
  }




  //selection month
  public onToolbarEmpPreparing(e: any): void {
    let toolbarItems: any = e.toolbarOptions.items;
    let gridInstance: dxDataGrid = this._problemsGrid.instance;

    e.toolbarOptions.items.unshift({
        location: 'before',
        template: 'actionBtnGroup',
        locateInMenu: 'auto'
      }
    );

    toolbarItems.push({
      widget: 'dxButton',
      options: { icon: 'refresh', hint: 'Обновить', onClick: function () { gridInstance.refresh(); }},
      location: 'after',
    });
  }


  //выбранное подразделение
  selectDept(e){
    this.currentDept = e.itemData;
  }

  public GetProblemsEmp(){
this.PrEmp = this._EmpService.getEmployeesByDate(this.date.getMonth(), this.date.getFullYear());
  }
}


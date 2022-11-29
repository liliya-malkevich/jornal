import { ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import dxDataGrid from 'devextreme/ui/data_grid';
import { ProblemsStudService, ProblemsStudent,Keys} from 'src/app/services/problems/problems-students.service';
import TagBox from "devextreme/ui/tag_box";
import { Status,StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-problems-stud',
  templateUrl: './problems-stud.component.html',
  styleUrls: []
})
export class ProblemsStudComponent  {

  @ViewChild('studentGrid', { static: false }) private _problemsGrid!: DxDataGridComponent;
  ProblemsStud: ProblemsStudent[];
keys: Keys[];
statuses: Status[];
editorOptions: object;
public date: Date | any; // <- very bad

  constructor(private _StudService: ProblemsStudService,private _StatusService: StatusService, private router: Router) {
    this.editorOptions = {
      itemTemplate: 'statusTemplate',
    };
    this.ProblemsStud = _StudService.getStudents();
    this.keys = _StudService.getKeys();
    this.statuses = _StatusService.getStatuses();
    this.date = new Date();
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
    const text = (options.value || []).map((element) => options.column.lookup.calculateCellValue(element)).join(', ');
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

  public GetProblemsStudent(){
    this.ProblemsStud = this._StudService.getStudentByDate(this.date.getMonth(), this.date.getFullYear());
  }
}

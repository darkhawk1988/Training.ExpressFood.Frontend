import { Component } from '@angular/core';
import { DataGridColumn } from 'src/app/shared/data-grid/data-grid-column';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  columns:DataGridColumn[]=[
    {
      field:'username',
      title:'نام کاربری',
      type:'text'
    },
    {
      field:'password',
      title:'کلمه عبور',
      type:'text'
    },
    {
      field:'firstname',
      title:'نام',
      type:'text'
    },
    {
      field:'lastname',
      title:'نام خانوادگی',
      type:'text'
    },
    {
      field:'gender',
      title:'جنسیت',
      type:'text'
    },
    {
      field:'nationalCode',
      title:'کد ملی',
      type:'text'
    },
    {
      field:'birthDate',
      title:'تاریخ تولد',
      type:'text'
    },
    {
      field:'registerDate',
      title:'تاریخ عضویت',
      type:'text'
    },
    {
      field:'userType',
      title:'نوع کاربری',
      type:'text'
    },
    {
      field:'emailAddress',
      title:'پست الکترونیکی',
      type:'button'
    },
    {
      field:'cellphone',
      title:'شماره همراه',
      type:'text'
    },
    {
      field:'verified',
      title:'وضعیت اهراز هویت',
      type:'check'
    },
    {
      field:'verificationCode',
      title:'کد اهراز هویت',
      type:'text'
    }
  ];
  edit(row:any){
    console.log(row);
  }
  remove(row:any){
    console.log(row);
  }
}

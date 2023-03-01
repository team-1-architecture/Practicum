import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpEventType } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ReadVarExpr } from '@angular/compiler';
import { Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit{

  @Output() fileDataEvent = new EventEmitter<string>();
  file: any;
  // // Inject service 
  constructor() { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event: any) {
      this.file = event.target.files[0];
  }
  
 
  fileChanged(e:any) {
    this.file = e.target.files[0];
    this.uploadDocument();
  }


  public fileData: any;
  uploadDocument() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      // console.log(fileReader.result);
      console.log(typeof(fileReader.result));
      this.fileData = fileReader.result;
      this.fileDataEvent.emit(this.fileData);
      // return this.fileData; //Returns the string data
    }
    fileReader.readAsText(this.file);
    // console.log(this.result);
  }






  onFileSelected(event: any) {
    // console.log(this.fileData);
    let fileReader: FileReader = new FileReader();
    if(event.target.files.length > 0) 
     {
      console.log(event.target.files[0].name);
      console.log((event.target.files[0]));
     }
     fileReader.readAsText(event.target.files[0]);
  }


  // fileContent: any | undefined;

  // public onChange2(fileList: FileList): void {
  //   // let file = fileList[0];
  //   // let fileReader: FileReader = new FileReader();
  //   // let self = this;
  //   // fileReader.onloadend = function(x) {
  //   //   this.fileContent = fileReader.result || '';
  //   // }
  //   // fileReader.readAsText(file);
  // }


}

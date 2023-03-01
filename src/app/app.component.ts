import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'heatmap';
  loadInputFile = false;
  loadHeatMap = false;

  @Input() fileData = '';

  onLoadInputFile(){
    this.loadInputFile = !this.loadInputFile;
  }

  onLoadHeatMap(){
    this.loadHeatMap = !this.loadHeatMap;
  }

  setFileData(fileData: string){
    this.fileData = (JSON.parse(fileData));
  }
}

// >> http-get-component
import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";
import { BatchesService } from '../batches.service';
import { Batch } from '../batch.model';
@Component({
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [UsersService] // using the providers array
})
export class HomeComponent implements OnInit {
    public host: string;
    public userAgent: string;
    public origin: string;
    public url: string;
    public _batches: Batch[]; 


    //constructor(private myService: UsersService) { }
    constructor(private _batchesService: BatchesService) { }

    ngOnInit() {
     // this.extractData();
      this.extractBathes();

        
    }

    // extractData() {
    //     this.myService.getData()
    //         .subscribe((result) => {
    //             this.onGetDataSuccess(result);
    //         }, (error) => {
    //             console.log(error);
    //         });
    // }

    // private onGetDataSuccess(res) {
    //     this.host = res.headers.Host;
    //     this.userAgent = res.headers["User-Agent"];
    //     this.origin = res.origin;
    //     this.url = res.url;
    // }

    extractBathes(){
    this._batchesService.load()
    .pipe()
    .subscribe((batches: Batch[]) => {
        this._batches = batches;
    });
  }

}
// << http-get-component

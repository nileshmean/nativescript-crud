import { Component, OnInit,ViewContainerRef } from "@angular/core";
import { finalize } from 'rxjs/operators';
import { BatchesService } from './batches.service';
import { Batch } from './batch.model';
import { prompt, confirm, PromptResult, PromptOptions, AlertOptions,alert, inputType, capitalizationType } from "tns-core-modules/ui/dialogs";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { AddModalComponent } from "../addmodal/addmodal.component";
import { EditModalComponent } from "../editmodal/editmodal.component";
import { SearchBar } from "tns-core-modules/ui/search-bar";

@Component({ 
    selector: "Home",
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public _batches: Batch[];
    _isLoading = true;
    listPickerCountries: Array<string> = ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland",
    "China", "Czech Republic", "Germany", "Spain", "Ethiopia", "Croatia", "Hungary",
    "Italy", "Jamaica", "Romania", "Russia", "United States"];
    constructor(private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef,private _batchesService: BatchesService,) {
    }
 
    ngOnInit(): void {

        this._batchesService.load()
            .pipe(finalize(() => this._isLoading = false))
            .subscribe((batches => {

                this._batches = batches;
            }));
    }

    displayPromptDialog() {
 
      let options: PromptOptions = {
          title: "Add Details",
          defaultText: " Enter your moods ",
          okButtonText: "Submit",
          cancelButtonText: "Cancel",
          cancelable: true,
          inputType: inputType.text, // email, number, text, password, or email
          capitalizationType: capitalizationType.sentences // all. none, sentences or words
      };

     this.displayPromptDialog2();
 
      prompt(options).then((result: PromptResult) => {

          console.log("Hello, " + result.text);

      });
// << prompt-dialog-code

} 


displayPromptDialog2() {

    const alertOptions = {
        title: "Success!!",
        message: "New Item Added Successfully.",
        okButtonText: "OK",
        cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
    };
    
    alert(alertOptions);
}


DeleteSuccess() {

    const alertOptions = {
        title: "Deleted!!",
        message: "Item Delete Successfully.",
        okButtonText: "OK",
        cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
    };
    this._batchesService.load()
            .pipe(finalize(() => this._isLoading = false))
            .subscribe((batches => {

                this._batches = batches;
            }));
}

DeleteItem(id) {

    const alertOptions = {
        title: "Confirm!!",
        message: "You want to delete these item confirm?",
        okButtonText: "Yes",
        cancelButtonText: "Cancel",
        cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
    };
     
    confirm(alertOptions).then((result) => {
        if(result==true){

            this._batchesService.delete(id)
            .pipe(finalize(() => this._isLoading = false))
            .subscribe((batches => {

                this._batches = batches;
            }));
            
        this.DeleteSuccess();
        }
        
       });

}

EditItem() {

    const alertOptions = {
        title: "Your Title",
        message: "Your message",
        okButtonText: "OK",
        cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
    };
    
    alert(alertOptions);
}


showModal() {

    // const alertOptions = {
    //     title: "Your Title",
    //     message: "Your message",
    //     okButtonText: "OK",
    //     cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
    // }; 
    
    // alert(alertOptions);
    const options: ModalDialogOptions = {
        viewContainerRef: this.viewContainerRef,
        fullscreen: false,
        context: {}
    };
    this.modalService.showModal(AddModalComponent, options);
}
 
EditModal(id) {
alert("hi="+id);
  
    const options: ModalDialogOptions = {
        viewContainerRef: this.viewContainerRef,
        fullscreen: false,
        context: {  id: id,}, 
     
    };
    this.modalService.showModal(EditModalComponent, options);
}


}
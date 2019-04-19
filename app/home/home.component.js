"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var batches_service_1 = require("./batches.service");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var addmodal_component_1 = require("../addmodal/addmodal.component");
var editmodal_component_1 = require("../editmodal/editmodal.component");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService, viewContainerRef, _batchesService) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this._batchesService = _batchesService;
        this._isLoading = true;
        this.listPickerCountries = ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland",
            "China", "Czech Republic", "Germany", "Spain", "Ethiopia", "Croatia", "Hungary",
            "Italy", "Jamaica", "Romania", "Russia", "United States"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._batchesService.load()
            .pipe(operators_1.finalize(function () { return _this._isLoading = false; }))
            .subscribe((function (batches) {
            _this._batches = batches;
        }));
    };
    HomeComponent.prototype.displayPromptDialog = function () {
        var options = {
            title: "Add Details",
            defaultText: " Enter your moods ",
            okButtonText: "Submit",
            cancelButtonText: "Cancel",
            cancelable: true,
            inputType: dialogs_1.inputType.text,
            capitalizationType: dialogs_1.capitalizationType.sentences // all. none, sentences or words
        };
        this.displayPromptDialog2();
        dialogs_1.prompt(options).then(function (result) {
            console.log("Hello, " + result.text);
        });
        // << prompt-dialog-code
    };
    HomeComponent.prototype.displayPromptDialog2 = function () {
        var alertOptions = {
            title: "Success!!",
            message: "New Item Added Successfully.",
            okButtonText: "OK",
            cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
        };
        dialogs_1.alert(alertOptions);
    };
    HomeComponent.prototype.DeleteSuccess = function () {
        var _this = this;
        var alertOptions = {
            title: "Deleted!!",
            message: "Item Delete Successfully.",
            okButtonText: "OK",
            cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
        };
        this._batchesService.load()
            .pipe(operators_1.finalize(function () { return _this._isLoading = false; }))
            .subscribe((function (batches) {
            _this._batches = batches;
        }));
    };
    HomeComponent.prototype.DeleteItem = function (id) {
        var _this = this;
        var alertOptions = {
            title: "Confirm!!",
            message: "You want to delete these item confirm?",
            okButtonText: "Yes",
            cancelButtonText: "Cancel",
            cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
        };
        dialogs_1.confirm(alertOptions).then(function (result) {
            if (result == true) {
                _this._batchesService.delete(id)
                    .pipe(operators_1.finalize(function () { return _this._isLoading = false; }))
                    .subscribe((function (batches) {
                    _this._batches = batches;
                }));
                _this.DeleteSuccess();
            }
        });
    };
    HomeComponent.prototype.EditItem = function () {
        var alertOptions = {
            title: "Your Title",
            message: "Your message",
            okButtonText: "OK",
            cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
        };
        dialogs_1.alert(alertOptions);
    };
    HomeComponent.prototype.showModal = function () {
        // const alertOptions = {
        //     title: "Your Title",
        //     message: "Your message",
        //     okButtonText: "OK",
        //     cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
        // }; 
        // alert(alertOptions);
        var options = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: {}
        };
        this.modalService.showModal(addmodal_component_1.AddModalComponent, options);
    };
    HomeComponent.prototype.EditModal = function (id) {
        dialogs_1.alert("hi=" + id);
        var options = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: { id: id, },
        };
        this.modalService.showModal(editmodal_component_1.EditModalComponent, options);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            providers: [modal_dialog_1.ModalDialogService],
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService, core_1.ViewContainerRef, batches_service_1.BatchesService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQUNuRSw0Q0FBMEM7QUFDMUMscURBQW1EO0FBRW5ELHVEQUE4STtBQUM5SSxrRUFBMkY7QUFDM0YscUVBQW1FO0FBQ25FLHdFQUFzRTtBQVV0RTtJQU9JLHVCQUFvQixZQUFnQyxFQUFVLGdCQUFrQyxFQUFTLGVBQStCO1FBQXBILGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFKeEksZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQix3QkFBbUIsR0FBa0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsYUFBYTtZQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVM7WUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRTFELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFORyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRTthQUN0QixJQUFJLENBQUMsb0JBQVEsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEVBQXZCLENBQXVCLENBQUMsQ0FBQzthQUM3QyxTQUFTLENBQUMsQ0FBQyxVQUFBLE9BQU87WUFFZixLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELDJDQUFtQixHQUFuQjtRQUVFLElBQUksT0FBTyxHQUFrQjtZQUN6QixLQUFLLEVBQUUsYUFBYTtZQUNwQixXQUFXLEVBQUUs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QkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHNDQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsRUFBRTtRQUNaLGVBQUssQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDLENBQUM7UUFFWixJQUFNLE9BQU8sR0FBdUI7WUFDaEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxVQUFVLEVBQUUsS0FBSztZQUNqQixPQUFPLEVBQUUsRUFBRyxFQUFFLEVBQUUsRUFBRSxHQUFFO1NBRXZCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyx3Q0FBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBN0lZLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxpQ0FBa0IsQ0FBQztZQUMvQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBUW9DLGlDQUFrQixFQUE0Qix1QkFBZ0IsRUFBMEIsZ0NBQWM7T0FQL0gsYUFBYSxDQWdKekI7SUFBRCxvQkFBQztDQUFBLEFBaEpELElBZ0pDO0FBaEpZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJhdGNoZXNTZXJ2aWNlIH0gZnJvbSAnLi9iYXRjaGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmF0Y2ggfSBmcm9tICcuL2JhdGNoLm1vZGVsJztcbmltcG9ydCB7IHByb21wdCwgY29uZmlybSwgUHJvbXB0UmVzdWx0LCBQcm9tcHRPcHRpb25zLCBBbGVydE9wdGlvbnMsYWxlcnQsIGlucHV0VHlwZSwgY2FwaXRhbGl6YXRpb25UeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBBZGRNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9hZGRtb2RhbC9hZGRtb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVkaXRNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9lZGl0bW9kYWwvZWRpdG1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xuXG5AQ29tcG9uZW50KHsgXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgcHJvdmlkZXJzOiBbTW9kYWxEaWFsb2dTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBfYmF0Y2hlczogQmF0Y2hbXTtcbiAgICBfaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsaXN0UGlja2VyQ291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW1wiQXVzdHJhbGlhXCIsIFwiQmVsZ2l1bVwiLCBcIkJ1bGdhcmlhXCIsIFwiQ2FuYWRhXCIsIFwiU3dpdHplcmxhbmRcIixcbiAgICBcIkNoaW5hXCIsIFwiQ3plY2ggUmVwdWJsaWNcIiwgXCJHZXJtYW55XCIsIFwiU3BhaW5cIiwgXCJFdGhpb3BpYVwiLCBcIkNyb2F0aWFcIiwgXCJIdW5nYXJ5XCIsXG4gICAgXCJJdGFseVwiLCBcIkphbWFpY2FcIiwgXCJSb21hbmlhXCIsIFwiUnVzc2lhXCIsIFwiVW5pdGVkIFN0YXRlc1wiXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYscHJpdmF0ZSBfYmF0Y2hlc1NlcnZpY2U6IEJhdGNoZXNTZXJ2aWNlLCkge1xuICAgIH1cbiBcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLl9iYXRjaGVzU2VydmljZS5sb2FkKClcbiAgICAgICAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+IHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGJhdGNoZXMgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYmF0Y2hlcyA9IGJhdGNoZXM7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZGlzcGxheVByb21wdERpYWxvZygpIHtcbiBcbiAgICAgIGxldCBvcHRpb25zOiBQcm9tcHRPcHRpb25zID0ge1xuICAgICAgICAgIHRpdGxlOiBcIkFkZCBEZXRhaWxzXCIsXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IFwiIEVudGVyIHlvdXIgbW9vZHMgXCIsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlN1Ym1pdFwiLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICBpbnB1dFR5cGU6IGlucHV0VHlwZS50ZXh0LCAvLyBlbWFpbCwgbnVtYmVyLCB0ZXh0LCBwYXNzd29yZCwgb3IgZW1haWxcbiAgICAgICAgICBjYXBpdGFsaXphdGlvblR5cGU6IGNhcGl0YWxpemF0aW9uVHlwZS5zZW50ZW5jZXMgLy8gYWxsLiBub25lLCBzZW50ZW5jZXMgb3Igd29yZHNcbiAgICAgIH07XG5cbiAgICAgdGhpcy5kaXNwbGF5UHJvbXB0RGlhbG9nMigpO1xuIFxuICAgICAgcHJvbXB0KG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogUHJvbXB0UmVzdWx0KSA9PiB7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvLCBcIiArIHJlc3VsdC50ZXh0KTtcblxuICAgICAgfSk7XG4vLyA8PCBwcm9tcHQtZGlhbG9nLWNvZGVcblxufSBcblxuXG5kaXNwbGF5UHJvbXB0RGlhbG9nMigpIHtcblxuICAgIGNvbnN0IGFsZXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyEhXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiTmV3IEl0ZW0gQWRkZWQgU3VjY2Vzc2Z1bGx5LlwiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UgLy8gW0FuZHJvaWQgb25seV0gR2V0cyBvciBzZXRzIGlmIHRoZSBkaWFsb2cgY2FuIGJlIGNhbmNlbGVkIGJ5IHRhcGluZyBvdXRzaWRlIG9mIHRoZSBkaWFsb2cuXG4gICAgfTtcbiAgICBcbiAgICBhbGVydChhbGVydE9wdGlvbnMpO1xufVxuXG5cbkRlbGV0ZVN1Y2Nlc3MoKSB7XG5cbiAgICBjb25zdCBhbGVydE9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiBcIkRlbGV0ZWQhIVwiLFxuICAgICAgICBtZXNzYWdlOiBcIkl0ZW0gRGVsZXRlIFN1Y2Nlc3NmdWxseS5cIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgIGNhbmNlbGFibGU6IGZhbHNlIC8vIFtBbmRyb2lkIG9ubHldIEdldHMgb3Igc2V0cyBpZiB0aGUgZGlhbG9nIGNhbiBiZSBjYW5jZWxlZCBieSB0YXBpbmcgb3V0c2lkZSBvZiB0aGUgZGlhbG9nLlxuICAgIH07XG4gICAgdGhpcy5fYmF0Y2hlc1NlcnZpY2UubG9hZCgpXG4gICAgICAgICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChiYXRjaGVzID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2JhdGNoZXMgPSBiYXRjaGVzO1xuICAgICAgICAgICAgfSkpO1xufVxuXG5EZWxldGVJdGVtKGlkKSB7XG5cbiAgICBjb25zdCBhbGVydE9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm0hIVwiLFxuICAgICAgICBtZXNzYWdlOiBcIllvdSB3YW50IHRvIGRlbGV0ZSB0aGVzZSBpdGVtIGNvbmZpcm0/XCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UgLy8gW0FuZHJvaWQgb25seV0gR2V0cyBvciBzZXRzIGlmIHRoZSBkaWFsb2cgY2FuIGJlIGNhbmNlbGVkIGJ5IHRhcGluZyBvdXRzaWRlIG9mIHRoZSBkaWFsb2cuXG4gICAgfTtcbiAgICAgXG4gICAgY29uZmlybShhbGVydE9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZihyZXN1bHQ9PXRydWUpe1xuXG4gICAgICAgICAgICB0aGlzLl9iYXRjaGVzU2VydmljZS5kZWxldGUoaWQpXG4gICAgICAgICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChiYXRjaGVzID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2JhdGNoZXMgPSBiYXRjaGVzO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuRGVsZXRlU3VjY2VzcygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgIH0pO1xuXG59XG5cbkVkaXRJdGVtKCkge1xuXG4gICAgY29uc3QgYWxlcnRPcHRpb25zID0ge1xuICAgICAgICB0aXRsZTogXCJZb3VyIFRpdGxlXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiWW91ciBtZXNzYWdlXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSAvLyBbQW5kcm9pZCBvbmx5XSBHZXRzIG9yIHNldHMgaWYgdGhlIGRpYWxvZyBjYW4gYmUgY2FuY2VsZWQgYnkgdGFwaW5nIG91dHNpZGUgb2YgdGhlIGRpYWxvZy5cbiAgICB9O1xuICAgIFxuICAgIGFsZXJ0KGFsZXJ0T3B0aW9ucyk7XG59XG5cblxuc2hvd01vZGFsKCkge1xuXG4gICAgLy8gY29uc3QgYWxlcnRPcHRpb25zID0ge1xuICAgIC8vICAgICB0aXRsZTogXCJZb3VyIFRpdGxlXCIsXG4gICAgLy8gICAgIG1lc3NhZ2U6IFwiWW91ciBtZXNzYWdlXCIsXG4gICAgLy8gICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgIC8vICAgICBjYW5jZWxhYmxlOiBmYWxzZSAvLyBbQW5kcm9pZCBvbmx5XSBHZXRzIG9yIHNldHMgaWYgdGhlIGRpYWxvZyBjYW4gYmUgY2FuY2VsZWQgYnkgdGFwaW5nIG91dHNpZGUgb2YgdGhlIGRpYWxvZy5cbiAgICAvLyB9OyBcbiAgICBcbiAgICAvLyBhbGVydChhbGVydE9wdGlvbnMpO1xuICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgY29udGV4dDoge31cbiAgICB9O1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChBZGRNb2RhbENvbXBvbmVudCwgb3B0aW9ucyk7XG59XG4gXG5FZGl0TW9kYWwoaWQpIHtcbmFsZXJ0KFwiaGk9XCIraWQpO1xuICBcbiAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgIGNvbnRleHQ6IHsgIGlkOiBpZCx9LCBcbiAgICAgXG4gICAgfTtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoRWRpdE1vZGFsQ29tcG9uZW50LCBvcHRpb25zKTtcbn1cblxuXG59Il19
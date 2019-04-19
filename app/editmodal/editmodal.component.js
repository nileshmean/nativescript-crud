"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var batches_service_1 = require("../home/batches.service");
var EditModalComponent = /** @class */ (function () {
    function EditModalComponent(params, _batchesService) {
        // alert("test1="+options);
        // alert("test2="+options.data);
        // alert("test3="+options.data._id);
        this.params = params;
        this._batchesService = _batchesService;
        this.CompnayTx = "";
        this.PhoneTx = "";
        this.input = {
            "companyname": "",
            "phonenumber": "",
            "id": "",
        };
    }
    EditModalComponent.prototype.ngOnInit = function () {
        this.params = this.params.context;
    };
    EditModalComponent.prototype.onTextChange = function (args) {
        var textField = args.object;
        console.log("onTextChange");
        this.CompnayTx = textField.text;
        this.PhoneTx = textField.text;
        alert("Text: " + this.PhoneTx);
    };
    EditModalComponent.prototype.close = function () {
        this.params.closeCallback();
    };
    EditModalComponent.prototype.register_update = function () {
        //alert("tetete="+this.params.id);  
        if (this.input.companyname) {
            //ApplicationSettings.setString("account", JSON.stringify(this.input));
            this._batchesService.update(this.input).subscribe(function (data) {
                var res = JSON.parse(data['_body']);
                alert(data);
                //   if(data.status == 200){
                //   }
            }, function (err) {
                // console.log(err)
                alert("err: " + err);
            });
        }
        else {
            //(new SnackBar()).simple("All Fields Required!");
        }
    };
    EditModalComponent.prototype.Add = function (result) {
        alert("Text: " + this.PhoneTx);
        alert("Text: " + this.input);
    };
    EditModalComponent = __decorate([
        core_1.Component({
            selector: "modal",
            template: "\n    <StackLayout margin=\"10\" verticalAlignment=\"center\">\n    <StackLayout class=\"form\" padding=\"15\" backgroundColor=\"#FFFFFF\">\n        <StackLayout class=\"input-field\">\n            <Label text=\"Company Name\" class=\"label font-weight-bold m-b-5\"></Label>\n            <TextField class=\"input\" [(ngModel)]=\"input.companyname\"></TextField>\n            <StackLayout class=\"hr-light\"></StackLayout>\n        </StackLayout>\n        <StackLayout class=\"input-field\">\n            <Label [text]=\"Phone Number\" class=\"label font-weight-bold m-b-5\"></Label>\n            <TextField class=\"input\" [(ngModel)]=\"input.phonenumber\"></TextField>\n            <StackLayout class=\"hr-light\"></StackLayout>\n        </StackLayout>\n       \n\n \n        <Button class=\"btn btn-primary w-full\" text=\"Update\" (tap)=\"register_update()\"></Button>\n    </StackLayout>\n</StackLayout>\n        \n\n\n\t"
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, batches_service_1.BatchesService])
    ], EditModalComponent);
    return EditModalComponent;
}());
exports.EditModalComponent = EditModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXRtb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBR3RFLDJEQUF5RDtBQWdDekQ7SUFNSSw0QkFBb0IsTUFBeUIsRUFBUyxlQUErQjtRQUVqRiwyQkFBMkI7UUFDM0IsZ0NBQWdDO1FBQ2hDLG9DQUFvQztRQUpwQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUg5RSxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFReEIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLElBQUksRUFBQyxFQUFFO1NBRVYsQ0FBQTtJQUNMLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRU0seUNBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUM5QixLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV2QyxDQUFDO0lBRUcsa0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELDRDQUFlLEdBQWY7UUFFSixvQ0FBb0M7UUFFNUIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN2Qix1RUFBdUU7WUFFdkUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ2xELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFWiw0QkFBNEI7Z0JBRTVCLE1BQU07WUFFTixDQUFDLEVBQUMsVUFBQyxHQUFHO2dCQUNILG1CQUFtQjtnQkFDbkIsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUV2QixDQUFDLENBQUMsQ0FBQztTQUdYO2FBQU07WUFDSCxrREFBa0Q7U0FDckQ7SUFDTCxDQUFDO0lBRU0sZ0NBQUcsR0FBVixVQUFXLE1BQU07UUFFYixLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBdEVZLGtCQUFrQjtRQTFCOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSwrNUJBc0JaO1NBQ0QsQ0FBQzt5Q0FPOEIsZ0NBQWlCLEVBQTBCLGdDQUFjO09BTjVFLGtCQUFrQixDQXdFOUI7SUFBRCx5QkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XG5pbXBvcnQgeyBCYXRjaGVzU2VydmljZSB9IGZyb20gJy4uL2hvbWUvYmF0Y2hlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhdGNoIH0gZnJvbSAnLi4vaG9tZS9iYXRjaC5tb2RlbCc7XG5cbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuLy9pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibW9kYWxcIiwgXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQgbWFyZ2luPVwiMTBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIiBwYWRkaW5nPVwiMTVcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRkZGRkZGXCI+XG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkNvbXBhbnkgTmFtZVwiIGNsYXNzPVwibGFiZWwgZm9udC13ZWlnaHQtYm9sZCBtLWItNVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBbKG5nTW9kZWwpXT1cImlucHV0LmNvbXBhbnluYW1lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICA8TGFiZWwgW3RleHRdPVwiUGhvbmUgTnVtYmVyXCIgY2xhc3M9XCJsYWJlbCBmb250LXdlaWdodC1ib2xkIG0tYi01XCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXQucGhvbmVudW1iZXJcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICBcblxuIFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctZnVsbFwiIHRleHQ9XCJVcGRhdGVcIiAodGFwKT1cInJlZ2lzdGVyX3VwZGF0ZSgpXCI+PC9CdXR0b24+XG4gICAgPC9TdGFja0xheW91dD5cbjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIFxuXG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpbnB1dDogYW55O1xuICAgIHB1YmxpYyBmaXJzdG5hbWU6IGFueTtcbiAgICBwdWJsaWMgQ29tcG5heVR4OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBQaG9uZVR4OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLHByaXZhdGUgX2JhdGNoZXNTZXJ2aWNlOiBCYXRjaGVzU2VydmljZSkge1xuXG4gICAgICAgIC8vIGFsZXJ0KFwidGVzdDE9XCIrb3B0aW9ucyk7XG4gICAgICAgIC8vIGFsZXJ0KFwidGVzdDI9XCIrb3B0aW9ucy5kYXRhKTtcbiAgICAgICAgLy8gYWxlcnQoXCJ0ZXN0Mz1cIitvcHRpb25zLmRhdGEuX2lkKTtcblxuICAgICAgICB0aGlzLmlucHV0ID0ge1xuICAgICAgICAgICAgXCJjb21wYW55bmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJwaG9uZW51bWJlclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJpZFwiOlwiXCIsXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLnBhcmFtcyA9IHRoaXMucGFyYW1zLmNvbnRleHQ7ICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2UoYXJncykge1xuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uVGV4dENoYW5nZVwiKTtcbiAgICAgICAgdGhpcy5Db21wbmF5VHggPSB0ZXh0RmllbGQudGV4dDtcbiAgICAgICAgdGhpcy5QaG9uZVR4ID0gdGV4dEZpZWxkLnRleHQ7XG4gICAgICAgIGFsZXJ0KFwiVGV4dDogXCIgKyB0aGlzLlBob25lVHgpO1xuXG59XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xuICAgIH1cbiAgXG4gICAgcmVnaXN0ZXJfdXBkYXRlKCkge1xuXG4vL2FsZXJ0KFwidGV0ZXRlPVwiK3RoaXMucGFyYW1zLmlkKTsgIFxuXG4gICAgICAgIGlmKHRoaXMuaW5wdXQuY29tcGFueW5hbWUpIHsgXG4gICAgICAgICAgICAvL0FwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWNjb3VudFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlucHV0KSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2JhdGNoZXNTZXJ2aWNlLnVwZGF0ZSh0aGlzLmlucHV0KS5zdWJzY3JpYmUoZGF0YT0+IHsgXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IEpTT04ucGFyc2UoZGF0YVsnX2JvZHknXSk7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAvLyAgIGlmKGRhdGEuc3RhdHVzID09IDIwMCl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0sKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICBhbGVydChcImVycjogXCIgKyBlcnIpO1xuXG4gICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBBZGQocmVzdWx0KSB7XG5cbiAgICAgICAgYWxlcnQoXCJUZXh0OiBcIiArIHRoaXMuUGhvbmVUeCk7XG4gICAgICAgIGFsZXJ0KFwiVGV4dDogXCIgKyB0aGlzLmlucHV0KTsgXG59XG5cbn1cblxuIl19
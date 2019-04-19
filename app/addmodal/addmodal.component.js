"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var batches_service_1 = require("../home/batches.service");
var AddModalComponent = /** @class */ (function () {
    function AddModalComponent(params, _batchesService) {
        this.params = params;
        this._batchesService = _batchesService;
        this.CompnayTx = "";
        this.PhoneTx = "";
        this.input = {
            "companyname": "",
            "phonenumber": "",
        };
    }
    AddModalComponent.prototype.ngOnInit = function () { };
    AddModalComponent.prototype.onTextChange = function (args) {
        var textField = args.object;
        console.log("onTextChange");
        this.CompnayTx = textField.text;
        this.PhoneTx = textField.text;
        alert("Text: " + this.PhoneTx);
    };
    AddModalComponent.prototype.close = function () {
        this.params.closeCallback();
    };
    AddModalComponent.prototype.register = function () {
        if (this.input.companyname) {
            //ApplicationSettings.setString("account", JSON.stringify(this.input));
            this._batchesService.add(this.input).subscribe(function (data) {
                var res = JSON.parse(data['_body']);
                alert(data);
                //   if(data.status == 200){
                //   }
            }, function (err) {
                // console.log(err)
                alert("err: " + err);
            });
            //   alert("Text: 3" + account); 
            //   alert(account);
            //this.location.back();
        }
        else {
            //(new SnackBar()).simple("All Fields Required!");
        }
    };
    AddModalComponent.prototype.Add = function (result) {
        alert("Text: " + this.PhoneTx);
        alert("Text: " + this.input);
    };
    AddModalComponent = __decorate([
        core_1.Component({
            selector: "modal",
            template: "\n    <StackLayout margin=\"10\" verticalAlignment=\"center\">\n    <StackLayout class=\"form\" padding=\"15\" backgroundColor=\"#FFFFFF\">\n        <StackLayout class=\"input-field\">\n            <Label text=\"Company Name\" class=\"label font-weight-bold m-b-5\"></Label>\n            <TextField class=\"input\" [(ngModel)]=\"input.companyname\"></TextField>\n            <StackLayout class=\"hr-light\"></StackLayout>\n        </StackLayout>\n        <StackLayout class=\"input-field\">\n            <Label text=\"Phone Number\" class=\"label font-weight-bold m-b-5\"></Label>\n            <TextField class=\"input\" [(ngModel)]=\"input.phonenumber\"></TextField>\n            <StackLayout class=\"hr-light\"></StackLayout>\n        </StackLayout>\n\n \n        <Button class=\"btn btn-primary w-full\" text=\"Register\" (tap)=\"register()\"></Button>\n    </StackLayout>\n</StackLayout>\n        \n\n\n\t"
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, batches_service_1.BatchesService])
    ], AddModalComponent);
    return AddModalComponent;
}());
exports.AddModalComponent = AddModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtFQUFzRTtBQUd0RSwyREFBeUQ7QUErQnpEO0lBTUksMkJBQW9CLE1BQXlCLEVBQVMsZUFBK0I7UUFBakUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFIOUUsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBSXhCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsRUFBRTtTQUVwQixDQUFBO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBWSxDQUFDO0lBRU4sd0NBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUM5QixLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV2QyxDQUFDO0lBRUcsaUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ3ZCLHVFQUF1RTtZQUV2RSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDL0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVaLDRCQUE0QjtnQkFFNUIsTUFBTTtZQUVOLENBQUMsRUFBQyxVQUFDLEdBQUc7Z0JBQ0gsbUJBQW1CO2dCQUNuQixLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBRXZCLENBQUMsQ0FBQyxDQUFDO1lBRVQsaUNBQWlDO1lBQ2pDLG9CQUFvQjtZQUNuQix1QkFBdUI7U0FDMUI7YUFBTTtZQUNILGtEQUFrRDtTQUNyRDtJQUNMLENBQUM7SUFFTSwrQkFBRyxHQUFWLFVBQVcsTUFBTTtRQUViLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUE3RFksaUJBQWlCO1FBekI3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLCs0QkFxQlo7U0FDRCxDQUFDO3lDQU84QixnQ0FBaUIsRUFBMEIsZ0NBQWM7T0FONUUsaUJBQWlCLENBK0Q3QjtJQUFELHdCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcbmltcG9ydCB7IEJhdGNoZXNTZXJ2aWNlIH0gZnJvbSAnLi4vaG9tZS9iYXRjaGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmF0Y2ggfSBmcm9tICcuLi9ob21lL2JhdGNoLm1vZGVsJztcblxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG4vL2ltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJtb2RhbFwiLCBcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dCBtYXJnaW49XCIxMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiIHBhZGRpbmc9XCIxNVwiIGJhY2tncm91bmRDb2xvcj1cIiNGRkZGRkZcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQ29tcGFueSBOYW1lXCIgY2xhc3M9XCJsYWJlbCBmb250LXdlaWdodC1ib2xkIG0tYi01XCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXQuY29tcGFueW5hbWVcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUGhvbmUgTnVtYmVyXCIgY2xhc3M9XCJsYWJlbCBmb250LXdlaWdodC1ib2xkIG0tYi01XCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIFsobmdNb2RlbCldPVwiaW5wdXQucGhvbmVudW1iZXJcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cblxuIFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctZnVsbFwiIHRleHQ9XCJSZWdpc3RlclwiICh0YXApPVwicmVnaXN0ZXIoKVwiPjwvQnV0dG9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG48L1N0YWNrTGF5b3V0PlxuICAgICAgICBcblxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgQWRkTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpbnB1dDogYW55O1xuICAgIHB1YmxpYyBmaXJzdG5hbWU6IGFueTtcbiAgICBwdWJsaWMgQ29tcG5heVR4OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBQaG9uZVR4OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLHByaXZhdGUgX2JhdGNoZXNTZXJ2aWNlOiBCYXRjaGVzU2VydmljZSkge1xuXG4gICAgICAgIHRoaXMuaW5wdXQgPSB7XG4gICAgICAgICAgICBcImNvbXBhbnluYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcInBob25lbnVtYmVyXCI6IFwiXCIsXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHt9XG5cbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlKGFyZ3MpIHtcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJvblRleHRDaGFuZ2VcIik7XG4gICAgICAgIHRoaXMuQ29tcG5heVR4ID0gdGV4dEZpZWxkLnRleHQ7XG4gICAgICAgIHRoaXMuUGhvbmVUeCA9IHRleHRGaWVsZC50ZXh0O1xuICAgICAgICBhbGVydChcIlRleHQ6IFwiICsgdGhpcy5QaG9uZVR4KTtcblxufVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgICB9XG4gIFxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICBpZih0aGlzLmlucHV0LmNvbXBhbnluYW1lKSB7IFxuICAgICAgICAgICAgLy9BcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjY291bnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pbnB1dCkpO1xuXG4gICAgICAgICAgICB0aGlzLl9iYXRjaGVzU2VydmljZS5hZGQodGhpcy5pbnB1dCkuc3Vic2NyaWJlKGRhdGE9PiB7IFxuICAgICAgICAgICAgICAgIHZhciByZXMgPSBKU09OLnBhcnNlKGRhdGFbJ19ib2R5J10pO1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgLy8gICBpZihkYXRhLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9LChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICAgYWxlcnQoXCJlcnI6IFwiICsgZXJyKTtcblxuICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAvLyAgIGFsZXJ0KFwiVGV4dDogM1wiICsgYWNjb3VudCk7IFxuICAgICAgICAgICAvLyAgIGFsZXJ0KGFjY291bnQpO1xuICAgICAgICAgICAgLy90aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBBZGQocmVzdWx0KSB7XG5cbiAgICAgICAgYWxlcnQoXCJUZXh0OiBcIiArIHRoaXMuUGhvbmVUeCk7XG4gICAgICAgIGFsZXJ0KFwiVGV4dDogXCIgKyB0aGlzLmlucHV0KTsgXG59XG5cbn1cblxuIl19
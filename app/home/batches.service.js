"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BatchesService = /** @class */ (function () {
    function BatchesService(http) {
        this.http = http;
    }
    BatchesService.prototype.load = function () {
        return this.http
            .get('http://wefindnow.com:8443/user/getRecord');
    };
    BatchesService.prototype.add = function (data) {
        alert("hi hie");
        //return this.http
        //     .get<Batch[]>('https://jsonplaceholder.typicode.com/posts?userId=1');
        var content_data = JSON.parse(JSON.stringify(data));
        //console.log(content_data);
        //  return this.http.post('http://wefindnow.com:8443/user/insertRecord?companyname='+data.companyname+'&phonenumber='+data.phonenumber,content_data);
        return this.http.post('http://wefindnow.com:8443/user/insertRecord?companyname=' + data.companyname + '&phonenumber=' + data.phonenumber, content_data);
    };
    BatchesService.prototype.update = function (data) {
        alert("hi hie=" + data.companyname);
        var content_data = JSON.parse(JSON.stringify(data));
        return this.http.post('http://wefindnow.com:8443/user/insertRecord?companyname=' + data.companyname + '&phonenumber=' + data.phonenumber + '&_id=' + data.id, content_data);
    };
    BatchesService.prototype.delete = function (id) {
        alert("hi hie");
        //return this.http
        //     .get<Batch[]>('https://jsonplaceholder.typicode.com/posts?userId=1');
        //  var content_data = JSON.parse(JSON.stringify(id));
        //console.log(content_data);
        // user_id= id;
        // alert(id);
        return this.http.post('http://wefindnow.com:8443/user/deleteRecord?user_id=' + id, id);
    };
    BatchesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BatchesService);
    return BatchesService;
}());
exports.BatchesService = BatchesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0Y2hlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmF0Y2hlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQU8vRDtJQUVJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUVsQyw2QkFBSSxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSTthQUNYLEdBQUcsQ0FBVSwwQ0FBMEMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFHTSw0QkFBRyxHQUFWLFVBQVcsSUFBSTtRQUNYLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQixrQkFBa0I7UUFDbkIsNEVBQTRFO1FBRXZFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BELDRCQUE0QjtRQUM5QixxSkFBcUo7UUFDbkosT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywwREFBMEQsR0FBQyxJQUFJLENBQUMsV0FBVyxHQUFDLGVBQWUsR0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXpKLENBQUM7SUFHTSwrQkFBTSxHQUFiLFVBQWMsSUFBSTtRQUNkLEtBQUssQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRzlCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMERBQTBELEdBQUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxlQUFlLEdBQUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxZQUFZLENBQUMsQ0FBQztJQUV6SyxDQUFDO0lBR00sK0JBQU0sR0FBYixVQUFjLEVBQUU7UUFDWixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEIsa0JBQWtCO1FBQ25CLDRFQUE0RTtRQUV6RSxzREFBc0Q7UUFDcEQsNEJBQTRCO1FBQzdCLGVBQWU7UUFDZixhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzREFBc0QsR0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQTVDUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR2lCLGlCQUFVO09BRjNCLGNBQWMsQ0E2QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXRjaCB9IGZyb20gXCIuL2JhdGNoLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYXRjaGVzU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZCgpOiBPYnNlcnZhYmxlPEJhdGNoW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQ8QmF0Y2hbXT4oJ2h0dHA6Ly93ZWZpbmRub3cuY29tOjg0NDMvdXNlci9nZXRSZWNvcmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBhZGQoZGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgYWxlcnQoXCJoaSBoaWVcIik7XHJcbiAgICAgICAgLy9yZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAvLyAgICAgLmdldDxCYXRjaFtdPignaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzP3VzZXJJZD0xJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGVudF9kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29udGVudF9kYXRhKTtcclxuICAgICAgICAgIC8vICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly93ZWZpbmRub3cuY29tOjg0NDMvdXNlci9pbnNlcnRSZWNvcmQ/Y29tcGFueW5hbWU9JytkYXRhLmNvbXBhbnluYW1lKycmcGhvbmVudW1iZXI9JytkYXRhLnBob25lbnVtYmVyLGNvbnRlbnRfZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL3dlZmluZG5vdy5jb206ODQ0My91c2VyL2luc2VydFJlY29yZD9jb21wYW55bmFtZT0nK2RhdGEuY29tcGFueW5hbWUrJyZwaG9uZW51bWJlcj0nK2RhdGEucGhvbmVudW1iZXIsY29udGVudF9kYXRhKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBhbGVydChcImhpIGhpZT1cIitkYXRhLmNvbXBhbnluYW1lKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRfZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly93ZWZpbmRub3cuY29tOjg0NDMvdXNlci9pbnNlcnRSZWNvcmQ/Y29tcGFueW5hbWU9JytkYXRhLmNvbXBhbnluYW1lKycmcGhvbmVudW1iZXI9JytkYXRhLnBob25lbnVtYmVyKycmX2lkPScrZGF0YS5pZCxjb250ZW50X2RhdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBhbGVydChcImhpIGhpZVwiKTtcclxuICAgICAgICAvL3JldHVybiB0aGlzLmh0dHBcclxuICAgICAgIC8vICAgICAuZ2V0PEJhdGNoW10+KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHM/dXNlcklkPTEnKTtcclxuXHJcbiAgICAgICAgICAvLyAgdmFyIGNvbnRlbnRfZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaWQpKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjb250ZW50X2RhdGEpO1xyXG4gICAgICAgICAgIC8vIHVzZXJfaWQ9IGlkO1xyXG4gICAgICAgICAgIC8vIGFsZXJ0KGlkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vd2VmaW5kbm93LmNvbTo4NDQzL3VzZXIvZGVsZXRlUmVjb3JkP3VzZXJfaWQ9JytpZCxpZCk7XHJcbiAgICB9XHJcbn0gICJdfQ==
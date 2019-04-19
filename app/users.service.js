"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> http-get-service
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.serverUrl = "https://httpbin.org/get";
    }
    UsersService.prototype.getData = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers });
    };
    UsersService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json",
        });
        return headers;
    };
    UsersService = __decorate([
        core_1.Injectable(
        // Instead of providers array you can use provideIn
        // Learn more https://angular.io/guide/providers
        // {
        //     providedIn: "root"
        // }
        ),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQkFBc0I7QUFDdEIsc0NBQTJDO0FBQzNDLDZDQUErRDtBQVMvRDtJQUdJLHNCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLGNBQVMsR0FBRyx5QkFBeUIsQ0FBQztJQUVOLENBQUM7SUFFekMsOEJBQU8sR0FBUDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTywwQ0FBbUIsR0FBM0I7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7U0FDcEMsQ0FBQyxDQUFDO1FBRUosT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQW5CUSxZQUFZO1FBUHhCLGlCQUFVO1FBQ1AsbURBQW1EO1FBQ25ELGdEQUFnRDtRQUNoRCxJQUFJO1FBQ0oseUJBQXlCO1FBQ3pCLElBQUk7U0FDUDt5Q0FJNkIsaUJBQVU7T0FIM0IsWUFBWSxDQW9CeEI7SUFBRCxtQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gaHR0cC1nZXQtc2VydmljZVxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5ASW5qZWN0YWJsZShcbiAgICAvLyBJbnN0ZWFkIG9mIHByb3ZpZGVycyBhcnJheSB5b3UgY2FuIHVzZSBwcm92aWRlSW5cbiAgICAvLyBMZWFybiBtb3JlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9wcm92aWRlcnNcbiAgICAvLyB7XG4gICAgLy8gICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG4gICAgLy8gfVxuKVxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vaHR0cGJpbi5vcmcvZ2V0XCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwsIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICBcIkF1dGhLZXlcIjogXCJteS1rZXlcIixcbiAgICAgICAgICAgIFwiQXV0aFRva2VuXCI6IFwibXktdG9rZW5cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxufSJdfQ==
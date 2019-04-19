"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> http-get-component
var core_1 = require("@angular/core");
var users_service_1 = require("../users.service");
var batches_service_1 = require("../batches.service");
var HomeComponent = /** @class */ (function () {
    //constructor(private myService: UsersService) { }
    function HomeComponent(_batchesService) {
        this._batchesService = _batchesService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.extractData();
        this.extractBathes();
    };
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
    HomeComponent.prototype.extractBathes = function () {
        var _this = this;
        this._batchesService.load()
            .pipe()
            .subscribe(function (batches) {
            _this._batches = batches;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./home.component.html",
            providers: [users_service_1.UsersService] // using the providers array
        }),
        __metadata("design:paramtypes", [batches_service_1.BatchesService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
// << http-get-component
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUF3QjtBQUN4QixzQ0FBa0Q7QUFDbEQsa0RBQWdEO0FBQ2hELHNEQUFvRDtBQU9wRDtJQVFJLGtEQUFrRDtJQUNsRCx1QkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBQUksQ0FBQztJQUV4RCxnQ0FBUSxHQUFSO1FBQ0Msc0JBQXNCO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUd2QixDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsNkNBQTZDO0lBQzdDLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLElBQUk7SUFFSixrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLGtEQUFrRDtJQUNsRCxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLElBQUk7SUFFSixxQ0FBYSxHQUFiO1FBQUEsaUJBTUQ7UUFMQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRTthQUMxQixJQUFJLEVBQUU7YUFDTixTQUFTLENBQUMsVUFBQyxPQUFnQjtZQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF4Q1UsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQyxDQUFDLDRCQUE0QjtTQUN6RCxDQUFDO3lDQVV1QyxnQ0FBYztPQVQxQyxhQUFhLENBMEN6QjtJQUFELG9CQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksc0NBQWE7QUEyQzFCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGh0dHAtZ2V0LWNvbXBvbmVudFxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3VzZXJzLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJhdGNoZXNTZXJ2aWNlIH0gZnJvbSAnLi4vYmF0Y2hlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhdGNoIH0gZnJvbSAnLi4vYmF0Y2gubW9kZWwnO1xuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtVc2Vyc1NlcnZpY2VdIC8vIHVzaW5nIHRoZSBwcm92aWRlcnMgYXJyYXlcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGhvc3Q6IHN0cmluZztcbiAgICBwdWJsaWMgdXNlckFnZW50OiBzdHJpbmc7XG4gICAgcHVibGljIG9yaWdpbjogc3RyaW5nO1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgICBwdWJsaWMgX2JhdGNoZXM6IEJhdGNoW107IFxuXG5cbiAgICAvL2NvbnN0cnVjdG9yKHByaXZhdGUgbXlTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHsgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JhdGNoZXNTZXJ2aWNlOiBCYXRjaGVzU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgLy8gdGhpcy5leHRyYWN0RGF0YSgpO1xuICAgICAgdGhpcy5leHRyYWN0QmF0aGVzKCk7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gZXh0cmFjdERhdGEoKSB7XG4gICAgLy8gICAgIHRoaXMubXlTZXJ2aWNlLmdldERhdGEoKVxuICAgIC8vICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5vbkdldERhdGFTdWNjZXNzKHJlc3VsdCk7XG4gICAgLy8gICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBwcml2YXRlIG9uR2V0RGF0YVN1Y2Nlc3MocmVzKSB7XG4gICAgLy8gICAgIHRoaXMuaG9zdCA9IHJlcy5oZWFkZXJzLkhvc3Q7XG4gICAgLy8gICAgIHRoaXMudXNlckFnZW50ID0gcmVzLmhlYWRlcnNbXCJVc2VyLUFnZW50XCJdO1xuICAgIC8vICAgICB0aGlzLm9yaWdpbiA9IHJlcy5vcmlnaW47XG4gICAgLy8gICAgIHRoaXMudXJsID0gcmVzLnVybDtcbiAgICAvLyB9XG5cbiAgICBleHRyYWN0QmF0aGVzKCl7XG4gICAgdGhpcy5fYmF0Y2hlc1NlcnZpY2UubG9hZCgpXG4gICAgLnBpcGUoKVxuICAgIC5zdWJzY3JpYmUoKGJhdGNoZXM6IEJhdGNoW10pID0+IHtcbiAgICAgICAgdGhpcy5fYmF0Y2hlcyA9IGJhdGNoZXM7XG4gICAgfSk7XG4gIH1cblxufVxuLy8gPDwgaHR0cC1nZXQtY29tcG9uZW50XG4iXX0=
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
            .get('https://jsonplaceholder.typicode.com/posts?userId=1');
    };
    BatchesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BatchesService);
    return BatchesService;
}());
exports.BatchesService = BatchesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0Y2hlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmF0Y2hlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQU8vRDtJQUVJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUVsQyw2QkFBSSxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSTthQUNYLEdBQUcsQ0FBVSxxREFBcUQsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFQUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR2lCLGlCQUFVO09BRjNCLGNBQWMsQ0FRMUI7SUFBRCxxQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmF0Y2ggfSBmcm9tIFwiLi9iYXRjaC5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmF0Y2hlc1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIHB1YmxpYyBsb2FkKCk6IE9ic2VydmFibGU8QmF0Y2hbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAuZ2V0PEJhdGNoW10+KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHM/dXNlcklkPTEnKTtcbiAgICB9XG59Il19
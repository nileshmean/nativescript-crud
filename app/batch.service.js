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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0Y2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhdGNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBTy9EO0lBRUksd0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRWxDLDZCQUFJLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ1gsR0FBRyxDQUFVLHFEQUFxRCxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQVBRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7T0FGM0IsY0FBYyxDQVExQjtJQUFELHFCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXRjaCB9IGZyb20gXCIuL2JhdGNoLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXRjaGVzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgcHVibGljIGxvYWQoKTogT2JzZXJ2YWJsZTxCYXRjaFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5nZXQ8QmF0Y2hbXT4oJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cz91c2VySWQ9MScpO1xuICAgIH1cbn0iXX0=
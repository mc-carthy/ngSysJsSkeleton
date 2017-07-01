"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var socket_service_1 = require("./../shared/socket.service");
var HomeComponent = (function () {
    function HomeComponent(socketService) {
        this.socketService = socketService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.emit('event1', {
            msg: 'Client to server, can you hear me server?'
        });
        this.socketService.on('event2', function (data) {
            console.log(data.msg);
            _this.socketService.emit('event3', {
                msg: 'Yes, its working for me!!'
            });
        });
        this.socketService.on('event4', function (data) {
            console.log(data.msg);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.template.html',
        styleUrls: [
            'home.component.css'
        ]
    }),
    __metadata("design:paramtypes", [socket_service_1.SocketService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
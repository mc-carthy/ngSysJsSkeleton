import { Component, OnInit } from '@angular/core';
import { SocketService } from './../shared/socket.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.template.html',
    styleUrls: [
        'home.component.css'
    ]
})

export class HomeComponent implements OnInit {

    constructor(
        private socketService: SocketService
    ) {}

    ngOnInit()
    {
        this.socketService.emit('event1', {
            msg: 'Client to server, can you hear me server?'
        });
        this.socketService.on('event2', (data: any) => {
            console.log(data.msg);
            this.socketService.emit('event3', {
                msg: 'Yes, its working for me!!'
            });
        });
        this.socketService.on('event4', (data: any) => {
            console.log(data.msg);
        });
    }

}

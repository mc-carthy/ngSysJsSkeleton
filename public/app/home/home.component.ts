import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
    moduleId: module.id,
    templateUrl: 'home.template.html',
    styleUrls: [
        'home.component.css'
    ]
})

export class HomeComponent implements OnInit {

    socket: SocketIOClient.Socket;

    constructor()
    {
        this.socket = io.connect();
    }

    ngOnInit()
    {
        this.socket.emit('event1', {
            msg: 'Client to server, can you hear me server?'
        });
        this.socket.on('event2', (data: any) => {
            console.log(data.msg);
            this.socket.emit('event3', {
                msg: 'Yes, its working for me!!'
            });
        });
        this.socket.on('event4', (data: any) => {
            console.log(data.msg);
        });
    }

}

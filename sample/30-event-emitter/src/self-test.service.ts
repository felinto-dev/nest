import { Injectable, OnModuleInit } from "@nestjs/common";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class SelfTest implements OnModuleInit  {
	constructor(private eventEmitter: EventEmitter2) { }

	onModuleInit() {
		console.log('trigger send message...')
	  this.sendMessage()
	}

	async sendMessage() {
		this.eventEmitter.emit('message')
	}
	
	@OnEvent('message')
	processMessage() {
		console.log('message received!')
	}
}
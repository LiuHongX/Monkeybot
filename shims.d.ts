// Auto-generated. Do not edit.



    //% color=50 weight=19
    //% icon="\uf1eb"
namespace MonkeybotIR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="当|%btn|按钮按下"
    export function onPressEvent(btn: RemoteButton, body: () => void): void{
		MonkeybotIR_C.onPressEvent(btn,body);
	}

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="连接遥控接收到引脚%pin"
    export function init(pin: Pins): void{
		MonkeybotIR_C.init(pin);
	}
}

// Auto-generated. Do not edit. Really.

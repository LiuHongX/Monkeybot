/*
Copyright (C): 2010-2019, Shenzhen Yahboom Tech
modified from liusen
load dependency
"mbit": "file:../pxt-mbit"
*/

//% color="#87CEEB" weight=4 icon="\uf1b6"
namespace monkeybot_小车类 {
	export enum rgbColor {
        //% blockId="Red" block="红色"
        Red,
        //% blockId="Yellow" block="黄色"
        Yellow,
        //% blockId="Green" block="绿色"
        Green,
        //% blockId="Cyan" block="青色"
        Cyan,
        //% blockId="Blue" block="蓝色"
        Blue,
        //% blockId="Pinkish" block="紫"
        Pinkish,
        //% blockId="White" block="白色"
        White

    }
	
	export enum musicItem {

		dadadum = 0,
		entertainer,
		prelude,
		ode,
		nyan,
		ringtone,
		funk,
		blues,

		birthday,
		wedding,
		funereal,
		punchline,
		baddy,
		chase,
		ba_ding,
		wawawawaa,
		jump_up,
		jump_down,
		power_up,
		power_down
	}
	
	//% blockId=monkeybot_car_reset block="小车复位"
    //% weight=100
    export function CarReset(): void {
        let rgbLight: monkeybot_RGB灯.Strip = null
		basic.showIcon(IconNames.Heart)
		monkeybot_显示类.MatrixClear()
		monkeybot_电机类.RGB_Car_Big2(monkeybot_电机类.enColor.OFF)
		monkeybot_电机类.Servo_Car(monkeybot_电机类.enServo.S1, 85)
		monkeybot_电机类.MotorStopAll()
		MonkeybotIR.init(Pins.P8)
		rgbLight= monkeybot_RGB灯.create(DigitalPin.P16, 12, monkeybot_RGB灯.NeoPixelMode.RGB)
		rgbLight.clear()
    }
	
	//% blockId=monkeybot_rgb_light block="大灯开启 %value"
    //% weight=99
	export function RGB_Light(value: rgbColor): void {

        switch (value) {
            case rgbColor.Red: {
                monkeybot_电机类.RGB_Car_Big2(monkeybot_电机类.enColor.Red)
                break;
            }
            case rgbColor.Green: {
                monkeybot_电机类.RGB_Car_Big2(monkeybot_电机类.enColor.Green)
                break;
            }
            case rgbColor.Blue: {
                monkeybot_电机类.RGB_Car_Big2(monkeybot_电机类.enColor.Blue)
                break;
            }
            case rgbColor.White: {
                monkeybot_电机类.RGB_Car_Big2(monkeybot_电机类.enColor.White)
                break;
            }
            case rgbColor.Cyan: {
                monkeybot_电机类.RGB_Car_Big2(monkeybot_电机类.enColor.Cyan)
                break;
            }
            case rgbColor.Pinkish: {
                monkeybot_电机类.RGB_Car_Big2(monkeybot_电机类.enColor.Pinkish)
                break;
            }
            case rgbColor.Yellow: {
                monkeybot_电机类.RGB_Car_Big2(monkeybot_电机类.enColor.Yellow)
                break;
            }
        }
    }
	
	//% blockId=monkeybot_rgb_light_close block="大灯关闭"
    //% weight=98
	export function RGB_Light_Close(): void {
		monkeybot_电机类.RGB_Car_Big2(monkeybot_电机类.enColor.OFF)
	}
	
	//% blockId=monkeybot_led_light block="灯带打开 %value"
    //% weight=97
	export function LED_Light(value: monkeybot_RGB灯.NeoPixelColors): void {
		let ledLight: monkeybot_RGB灯.Strip = null
		ledLight= monkeybot_RGB灯.create(DigitalPin.P16, 12, monkeybot_RGB灯.NeoPixelMode.RGB)
		ledLight.clear()
		ledLight.setBrightness(50)
        ledLight.showColor(monkeybot_RGB灯.colors(value))
		ledLight.show()
    }
	
	//% blockId=monkeybot_led_light_rainbow block="灯带打开（彩虹灯）"
    //% weight=96
	export function LED_Light_Rainbow(): void {
		let ledLight: monkeybot_RGB灯.Strip = null
		ledLight= monkeybot_RGB灯.create(DigitalPin.P16, 12, monkeybot_RGB灯.NeoPixelMode.RGB)
		ledLight.clear()
		ledLight.setBrightness(50)
        ledLight.showRainbow(1, 360)
		ledLight.show()
    }
	
	//% blockId=monkeybot_led_light_close block="灯带关闭"
    //% weight=95
	export function LED_Light_Close(): void {
		let ledLight: monkeybot_RGB灯.Strip = null
		ledLight= monkeybot_RGB灯.create(DigitalPin.P16, 12, monkeybot_RGB灯.NeoPixelMode.RGB)
		ledLight.clear()
		ledLight.show()
    }
	
	
	
	
	
	
	
	//% blockId=monkeybot_music_play block="小车播放音乐 %index"
    //% weight=90
	export function Music_Play(index: musicItem): void {
		switch (index) {
			case musicItem.dadadum: music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once); break;
			case musicItem.birthday: music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once); break;
			case musicItem.entertainer: music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once); break;
			case musicItem.prelude: music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once); break;
			case musicItem.ode: music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once); break;
			case musicItem.nyan: music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once); break;
			case musicItem.ringtone: music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once); break;
			case musicItem.funk: music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once); break;
			case musicItem.blues: music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once); break;
			case musicItem.wedding: music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once); break;
			case musicItem.funereal: music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once); break;
			case musicItem.punchline: music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once); break;
			case musicItem.baddy: music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once); break;
			case musicItem.chase: music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once); break;
			case musicItem.ba_ding: music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once); break;
			case musicItem.wawawawaa: music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once); break;
			case musicItem.jump_up: music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once); break;
			case musicItem.jump_down: music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once); break;
			case musicItem.power_up: music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once); break;
			case musicItem.power_down: music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once); break;
		}
	}
	
	
	
}

//% color="#C814B8" weight=25 icon="\uf1d4"
namespace monkeybot_显示类 {
	const HT16K33_ADDRESS = 0x70
    const HT16K33_BLINK_CMD = 0x80
    const HT16K33_BLINK_DISPLAYON = 0x01
    const HT16K33_BLINK_OFF = 0
    const HT16K33_BLINK_2HZ = 1
    const HT16K33_BLINK_1HZ = 2
    const HT16K33_BLINK_HALFHZ = 3
    const HT16K33_CMD_BRIGHTNESS = 0xE0
	
	let initializedMatrix = false
    let matBuf = pins.createBuffer(17);
	
	
	function i2ccmd(addr: number, value: number) {
        let buf = pins.createBuffer(1)
        buf[0] = value
        pins.i2cWriteBuffer(addr, buf)
    }
	
	function matrixInit() {
        i2ccmd(HT16K33_ADDRESS, 0x21);// turn on oscillator
        i2ccmd(HT16K33_ADDRESS, HT16K33_BLINK_CMD | HT16K33_BLINK_DISPLAYON | (0 << 1));
        i2ccmd(HT16K33_ADDRESS, HT16K33_CMD_BRIGHTNESS | 0xF);
    }

    function matrixShow() {
        matBuf[0] = 0x00;
        pins.i2cWriteBuffer(HT16K33_ADDRESS, matBuf);
    }
	
	//% blockId=monkeybot_matrix_draw block="Matrix Draw|X %x|Y %y"
    //% weight=69
    export function MatrixDraw(x: number, y: number): void {
        if (!initializedMatrix) {
            matrixInit();
            initializedMatrix = true;
        }
        let idx = y * 2 + x / 8;
        matBuf[idx + 1] |= (1 << (x % 8));
        matrixShow();
    }

	

    //% blockId=monkeybot_matrix_clear block="Matrix Clear"
    //% weight=65
    //% blockGap=50
    export function MatrixClear(): void {
        if (!initializedMatrix) {
            matrixInit();
            initializedMatrix = true;
        }
        for (let i = 0; i < 16; i++) {
            matBuf[i + 1] = 0;
        }
        matrixShow();
    }
}


//% color="#0fbc11" weight=23 icon="\uf11c"
namespace monkeybot_输入类 {

    export enum enRocker {
        //% blockId="Nostate" block="无"
        Nostate = 0,
        //% blockId="Up" block="上"
        Up,
        //% blockId="Down" block="下"
        Down,
        //% blockId="Left" block="左"
        Left,
        //% blockId="Right" block="右"
        Right,
        //% blockId="Press" block="按下"
        Press
    }

    export enum enTouch {
        //% blockId="NoTouch" block="未触摸"
        NoTouch = 0,
        //% blockId="Touch" block="触摸"
        Touch = 1
    }
    export enum enButton {
        //% blockId="Press" block="按下"
        Press = 0,
        //% blockId="Realse" block="松开"
        Realse = 1
    }

	//% blockId=monkeybot_ultrasonic_car block="ultrasonic return distance(cm)"
    //% color="#0fbc11"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Ultrasonic_Car(): number {

        // send pulse
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P14, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P14, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P14, 0);

        // read pulse
        let d = pins.pulseIn(DigitalPin.P15, PulseValue.High, 43200);
        return d / 58;
    }
	//% blockId=monkeybot_ultrasonic block="Ultrasonic|Trig %Trig|Echo %Echo"
    //% color="#0fbc11"
    //% weight=99
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Ultrasonic(Trig: DigitalPin, Echo: DigitalPin): number {

        // send pulse
        pins.setPull(Trig, PinPullMode.PullNone);
        pins.digitalWritePin(Trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(Trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(Trig, 0);

        // read pulse
        let d = pins.pulseIn(Echo, PulseValue.High, 23200);
        return d / 58;
    }
	
	
    //% blockId=monkeybot_TouchPad block="TouchPad|pin %pin|value %value"
    //% weight=98
    //% blockGap=10
    //% color="#0fbc11"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function TouchPad(pin: DigitalPin, value: enTouch): boolean {

        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }

    }
    //% blockId=monkeybot_Rocker block="Rocker|VRX %pin1|VRY %pin2|SW %pin3|value %value"
    //% weight=98
    //% blockGap=10
    //% color="#0fbc11"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Rocker(pin1: AnalogPin, pin2: AnalogPin, pin3: DigitalPin, value: enRocker): boolean {

        pins.setPull(pin3, PinPullMode.PullUp);
        let x = pins.analogReadPin(pin1);
        let y = pins.analogReadPin(pin2);
        let z = pins.digitalReadPin(pin3);
        let now_state = enRocker.Nostate;

        if (x < 100) // 上
        {

            now_state = enRocker.Up;

        }
        else if (x > 700) //
        {

            now_state = enRocker.Down;
        }
        else  // 左右
        {
            if (y < 100) //右
            {
                now_state = enRocker.Right;
            }
            else if (y > 700) //左
            {
                now_state = enRocker.Left;
            }
        }
        if (z == 0)
            now_state = enRocker.Press;
        if (now_state == value)
            return true;
        else
            return false;

    }

    //% blockId=monkeybot_Button block="Button|pin %pin|value %value"
    //% weight=98
    //% blockGap=10
    //% color="#0fbc11"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function Button(pin: DigitalPin, value: enButton): boolean {

        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }

    }  
	
}


//% color="#006400" weight=20 icon="\uf1b9"
namespace monkeybot_电机类 {

    const PCA9685_ADD = 0x40
    const MODE1 = 0x00
    const MODE2 = 0x01
    const SUBADR1 = 0x02
    const SUBADR2 = 0x03
    const SUBADR3 = 0x04

    const LED0_ON_L = 0x06
    const LED0_ON_H = 0x07
    const LED0_OFF_L = 0x08
    const LED0_OFF_H = 0x09

    const ALL_LED_ON_L = 0xFA
    const ALL_LED_ON_H = 0xFB
    const ALL_LED_OFF_L = 0xFC
    const ALL_LED_OFF_H = 0xFD

    const PRESCALE = 0xFE
	
	const STP_CHA_L = 2047
    const STP_CHA_H = 4095

    const STP_CHB_L = 1
    const STP_CHB_H = 2047

    const STP_CHC_L = 1023
    const STP_CHC_H = 3071

    const STP_CHD_L = 3071
    const STP_CHD_H = 1023

    let initialized = false
    let yahStrip: monkeybot_RGB灯.Strip;

    export enum enColor {

        //% blockId="OFF" block="灭"
        OFF = 0,
        //% blockId="Red" block="红色"
        Red,
        //% blockId="Green" block="绿色"
        Green,
        //% blockId="Blue" block="蓝色"
        Blue,
        //% blockId="White" block="白色"
        White,
        //% blockId="Cyan" block="青色"
        Cyan,
        //% blockId="Pinkish" block="品红"
        Pinkish,
        //% blockId="Yellow" block="黄色"
        Yellow,

    }
    export enum enMusic {

        dadadum = 0,
        entertainer,
        prelude,
        ode,
        nyan,
        ringtone,
        funk,
        blues,

        birthday,
        wedding,
        funereal,
        punchline,
        baddy,
        chase,
        ba_ding,
        wawawawaa,
        jump_up,
        jump_down,
        power_up,
        power_down
    }
    export enum enPos {

        //% blockId="LeftState" block="左边状态"
        LeftState = 0,
        //% blockId="RightState" block="右边状态"
        RightState = 1
    }

    export enum enLineState {
        //% blockId="White" block="白线"
        White = 0,
        //% blockId="Black" block="黑线"
        Black = 1

    }
    
    export enum enAvoidState {
        //% blockId="OBSTACLE" block="有障碍物"
        OBSTACLE = 0,
        //% blockId="NOOBSTACLE" block="无障碍物"
        NOOBSTACLE = 1

    }

    
    export enum enServo {
        
        S1 = 1,
        S2,
        S3
    }
	
	export enum Steppers {
        M1 = 0x1,
        M2 = 0x2
    }
    
	
	export enum Motors {
        M1A = 0x1,
        M1B = 0x2,
        M2A = 0x3,
        M2B = 0x4
    }
	
	export enum Turns {
        //% blockId="T1B4" block="1/4"
        T1B4 = 90,
        //% blockId="T1B2" block="1/2"
        T1B2 = 180,
        //% blockId="T1B0" block="1"
        T1B0 = 360,
        //% blockId="T2B0" block="2"
        T2B0 = 720,
        //% blockId="T3B0" block="3"
        T3B0 = 1080,
        //% blockId="T4B0" block="4"
        T4B0 = 1440,
        //% blockId="T5B0" block="5"
        T5B0 = 1800
    }

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2ccmd(addr: number, value: number) {
        let buf = pins.createBuffer(1)
        buf[0] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    function initPCA9685(): void {
        i2cwrite(PCA9685_ADD, MODE1, 0x00)
        setFreq(50);
        initialized = true
    }

    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        let oldmode = i2cread(PCA9685_ADD, MODE1);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(PCA9685_ADD, MODE1, newmode); // go to sleep
        i2cwrite(PCA9685_ADD, PRESCALE, prescale); // set the prescaler
        i2cwrite(PCA9685_ADD, MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(PCA9685_ADD, MODE1, oldmode | 0xa1);
    }
	
	function setStepper(index: number, dir: boolean): void {
        if (index == 1) {
            if (dir) {
                setPwm(0, STP_CHA_L, STP_CHA_H);
                setPwm(2, STP_CHB_L, STP_CHB_H);
                setPwm(1, STP_CHC_L, STP_CHC_H);
                setPwm(3, STP_CHD_L, STP_CHD_H);
            } else {
                setPwm(3, STP_CHA_L, STP_CHA_H);
                setPwm(1, STP_CHB_L, STP_CHB_H);
                setPwm(2, STP_CHC_L, STP_CHC_H);
                setPwm(0, STP_CHD_L, STP_CHD_H);
            }
        } else {
            if (dir) {
                setPwm(4, STP_CHA_L, STP_CHA_H);
                setPwm(6, STP_CHB_L, STP_CHB_H);
                setPwm(5, STP_CHC_L, STP_CHC_H);
                setPwm(7, STP_CHD_L, STP_CHD_H);
            } else {
                setPwm(7, STP_CHA_L, STP_CHA_H);
                setPwm(5, STP_CHB_L, STP_CHB_H);
                setPwm(6, STP_CHC_L, STP_CHC_H);
                setPwm(4, STP_CHD_L, STP_CHD_H);
            }
        }
    }

    function setPwm(channel: number, on: number, off: number): void {
        if (channel < 0 || channel > 15)
            return;
        if (!initialized) {
            initPCA9685();
        }
        let buf = pins.createBuffer(5);
        buf[0] = LED0_ON_L + 4 * channel;
        buf[1] = on & 0xff;
        buf[2] = (on >> 8) & 0xff;
        buf[3] = off & 0xff;
        buf[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADD, buf);
    }


    function Car_run(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }

        setPwm(12, 0, speed1);
        setPwm(13, 0, 0);

        setPwm(15, 0, speed2);
        setPwm(14, 0, 0);
        //pins.digitalWritePin(DigitalPin.P16, 1);
       // pins.analogWritePin(AnalogPin.P1, 1023-speed); //速度控制

       // pins.analogWritePin(AnalogPin.P0, speed);//速度控制
       // pins.digitalWritePin(DigitalPin.P8, 0);
    }

    function Car_back(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }

        setPwm(12, 0, 0);
        setPwm(13, 0, speed1);

        setPwm(15, 0, 0);
        setPwm(14, 0, speed2);

        //pins.digitalWritePin(DigitalPin.P16, 0);
        //pins.analogWritePin(AnalogPin.P1, speed); //速度控制

        //pins.analogWritePin(AnalogPin.P0, 1023 - speed);//速度控制
        //pins.digitalWritePin(DigitalPin.P8, 1);
    }

    function Car_left(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }
        
        setPwm(12, 0, speed1);
        setPwm(13, 0, 0);

        setPwm(15, 0, speed2);
        setPwm(14, 0, 0);

        //pins.analogWritePin(AnalogPin.P0, speed);
        //pins.digitalWritePin(DigitalPin.P8, 0);

        //pins.digitalWritePin(DigitalPin.P16, 0);
        //pins.digitalWritePin(DigitalPin.P1, 0);
    }

    function Car_right(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }
        
        setPwm(12, 0, speed1);
        setPwm(13, 0, 0);

        setPwm(15, 0, speed2);
        setPwm(14, 0, 0);
        //pins.digitalWritePin(DigitalPin.P0, 0);
        //pins.digitalWritePin(DigitalPin.P8, 0);

        //pins.digitalWritePin(DigitalPin.P16, 1);
       // pins.analogWritePin(AnalogPin.P1, 1023 - speed);
    }

    function Car_stop() {
       
        setPwm(12, 0, 0);
        setPwm(13, 0, 0);

        setPwm(15, 0, 0);
        setPwm(14, 0, 0);
        //pins.digitalWritePin(DigitalPin.P0, 0);
        //pins.digitalWritePin(DigitalPin.P8, 0);
        //pins.digitalWritePin(DigitalPin.P16, 0);
        //pins.digitalWritePin(DigitalPin.P1, 0);
    }

    function Car_spinleft(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }        
        
        setPwm(12, 0, 0);
        setPwm(13, 0, speed1);

        setPwm(15, 0, speed2);
        setPwm(14, 0, 0);

        //pins.analogWritePin(AnalogPin.P0, speed);
        //pins.digitalWritePin(DigitalPin.P8, 0);

        //pins.digitalWritePin(DigitalPin.P16, 0);
        //pins.analogWritePin(AnalogPin.P1, speed);
    } 

    function Car_spinright(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }    
            
        setPwm(12, 0, speed1);
        setPwm(13, 0, 0);

        setPwm(15, 0, 0);
        setPwm(14, 0, speed2);
        //pins.analogWritePin(AnalogPin.P0, 1023-speed);
        //pins.digitalWritePin(DigitalPin.P8, 1);

        //pins.digitalWritePin(DigitalPin.P16, 1);
        //pins.analogWritePin(AnalogPin.P1, 1023-speed);

    }
	
	function stopMotor(index: number) {
        setPwm((index - 1) * 2, 0, 0);
        setPwm((index - 1) * 2 + 1, 0, 0);
    }

    /**
     * *****************************************************************
     * @param index
     */
    //% blockId=monkeybot_RGB_Car_Big2 block="RGB_Car_Big2|value %value"
    //% weight=101
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function RGB_Car_Big2(value: enColor): void {

        switch (value) {
            case enColor.OFF: {
                setPwm(13, 0, 0);
                setPwm(14, 0, 0);
                setPwm(15, 0, 0);
                break;
            }
            case enColor.Red: {
                setPwm(13, 0, 4095);
                setPwm(14, 0, 0);
                setPwm(15, 0, 0);
                break;
            }
            case enColor.Green: {
                setPwm(13, 0, 0);
                setPwm(14, 0, 4095);
                setPwm(15, 0, 0);
                break;
            }
            case enColor.Blue: {
                setPwm(13, 0, 0);
                setPwm(14, 0, 0);
                setPwm(15, 0, 4095);
                break;
            }
            case enColor.White: {
                setPwm(13, 0, 4095);
                setPwm(14, 0, 4095);
                setPwm(15, 0, 4095);
                break;
            }
            case enColor.Cyan: {
                setPwm(13, 0, 0);
                setPwm(14, 0, 4095);
                setPwm(15, 0, 4095);
                break;
            }
            case enColor.Pinkish: {
                setPwm(13, 0, 4095);
                setPwm(14, 0, 0);
                setPwm(15, 0, 4095);
                break;
            }
            case enColor.Yellow: {
                setPwm(13, 0, 4095);
                setPwm(14, 0, 4095);
                setPwm(15, 0, 0);
                break;
            }
        }
    }
    //% blockId=monkeybot_RGB_Car_Big block="RGB_Car_Big|value1 %value1|value2 %value2|value3 %value3"
    //% weight=100
    //% blockGap=10
    //% color="#006400"
    //% value1.min=0 value1.max=255 value2.min=0 value2.max=255 value3.min=0 value3.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function RGB_Car_Big(value1: number, value2: number, value3: number): void {

        let R = value1 * 16;
        let G = value2 * 16;
        let B = value3 * 16;

        if (R > 4096)
            R = 4095;
        if (G > 4096)
            G = 4095;
        if (B > 4096)
            B = 4095;

        setPwm(13, 0, R);
        setPwm(14, 0, G);
        setPwm(15, 0, B);

    }



    //% blockId=monkeybot_Music_Car block="Music_Car|%index"
    //% weight=97
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Music_Car(index: enMusic): void {
        switch (index) {
            case enMusic.dadadum: music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once); break;
            case enMusic.birthday: music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once); break;
            case enMusic.entertainer: music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once); break;
            case enMusic.prelude: music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once); break;
            case enMusic.ode: music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once); break;
            case enMusic.nyan: music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once); break;
            case enMusic.ringtone: music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once); break;
            case enMusic.funk: music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once); break;
            case enMusic.blues: music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once); break;
            case enMusic.wedding: music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once); break;
            case enMusic.funereal: music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once); break;
            case enMusic.punchline: music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once); break;
            case enMusic.baddy: music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once); break;
            case enMusic.chase: music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once); break;
            case enMusic.ba_ding: music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once); break;
            case enMusic.wawawawaa: music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once); break;
            case enMusic.jump_up: music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once); break;
            case enMusic.jump_down: music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once); break;
            case enMusic.power_up: music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once); break;
            case enMusic.power_down: music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once); break;
        }
    }
    //% blockId=monkeybot_Servo_Car block="Servo_Car|num %num|value %value"
    //% weight=96
    //% blockGap=10
    //% color="#006400"
    //% num.min=1 num.max=3 value.min=0 value.max=180
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=9
    export function Servo_Car(num: enServo, value: number): void {
		if (!initialized) {
            initPCA9685()
        }
        // 50hz: 20,000 us
        let us = (value * 1800 / 180 + 600); // 0.6 ~ 2.4
        let pwm = us * 4096 / 20000;
        setPwm(num + 7, 0, pwm);

    }

    //% blockId=monkeybot_motor_run block="Motor|%index|speed %speed"
    //% weight=85
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRun(index: Motors, speed: number): void {
        if (!initialized) {
            initPCA9685()
        }
        speed = speed * 16; // map 255 to 4096
        if (speed >= 4096) {
            speed = 4095
        }
        if (speed <= -4096) {
            speed = -4095
        }
        if (index > 4 || index <= 0)
            return
        let pp = (index - 1) * 2
        let pn = (index - 1) * 2 + 1
        if (speed >= 0) {
            setPwm(pp, 0, speed)
            setPwm(pn, 0, 0)
        } else {
            setPwm(pp, 0, 0)
            setPwm(pn, 0, -speed)
        }
    }


	/**
	 * Execute two motors at the same time
	 * @param motor1 First Motor; eg: M1A, M1B
	 * @param speed1 [-255-255] speed of motor; eg: 150, -150
	 * @param motor2 Second Motor; eg: M2A, M2B
	 * @param speed2 [-255-255] speed of motor; eg: 150, -150
	*/
    //% blockId=monkeybot_motor_dual block="Motor|%motor1|speed %speed1|%motor2|speed %speed2"
    //% weight=84
    //% speed1.min=-255 speed1.max=255
    //% speed2.min=-255 speed2.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRunDual(motor1: Motors, speed1: number, motor2: Motors, speed2: number): void {
        MotorRun(motor1, speed1);
        MotorRun(motor2, speed2);
    }

	/**
	 * Execute single motors with delay
	 * @param index Motor Index; eg: M1A, M1B, M2A, M2B
	 * @param speed [-255-255] speed of motor; eg: 150, -150
	 * @param delay seconde delay to stop; eg: 1
	*/
    //% blockId=monkeybot_motor_rundelay block="Motor|%index|speed %speed|delay %delay|s"
    //% weight=81
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRunDelay(index: Motors, speed: number, delay: number): void {
        MotorRun(index, speed);
        basic.pause(delay * 1000);
        MotorRun(index, 0);
    }



    //% blockId=monkeybot_stop block="Motor Stop|%index|"
    //% weight=80
    export function MotorStop(index: Motors): void {
        MotorRun(index, 0);
    }

    //% blockId=monkeybot_stop_all block="Motor Stop All"
    //% weight=79
    //% blockGap=50
    export function MotorStopAll(): void {
        for (let idx = 1; idx <= 4; idx++) {
            stopMotor(idx);
        }
    }
	
	//% blockId=monkeybot_stepper_degree block="Stepper 28BYJ-48|%index|degree %degree"
    //% weight=78
    export function StepperDegree(index: Steppers, degree: number): void {
        if (!initialized) {
            initPCA9685()
        }
        setStepper(index, degree > 0);
        degree = Math.abs(degree);
        basic.pause(10240 * degree / 360);
        MotorStopAll()
    }


    //% blockId=monkeybot_stepper_turn block="Stepper 28BYJ-48|%index|turn %turn"
    //% weight=77
    export function StepperTurn(index: Steppers, turn: Turns): void {
        let degree = turn;
        StepperDegree(index, degree);
    }

    //% blockId=monkeybot_stepper_dual block="Dual Stepper(Degree) |M1 %degree1| M2 %degree2"
    //% weight=76
    export function StepperDual(degree1: number, degree2: number): void {
        if (!initialized) {
            initPCA9685()
        }
        setStepper(1, degree1 > 0);
        setStepper(2, degree2 > 0);
        degree1 = Math.abs(degree1);
        degree2 = Math.abs(degree2);
        basic.pause(10240 * Math.min(degree1, degree2) / 360);
        if (degree1 > degree2) {
            stopMotor(3); stopMotor(4);
            basic.pause(10240 * (degree1 - degree2) / 360);
        } else {
            stopMotor(1); stopMotor(2);
            basic.pause(10240 * (degree2 - degree1) / 360);
        }

        MotorStopAll()
    }
	
	/**
	 * Stepper Car move forward
	 * @param distance Distance to move in cm; eg: 10, 20
	 * @param diameter diameter of wheel in mm; eg: 48
	*/
	//% blockId=monkeybot_stpcar_move block="Car Forward|Diameter(cm) %distance|Wheel Diameter(mm) %diameter"
    //% weight=75
    export function StpCarMove(distance: number, diameter: number): void {
		if (!initialized) {
            initPCA9685()
        }
		let delay = 10240 * 10 * distance / 3 / diameter; // use 3 instead of pi
		setStepper(1, delay > 0);
        setStepper(2, delay > 0);
		delay = Math.abs(delay);
		basic.pause(delay);
        MotorStopAll()	
    }
	
	/**
	 * Stepper Car turn by degree
	 * @param turn Degree to turn; eg: 90, 180, 360
	 * @param diameter diameter of wheel in mm; eg: 48
	 * @param track track width of car; eg: 125
	*/
	//% blockId=monkeybot_stpcar_turn block="Car Turn|Degree %turn|Wheel Diameter(mm) %diameter|Track(mm) %track"
    //% weight=74
	//% blockGap=50
    export function StpCarTurn(turn: number, diameter: number, track: number): void {
		if (!initialized) {
            initPCA9685()
        }
		let delay = 10240 * turn * track / 360 / diameter;
		setStepper(1, delay < 0);
        setStepper(2, delay > 0);
		delay = Math.abs(delay);
		basic.pause(delay);
        MotorStopAll()
    }
	
}


/**
 * Functions to operate monkeybot_RGB灯 strips.
 */
//% weight=5 color=#2699BF icon="\uf110"
namespace monkeybot_RGB灯 {
	/**
	 * Well known colors for a monkeybot_RGB灯 strip
	 */
	export enum NeoPixelColors {
		//% block=red
		Red = 0xFF0000,
		//% block=orange
		Orange = 0xFFA500,
		//% block=yellow
		Yellow = 0xFFFF00,
		//% block=green
		Green = 0x00FF00,
		//% block=blue
		Blue = 0x0000FF,
		//% block=indigo
		Indigo = 0x4b0082,
		//% block=violet
		Violet = 0x8a2be2,
		//% block=purple
		Purple = 0xFF00FF,
		//% block=white
		White = 0xFFFFFF
	}

	/**
	 * Different modes for RGB or RGB+W monkeybot_RGB灯 strips
	 */
	export enum NeoPixelMode {
		//% block="RGB (GRB format)"
		RGB = 0,
		//% block="RGB+W"
		RGBW = 1,
		//% block="RGB (RGB format)"
		RGB_RGB = 2
	}
    //% shim=sendBufferAsm
    //% parts="monkeybot_RGB灯"
    function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }

    /**
     * A monkeybot_RGB灯 strip
     */
    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;

        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b). 
         * @param rgb RGB color of the LED
         */
        //% blockId="monkeybot_set_strip_color" block="%strip|show color %rgb" 
        //% weight=85 blockGap=8
        //% parts="monkeybot_RGB灯"
        showColor(rgb: number) {
            this.setAllRGB(rgb);
            this.show();
        }

        /**
         * Shows a rainbow pattern on all LEDs. 
         * @param startHue the start hue value for the rainbow, eg: 1
         * @param endHue the end hue value for the rainbow, eg: 360
         */
        //% blockId="monkeybot_set_strip_rainbow" block="%strip|show rainbow from %startHue|to %endHue" 
        //% weight=85 blockGap=8
        //% parts="monkeybot_RGB灯"
        showRainbow(startHue: number = 1, endHue: number = 360) {
            let start = monkeybot_RGB灯.hsl(startHue, 100, 50);
            let end = monkeybot_RGB灯.hsl(endHue, 100, 50);
            let colors = monkeybot_RGB灯.interpolateHSL(start, end, this._length, HueInterpolationDirection.Clockwise);
            for (let i = 0; i < colors.length; i++) {
                let hsl = colors[i];
                let rgb = hsl.toRGB();
                this.setPixelColor(i, rgb)
            }
            this.show();
        }

        /**
         * Displays a vertical bar graph based on the `value` and `high` value.
         * If `high` is 0, the chart gets adjusted automatically.
         * @param value current value to plot
         * @param high maximum value, eg: 255
         */
        //% weight=84
        //% blockId=monkeybot_show_bar_graph block="%strip|show bar graph of %value |up to %high" icon="\uf080" blockExternalInputs=true
        //% parts="monkeybot_RGB灯"
        showBarGraph(value: number, high: number): void {
            if (high <= 0) {
                this.clear();
                this.setPixelColor(0, NeoPixelColors.Yellow);
                this.show();
                return;
            }

            value = Math.abs(value);
            const n = this._length;
            const n1 = n - 1;
            let v = (value * n) / high;
            if (v == 0) {
                this.setPixelColor(0, 0x666600);
                for (let i = 1; i < n; ++i)
                    this.setPixelColor(i, 0);
            } else {
                for (let i = 0; i < n; ++i) {
                    if (i <= v) {
                        let b = i * 255 / n1;
                        this.setPixelColor(i, monkeybot_RGB灯.rgb(b, 0, 255 - b));
                    }
                    else this.setPixelColor(i, 0);
                }
            }
            this.show();
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b). 
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the monkeybot_RGB灯 in the strip
         * @param rgb RGB color of the LED
         */
	//% blockId="monkeybot_set_pixel_color" block="%strip|set pixel color at %pixeloffset|to %rgb" 
        //% blockGap=8
        //% weight=80
        //% parts="monkeybot_RGB灯" advanced=true
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset, rgb);
        }

        /**
         * For NeoPixels with RGB+W LEDs, set the white LED brightness. This only works for RGB+W NeoPixels.
         * @param pixeloffset position of the LED in the strip
         * @param white brightness of the white LED
         */
        //% blockId="monkeybot_set_pixel_white" block="%strip|set pixel white LED at %pixeloffset|to %white" 
        //% blockGap=8
        //% weight=80
        //% parts="monkeybot_RGB灯" advanced=true
        setPixelWhiteLED(pixeloffset: number, white: number): void {
            if (this._mode === NeoPixelMode.RGBW) {
                this.setPixelW(pixeloffset, white);
            }
        }

        /**
         * Send all the changes to the strip.
         */
        //% blockId="monkeybot_show" block="%strip|show" blockGap=8
        //% weight=79
        //% parts="monkeybot_RGB灯"
        show() {
            sendBuffer(this.buf, this.pin);
        }

        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% blockId="monkeybot_clear" block="%strip|clear"
        //% weight=76
        //% parts="monkeybot_RGB灯"
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * Gets the number of pixels declared on the strip
         */
        //% blockId="monkeybot_length" block="%strip|length" blockGap=8
        //% weight=60 advanced=true
        length() {
            return this._length;
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% blockId="monkeybot_set_brightness" block="%strip|set brightness %brightness" blockGap=8
        //% weight=59
        //% parts="monkeybot_RGB灯" advanced=true
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Apply brightness to current colors using a quadratic easing function.
         **/
        //% blockId="monkeybot_each_brightness" block="%strip|ease brightness" blockGap=8
        //% weight=58
        //% parts="monkeybot_RGB灯" advanced=true
        easeBrightness(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const br = this.brightness;
            const buf = this.buf;
            const end = this.start + this._length;
            const mid = this._length / 2;
            for (let i = this.start; i < end; ++i) {
                const k = i - this.start;
                const ledoffset = i * stride;
                const br = k > mid ? 255 * (this._length - 1 - k) * (this._length - 1 - k) / (mid * mid) : 255 * k * k / (mid * mid);
                serial.writeLine(k + ":" + br);
                const r = (buf[ledoffset + 0] * br) >> 8; buf[ledoffset + 0] = r;
                const g = (buf[ledoffset + 1] * br) >> 8; buf[ledoffset + 1] = g;
                const b = (buf[ledoffset + 2] * br) >> 8; buf[ledoffset + 2] = b;
                if (stride == 4) {
                    const w = (buf[ledoffset + 3] * br) >> 8; buf[ledoffset + 3] = w;
                }
            }
        }

        /** 
         * Create a range of LEDs.
         * @param start offset in the LED strip to start the range
         * @param length number of LEDs in the range. eg: 4
         */
        //% weight=89
        //% blockId="monkeybot_range" block="%strip|range from %start|with %length|leds"
        //% parts="monkeybot_RGB灯"
        range(start: number, length: number): Strip {
            let strip = new Strip();
            strip.buf = this.buf;
            strip.pin = this.pin;
            strip.brightness = this.brightness;
            strip.start = this.start + Math.clamp(0, this._length - 1, start);
            strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);
            return strip;
        }

        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        //% blockId="monkeybot_shift" block="%strip|shift pixels by %offset" blockGap=8
        //% weight=40
        //% parts="monkeybot_RGB灯"
        shift(offset: number = 1): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Rotate LEDs forward.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to rotate forward, eg: 1
         */
        //% blockId="monkeybot_rotate" block="%strip|rotate pixels by %offset" blockGap=8
        //% weight=39
        //% parts="monkeybot_RGB灯"
        rotate(offset: number = 1): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Set the pin where the monkeybot_RGB灯 is connected, defaults to P0.
         */
        //% weight=10
        //% parts="monkeybot_RGB灯" advanced=true
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * Estimates the electrical current (mA) consumed by the current light configuration.
         */
        //% weight=9 blockId=monkeybot_power block="%strip|power (mA)"
        //% advanced=true
        power(): number {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const end = this.start + this._length;
            let p = 0;
            for (let i = this.start; i < end; ++i) {
                const ledoffset = i * stride;
                for (let j = 0; j < stride; ++j) {
                    p += this.buf[i + j];
                }
            }
            return this.length() / 2 /* 0.5mA per monkeybot_RGB灯 */
                + (p * 433) / 10000; /* rought approximation */
        }

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }

    /**
     * Create a new monkeybot_RGB灯 driver for `numleds` LEDs.
     * @param pin the pin where the monkeybot_RGB灯 is connected.
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     */
    //% blockId="monkeybot_create" block="monkeybot_RGB灯 at pin %pin|with %numleds|leds as %mode"
    //% weight=90 blockGap=8
    //% parts="monkeybot_RGB灯"
    //% trackArgs=0,2
    export function create(pin: DigitalPin, numleds: number, mode: NeoPixelMode): Strip {
        let strip = new Strip();
        let stride = mode === NeoPixelMode.RGBW ? 4 : 3;
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = mode;
        strip.setBrightness(255)
        strip.setPin(pin)
        return strip;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=1
    //% blockId="monkeybot_rgb" block="red %red|green %green|blue %blue"
    //% advanced=true
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */
    //% weight=2 blockGap=8
    //% blockId="monkeybot_colors" block="%color"
    //% advanced=true
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

    /**
     * A HSL (hue, saturation, luminosity) format color
     */
    export class HSL {
        h: number;
        s: number;
        l: number;
        constructor(h: number, s: number, l: number) {
            this.h = h % 360;
            this.s = Math.clamp(0, 99, s);
            this.l = Math.clamp(0, 99, l);
        }

        /**
         * Shifts the hue of a HSL color
         * @param hsl the HSL (hue, saturation, lightness) color
         * @param offset value to shift the hue channel by; hue is between 0 and 360. eg: 10
         */
        //% weight=1
        //% blockId="monkeybot_rotate_hue" block="shift %hsl| hue by %offset"
        //% advanced=true
        rotateHue(offset: number): void {
            this.h = (this.h + offset) % 360;
        }

        /**
         * Converts from an HSL (hue, saturation, luminosity) format color to an RGB (red, 
         * green, blue) format color. Input ranges h between [0,360], s between 
         * [0, 100], and l between [0, 100], and output r, g, b ranges between [0,255]
        */
        //% weight=2 blockGap=8
        //% blockId="monkeybot_hsl_to_rgb" block="%hsl| to RGB"
        //% advanced=true
        toRGB(): number {
            //reference: https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSL
            let h = this.h;
            let s = this.s;
            let l = this.l;
            let c = (((100 - Math.abs(2 * l - 100)) * s) << 8) / 10000; //chroma, [0,255]
            let h1 = h / 60;//[0,6]
            let h2 = (h - h1 * 60) * 256 / 60;//[0,255]
            let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
            let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
            let r$: number;
            let g$: number;
            let b$: number;
            if (h1 == 0) {
                r$ = c; g$ = x; b$ = 0;
            } else if (h1 == 1) {
                r$ = x; g$ = c; b$ = 0;
            } else if (h1 == 2) {
                r$ = 0; g$ = c; b$ = x;
            } else if (h1 == 3) {
                r$ = 0; g$ = x; b$ = c;
            } else if (h1 == 4) {
                r$ = x; g$ = 0; b$ = c;
            } else if (h1 == 5) {
                r$ = c; g$ = 0; b$ = x;
            }
            let m = ((l * 2 << 8) / 100 - c) / 2;
            let r = r$ + m;
            let g = g$ + m;
            let b = b$ + m;
            return packRGB(r, g, b);
        }
    }

    /**
     * Creates a HSL (hue, saturation, luminosity) color
     * @param hue value of the hue channel between 0 and 360. eg: 360
     * @param sat value of the saturation channel between 0 and 100. eg: 100
     * @param lum value of the luminosity channel between 0 and 100. eg: 50
     */
    //% weight=1
    //% blockId="monkeybot_hsl" block="hue %hue|sat %sat|lum %lum"
    //% advanced=true
    export function hsl(hue: number, sat: number, lum: number): HSL {
        return new HSL(hue, sat, lum);
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }

    /**
     * Interpolates between two HSL colors
     * @param startColor the start HSL color
     * @param endColor the end HSL color
     * @param steps the number of steps to interpolate for. Note that if steps 
     *  is 1, the color midway between the start and end color will be returned.
     * @param direction the direction around the color wheel the hue should be interpolated.
     */
    //% parts="monkeybot_RGB灯"
    //% advanced=true
    export function interpolateHSL(startColor: HSL, endColor: HSL, steps: number, direction: HueInterpolationDirection): HSL[] {
        if (steps <= 0)
            steps = 1;

        //hue
        let h1 = startColor.h;
        let h2 = endColor.h;
        let hDistCW = ((h2 + 360) - h1) % 360;
        let hStepCW = (hDistCW * 100) / steps;
        let hDistCCW = ((h1 + 360) - h2) % 360;
        let hStepCCW = -(hDistCCW * 100) / steps
        let hStep: number;
        if (direction === HueInterpolationDirection.Clockwise) {
            hStep = hStepCW;
        } else if (direction === HueInterpolationDirection.CounterClockwise) {
            hStep = hStepCCW;
        } else {
            hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
        }
        let h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

        //sat
        let s1 = startColor.s;
        let s2 = endColor.s;
        let sDist = s2 - s1;
        let sStep = sDist / steps;
        let s1_100 = s1 * 100;

        //lum
        let l1 = startColor.l;
        let l2 = endColor.l;
        let lDist = l2 - l1;
        let lStep = lDist / steps;
        let l1_100 = l1 * 100

        //interpolate
        let colors: HSL[] = [];
        if (steps === 1) {
            colors.push(hsl(h1 + hStep, s1 + sStep, l1 + lStep));
        } else {
            colors.push(startColor);
            for (let i = 1; i < steps - 1; i++) {
                let h = (h1_100 + i * hStep) / 100 + 360;
                let s = (s1_100 + i * sStep) / 100;
                let l = (l1_100 + i * lStep) / 100;
                colors.push(hsl(h, s, l));
            }
            colors.push(endColor);
        }
        return colors;
    }
}
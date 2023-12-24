class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time) throw new Error('Отсутствуют обязательные аргументы');
        if (!callback) throw new Error('Отсутствуют обязательные аргументы');

        let existAlarm = this.#findByTime(time);
        if (existAlarm !== undefined) {
            console.warn('Уже присутствует звонок на это же время');
        }

        let alarm = {
            time: time,
            callback: callback,
            canCall: true
        };

        this.alarmCollection.push(alarm);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(x => x.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
    }

    start() {
        if (this.intervalId !== null) return; // Уже запущены

        this.intervalId = setInterval(() => this.#process(), 1000);
    }

    stop() {
        clearInterval(this.intervalId);

        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

    #process() {
        const now = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(alarm => {
            if (alarm.time === now && alarm.canCall === true) {
                alarm.canCall = false;
                alarm.callback();
            }
        });
    }

    #findByTime(time) {
        return this.alarmCollection.find(x => x.time === time);
    }
}
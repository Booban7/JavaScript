// class GetTime {
//     constructor() {
//         this.initTime()
//         this.dayRef()
//         this.monthRef()
//         this.show()
//     }

//     initTime() {
//         this.d = new Date();
//         this.date = this.d.getDate();
//         // console.log(this.d);
//         // console.log(this.date);
//     }

//     dayRef() {
//         this.dayRef = new Array;
//         this.dayRef[0] = 'Sun';
//         this.dayRef[1] = 'Mon';
//         this.dayRef[2] = 'Tue';
//         this.dayRef[3] = 'Wed';
//         this.dayRef[4] = 'Thu';
//         this.dayRef[5] = 'Fri';
//         this.dayRef[6] = 'Sat';
//         this.day = this.dayRef[this.d.getDay()];
//     }

//     monthRef() {
//         this.monthRef = new Array;
//         this.monthRef[0] = '1';
//         this.monthRef[1] = '2';
//         this.monthRef[2] = '3';
//         this.monthRef[3] = '4';
//         this.monthRef[4] = '5';
//         this.monthRef[5] = '6';
//         this.monthRef[6] = '7';
//         this.monthRef[7] = '8';
//         this.monthRef[8] = '9';
//         this.monthRef[9] = '10';
//         this.monthRef[10] = '11';
//         this.monthRef[11] = '12';
//         this.month = this.monthRef[this.d.getMonth()];
//     }

//     show() {
//         this.show = (this.day + ' ' + this.date + '/' + this.month);
//         // console.log(this.show);
//     }
// }

// var getTime = new GetTime();
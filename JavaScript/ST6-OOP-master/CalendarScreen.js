class CalendarScreen extends Screen {
  constructor() {
    super();
    this.header();
    this.initTime();
    this.initDays();
    this.initMonths();
    this.initCalendar();
  }

  header() {
    let myFormHeader = document.createElement('h3');
    this.element.appendChild(myFormHeader);
    myFormHeader.innerHTML = 'Calendar';
    myFormHeader.className = 'myHeader';

    let weekHead = document.createElement('h3');
    this.element.appendChild(weekHead);
    weekHead.innerHTML = '1 Week';
    weekHead.className = 'centerHeader';
  }

  initTime() {
    this.d = new Date();
    this.date = this.d.getDate(this.d.getDate()+1);
  }

  initDays() {
    this.days = ['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'];
    this.day = this.days[this.d.getDay()];
  }

  initMonths() {
    let months = ['1', '2','3','4','5','6','7','8','9','10', '11', '12'];
    this.month = months[this.d.getMonth()];
  }

  initCalendar() {
    for (let i = 0; i < this.days.length; this.date++ , i++) {
      this.dayRef = document.createElement('div');
      this.dayRef.className = 'myDay';
      
      this.element.appendChild(this.dayRef);
      
      this.showDayAndDate = document.createElement('p');
      this.showDayAndDate.className = 'days-and-date';
      this.showDayAndDate.innerHTML = this.days[i] + '<br>' + this.date + '/' + this.month;
      this.dayRef.appendChild(this.showDayAndDate);

      this.hoursRef = document.createElement('div');
      this.hoursRef.className = 'hours-div';
      this.dayRef.appendChild(this.hoursRef);

      for (let i = 0; i < 24; i++) {
        
        this.hoursLineRef = document.createElement('hr');
        this.hoursLineRef.className = 'hours-line';
  
        this.hoursRef.appendChild(this.hoursLineRef);
      }
    }
  }
};
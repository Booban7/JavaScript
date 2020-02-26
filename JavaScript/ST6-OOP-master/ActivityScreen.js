class ActivityScreen extends Screen {
  constructor() {
    super();
    this.initHeader();
    this.initActivityUI();
    this.addEventListeners();
  }

  initHeader() {
    let myFormHeader = document.createElement('h3');
    this.element.appendChild(myFormHeader);
    myFormHeader.innerHTML = 'New activity';
    myFormHeader.className = 'myHeader';
  }

  initActivityUI() {
    let myForm = document.createElement('div');
    this.element.appendChild(myForm);
    myForm.id = 'myForm';

    var inputText1 = document.createElement('p');
    inputText1.innerHTML = 'New activity:';
    inputText1.style.margin = '0';
    myForm.appendChild(inputText1);
    this.inputActivity = document.createElement('input');
    myForm.appendChild(this.inputActivity);
    this.inputActivity.type = 'text';
    this.inputActivity.value = 'New task'
    this.inputActivity.name = 'New activity:';
    this.inputActivity.style.width = '166px';
    this.inputActivity.className = 'input';

    var inputText2 = document.createElement('p');
    inputText2.innerHTML = 'Date:';
    myForm.appendChild(inputText2);
    inputText2.style.margin = '0';
    this.inputDate = document.createElement('input');
    myForm.appendChild(this.inputDate);
    this.inputDate.type = 'text';
    this.inputDate.value = 'Date for activity'
    //this.inputDate.value = day + ' ' + date + '/' + month;
    this.inputDate.name = 'Date:';
    this.inputDate.style.width = '166px';
    this.inputDate.className = 'input';

    this.submitBtn = document.createElement('button');
    myForm.appendChild(this.submitBtn);
    this.submitBtn.innerHTML = 'Add Activity';
    this.submitBtn.style.borderRadius = '3px';
    this.submitBtn.style.marginTop = '17px';
    this.submitBtn.style.width = '100px';
    this.submitBtn.style.height = '30px';
  }

  newActivities() {
    this.inputActivity.focus();
    var showInput = 'Activity: ' + this.inputActivity.value + '<br>' + ' Date: ' + this.inputDate.value + '<br>';
    this.newActivity = document.createElement('div');
    this.element.appendChild(this.newActivity);
    this.newActivity.innerHTML = showInput;
    this.newActivity.className = 'newActivity';
    this.delActivity = document.createElement('button')
    this.newActivity.appendChild(this.delActivity)
    this.delActivity.innerHTML = 'Delete Activity';
    this.delActivity.addEventListener('click', () => {
      this.element.removeChild(this.newActivity)
    })
  }

  addEventListeners() {
    this.inputActivity.addEventListener('click', () => {
      this.inputActivity.value = '';
    })

    this.inputDate.addEventListener('click', () => {
      this.inputDate.value = '';
    })

    this.submitBtn.addEventListener('click', () => {
      this.newActivities()
    })
  }
}
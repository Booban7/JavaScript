class Screen {
  constructor(){
    this.initElement();
  }

  initElement(){
    this.element = document.createElement('div');
    this.element.className = 'element';
    mainDiv.appendChild(this.element);
  }

  removeMe(){
    mainDiv.removeChild(this.element);
  }
}
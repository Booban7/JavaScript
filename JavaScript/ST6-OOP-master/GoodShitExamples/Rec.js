class Person {
    constructor() {
        this.name = 'Jane Doe';
        this.callOnClick = this.callOnClick.bind(this);

        this.initEvents();
    }

    initEvents() {
        document.addEventListener('click', this.callOnClick);
        //document.addEventListener('click', this.callOnClickArrow);
    }

    callOnClick() {
        console.log('binded');
        this.removeClick();
    }

    // An arrow function does not have its own this; the this value of the enclosing execution context is used.
    callOnClickArrow = () => {
        console.log(this.name);
        this.removeClick();
    }

    removeClick() {
        document.removeEventListener('click', this.callOnClick);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new Person();
})
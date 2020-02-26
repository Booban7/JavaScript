var GlobalState = {
    showLogin: false
}

class Main {
    constructor() {
        this.basicUI();
        this.initButtons();
        this.addEventListeners();
    }

    basicUI() {
        let bodyRef = document.body;
        bodyRef.id = 'bodyRef';

        this.headDiv = document.createElement('div');
        this.headDiv.innerText = 'Calendar application 2000';
        bodyRef.appendChild(this.headDiv);
        this.headDiv.id = 'headDiv';

        this.menuDiv = document.createElement('div');
        bodyRef.appendChild(this.menuDiv);
        this.menuDiv.id = 'menuDiv';

        this.mainDiv = document.createElement('div');
        bodyRef.appendChild(this.mainDiv);
        this.mainDiv.id = 'mainDiv';
    }

    initButtons() {
        this.newActivityBTNRef = document.createElement('button');
        this.newActivityBTNRef.innerText = 'New activity';
        this.menuDiv.appendChild(this.newActivityBTNRef);
        this.newActivityBTNRef.className = 'menuButtons';

        this.calendarBTNRef = document.createElement('button');
        this.calendarBTNRef.innerText = 'Calendar';
        this.menuDiv.appendChild(this.calendarBTNRef);
        this.calendarBTNRef.className = 'menuButtons';

        this.loginBTNRef = document.createElement('button');
        this.loginBTNRef.innerText = 'Login';
        this.headDiv.appendChild(this.loginBTNRef);
        this.loginBTNRef.id = 'loginBTNRef';
    }

    addEventListeners() {
        this.newActivityBTNRef.addEventListener('click', () => {
            this.changeScreen('newActivity');
        })

        this.calendarBTNRef.addEventListener('click', () => {
            this.changeScreen('calendar');
        })

        this.loginBTNRef.addEventListener('click', this.onShowLogin);
    }

    onShowLogin = () => {
        if (!GlobalState.showLogin) {
            GlobalState.showLogin = true;
            new Login();
        }

    }

    changeScreen(screenType) {
        if (this.activeScreen) this.activeScreen.removeMe();

        switch (screenType) {
            case 'newActivity':
                this.activeScreen = new ActivityScreen();
                break;
            case 'calendar':
                this.activeScreen = new CalendarScreen();
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new Main();
})
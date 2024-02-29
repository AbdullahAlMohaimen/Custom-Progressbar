import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <button kendoButton themeColor="primary" [disabled]="!!running || value >= 100" (click)="startProgress()" style="margin-right:10px;width:100px">{{ value ? 'Resume' : 'Start'}}</button>
        <button kendoButton [disabled]="!running" (click)="stopProgress()" style="margin-right:10px;width:100px">Stop</button>
        <button kendoButton [disabled]="!value" (click)="resetProgress()" style="margin-right:10px;width:100px">Reset</button>

      <div class="spinner-box">
        <!-- <div class="configure-border-1">  
            <div class="configure-core"></div>
        </div>  
        <div class="configure-border-2">
            <div class="configure-core"></div>
        </div>  -->
        <div class="swing">
            <div class="swing-l"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="swing-r"></div>
        </div>
      </div>

      <div class="card">
        <kendo-progressbar [value]="value" style="height:100%;width:100%"></kendo-progressbar>
      </div>
      
    `,
  styles: [
    `
        .swing div {
        border-radius: 50%;
        float: left;
        height: 1em;
        width: 1em;
        }
        .swing div:nth-of-type(1) {
        background: -webkit-linear-gradient(left, #385c78 0%, #325774 100%);
        background: linear-gradient(to right, #385c78 0%, #325774 100%);
        }
        .swing div:nth-of-type(2) {
        background: -webkit-linear-gradient(left, #325774 0%, #47536a 100%);
        background: linear-gradient(to right, #325774 0%, #47536a 100%);
        }
        .swing div:nth-of-type(3) {
        background: -webkit-linear-gradient(left, #4a5369 0%, #6b4d59 100%);
        background: linear-gradient(to right, #4a5369 0%, #6b4d59 100%);
        }
        .swing div:nth-of-type(4) {
        background: -webkit-linear-gradient(left, #744c55 0%, #954646 100%);
        background: linear-gradient(to right, #744c55 0%, #954646 100%);
        }
        .swing div:nth-of-type(5) {
        background: -webkit-linear-gradient(left, #9c4543 0%, #bb4034 100%);
        background: linear-gradient(to right, #9c4543 0%, #bb4034 100%);
        }
        .swing div:nth-of-type(6) {
        background: -webkit-linear-gradient(left, #c33f31 0%, #d83b27 100%);
        background: linear-gradient(to right, #c33f31 0%, #d83b27 100%);
        }
        .swing div:nth-of-type(7) {
        background: -webkit-linear-gradient(left, #da3b26 0%, #db412c 100%);
        background: linear-gradient(to right, #da3b26 0%, #db412c 100%);
        }
        .shadow {
        clear: left;
        padding-top: 1.5em;
        }
        .shadow div {
        -webkit-filter: blur(1px);
        filter: blur(1px);
        float: left;
        width: 1em;
        height: .25em;
        border-radius: 50%;
        background: #e3dbd2;
        }
        .shadow .shadow-l {
        background: #d5d8d6;
        }
        .shadow .shadow-r {
        background: #eed3ca;
        }
        @-webkit-keyframes ball-l {
        0%, 50% {
            -webkit-transform: rotate(0) translateX(0);
            transform: rotate(0) translateX(0);
        }
        100% {
            -webkit-transform: rotate(50deg) translateX(-2.5em);
            transform: rotate(50deg) translateX(-2.5em);
        }
        }
        @keyframes ball-l {
        0%, 50% {
            -webkit-transform: rotate(0) translate(0);
            transform: rotate(0) translateX(0);
        }
        100% {
            -webkit-transform: rotate(50deg) translateX(-2.5em);
            transform: rotate(50deg) translateX(-2.5em);
        }
        }
        @-webkit-keyframes ball-r {
        0% {
            -webkit-transform: rotate(-50deg) translateX(2.5em);
            transform: rotate(-50deg) translateX(2.5em);
        }
        50%,
        100% {
            -webkit-transform: rotate(0) translateX(0);
            transform: rotate(0) translateX(0);
        }
        }
        @keyframes ball-r {
        0% {
            -webkit-transform: rotate(-50deg) translateX(2.5em);
            transform: rotate(-50deg) translateX(2.5em);
        }
        50%,
        100% {
            -webkit-transform: rotate(0) translateX(0);
            transform: rotate(0) translateX(0)
        }
        }
        @-webkit-keyframes shadow-l-n {
        0%, 50% {
            opacity: .5;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            opacity: .125;
            -webkit-transform: translateX(-1.57em);
            transform: translateX(-1.75em);
        }
        }
        @keyframes shadow-l-n {
        0%, 50% {
            opacity: .5;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            opacity: .125;
            -webkit-transform: translateX(-1.75);
            transform: translateX(-1.75em);
        }
        }
        @-webkit-keyframes shadow-r-n {
        0% {
            opacity: .125;
            -webkit-transform: translateX(1.75em);
            transform: translateX(1.75em);
        }
        50%,
        100% {
            opacity: .5;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        }
        @keyframes shadow-r-n {
        0% {
            opacity: .125;
            -webkit-transform: translateX(1.75em);
            transform: translateX(1.75em);
        }
        50%,
        100% {
            opacity: .5;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        }
        .swing-l {
        -webkit-animation: ball-l .425s ease-in-out infinite alternate;
        animation: ball-l .425s ease-in-out infinite alternate;
        }
        .swing-r {
        -webkit-animation: ball-r .425s ease-in-out infinite alternate;
        animation: ball-r .425s ease-in-out infinite alternate;
        }
        .shadow-l {
        -webkit-animation: shadow-l-n .425s ease-in-out infinite alternate;
        animation: shadow-l-n .425s ease-in-out infinite alternate;
        }
        .shadow-r {
        -webkit-animation: shadow-r-n .425s ease-in-out infinite alternate;
        animation: shadow-r-n .425s ease-in-out infinite alternate;
        }
    @keyframes configure-clockwise {
        0% {
            transform: rotate(0);
        }
        25% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes configure-xclockwise {
        0% {
            transform: rotate(45deg);
        }
        25% {
            transform: rotate(-45deg);
        }
        50% {
            transform: rotate(-135deg);
        }
        75% {
            transform: rotate(-225deg);
        }
        100% {
            transform: rotate(-315deg);
        }
    }
    .spinner-box {
        width: 500px;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }
    .configure-border-1 {
        width: 50px;
        height: 50px;
        padding: 3px;
        position: absolute;
        border-radius : 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e72582;
        animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
    }
    .configure-border-2 {
        width: 50px;
        height: 50px;
        padding: 3px;
        left: -115px;
        display: flex;
        justify-content: center;
        border-radius : 5px;
        align-items: center;
        background: #50af47;
        transform: rotate(45deg);
        animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
    }
    .configure-core {
        width: 100%;
        height: 100%;
        border-radius : 5px;
        background-color: #0e2b63;
    }
    .card {
        width: 500px;
        height: 30px;
        border-radius: 3px;
    }
    .card::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        z-index: -1;
        animation: anim 15s linear infinite;
        border-radius: 5px;
    }
    .card::after {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        z-index: -2;
        animation: anim 15s linear infinite;
        border-radius: 5px;
        filter: blur(5px);
    }
    @keyframes anim {
        from {background-position: 0}
        to {background-position: 400%}
    }
    `,
  ],
})
export class AppComponent {
  public value = 0;
  public running: number;

  public startProgress(): void {
    this.running = setInterval(() => {
      if (this.value <= 100) {
        this.value++;
      } else {
        this.stopProgress();
      }
    }, 50);
  }

  public stopProgress(): void {
    if (this.running) {
      clearInterval(this.running);
      this.running = null;
    }
  }

  public resetProgress(): void {
    this.value = 0;
    this.stopProgress();
  }
}

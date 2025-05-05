import './style.css'

import MonkeyLogo from './logo.jpg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${MonkeyLogo}" class="logo vanilla" alt="TypeScript logo"/>
    </a>
    <h1>HTML ni necha marta qayta-qayta o'rgangansan ?</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Uyalmasdan bosaver )))
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
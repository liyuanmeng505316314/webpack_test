

import './x.less'
import './z.styl'
import jpg from './assets/e.jpg'
import music from './assets/music.mp3'


const div =document.getElementById('app')
console.log(div)
div.innerHTML=`<audio controls>
<source src="${music}" type="audio/mpeg">
</audio>`

const button =document.createElement('button')
button.innerText='懒加载'
button.onclick=()=>{ 
    const lazy =import('./lazy')
    lazy.then((lazy)=>{lazy.default()},()=>{})
}
div.appendChild(button)


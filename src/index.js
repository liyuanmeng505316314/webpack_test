

import './x.less'
import './z.styl'
import jpg from './assets/e.jpg'
import music from './assets/music.mp3'


const div =document.getElementById('app')
console.log(div)
div.innerHTML=`<audio controls>
<source src="./assets/music.mp3" type="audio/mpeg">
</audio>`




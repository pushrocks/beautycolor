import 'typings-test'

import * as beautycolor from '../dist/index'

describe('beautycolor', function(){
    it('should produce a blue font', function(){
        console.log(beautycolor.coloredString('this is a blue font, no background', 'blue'))
    })
    it('should produce a red string with green background', function(){
        console.log(beautycolor.coloredString('this is a red font with green background', 'red','green'))
    })
    it('should produce different font colors', function(){
        console.log(
            beautycolor.coloredString('blue','blue'),
            beautycolor.coloredString('brown','brown'),
            beautycolor.coloredString('red','red'),
            beautycolor.coloredString('orange','orange'),
            beautycolor.coloredString('green', 'green'),
            beautycolor.coloredString('cyan', 'cyan')
        )
    })
    it('should produce different baclground colors', function(){
        console.log(
            beautycolor.coloredString('blue', 'white', 'blue'),
            beautycolor.coloredString('brown', 'white', 'brown'),
            beautycolor.coloredString('red', 'white', 'red'),
            beautycolor.coloredString('orange', 'white', 'orange'),
            beautycolor.coloredString('green', 'white', 'green'),
            beautycolor.coloredString('cyan', 'white', 'cyan')
        )
    })
})

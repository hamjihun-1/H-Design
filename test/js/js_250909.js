

$(document).ready(function(){
    
    console.log('111111')

    $('.box').on('mouseenter', function(){
        console.log('오버했다')
        $('.box').addClass('on')
    })//$('.box').on('mouseenter
    $('.box').on('mouseleave', function(){
        console.log('내려갔다')
        $('.box').removeClass('on')
    })

})//$(document).ready

console.log('2연결되었습니다.')
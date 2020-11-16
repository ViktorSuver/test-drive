
// fri 2
var imgs = ["images/friends-vk.jpg","images/friends-vk2.jpg","images/friends-vk3.jpg","images/friends-vk4.jpg"];
            
var n = 0;
time = 800;
play = setInterval("chgImg(0)", 5000);

function chgImg(number) {
if (number!=0) n = number - 0;
$('#slide_show').fadeOut(time, function() {	
$(this).attr('src', imgs[n]).fadeIn(time);
});



n++;
if (n>=imgs.length) n = 0;
}
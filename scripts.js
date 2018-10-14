// 5 key events to determine what action to perform
// Perform a different action for at least five keys.
// BONUS: Implement an object with this code
/*global $*/
window.addEventListener('keydown', event => {
    switch(event.keyCode) {
        case 13: 
            addBorder();
            break;
        case 71:
            changePic('gorilla');
            break;
        case 76:
            displayPic('lemur');
            break;
        case 65:
            fontSize();
            break;
        case 83:
            fadeIn();
            break;
        case 87:
            playVid('video');
            break;
        }
        
        
// press enter to add border to header
    function addBorder() {
        document.getElementById('addBorder').style.border = "thick dotted #33cc33";
        }
// press g to show/change to gorilla pic from giraffe
    function changePic() {
        document.getElementById('giraffe').style.display = 'none';
        document.getElementById('gorilla').style.display = 'block';
        }  

// press c to display lemur pic 
    function displayPic() {
        document.getElementById('lemur').style.display = 'block';
        }

// press a to change p tag under anteater pic 
    function fontSize() {
        document.getElementById('hideMe').style.display = 'none';
        document.getElementById('fontSize').style.display = 'block';
        document.getElementById('fontSize').style.fontSize = "30px";
        }
// press s to have lion pic fade in
    function fadeIn() {
        $('#lion').fadeIn(3000);
        }

// press w to show video 
// still need to click to play - need to add key event that triggers play without clicking mouse
    function playVid() {
        var parent = document.getElementById('parent');
        var child = document.getElementById('child');
        parent.removeChild(child);
        document.getElementById('video').style.display = 'block'; 
        document.getElementById('video').src = "https://www.youtube.com/embed/HVMWobfc5sc";
        }
})
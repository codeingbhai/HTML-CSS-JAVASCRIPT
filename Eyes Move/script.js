const eyes = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (event) => {
   
    let { clientX: mouseX, clientY: mouseY } = event;

    eyes.forEach((eye, index) => {
        let eyeRect = eye.getBoundingClientRect();
        let eyeCenterX = eyeRect.left + eyeRect.width / 2;
        let eyeCenterY = eyeRect.top + eyeRect.height / 2;

        let deltaX = mouseX - eyeCenterX;
        let deltaY = mouseY - eyeCenterY;
        let angle = Math.atan2(deltaY, deltaX);

        let maxDistance = 20; 
        let pupilX = Math.cos(angle) * maxDistance;
        let pupilY = Math.sin(angle) * maxDistance;

        pupils[index].style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
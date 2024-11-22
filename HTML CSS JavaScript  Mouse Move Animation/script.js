const cursor = document.getElementById('cursor'); 
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (event)=>{ 
    cursor.style.left = event.x + "px";
    cursor.style.top = event.y + "px";
    
    glow.style.left = event.x -150 + "px";
    glow.style.top = event.y - 150+ "px";
})

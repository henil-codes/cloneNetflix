// box1 
var box1 = document.getElementById('box1-ma-uparnu');
var showBox1 = document.getElementById('box1-ma-gayab-they-ne-ave-te');
var box1Img = document.getElementById('box1Img');

// box2
var box2 = document.getElementById('box2-ma-uparnu');
var showBox2 = document.getElementById('box2-ma-gayab-they-ne-ave-te');
var box2Img = document.getElementById('box2Img');

// box3
var box3 = document.getElementById('box3-ma-uparnu');
var showBox3 = document.getElementById('box3-ma-gayab-they-ne-ave-te');
var box3Img = document.getElementById('box3Img');

// box4
var box4 = document.getElementById('box4-ma-uparnu');
var showBox4 = document.getElementById('box4-ma-gayab-they-ne-ave-te');
var box4Img = document.getElementById('box4Img');

// box5 
var box5 = document.getElementById('box5-ma-uparnu');
var showBox5 = document.getElementById('box5-ma-gayab-they-ne-ave-te');
var box5Img = document.getElementById('box5Img');

// box6 
var box6 = document.getElementById('box6-ma-uparnu');
var showBox6 = document.getElementById('box6-ma-gayab-they-ne-ave-te');
var box6Img = document.getElementById('box6Img');

box1.addEventListener('click', () => {
    if (showBox1.style.display != 'block') {
        box1Img.style.transform = "rotate(45deg)";
        showBox1.style.display = 'block';
        showBox2.style.display = 'none';
        box2Img.style.transform = 'rotate(0deg)';
        showBox3.style.display = 'none';
        box3Img.style.transform = 'rotate(0deg)';
        showBox4.style.display = 'none';
        box4Img.style.transform = 'rotate(0deg)';
        showBox5.style.display = 'none';
        box5Img.style.transform = 'rotate(0deg)';
        showBox6.style.display = 'none';
        box6Img.style.transform = 'rotate(0deg)';

    } else {
        box1Img.style.transform = 'rotate(0deg)';
        showBox1.style.display = 'none';
    }
});

box2.addEventListener('click', () => {
    if (showBox2.style.display != 'block') {
        showBox1.style.display = 'none';
        box1Img.style.transform = 'rotate(0deg)';
        showBox2.style.display = 'block';
        box2Img.style.transform = "rotate(45deg)";
        showBox3.style.display = 'none';
        box3Img.style.transform = 'rotate(0deg)';
        showBox4.style.display = 'none';
        box4Img.style.transform = 'rotate(0deg)';
        showBox5.style.display = 'none';
        box5Img.style.transform = 'rotate(0deg)';
        showBox6.style.display = 'none';
        box6Img.style.transform = 'rotate(0deg)';

    } else {
        box2Img.style.transform = 'rotate(0deg)';
        showBox2.style.display = 'none';
    }
});

box3.addEventListener('click', () => {
    if (showBox3.style.display != 'block') {
        showBox1.style.display = 'none';
        box1Img.style.transform = 'rotate(0deg)';
        showBox2.style.display = 'none';
        box2Img.style.transform = 'rotate(0deg)';
        showBox3.style.display = 'block';
        box3Img.style.transform = "rotate(45deg)";
        showBox4.style.display = 'none';
        box4Img.style.transform = 'rotate(0deg)';
        showBox5.style.display = 'none';
        box5Img.style.transform = 'rotate(0deg)';
        showBox6.style.display = 'none';
        box6Img.style.transform = 'rotate(0deg)';
    } else {
        box3Img.style.transform = 'rotate(0deg)';
        showBox3.style.display = 'none';
    }
});

box4.addEventListener('click', () => {
    if (showBox4.style.display != 'block') {
        showBox1.style.display = 'none';
        box1Img.style.transform = 'rotate(0deg)';
        showBox2.style.display = 'none';
        box2Img.style.transform = 'rotate(0deg)';
        showBox3.style.display = 'none';
        box3Img.style.transform = 'rotate(0deg)';
        showBox4.style.display = 'block';
        box4Img.style.transform = "rotate(45deg)";
        showBox5.style.display = 'none';
        box5Img.style.transform = 'rotate(0deg)';
        showBox6.style.display = 'none';
        box6Img.style.transform = 'rotate(0deg)';
    } else {
        box4Img.style.transform = 'rotate(0deg)';
        showBox4.style.display = 'none';
    }
});

box5.addEventListener('click', () => {
    if (showBox5.style.display != 'block') {
        showBox1.style.display = 'none';
        box1Img.style.transform = 'rotate(0deg)';
        showBox2.style.display = 'none';
        box2Img.style.transform = 'rotate(0deg)';
        showBox3.style.display = 'none';
        box3Img.style.transform = 'rotate(0deg)';
        showBox4.style.display = 'none';
        box4Img.style.transform = 'rotate(0deg)';
        showBox5.style.display = 'block';
        box5Img.style.transform = "rotate(45deg)";
        showBox6.style.display = 'none';
        box6Img.style.transform = 'rotate(0deg)';
    } else {
        box5Img.style.transform = 'rotate(0deg)';
        showBox5.style.display = 'none';
    }
});

box6.addEventListener('click', () => {
    if (showBox6.style.display != 'block') {
        showBox1.style.display = 'none';
        box1Img.style.transform = 'rotate(0deg)';
        showBox2.style.display = 'none';
        box2Img.style.transform = 'rotate(0deg)';
        showBox3.style.display = 'none';
        box3Img.style.transform = 'rotate(0deg)';
        showBox4.style.display = 'none';
        box4Img.style.transform = 'rotate(0deg)';
        showBox5.style.display = 'none';
        box5Img.style.transform = 'rotate(0deg)';
        showBox6.style.display = 'block';
        box6Img.style.transform = "rotate(45deg)";
    } else {
        box6Img.style.transform = 'rotate(0deg)';
        showBox6.style.display = 'none';
    }
});
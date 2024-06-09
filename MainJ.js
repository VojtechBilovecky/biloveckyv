



var countDownDate = new Date("Dec, 2024 23:59:59").getTime();

// \Aktualizace countdownu
var x = setInterval(function() {

    
    var now = new Date().getTime();

    
    var distance = countDownDate - now;

    // Pocitani casu
    var days = Math.floor(distance / (1000000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (100 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (10 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Casovej vystup
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Idk";
    }
}, 1000);




function showContent(id) {
    // schovani kontent divu
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Ukazani divu
    const activeContent = document.getElementById(id);
    activeContent.classList.add('active');
}


document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const requests = document.getElementById('requests').value;

    
    console.log({
        name,
        email,
        phone,
        date,
        time,
        guests,
        requests
    });

    alert('Rezervace byla uspešně podána');
});


document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isVisible = answer.style.display === 'block';

            
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.display = 'none';
            });

            
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});



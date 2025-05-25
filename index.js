const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');

heart.addEventListener('mouseenter', () => {
    envelope.classList.add('flap');
});

heart.addEventListener('mouseleave', () => {
    envelope.classList.remove('flap');
});

onload = () =>{
        document.body.classList.remove("container");
};

function openLetter() {
  envelope.classList.toggle('open');
}

// Tambah dukungan untuk click & touch
heart.addEventListener('click', openLetter);
heart.addEventListener('touchstart', openLetter);

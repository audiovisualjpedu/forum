
<script>
document.getElementById('heartIcon').addEventListener('mouseover', function() {
    this.classList.add('animate__animated', 'animate__heartBeat');
});

document.getElementById('heartIcon').addEventListener('animationend', function() {
    this.classList.remove('animate__animated', 'animate__heartBeat');
});
</script>

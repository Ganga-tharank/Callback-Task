document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');


    function countdown(number, callback){
        setTimeout(function() {
            if (number > 0){
                countdownElement.textContent = number;
                countdown(number - 1, callback);
            }else {
                callback();
            }

        }, 1000);
    }

    countdown(10, function() {
        countdownElement.textContent = 'Happy Independence Day!';
    });
});
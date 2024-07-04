document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var form = event.target;
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbwdIZlA2aLKnk4BgNW2w3kYENX9032RJkiumiJJBKWt_EuKZP0Q97-Lfur4rHF3FdJ0/exec', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Hide the form and show the thank-you message
                form.style.display = 'none';
                document.getElementById('thank-you').style.display = 'block';
            } else {
                alert('There was an error with your submission. Please try again.');
            }
        }
    };
    xhr.send(formData);
});
    

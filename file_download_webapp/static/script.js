function submitForm(event) {
    event.preventDefault();
    window.location.href = "/download";
    setTimeout(function(){ window.location.href = "/thank_you"; }, 2000);
}

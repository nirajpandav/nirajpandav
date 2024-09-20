function sendEmail() { 
  
    var p3 = "izfekngajgfhgrlv"
    const body = {
      name: document.querySelector("#contact-name").value,
      email: document.querySelector("#contact-email").value,
      mobile: document.querySelector("#contact-mobile").value,
      message: document.querySelector("#contact-message").value
    };
    if((body.name && body.email && body.mobile && body.message)){
        Email.send({
        Host: "smtp.gmail.com",
        Username : "er.nirajpandav@gmail.com",
        Password : p1,
        To : 'dev.nirajpandav@gmail.com',
        From : "er.nirajpandav@gmail.com",
        Subject : `Message from ${body.name}`,
        Body : `${body.message}
                Contact Information:
                Mobile: ${body.mobile}
            Email: ${body.email}`,
        }).then(
        alert("Thank You so much!!!"),
        location.reload()
        );
}
else{
    alert("All fields are required!!!")
}
  }
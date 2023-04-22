  const firebaseConfig = {
    apiKey: "AIzaSyC4VaQhePWi5nn8ipO_7PaEeivHfTLrXWY",
    authDomain: "contactme-hamid-website.firebaseapp.com",
    databaseURL: "https://contactme-hamid-website-default-rtdb.firebaseio.com",
    projectId: "contactme-hamid-website",
    storageBucket: "contactme-hamid-website.appspot.com",
    messagingSenderId: "377973204447",
    appId: "1:377973204447:web:c82a46cb4b834e809d906a",
    measurementId: "G-Q8G3KMRB5X"
  };
  
  //how we initialize firebase 
  firebase.initializeApp(firebaseConfig);

  //creating reference for our contact page database
  var contactFormDB = firebase.database().ref("ContactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal("Name");
    var email = getElementVal("Email");
    var number = getElementVal("number");
    var msg = getElementVal("content");

    saveMessages(name, email, number, msg);

    //enabling the alert
    document.querySelector(".alert").style.display = 'block';

    //removing the alert
    setTimeout(() => {
          document.querySelector(".alert").style.display = 'none';
    }, 3000);

    //reset the form
    document.getElementById("contactForm").reset();
  }

  const saveMessages = (name,email,number,msg) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        email : email,
        number : number,
        msg : msg, 
    })
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

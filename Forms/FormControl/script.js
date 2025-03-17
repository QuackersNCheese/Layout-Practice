document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    let output1 = document.getElementById('output1');
    let output2 = document.getElementById('output2');
    output1.innerHTML=`You put in ${username} for a username.`;
    output2.innerHTML=(password == 'password' ? 'You Dummy! ': '' ) + 
        `You put in ${password} for a password.`;
  });
document.getElementById('OS').addEventListener('submit', function(event) {
    event.preventDefault();
    let operatingSystem = 'paper and pencil';
    let radioButtons = document.getElementsByName('opsys');
    for(let i = 0; i < radioButtons.length; i++) 
        if(radioButtons[i].checked) 
            operatingSystem = radioButtons[i].value;

    document.getElementById('output1').innerHTML=`You put in ${operatingSystem} for operating system.`
    document.getElementById('output2').innerHTML='';
})
document.getElementById('vehicles').addEventListener('submit', function(event) {
    event.preventDefault();
    let yourVehicles = [];
    let checkboxes = document.querySelectorAll('#vehicles input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if(checkbox.checked) 
            yourVehicles.push(checkbox.value);
    });

    document.getElementById('output1').innerHTML = `You selected: ${yourVehicles.join(', ')}`;
    document.getElementById('output2').innerHTML = '';
});
function buttonResponse() {
    let output = document.getElementById('buttonOutput');
    
    output.style.color = 'goldenrod';
    output.style.float = 'right';
    if(output.innerHTML == '') 
        output.innerHTML = 'Button Pushed';
     else 
        output.innerHTML = ''; 
}
document.getElementById('setColor').addEventListener('submit', function(event) {
    event.preventDefault();
    let favcolor = document.getElementById('favcolor');
    
    let colorme = document.getElementById('colorMe');
    colorme.style.backgroundColor = favcolor.value;
});
document.getElementById('dob').addEventListener('submit', function(event) {
    event.preventDefault();
    let birthdayDate = new Date(document.getElementById('birthday').value);

    let now = new Date();
    let timeDifference = now - birthdayDate;

    let years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    let days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000* 60 * 60 * 24));

    document.getElementById('output1').innerHTML = `You are ${years} years and ${days} days old.`;
    document.getElementById('output2').innerHTML = '';
})
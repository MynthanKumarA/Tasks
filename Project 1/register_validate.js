const first_name = document.forms['form']['first_name'];
const last_name = document.forms['form']['last_name'];
const email = document.forms['form']['email'];
const mobile_number = document.forms['form']['mobile_number'];
const user_name = document.forms['form']['user_name'];
const password = document.forms['form']['password'];
const confirm_password = document.forms['form']['confirm_password'];


first_name.addEventListener('blur',function(){
    let u_times =document.querySelector('.u_times');
    let u_check = document.querySelector('.u_check');
    
    if(first_name.value.length == 0 || first_name.value.length < 3){
        first_name.style.borderBottomColor = '#aa0617';
        u_times.style.display='inline'; 
        u_check.style.display='none';
        return false;
       }
       else
       {
        first_name.style.borderBottomColor ='green';
        u_times.style.display='none';
        u_check.style.display='inline';
       }
})

last_name.addEventListener('blur',function(){
    let lname_times =document.querySelector('.lname_times');
    let lname_check = document.querySelector('.lname_check');

    if( last_name.value.length < 3){
        last_name.style.borderBottomColor = '#aa0617';
        lname_times.style.display='inline'; 
        lname_check.style.display='none';
       }
       else
       {
        last_name.style.borderBottomColor ='green';
        lname_times.style.display='none';
        lname_check.style.display='inline';
       }
})
email.addEventListener('blur',function(){
    let email_times =document.querySelector('.email_times');
    let email_check = document.querySelector('.email_check');
    if( email.value.length < 3){
        email.style.borderBottomColor = '#aa0617';
        email_times.style.display='inline'; 
        email_check.style.display='none';
       }
       else
       {
        email.style.borderBottomColor ='green';
        email_times.style.display='none';
        email_check.style.display='inline';
       }
})
mobile_number.addEventListener('blur',function(){

    let mobile_times =document.querySelector('.mobile_times');
    let mobile_check = document.querySelector('.mobile_check');
    let phoneno=/^\d{10}$/;

    if(!mobile_number.value.match(phoneno)){
        mobile_number.style.borderBottomColor = '#aa0617';
        mobile_times.style.display='inline'; 
        mobile_check.style.display='none';
       }
       else
       {
        mobile_number.style.borderBottomColor ='green';
        mobile_times.style.display='none';
        mobile_check.style.display='inline';
       }
})
user_name.addEventListener('blur',function(){

    let user_times =document.querySelector('.user_times');
    let user_check = document.querySelector('.user_check');

    const isUppercase =/^[a-z]*$/;

    if(!user_name.value.match(isUppercase) || user_name.value.length <= 3){
        user_name.style.borderBottomColor = '#aa0617';
        user_times.style.display='inline'; 
        user_check.style.display='none';
       }
       else
       {
        user_name.style.borderBottomColor ='green';
        user_times.style.display='none';
        user_check.style.display='inline';
       }
})


password.addEventListener('blur',function(){

    let pass_times =document.querySelector('.pass_times');
    let pass_check = document.querySelector('.pass_check');

    if( password.value.length < 4){
        password.style.borderBottomColor = '#aa0617';
        pass_times.style.display='inline'; 
        pass_check.style.display='none';
       }
       else
       {
        password.style.borderBottomColor ='green';
        pass_times.style.display='none';
        pass_check.style.display='inline';
       }
})
confirm_password.addEventListener('blur',function(){

    let cfpass_times =document.querySelector('.cfpass_times');
    let cfpass_check = document.querySelector('.cfpass_check');

    if( confirm_password.value == password.value){
        confirm_password.style.borderBottomColor = 'green';
        cfpass_times.style.display='none'; 
        cfpass_check.style.display='inline';
       }
       else
       {
        confirm_password.style.borderBottomColor ='#aa0617';
        cfpass_times.style.display='inline';
        cfpass_check.style.display='none';
       }
})




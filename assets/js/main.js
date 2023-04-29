/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHidenPass =  (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
        // Change password to text
        if(input.type === 'password'){
            // Switch
            input.type = 'text'

            // Icon Change
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            // Change pass
            input.type = 'password'

            // Icon change
            iconEye.classList.add("ri-eye-off-line");
            iconEye.classList.remove("ri-eye-line");
        }
    })
}

showHidenPass('login-pass', 'login-eye')
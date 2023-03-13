const menuBtn = document.getElementById('menuBtn');
const stuff = document.getElementById('stuff');
const navIcons = document.querySelectorAll('.navIcons');
const navIcons1 = document.querySelectorAll('.navIcons1');
const nav = document.querySelectorAll('.nav');
const nav002 = document.querySelector('.nav002');
const blur = document.querySelector('.blur');
const blur1 = document.querySelector('.blur1');
const flit = document.querySelectorAll('.flit');
const seeMore = document.querySelector('.see--more');
const seeLess = document.querySelector('.see--less');
const bio = document.querySelector('.bio');




window.onscroll = function(){
    if(window.pageYOffset > 100){
        navIcons.forEach(ele => {
            ele.style.color = '#fff';
        })
        flit.forEach(ele => {
            ele.style.filter = 'invert(100%) sepia(0%) saturate(27%) hue-rotate(38deg) brightness(106%) contrast(107%)';
        })
        nav.forEach(ele => {
            ele.style.backgroundColor = '#000';
            ele.style.boxShadow = '0 0 4px 3px #00000049'
        })
        try {
            blur.style.filter = 'blur(5px)';
        } catch (error) {
            console.log(error)
        }
        
        
    }else {
        navIcons.forEach(ele => {
            ele.style.color = '#000';
        })
        flit.forEach(ele => {
            ele.style.filter = 'none';
        })
        nav.forEach(ele => {
            ele.style.backgroundColor = 'transparent';
            ele.style.boxShadow = '0 0 4px 3px transparent'
        })
        try {
            blur.style.filter = 'blur(0px)';
        } catch (error) {
            console.log(error)
        }
        
        
    }
}
try {
    seeMore.addEventListener('click', () => {
        if(seeMore.textContent === 'see more >>>') {
            seeMore.textContent = 'see less >>>';
            bio.classList.toggle('active');
        } else {
            seeMore.textContent = 'see more >>>';
            bio.classList.toggle('active');
        }
    })
    seeLess.addEventListener('click', ()=> {
        bio.classList.toggle('active');
        seeMore.textContent = 'see more >>>';
    })
} catch (error) {
    console.log('')
}

menuBtn.addEventListener('click', e => {
    if(menuBtn.classList.contains('fa-bars')){
        menuBtn.style.transform = 'rotate(0deg)';
        menuBtn.style.transform = 'rotate(180deg)';
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
        stuff.classList.toggle('active');

    }else if (menuBtn.classList.contains('fa-times')){
        menuBtn.style.transform = 'rotate(360deg)';
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
        stuff.classList.toggle('active');
    }
})
navIcons1.forEach(ele => {
    ele.addEventListener('click', e => {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
        stuff.classList.toggle('active');
    })
})


const btnS = document.getElementById('btnS');
const form =  document.getElementById('form')
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

try {
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        const send = async () =>  {
            const body1 = 
            `Name: ${name1.value} </br>
            Email address: ${email.value} </br>
            Subject: ${subject.value} </br>
            message: ${message.value}
            `;
        e.preventDefault();
        Email.send({
            SecureToken : "d3782a77-1d2c-4f12-8850-c4913226cb27",
            To : "umaemmanuel62@gmail.com",
            From : "umaemmanuel62@gmail.com",
            Subject : "New message for the Critics company",
            Body : body1
        }).then(
          message => {
            try {
                const popside = document.querySelector('.popside');
                popside.style.display = 'flex';
                popside.style.border = '2px solid #fff';
                popside.textContent = 'sent';
                setTimeout(e => {
                    popside.style.display = 'none';
                },2000)
            } catch (error) {
                console.logg(9)
            }
            
        }).catch(data => {
            alert('error')
        });
        }
        send();
    
        name1.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
    })
} catch (error) {
    console.log('9');
}
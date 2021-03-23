//hamburger menu
try {
    const hambBtn = document.querySelector('.hamburger'),
        nav = document.querySelector('#navUl');
    window.addEventListener('click', function () {
        hambBtn.innerHTML = `<i class="fas fa-bars"></i>`;
        hambBtn.classList.remove('active');
        nav.classList.remove('active');
    });
    hambBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if(hambBtn.classList.contains('active')) {
            hambBtn.innerHTML = `<i class="fas fa-bars"></i>`;
            hambBtn.classList.remove('active');
            nav.classList.remove('active');
        } else {
            hambBtn.classList.add('active');
            hambBtn.innerHTML = `<i class="far fa-times-circle"></i>`;
            nav.classList.add('active');
        }
    });
    nav.addEventListener('click', function (e) {
        e.stopPropagation();
    })
} catch (e) {
    console.log(e);
}

//function post via fetch
async function postViaFetch(url, formName, redirectURL = false) {
    const formData = document.forms[formName],
        inputSubmit = formData.querySelector('input[type="submit"]');

    if(inputSubmit.disabled === false) {
        const inputSubmitVal = inputSubmit.value;
        inputSubmit.disabled = true;
        inputSubmit.value = 'Processing ...';
        setTimeout(()=>{
            inputSubmit.value = inputSubmitVal;
            inputSubmit.disabled = false;
        }, 10000)
    }


    await fetch(url, {method: 'POST', body: new FormData(formData)})
        .then(res => {
            if (res.ok && (res.status >= 200 && res.status < 300)) {
                return res;
            } else {
                throw new Error();
            }
        })
        .then(res => {
            if (redirectURL) {
                window.location.href = redirectURL;
            }
            formData.reset();
            inputSubmit.value = 'Success!';
            setTimeout(()=>{
               window.location.hash = '';
            }, 2000);
        })
        .catch(err => alert('SERVER ERROR!'));
}
//try sending
try {
    document.forms['offer'].addEventListener('submit', function (e) {
        e.preventDefault();
        postViaFetch('https://script.google.com/macros/s/AKfycbwQSxOf4siyOHcRmumMqHkeeEmkDlNSmxT3xUMd-8cQAXP0SLw/exec', 'offer');
});
} catch (e) {
    console.log(e);
}

//play video index
try {
const playTrigger = document.querySelector('.video_play'),
    videoContainer = document.getElementById('video');
    playTrigger.addEventListener('click', function (e) {
        e.target.remove();
        videoContainer.innerHTML = `
        <style>
        iframe {
            width: 100% !important;
          max-width: @midWidht !important;
          height: 54.5rem !important;
          }
          @media (max-width: 768px) {
          iframe {
          height: 31.5rem !important;
          }
          }
        </style>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5U32E-kRMBA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    })
} catch (e) {
    console.log(e);
}
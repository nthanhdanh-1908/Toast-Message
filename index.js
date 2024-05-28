// Toast function
function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast')
    if (main) { 
        const toast = document.createElement('div')

        // Auto remove
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 1000)

        // Remove toast when click
        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-bug'
        }
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)

        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">
                    ${message}
                </p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div> `
        main.appendChild(toast)
    }
}

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Ok. It is success!',
        type: 'success',
        duration: 3000
    })
}   

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Oh! It is unsuccess',
        type: 'error',
        duration: 3000
    })
}
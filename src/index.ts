const iframe = document.getElementById('content-iframe') as HTMLIFrameElement
const links = document.querySelectorAll('.nav a')

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault() // 阻止 a 标签 默认的行为
        const src = link.getAttribute('src-data') || ''
        iframe.src = src
    })
})
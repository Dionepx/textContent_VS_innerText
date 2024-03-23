// const paragraph = document.querySelector('p')

// console.log(paragraph.classList) // retorna DOMTokenList

// Agora vai la no html e elimine o class do 'p'. Vamos adcionar uma classe nela!
// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('success')


const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
     // console.log(paragraph.innerText) // Visualizar o conteudo que esta visivel. Ex: vai no html e de um <p>Lorem <span style="display: none;">error</span> lorem</p> no primeiro 'p'
     // console.log(paragraph.textContent) // Visualizar o conteudo independente se o texto estiver visivel ou nao

     if (paragraph.textContent.includes('error')) { //verifica se error esta incluso
          paragraph.classList.add('error')
     }

     if (paragraph.textContent.includes('success')) {
          paragraph.classList.add('success')
     }

})
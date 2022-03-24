const currentYear = document.querySelector('.current-year')

const currentDate = () => {
    const newDate = new Date().getFullYear()
    currentYear.textContent = newDate
}

currentDate()
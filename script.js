const color = document.getElementById('colorSelect')
const button = document.querySelector('input[type="button"]');


button.addEventListener('click',()=>{
    // console.log(color.value)
    color.remove(color.selectedIndex)
})
select('#menu').addEventListener('click',()=>{
    select('.menu').classList.toggle('hidden');
})

select('.menu--close').addEventListener('click',()=>{
    select('.menu').classList.toggle('hidden');
})

select('#user--top-down').addEventListener('click',()=>{
    select('.user--top-menu').classList.toggle('hidden');
})

select('.user--top-close').addEventListener('click',()=>{
    select('.user--top-menu').classList.toggle('hidden');
})

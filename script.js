const fullname=document.getElementById('fullname');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const address=document.getElementById('address');
const city=document.getElementById('city');

const userForm1=document.getElementsByName('userForm')[0];
const btnsubmit=document.getElementById('btnsubmit');

btnsubmit.addEventListener('click', (res)=>
{
    res.preventDefault();
    const formData=[{
        fullName:fullname.value,
        email:email.value,
        phone:phone.value,
        address:address.value,
        city:city.value
    }]
    formData.forEach((allData)=>
    {
        console.log(allData);
    })
    userForm1.reset();
})

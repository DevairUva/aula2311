const frm = document.querySelector('form');
const resp = document.querySelector('h2');
frm.addEventListener("submit",(e)=>{
    const name = frm.name.value;
    const n1 = Number(frm.n1.value.replace(',','.'));
    const n2 = Number(frm.n2.value.replace(',','.'));
    const n3 = Number(frm.n3.value.replace(',','.'));
    const n4 = Number(frm.n4.value.replace(',','.'));
    let media = (n1+n2+n3+n4)/4;
    media = media.toFixed(2);
    media = media.toString();
    media = media.replace('.',',');
    resp.innerText = `${name}, sua média é: ${media}`;
    e.preventDefault();
})

objString = J;sessionStorage.stringify(
    {
        "cor": "Amarela",
        "acesa": false
    });
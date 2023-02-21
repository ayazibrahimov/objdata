

let arr = []

document.querySelector('#add-movie-btn').addEventListener('click',function(){

    const title = document.querySelector('#title').value

    const extraName = document.querySelector('#extra-name').value

    const extraValue = document.querySelector('#extra-value').value


    if(title.trim() === "" || extraName.trim() === "" || extraValue.trim() === "")
    {
        return;
    }


    let datas = {
        info:{
            title,
            [extraName]:extraValue
        },
        id:Math.random()
    }



    arr.push(datas)
    console.log(arr);


    // delete datas.title;
    // delete datas.extraName;
    // delete datas.extraValue


})





















/////
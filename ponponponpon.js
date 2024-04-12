

/* <div class="forma">
        <form action="">
            <h2>Публикация</h2>

            <div>
                <label for="username">Заголовок</label>
                <input type="text" placeholder="Введите заголовок" required class="zz">
            </div>
            
            <div>
                <label for="username">Тема</label>
                <input type="text" placeholder="Введите тему" required class="tt">
            </div>

            <div>
                <label for="username">Текст</label>
                <textarea name="" id="" cols="30" rows="10" class="te" required></textarea>
            </div>

            <button type="submit" class="but">Добавить</button>

        </form>
    </div>

const button = document.querySelector('button');
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});

*{
    font-family: 'Roboto', sans-serif;
    padding: 0px;
    margin: 0px;
}
.forma{
    width: 350px;
    height: 450px;
    border:1px solid black;
    border-radius: 20px;
    justify-content: center;
    background-color: cornsilk;
}
form{
    display: grid;
    padding: 15px;
    gap:25px;
}
.zz{
    width: 300px;
    height: 30px;
}
.tt{
    width: 300px;
    height: 30px;
}
.te{
    width: 300px;
    height: 60px;
}
.but{
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: tahoma;
    font-size: 22px;
    background-color: rgb(247, 236, 192);
}
.but:hover{
  background-color: rgb(189, 189, 189);
  transition: 1s linear;
}

*/
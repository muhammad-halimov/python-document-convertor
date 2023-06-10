async function send()
{
    document.querySelector('#log-form').addEventListener('submit', async function(event)
    {
        // Отменяем стандартное поведение формы
        event.preventDefault();

        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var email = document.getElementById('mail').value;
        var nick = document.getElementById('nick').value;
        var password = document.getElementById('password').value;

        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
        localStorage.setItem('nick', nick);
        localStorage.setItem('password', password);

        alert("Поздравляем ! Вы зарегистрировались в моем сайте ! \nВаши данные записаны в localStorage !")
        window.location.href = 'main.htm';
    });
}

async function remove()
{
    var name = localStorage.getItem('name');
    var age = localStorage.getItem('age');
    var email = localStorage.getItem('email');
    var nick = localStorage.getItem('nick');
    var password = localStorage.getItem('password');

    if (name, age, email, nick, password === null)
    {
        alert('Вы не в базе !');
    }
    else
    {
        var confirmMessage = 'Вы уверены, что хотите удалить свои данные из базы?';
        if (confirm(confirmMessage))
        {
            localStorage.removeItem('name');
            localStorage.removeItem('age');
            localStorage.removeItem('email');
            localStorage.removeItem('nick');
            localStorage.removeItem('password');
            alert('Ваши данные успешно удалены из базы !');
            window.location.href = 'main.htm';
        }
        else
        {
            alert("Удаление отменено.");
            window.location.href = 'main.htm';
        }
    }
}
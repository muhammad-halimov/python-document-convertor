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

        alert("Congrats ! You've joined my app ! \nYour data is soted in a localStorage !")
        window.location.href = 'main_eng.htm';
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
        alert("You aren't in base !");
    }
    else
    {
        var confirmMessage = 'Are you sure, want to delete your profile ?';
        if (confirm(confirmMessage))
        {
            localStorage.removeItem('name');
            localStorage.removeItem('age');
            localStorage.removeItem('email');
            localStorage.removeItem('nick');
            localStorage.removeItem('password');
            alert('Your profile were successfully deleted !');
            window.location.href = 'main_eng.htm';
        }
        else
        {
            alert("Removing were canceled.");
            window.location.href = 'main_eng.htm';
        }
    }
}
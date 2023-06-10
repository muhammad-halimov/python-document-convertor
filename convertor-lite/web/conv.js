async function convert_js()
{
    let original = document.getElementById('path').value;
    let converted = document.getElementById('selection').value;
    let file = document.getElementById('get_from_file').value.replace(/^.*\\/,"");

    if(file === "" && original === "")
    {
        return alert("Поле ввола пустое ! Либо вы не выбрали файл !")
    }
    else if(original === "")
    {
        await eel.convert(file, converted)();
        alert("Конвертация прошла успешно ! \nНажмите чтобы очистить поле ввода и продолжить работу !")
        return window.location.reload();
    }
    else
    {
        await eel.convert(original, converted)();
        alert("Конвертация прошла успешно ! \nНажмите чтобы очистить поле ввода и продолжить работу !")
        return window.location.reload()
    }
}
async function convert_js()
{
    let original = document.getElementById('path').value.replace(/^.*\\/,"");
    let format = document.getElementById('selection').value;
    let file = document.getElementById('get_from_file').value.replace(/^.*\\/,"");
    let filename = document.getElementById('result').innerHTML = file

    if(!file && !original)
    {
        return alert("Вы не выбрали файл ! Либо поле пустое !")
    }
    else if(!original)
    {
        filename
        await eel.convert(file, format)();
        alert("Конвертация прошла успешно !")
        return window.location.reload();
    }
    else
    {
        await eel.convert(original, format)();
        alert("Конвертация прошла успешно !")
        return window.location.reload()
    }
}
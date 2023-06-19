$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault(); 

        const tarefaNova = $('#tarefa-nova').val();
        const novoItem = $('<li></li>');
        $(`<li>${tarefaNova}<li/>`).appendTo(novoItem);
        $(novoItem).appendTo('ol');
        $("li").click(function() {
            $('li').addClass("check");
        });
        $('#tarefa-nova').val("");
    })
})
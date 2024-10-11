// Função para scroll to top
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    $('#scrollTopBtn').click(function(){
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // Função para filtrar projetos por categoria
    $('#categoryFilter').on('keyup', function() {
        var filter = $(this).val().toLowerCase();
        var suggestions = ['Web App', 'Game'];
        $('#suggestions').empty().hide();

        // Exibir sugestões de categorias
        if (filter) {
            var filteredSuggestions = suggestions.filter(function(category) {
                return category.toLowerCase().includes(filter);
            });

            if (filteredSuggestions.length > 0) {
                filteredSuggestions.forEach(function(suggestion) {
                    $('#suggestions').append('<a href="#" class="list-group-item list-group-item-action">' + suggestion + '</a>');
                });
                $('#suggestions').show();
            }
        }

        $('.project').each(function() {
            var category = $(this).data('category');
            $(this).toggle(category.toLowerCase().indexOf(filter) > -1);
        });
    });

    // Adicionar evento de clique nas sugestões
    $(document).on('click', '#suggestions .list-group-item', function(e) {
        e.preventDefault();
        $('#categoryFilter').val($(this).text());
        $('#categoryFilter').trigger('keyup');
        $('#suggestions').hide();
    });
});
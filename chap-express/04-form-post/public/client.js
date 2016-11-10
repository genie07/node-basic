$(function(){

    $.get('/blocks', appendToList);

    function appendToList(blocks) {
        var list = [];
        var content;

        $.each(blocks, function (key, value) {
            content = '<a href="/blocks/' + key + '">' + key + '</a>' +
                ' <a href="#" data-block="' + key + '">' +
                '<img src="delete.png" width="15px"></a>';

            list.push($('<li>', { html: content }));
        });


        $('.block-list').append(list);
    }

    //submit 버튼 클릭 (블럭등록)
    $('form').on('submit', function(event) {
        event.preventDefault();

        var form = $(this);
        var blockData = form.serialize();

        $('.alert').hide();

        $.ajax({
            type: 'POST',
            url: '/blocks',
            data: blockData,
            success: function(blockName) {
                //appendToList([blockName]);
                form.trigger('reset');
            },
            error: function(err) {
                $('.alert').show();
            }
        });
    });


    //삭제 Link 클릭
    $('.block-list').on('click', 'a[data-block]', function (event) {

        event.preventDefault();

        var target = $(event.currentTarget);

        alert(target.data('block'));

        $.ajax({
            type: 'DELETE',
            url: '/blocks/' + target.data('block'),
            success: function (blockName) {
                alert(blockName);
                target.parents('li').remove();
            }
        });
    });

});


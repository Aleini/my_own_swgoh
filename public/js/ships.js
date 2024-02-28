/* eslint-disable no-undef */
function updateUIWithFilteredList(unit_array) {
    $('#container').empty();
    let htmlContent = `<ul class="list-unstyled d-flex flex-wrap justify-content-between">`

    unit_array.forEach(unit => {
        htmlContent += `
            <div class="card mr-5 ${unit.color_gear}" style="width: 10%;">
            <span class="unit-name">${unit.name}</span>
                <img class="card-img-top" src="${unit.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title" style="text-align: center;">
                        ${unit.name}
                    </h5>
                    <a href="#" class="stretched-link"></a>
                </div>`
                unit.rarity_array.forEach(rarity => {
                    htmlContent += `<i id="${rarity.id}" class="fas fa-star star-icon ${rarity.color}"></i>`
                });
            htmlContent += `</div>`;
    });
    htmlContent += `</ul>`;
    $('#container').append(htmlContent);
}

$(function () {
    $('select').select2({
        sorter: data => data.sort((a, b) => a.text.localeCompare(b.text)),
    });

    $(document).on('click', '#clean_filter', function () {
        $('select').val('').trigger('change');
        $('input').val('');
        $('#relic').prop('checked', false).trigger('change');
    })

    $(document).on('change', '.filter', function () {
        const ajaxData = {
            alignment: $('#alignment').val(),
            is_relic: $('#relic').is(':checked'),
            factions: $('#factions').val(),
            role: $('#role').val()
        }
        $.ajax({
            url: '/player/profile_ships',
            method: 'GET',
            data: ajaxData,
            success: function (unit_array) {
                if (unit_array) {
                    updateUIWithFilteredList(unit_array)
                }
            },
            error: function (err) {
                console.error(err);
            }
        })
    })
})
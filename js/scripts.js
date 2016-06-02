function setDays() {
    var startHTML = '<div class="day-input"><div class="day-input-left"><h4>';
    var endHTML = '</h4><label><input class="openCheck" type="checkbox" checked> Open</label></div><div class="day-input-right"><div class="time-select padded"><label>Open: <select class="time-list"></select></label><label>Close: <select class="time-list"></select></label></div><div class="time-select-add hidden padded"><label>Open: <select class="time-list"></select></label><label>Close: <select class="time-list"></select></label></div><div class="hours-toggle padded"><a href="#"><span class="icon">&#xf055;</span> Add additional hours</a></div></div></div>';
    var html = '';
    var daysArray = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];
    for (var i=0; i < daysArray.length; i++) {
        html += startHTML + daysArray[i] + endHTML;
    }
    return html;
}

function setTimeValues() {
    var html = '<option value=""></option>';
    var timeArray = [
        '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
    ];
    for (var i=0; i < timeArray.length; i++) {
        html += '<option value="' + timeArray[i] + '" data-order="' + i + '">' + timeArray[i] + '</option>';
    }
    return html;
}

$(document).ready(function() {
    
    /* Generate list of days */
    var daysHTML = setDays();
    var submitHTML = '<input type="submit" class="form-submit" value="Save">';
    $('.edit-hours-form').html(daysHTML + submitHTML);
    
    /* Get HTML for time dropdowns */
    var timeSelect = setTimeValues();
    
    /* Populate the dropdowns with times */
    $('.time-list').each(function() {
        $(this).html(timeSelect);
    });

    $('.hours-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).parent().find('.time-select-add').toggleClass('hidden');
    });
    
    $('.openCheck').on('click', function() {
        $(this).parent().parent().parent().find('.day-input-right').toggleClass('disabled');
    });
    
    /* Client-side time validation */
});
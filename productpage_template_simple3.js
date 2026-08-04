    $(document).ready(function () {

        // いったん全部閉じる
        $('.accordion-group__content').hide();

        // activeが付いてるものだけ開く
        $('.accordion-group.active .accordion-group__content').show();

        $('.accordion-group__title').click(function () {
            $(this).next('.accordion-group__content').slideToggle();
            $(this).closest('.accordion-group').toggleClass('active');
        });

    });

    // FAQ
    $(document).on('click', '.faqWrap:not(.faqWrap--noJS) dt', function () {
        $(this).toggleClass('open').next('dd').slideToggle(0);
    });
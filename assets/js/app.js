;(function ($) {
    'use strict';
    let windowWidth = $(window).width();

    let initSidebar = function () {
        let btnCall = $('#call-sidebar'),
            overlay = $('#cpanel-overlay'),
            templateCpanel = $('#template-cpanel');

        btnCall.add(overlay).click(function () {
            if (!templateCpanel.is('.sidebar-show')) {
                templateCpanel.addClass('sidebar-show').attr({'style': 'overflow: hidden; height: 100vh; position: fixed'});
            } else {
                templateCpanel.removeClass('sidebar-show').attr({'style': ''});
            }
        });
    }

    let initClipboardCopy = function (value) {
        let createTextarea = document.createElement('textarea');
        createTextarea.style.cssText = 'position: absolute; left: -99999px';
        createTextarea.setAttribute("id", "textareaCopy");
        document.body.appendChild(createTextarea);
        let textareaElm = document.getElementById('textareaCopy');
        textareaElm.value = value;
        textareaElm.select();
        textareaElm.setSelectionRange(0, 99999);
        document.execCommand("copy");
        textareaElm.remove();
    }

    let initSelect2 = function () {
        if ($('.initSelect2').length) {
            $('.initSelect2').each(function () {
                let dropdownParent = $(this).parent();
                $(this).select2({
                    language: 'vi',
                    dropdownParent: dropdownParent,
                });
            })
        }
    }

    let initTree = function () {
        if ($('#initTree').length > 0) {
            let treeList = $('#initTree').children('ul'),
                nodeList = treeList.children('li'),
                lastList = treeList.children('li').last().height();
            treeList.css('--set-height', treeList.height() - lastList + 'px');

            nodeList.children('.expanded-tree').click(function () {
                let nodeItem = $(this);
                if (nodeItem.parent().hasClass('is-hide')) {
                    nodeItem.parent().removeClass('is-hide');
                    nodeItem.find('i').removeClass('fa-plus').addClass('fa-minus');
                } else {
                    nodeItem.parent().addClass('is-hide');
                    nodeItem.find('i').removeClass('fa-minus').addClass('fa-plus');
                }
            });
        }
    };

    let initDanhSachSideBar = function () {
        let btnCall = $('#call-danhsach'),
            overlay = $('#danhsach-overlay'),
            danhSachWrap = $('#danhsach-wrap');

        btnCall.add(overlay).click(function () {
            if (!danhSachWrap.is('.is-show')) {
                danhSachWrap.addClass('is-show');
                $('body').attr({'style': 'overflow: hidden; height: 100vh; position: fixed'});
            } else {
                danhSachWrap.removeClass('is-show');
                $('body').attr({'style': ''});
            }
        });
    }

    $(function () {
        initSidebar();
        initSelect2();
        initTree();
        initDanhSachSideBar();

        $(document).on('click', '.copy-value', function () {
            if ($(this).attr('data-value') != undefined) {
                initClipboardCopy($(this).attr('data-value'));
            } else {
                initClipboardCopy($(this).parent().find('input').val());
            }
        });
    });
})(jQuery);
;(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	let switchTheme = function () {
		let buttonChangeTheme = $('#changeTheme'),
			currentTheme = localStorage.getItem('theme');

		if (currentTheme) {
			$('html').attr('data-theme', currentTheme);
			if (currentTheme === 'light') {
				buttonChangeTheme.find('#light').hide();
				buttonChangeTheme.find('#dark').show();
			} else {
				buttonChangeTheme.find('#light').show();
				buttonChangeTheme.find('#dark').hide();
			}
		}

		function setLocalStorageTheme(e) {
			if ($('html').attr('data-theme') === 'light') {
				$('html').attr('data-theme', 'dark');
				localStorage.setItem('theme', 'dark');
				buttonChangeTheme.find('#light').show();
				buttonChangeTheme.find('#dark').hide();
			} else {
				$('html').attr('data-theme', 'light');
				localStorage.setItem('theme', 'light');
				buttonChangeTheme.find('#light').hide();
				buttonChangeTheme.find('#dark').show();
			}
		}

		buttonChangeTheme.click(function () {
			setLocalStorageTheme();
		});
	}

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

	let initFromModule1 = function () {
		let elmWrapper = $('#createRow');
		$('#createRow').on('click', '.addRow', function () {
			let theCaoSelect = $(this).closest('.row-item').find('#theCao'),
				theCaoIndexSelected = theCaoSelect.find('option:selected').attr('data-index'),
				theCaoRender = $(this).closest('.row-item').find('#theCao').clone();

			theCaoRender.find('option').attr('selected', false);
			theCaoRender.find('option[data-index=' + theCaoIndexSelected + ']').attr('selected', true);

			let menhGiaSelect = $(this).closest('.row-item').find('#menhGia'),
				menhGiaIndexSelected = menhGiaSelect.find('option:selected').attr('data-index'),
				menhGiaRender = $(this).closest('.row-item').find('#menhGia').clone();

			menhGiaRender.find('option').attr('selected', false);
			menhGiaRender.find('option[data-index=' + menhGiaIndexSelected + ']').attr('selected', true);

			let rowRender = `<div class="row-item row row5 rowmb3">
                            <div class="col-lg-3 col-sm-12 col-12">
							    ${theCaoRender[0].innerHTML}
							 </div>
							<div class="col-lg-3 col-sm-6 col-12">
							    <div class="position-relative form-icon form-icon_right">
								    <input type="text" class="form-control" placeholder="Mã thẻ">
                                    <button type="button" class="copy-value form-button">
                                        <i class="fas fa-paste"></i>
                                    </button>
								</div>
							</div>
							<div class="col-lg-3 col-sm-6 col-12">
							    <div class="position-relative form-icon form-icon_right">
								    <input type="text" class="form-control" placeholder="Mã seri">
                                    <button type="button" class="copy-value form-button">
                                        <i class="fas fa-paste"></i>
                                    </button>
								</div>
							</div>
							<div class="col-lg-2 col-sm-10 col-9">
							    ${menhGiaRender[0].innerHTML}
							</div>
							<div class="col-lg-1 col-sm-2 col-3 text-right">
								<button type="button" class="btn btn-small btn-danger deleteRow">
									<i class="fas fa-trash-alt"></i>
								</button>
							</div>
						</div>`;
			elmWrapper.append(rowRender);
		}).on('click', '.deleteRow', function () {
			$(this).closest('.row-item').remove();
		});
	}

	$(function () {
		initSidebar();
		initSelect2();
		initTree();
		initDanhSachSideBar();
		switchTheme();
		initFromModule1();

		$(document).on('click', '.copy-value', function () {
			if ($(this).attr('data-value') != undefined) {
				initClipboardCopy($(this).attr('data-value'));
			} else {
				initClipboardCopy($(this).parent().find('input').val());
			}
		});
	});
})(jQuery);
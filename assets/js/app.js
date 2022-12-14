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
			let rowRender = `<div class="row row3 mt-0 row-item">
								<div class="col-lg-3 col-sm-6">
									<div class="position-relative row row3">
										<label for=""
											   class="col-form-label align-self-center col-4">
											??K kh??m
										</label>
										<div class="col-8">
											<div class="position-relative">
												<select name="" id=""
														class="form-control initSelect2">
													<option value="">Kh??m M???t
													</option>
													<option value="">Kh??m Ngo???i
														khoa
													</option>
													<option value="">Kh??m N???i
														khoa
													</option>
													<option value="">Kh??m N???i
														ti???t
													</option>
													<option value="">Kh??m Ph???
														s???n
													</option>
													<option value="">Kh??m R??ng
														h??m
														m???t
													</option>
													<option value="">Kh??m Tai
														m??i
														h???ng
													</option>
													<option value="">Kh??m T??m
														th???n
													</option>
													<option value="">Kh??m Ung
														b?????u
													</option>
													<option value="">Kh??m YHCT
													</option>
													<option value="">Kh??m Lao
													</option>
													<option value="">Kh??m N???i H??
														H???p
													</option>
													<option value="">Kh??m Ngo???i
														th???n
														-
														ti???t
														ni???u
													</option>
													<option value="">Kh??m Ch???n
														th????ng
														ch???nh
														h??nh
													</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 align-self-center">
									<div class="position-relative row row3">
										<label for=""
											   class="col-form-label align-self-center col-12">
											L??c:&nbsp;<span class="ml-2">07:01
											10/07/2021</span>
										</label>
									</div>
								</div>
								<div class="col-lg-6 col-sm-6">
									<div class="position-relative row row3">
										<label for=""
											   class="col-form-label align-self-center col-4 col-lg-2">
											L?? do kh??m
										</label>
										<div class="col-8 col-lg-10">
											<input type="text"
												   class="form-control"
												   placeholder="Nh???p l?? do kh??m">
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-sm-6">
									<div class="position-relative row row3">
										<label for=""
											   class="col-form-label align-self-center col-4 col-lg-2">
											D???ch v???
										</label>
										<div class="col-8 col-lg-10">
											<select name="" id=""
													class="form-control">
												<option value="">D???ch v??? 1
												</option>
												<option value="">D???ch v??? 2
												</option>
												<option value="">D???ch v??? 3
												</option>
												<option value="">D???ch v??? 4
												</option>
												<option value="">D???ch v??? 5
												</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="position-relative row row3">
										<label for=""
											   class="col-form-label align-self-center col-4 col-sm-2 col-lg-2">
											Ph??ng kh??m
										</label>
										<div class="col-6 col-sm-8 col-lg-9">
											<div class="position-relative">
												<select name="" id=""
														class="form-control initSelect2">
													<option value="">PK 1
													</option>
													<option value="">PK 2
													</option>
													<option value="">PK 3
													</option>
													<option value="">PK 4
													</option>
													<option value="">PK 5
													</option>
													<option value="">PK 6
													</option>
													<option value="">PK 7
													</option>
													<option value="">PK 8
													</option>
													<option value="">PK 9
													</option>
													<option value="">PK 10
													</option>
													<option value="">PK 11
													</option>
													<option value="">PK 12
													</option>
													<option value="">PK 13
													</option>
													<option value="">PK 14
													</option>
													<option value="">PK 15
													</option>
												</select>
											</div>
										</div>
										<div class="col-2 col-lg-1">
											<button type="button" class="btn btn-small btn-danger deleteRow w-100">
												<i class="fas fa-trash-alt"></i>
											</button>
										</div>
									</div>
								</div>
							</div>`;
			elmWrapper.append(rowRender);
			initSelect2();
		}).on('click', '.deleteRow', function () {
			$(this).closest('.row-item').remove();
		});
	}

	let handleQuickSearch = function () {
		if ($('.handle-quickSearch').length && $('.handle-quickSearch_input').length) {
			$('.handle-quickSearch_input').keyup(function () {
				$(this).parent('.handle-quickSearch').addClass('is-quickSearch');
				if ($(this).parent('.handle-quickSearch').parents('.table-responsive').length) {
					$(this).parent('.handle-quickSearch').parents('.table-responsive').css('overflow', 'inherit');
				}
			});

			$(document).mouseup(function (e) {
				if (!$('.handle-quickSearch.is-quickSearch').is(e.target) && $('.handle-quickSearch.is-quickSearch').has(e.target).length === 0) {
					$('.handle-quickSearch.is-quickSearch').removeClass('is-quickSearch');
					$('.handle-quickSearch').parents('.table-responsive').css({'overflow-x': 'auto', 'overflow-y': 'hidden'});
				}
			});
		}
	}

	$(function () {
		initSidebar();
		initSelect2();
		initTree();
		initDanhSachSideBar();
		switchTheme();
		initFromModule1();
		handleQuickSearch();

		$(document).on('click', '.copy-value', function () {
			if ($(this).attr('data-value') != undefined) {
				initClipboardCopy($(this).attr('data-value'));
			} else {
				initClipboardCopy($(this).parent().find('input').val());
			}
		});
	});
})(jQuery);
// rightside
if (document.querySelector('.menu__link_btn')) {
	const menuLinkBtn = document.querySelector('.menu__link_btn');
	const rightside = document.querySelector('.rightside');
	const rightsideClose = document.querySelector('.rightside__close');
	let rightsideCloseActive = rightsideClose.classList.add('_active');

	menuLinkBtn.addEventListener("click", function () {
		rightsideClose.classList.remove("_active");
		rightside.classList.add("_active");
		rightsideClose.classList.add("_active");
	});

	rightsideClose.addEventListener("click", function () {
		rightside.classList.remove("_active");
		rightsideClose.classList.remove("_active");
	});
}
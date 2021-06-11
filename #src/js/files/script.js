// rightside
if (document.querySelector('.menu__link_btn')) {
	const menuLinkBtn = document.querySelector('.menu__link_btn');
	const rightside = document.querySelector('.rightside');
	const rightsideClose = document.querySelector('.rightside__close');

	menuLinkBtn.addEventListener("click", function () {
		rightsideClose.classList.remove("_active");
		rightside.classList.toggle("_active");
		rightsideClose.classList.toggle("_active");
	});

	rightsideClose.addEventListener("click", function () {
		rightside.classList.remove("_active");
		rightsideClose.classList.remove("_active");

	});
}
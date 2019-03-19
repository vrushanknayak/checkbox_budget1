$(document).ready(function () {
	const total_budget = parseFloat($(".total_budget").find("span").text());

	$("body").on("change", "input[type='checkbox']", function (e) {
		let remaining = total_budget;

		$("input[type='checkbox']:checked").each(function () {
			const $this_checkbox = $(this);
			const value = parseFloat($this_checkbox.val());

			remaining = remaining - value;

		});
		console.log(remaining);
		$(".total_budget").find("span").text(remaining);

		if (remaining < 0) {
			$(".total_budget").addClass("newcolor");
		} else {
			$(".total_budget").removeClass("newcolor")
		}
	});
});
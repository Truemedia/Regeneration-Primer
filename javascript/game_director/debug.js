function initDebugger(){
	pointsDebugger();
}
function pointsDebugger(){
	// Hide or show manual score incrementers
	jQuery(".score_submit").toggle();
	// Hide or show global manual score incrementer
	jQuery("#score_debug_panel").toggle();
}
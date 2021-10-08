function $(selector){
	var el;
	if (typeof selector === "string" || selector instanceof String) {
		el = document.querySelector(selector);
	} else {
		el = selector;
	}
	const self = {
		//element: document.querySelector(el),
		element: el,
		
		attr:(name, value) => {
			if(value == null){
				self.element.getAttribute(name);
			} else{
				self.element.setAttribute(name, value);
			}
		},
		
		hide:()=>{
			self.element.style.display = "none";
		},
		show:()=>{
			self.element.style.display = "block";
		},
		toggle:()=>{
			if(self.element.style.display == "none"){
				self.element.style.display = "block";
			} else {
				self.element.style.display = "none";
			}
		},
		val:(value)=> {
			if(value == null){
				return self.element.value;
			} else {
				self.element.value = value;
			}
		},
		html:(value) => {
			if(value == null){
				self.element.innerHTML;
			} else {
				self.element.innerHTML = value;
			}
		},
		append:(value)=> {
			if(value == null){
				self.element.innerHTML;
			} else {
				self.element.innerHTML += value;
			}
		},
		remove:(value)=> {
			self.element.remove();
		},
		
		each:(fn) => {
			elements = document.querySelectorAll(selector);
			for (var i = 0; i < elements.length; i++){
				fn(elements[i]);
			}
		},
		
		on:(event, callback) => {
			self.element.addEventListener(event, callback);
		}
	}
	return self;
}
function caseSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("kbCase");
    filter = input.value.toUpperCase();
    ul = document.getElementById("caseList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$('.btn-back').on("click", function(){
	var cfno = $('.cfno').val();
	var cf = (parseInt(cfno)-1);
	if(cf > 0){
		$('.cfno').val(cf);
		$(".cf-"+cfno).hide();
		$(".cf-"+cf).show();
	}
});
$('.btn-next').on("click", function(){
	var cfCnt = document.querySelectorAll('.call-flow').length;
	var cfno = $('.cfno').val();
	var cf = (parseInt(cfno)+1);
	if(cf <= cfCnt){
		$('.cfno').val(cf);
		$(".cf-"+cfno).hide();
		$(".cf-"+cf).show();
	}
});

/*$('.btn').each(function(e){
	$(e).on("click", function(){
		//alert(this.nodeName + " | " + this.innerHTML);
		var cfno = $('.cfno').val();
		var cfnoNext = (parseInt(cfno)+1);
		//alert(cfno + " | " + cfnoNext);
	});
});*/


function updateCP() {
    var div_cp = document.getElementById('cp');//A HTML document that uses this script must have a div tag with the id 'cp'.
    if(typeof elem !== null && elem !== 'undefined' ) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', 'http://192.168.1.2:8000/', true);//icecast broadcast address
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    var elems = xmlhttp.responseXML.getElementsByClassName('streamstats');
                    var str = '';
                    Array.prototype.forEach.call(elems, function(el) {
                        str = el.innerText;
                    });
                    div_cp.innerHTML = '<p>Currently playing: ' + str + '</p>';
                }
	    }
	}
	xmlhttp.send(null);
    }
}

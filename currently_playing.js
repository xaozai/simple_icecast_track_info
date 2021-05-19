function updateCP() {
    var div_cp = document.getElementById('cp');//A HTML document that uses this script must have a div tag with the id 'cp'.
    if(typeof div_cp !== null && div_cp !== 'undefined' ) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', 'http://192.168.1.2:8000/status-json.xsl', true);//icecast broadcast address (http://194.116.73.162/status-json.xsl for example)
        xmlhttp.responseType = 'json';
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    div_cp.innerHTML = '<p>Currently playing: ' + xmlhttp.response.icestats.source[0].title + '</p>';//[0] replace with your source index
                }
            }
        }
        xmlhttp.send(null);
    }
}

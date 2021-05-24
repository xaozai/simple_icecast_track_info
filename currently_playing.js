function getJsonData(url) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', url, true);
        xmlhttp.responseType = 'json';
        xmlhttp.send(null);
        xmlhttp.addEventListener('error', () => reject(xmlhttp.statusText));
        xmlhttp.addEventListener('abort', () => reject(xmlhttp.statusText));
        xmlhttp.addEventListener('load', () => {
            if (xmlhttp.status == 200) {
                resolve(xmlhttp.response);
            } else {
                reject(xmlhttp.statusText);
            }
        });
    });
}

function updateCP() {
    var div_cp = document.getElementById('cp');//A HTML document that uses this script must have a div tag with the id 'cp'.
    if (typeof div_cp !== null && div_cp !== 'undefined') {
        getJsonData('http://192.168.1.2:8000/status-json.xsl')//icecast broadcast address with status-json.xsl (http://194.116.73.162/status-json.xsl for example)
            .then((jsonData) => {
                div_cp.innerHTML = '<p>Currently playing: ' + jsonData.icestats.source[0].title + '</p>';//[0] replace with your source index
            })
            .catch((reasonText) => {
                div_cp.innerHTML = `<p>Currently playing: <font color="#ffb6c1">Error!</font> Unable to load data (${reasonText}).</p>`;
            });
    }
}

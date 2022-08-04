// document.getElementById('id_button_getAll').onclick = () => {
  
  chrome.cookies.getAll(getDetails('getAll'), ((cookies) => {
    let text ='Number of cookies=' + cookies.length + '\n';
    for (let cookie of cookies){
      if((cookie.name == 'PHPSESSID' && cookie.domain == '.immobiliare.it') || (cookie.name == 'PROMLSSID' && cookie.domain == '.immobiliare.it') || (cookie.name == 'hl' && cookie.domain == 'www.idealista.it')){
        chrome.cookies.set(getDetails('set','localhost',cookie.name,cookie.value));
        text += 'domain=' + cookie.domain + ',path=' + cookie.path + ',name=' + cookie.name + ',value=' + cookie.value + '\n';
      }
    }
    console.log(text)
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    // });
    // document.getElementById('id_text').value = text;
  }));
// }

// document.getElementById('id_button_set').onclick = () => {
//   chrome.cookies.set(getDetails('set'));
// }

// document.getElementById('id_button_remove').onclick = () => {
//   chrome.cookies.remove(getDetails('remove'));
// }

function getDetails(kind,domain='', name='', val=''){
  // let domain =document.getElementById('id_domain').value;
  let path = '/';
  // let name = document.getElementById('id_name').value;
  let value = val;
  let details = {};

  switch(kind){
  case 'getAll':
    if (domain != ''){
      details['domain'] = domain;
    }
    if (name != ''){
      details['name'] = name;
    }
    break;
  case 'set':
    details['url'] = 'https://' + domain + path;
    details['name'] = name;
    details['value'] = value;
    break;
  case 'remove':
    details['url'] = 'https://' + domain + path;
    details['name'] = name;
    break;
  }
  return details;
}
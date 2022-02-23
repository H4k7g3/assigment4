    const htmlElement = document.documentElement;
    const headElement = document.head;
    const bodyELement = document.body;

    console.log(htmlElement);
    console.log(headElement);
    console.log(bodyELement);

    const childNodes = bodyELement.childNodes;
    console.log(childNodes);

    console.log(bodyELement.hasChildNodes());

    for (let node of childNodes) {
        console.log(node);
    }

    const firstChild = bodyELement.firstElementChild;
    console.log(firstChild);

    var elems1;
    var elems2;
    var elems3;
    var elems4;
    var elems5;
    var elems6;

    function searchSelectorAll(name){
        elems1 = document.querySelectorAll(name);
        console.log(elems1);
    }
    function searchSelector(name){
        elems2 = document.querySelector(name);
        console.log(elems2);
    }
    function searchById(id){
        elems3 = document.getElementById(id);
        console.log(elems3);
    }
    function searchByTageName(name){
        elems4 = document.getElementsByTagName(name);
        console.log(elems4);
    }
    function searchByClassName(name){
        elems5 = document.getElementsByClassName(name);
        console.log(elems5);
    }

    const textElement = document.querySelector(".pTitle");

    const textELementContent = textElement.innerHTML;
    console.log(textELementContent);

    //textElement.innerHTML = "QWEZXCASD";


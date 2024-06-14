const own = document.querySelector('#own');
const att = {
 height:"100px",
 width:"100px",
 display:"none"
}



const element = defineElement("h1",att,"aryan tapre");
own.appendChild(element);


function defineElement(elementName, elementAttributes, elementContent) {
    const element = document.createElement(elementName);
    element.style.color="red";    
    const data = document.createTextNode(elementContent);

    for(const key in elementAttributes) {
        element.setAttribute(key.toString(),elementAttributes[key]);
    }
    
 
    element.appendChild(data);
    return element;
}



const frase=prompt("Ingrese una frase")
let i=0;
let subfrase='';

while(i<frase.length){
    if((frase[i]=='a')||(frase[i]=='i')||(frase[i]=='e')||(frase[i]=='o')||(frase[i]=='u')){
        subfrase=subfrase+frase[i];
    }
    i++;
}

document.writeln(frase)
document.writeln(subfrase)
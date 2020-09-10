export function shortenName(name){
    if(name.length > 9){
        name = name.substr(0, 7) + '...'; 
        return name
    }
    else {
        return name
    }
}
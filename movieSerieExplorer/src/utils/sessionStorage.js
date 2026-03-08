export const saveScrollPosition = (position) =>{
    sessionStorage.setItem("positonY", position);
}

export const getScrollPosition = () =>{
    return sessionStorage.getItem("positonY");
}
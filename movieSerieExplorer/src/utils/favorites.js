const FAVORITES_KEY = "favorites";

export const getFavorites = () =>{
    const favoritesList = localStorage.getItem(FAVORITES_KEY);
    return JSON.parse(favoritesList);
}

export const addFavoriteMedia = (id, mediaType, poster_path) =>{
    //Si no hay favoritos agregados entonces que se agregué directamente como array
    //Indica que no hay favoritos
    if (!getFavorites()) {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([{ id, mediaType, poster_path }]));
    }else{
        //Por lo contrario, si resulta que sí hay favoritos, se agregan a los existentes
        const favorites = getFavorites();
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites, { id, mediaType, poster_path }]));
    }
}

export const removeFromFavorites = (id) =>{
    const favorites = getFavorites();
    const favoritesUpdated = favorites.filter((fav) => {
        return fav.id != id
    })
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesUpdated));
}

export const checkIsFavorite = (id, mediaType) =>{
    const favorites = getFavorites();
    //No hay favoritos guardados en el local, si lo quito no muestra los detalles
    if (!favorites) {
        return false;
    }
    //Verificando si ya ha sido agregado el componente, some() es un metodo de comprobacion, verifica si un
    //elemento del array cumple con la condicion
    const isAlreadyAdded = favorites.some((fav) => fav.id == id && fav.mediaType == mediaType);
    return isAlreadyAdded;

}

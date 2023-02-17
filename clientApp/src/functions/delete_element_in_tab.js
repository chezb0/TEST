const delete_element_in_tab = (tab, predicate)=>{
    for (var i = 0; i < tab.length; i++) {
        if (predicate(tab[i])) {
        return tab.splice(i, 1);
        }
    }
}


export default delete_element_in_tab
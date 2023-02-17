# Là, vous voyez deux applications: application client(clientApp) et application serveur(serverApp)

# Pour pouvoir lancer l'application serveur, vous devez installer django et quelques paquets en compléments
# Une fois tous les paquets installés, changer ALLOWED_HOSTS = ['192.168.10.210'] dans /test_project/settings.py par ALLOWED_HOSTS = ['Adresse ip de votre machine']
# Puis lancer la commande python manage.py runserver 'adresse ip de votre pc:port choisi' dans le terminal dépuis le dossier racine


# Pour lancer l'application client, vous devez installer node js, puis lancer la commande 'npm install' dans le terminal dépuis le dossier clientApp
# Ensuite changer 'let BaseUrl = "http://192.168.10.210:8000/"' dans src/connexions/Connexions.js par 'let BaseUrl = "http://adresse ip de votre pc:port choisi/"'
# Puis lancer la commande npm start


from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import json
import requests

# Create your views here.

@csrf_exempt
def onFilter(request):
    try: 
        if request.method == 'POST':
            query = json.loads(request.body)["query"]
            #print("query: ", query)
            tab = query.split("/?page")
            ref = ""
            if len(tab) > 1:
                ref = tab[0]
            url = f'https://swapi.dev/api/{query}'
            isOk = False
            isList = False
            msg = ""
            catego = query.split("/")[0]
            if not catego:
                catego = query
            response = requests.get(url)
            if response.ok:
                if query == "people" or query == "planets" or query == "starships" or ref == "people" or ref == "planets" or ref == "starships":
                    data = response.json()["results"]
                    isList = True
                else:
                    data = response.json()
                isOk = True
            else:
                data = {}
                msg = "Auccune donnée n'est trouvée !"
            return JsonResponse({"isOk": isOk, "isList": isList, "msg": msg, "data": data, "catego": catego})
        else:
            return JsonResponse({"isOk": False, "msg": "Ceci n'est pas un post !"})
    except:
        return JsonResponse({"isOk": False, "msg": "Une erreur s'est produite dans le serveur !"})

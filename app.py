from flask import Flask, request, jsonify, abort
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

conteudos = [
    { "name": 'Meu Malvado Favorito', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Fkdy90Znd6bjk5OENvMWdidmhjMzFLcEhiNzd0RllUUENCZFlmSXNOV210bE9YNjZQdEFjRmswMFViMm5iMnJneGorUkV4bzM3aWZwZ2NmYnNWUTN4a3IyKzJXdEJDb1Z5WHdJajg2Rzg0TGRTQWhTTFJSU05lVDFYM3dGWkJpQlVZMTljMUk9' },
    { "name": 'Meu Malvado Favorito 2', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Fkdy90Znd6bjk5OENvMWdidmhjMzFLcEhiNzN0RllUUENCZFlmSXNOV210bE9YNjZQdEFjRmswMFViMm5iMnJnd1RhUUd4cGQ0eVhUditlTXZuVmg0VEhSNGhlMkEwOFNnUVp2eC9xQjhhQzZHbkpQZUE5dmZzS1hSVGwwTTN5QlRMYzJFVE8rZkE9PQ==' },
    { "name": 'Meu Malvado Favorito 3', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Fkdy90Znd6bjk5OENvMWdidmhjMzFLcEhiN3p0RllUUENCZFlmSXNOV210bE9YNjZQdEFjRmswMFViMm5iMnJnekRlVUV4cHNxbVhGbGZ5OWcwOEMrbmpZMGppaUVod1RpeWw1dWRQeWtiTFRYSGRJTXo4d2Z1eVRmbU1LWng3d2I3OTljMUk9' },
    { "name": 'Meu Malvado Favorito 4', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMWdidmhjMzFLcEhiN3Z0RllUUENCZFlmSXNOV210bE9YNjZQdEFjRmswMFViMm5iMnJnekRhWEVocHAvQTNKb3NpNHRFQXo3RFBKcEFLTGV6NE5xU2s1a2NpRm5LT05aU1lwT3h0WFk3SGhhbWdwZWdtMEJ1b2VlRE8rZkE9PQ==' },
    { "name": 'Jogador N° 1', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Fkdy90Znd6bjk5OENvMThadHdrdm9jSnJTYnY4Rm9ISVRUaDhMTWdFU0RzYkUwckRDSTlhYXc0OFZyNnNiMi9tMkRhRkVIVlcvQ2V3aSttVGxtc1M2WFgzOFFPSlowb2JxSGN0bFBDcHBvVzhjQ3A4SkExT0hPYVZRbXNxVWliN0J1c2M=' },
    { "name": 'Dragon Ball GT: O Legado de um Herói (Original)', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3eFRPbGN0MkVXR3ZkeGJxZnd6bDVaNGl6bElLdng0bTFxVktkTXJ5VnBtTEEwWkRPc0kyU2xrL1NIWEtTdlVKSzNaNFhidWlhR25pd0RTVUZROHB4aURoamZ2UDUwUTVzeldPL3llVkVnQWRtMzByait1N3FQWGFabkZoSERaZUV2clZRVnR4UURld0J1b2FKeWFvQ3pRPQ==' },
    { "name": 'Ted 2', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Nkdy90Znd6bjk5OENvMEVidDJsUC9ad3lCdUcyUzQ2Nlpob1VCN0ovVEdvck8weTBTSVZaYVFvL1ZycWphWEhsdGtUS1prVnY1ejNQZyt1NHVHa2MyVlR2NXlDT0V4SXNtUlFuek9xRDlLVFpaekJ4RDFrL0F0UDJOam9D' },
    { "name": 'Projeto X: Uma Festa Fora de Controle', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Fkdy90Znd6bjk5OENvMFVNdVE4dXlMbEFmOHVBVnBtTEEwWkRPc0kyU2xrL1NIWEtTdlVKSzNaNFhidWlhR25pd3pHUkZnY3B2MlMxaWRhKzhEUVR1MkhVcHdiUk5EZG9xU1UvbE1tbHZmU09SZ2RnY2hZK0NNamhYbnAzTGhlSlRwRU5aU1hK' },
    { "name": 'SuperBad - É Hoje', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Jkdy90Znd6bjk5OENvMFlPb1JrbDFhUk1GK0t6VE11VlFrcFhEcUF2TWtBZlFucnJEdmdhWVEwK1VyK2piR3JteGpPTkYwMVEzQnUybC9pb3VrNFE4WHZQNTJhc0RTb3VsU1krd2M2WW80T01Rd3B0SWdodk10dkJKVWd6VzJ2d1p3PT0=' },
    { "name": 'O Lobo de Wall Street', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Jkdy90Znd6bjk5OENvMW9Tc1JRbHg2QlZiZDJYVnBtTEEwWkRPc0kyU2xrL1NIWEtTdlVKSzNaNFhidWlhR25pd3pHWkd3SXAvUzN6c2ZHdzRrSmdyakQ1M1RLWE5qc050VDF6eE51Z29hVy9YbmQrRFFRamRNV2JkM2d1VXoyU1I1b2hNQ2FvQ3pRPQ==' },
    { "name": 'Divertida Mente', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Nkdy90Znd6bjk5OENvMUVJb1E4bDNhSlNGK0t6VE11VlFrcFhEcUF2TWtBZlFucnJEdmdhWVEwK1VyK2pibTdoeERHTmJnRnZ1alBWck5TNW9WUmo3Mm1IckRtSEVoSUxxRGt6bDg2cXNMS3NUbWNxQ1J0dUxjaktZMWswVVNhS0J1c2M=' },
    { "name": 'Divertida Mente 2', "url": 'https://www.mediafire.com/file/yk6bey2v3948gsx/ssstwitter.com_1725914471977.mp4/file' },
    { "name": 'Até o Último Homem', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMVFLdkE0dDJLRklGK0t6VE11VlFrcFhEcUF2TWtBZlFucnJEdmdhWVEwK1VyK2piR3ZseEQrTloxNUR3Z2ZDNitpQW1rQTEvR1dNN1R1TklWMXJxaUlBek5uK29veWlUamgzRHdseUk4NkdJVThuVGdtSkJ1b2FNek8rZkE9PQ==' },
    { "name": 'The Flash (2023)', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Fkdy90Znd6bjk5OENvMEVXdGgwdHc2UW9WUC8zUjVxT0JBTnNIcEoxUTB0dk5sLytNOE5XYlFzN1ZieWpiV3ZneFNyS1puUis2REMyaW95dWxtazh1R3FQd0FlcGRDc2dyUVVvZ2VTRXI0cWdYWE5WQVNScktMYlFhMTBQTTMySA==' },
    { "name": 'Um Lugar Silencioso: Dia Um', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMEFUdnh3enc2Qkllc0NRUEwyNllqUURJb0Y0TkdZcFFrZklLTkZTRkg4NkoramlFQzNweERDU0Z3RXl0MmUvNnBPOHRtVUE1VnZWN0REY0VoVnZoQzE1djVuNWd2SzZjeVVxZnpwd052TE5mR29lVWhqeVd1ZzVMSG5VSFVMMnUrY0RSZz09' },
    { "name": 'Eu vi o Brilho da TV', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMUFMcFJJdTByNUtjY3VYTHRxV1IwMFNJWVIvY1VrTkVnVEJPb0VzUGt0REViZWtiVzdod2pPWUVBRXlvanZzak5uWmt6Rm00U2VOMDJPTGNoMGZyaDBadCttc3JvbmNTR2NxRFRwd0lQcVZkemtqWkNPMGNwNXBFVVhtSFVQdw==' },
    { "name": 'Invocação do Mal', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMXdRcFJnZzM2aExkYUd1Q01ERVdRd2VOYkFkYURFVU1nN09HOFVoTFFFNFY3aWdiV2pzeGo2UkQyRksxeVcvaW82NjRUTXIwVXpwNUJxTEJUVVEyeDkrcDQyRXArTFlhelIzTXp0SUtiWDNhaXgwVUgyUUc1UXZaU1hK' },
    { "name": 'Invocação do Mal 2', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMXdRcFJnZzM2aExkYjN0RllUUENCZFlmSXNOV210bE9YNjZQdEFjRmswMFViMm5iMnZnelRPVkVocFU3UjdtcWRXdHZHUmczVkhvOGdLeEd4VXQxQ3R5bk9xc2gvS1NFUTVnQ2l0SklNQ1dLbmdmWnoyMEJ1c2M=' },
    { "name": 'Invocação do Mal 3: A Ordem do Demônio', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Jkdy90Znd6bjk5OENvMXdRcFJnZzM2aExkYnlDTjZhL2VqMW9BcjVpWm5ob1RsUDhTc2dxRFY4d0tNbW1IVDZqdjNhZEV3QTJ1bUN6NDR2YTVTdGt1MDcyOWhHcUt4TXF1M1laalltc2tiV0VlaUZ4ZXd0Y0k5RFdabDhpSlFDTVRMY1NLR2ZwYndLQTIvRjA=' },
    { "name": 'Bad Boys: Até o Fim', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMWNhc1FJeTBiaEpmOEx0RllUUENCZFlmSXNOV210bE9YNjZQdEFjRmswMFViMm5iMnZnelRHU0VocFIrUVROb3ZpUHBqWWMyVFRIOHcrUEp4d0toZzArdk1tUC9ZNm1UM1ZzS2tzMEFMYndJMzAvZnhlSlJwVjljMUk9' },
    { "name": 'Bad Boys Para Sempre', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Jkdy90Znd6bjk5OENvMWNhc1FJeXdMNVZkTitSVnBtTEEwWkRPc0kyU2xrL1NIWEtTdlVKSzNaNFhidWlhR25qd1QrWEd3TXAraTdla29pbmoyMWl2WFRMelNLOEpVOXRnMzU3bXQ2cXA2clBHd1JMS2pwOEpPWGthMkF2Y0IzbUVaNDhkM0dvQ3pRPQ==' },
    { "name": 'Planeta dos Macacos: O Reinado (2024)', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMFVTdlE4bHc2RkZkTXlRTjZhMWN6WURJb0Y0TkdZcFFrZklLTkZTRkg4NkoramlFQzNweERDU0Z3QXd0MjYyNjVPcnMwUXozMHpJOGlTbENRZ29xbjE3aGZpZGhveWpSQWRvUEZkVUhNWEtWbk0xUlIveFI0dzZHa0w2SFVQdw==' },
    { "name": 'Planeta dos Macacos: A Guerra (2017)', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Fkdy90Znd6bjk5OENvMFVTdlE4bHc2RkZkTXlRT2JPcFpUZ0RJb0Y0TkdZcFFrZklLTkZTRkg4NkoramlFQzNweERDU0Z3QXd0bWV5NjVPanYxNFd3azM5elJLaktSeHZwaVE4c1l6enRiM2NhaUYvQlZadERNU1hKekEvVUhlZ0YrMFRESGZJSFVQdw==' },
    { "name": 'A Fuga do Planeta Terra', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMVFZdEJvbHdLQkliZDJDVnBtTEEwWkRPc0kyU2xrL1NIWEtTdlVKSzNaNFhidWlhR25qd1Q2UkZROHA0UzdEa1kyeW5pTmp5V2IyMFdQQmNENHpxUThEaE8yKzRmV3NSU0ZOSlI1Q051bm5jRXNmYkRtTmN1Z3FBa1RmZFZXSHVnPT0=' },
    { "name": 'Guerra Civil', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMUlib1JvaXhxQW9WUC8zUjVxT0JBTnNIcEoxUTB0dk5sLytNOE5XYlFzN1ZiMmhZMmpnd0NycGMzRTkraVhKc0lpNWowOFk3RWJkejJPVmNqTVQzWG90bU42Yjk0bUpSQUZLZnd4RUU5cm5OanNBWW43bUVKdz0=' },
    { "name": 'Godzilla e Kong: O Novo Império', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMUlhcVJjZzFhZElmc0NOTHJ1eWVpbC9CcjVpWm5ob1RsUDhTc2dxRFY4d0tNbW1IVDZqdjNhZEV3QTJ1bUN6NG92WTRpczY4WGJUd2lTRk56OXAzUmtTa2RLc3RaM1BHd1JpSFNWZkVkcmFSejR3VkI2U1ZhOXBOQ2YrY1JIa3Zac1ZNWjg9' },
    { "name": 'A_metralhadora_22_armas_caseiras_para_defesa_e_resistência.pdf', "url": 'https://drive.google.com/file/d/17W06RbSm90f8zMeGeUDsQh2pQW5PtcqG/view?usp=drivesdk' },
    { "name": 'ARMAS E MUNIÇÕES CASEIRAS.pdf', "url": 'https://drive.google.com/file/d/1Owhifx9UreUmkjWKlRR86sZeqNHcKzAT/view?usp=drivesdk' },
    { "name": 'Fabricação de Armas Caseiras - Pistola.pdf', "url": 'https://drive.google.com/file/d/19UPnbJxJbDB18NNhK6kadyZ3S_WmkAO7/view?usp=drivesdk' },
    { "name": 'Fabricação de Armas Caseiras - Submetralhadora.pdf', "url": 'https://drive.google.com/file/d/1g-myP2X_VZut6pXrFMSxf1GhXWFNKSmZ/view?usp=drivesdk' },
    { "name": 'Manuseio Seguro de Armas de Fogo.pdf', "url": 'https://drive.google.com/file/d/1bOIp-edok-w-vNBp385jsHYKh2Vnu8zC/view?usp=drivesdk' },
    { "name": 'Treinamento_de_arma_de_fogo_exercícios_práticos_para_tiro_defensivo.pdf', "url": 'https://drive.google.com/file/d/138WnR1Qh8eAledQCfGcvzW-SFhH3DiPV/view?usp=drivesdk' },
    { "name": 'Panico 1 (1996)', "url": 'https://www.mediafire.com/file/816ehgy5v9q41j2/P%25C3%25A2nico_1_%25281996%2529.mp4/file' },
    { "name": 'Panico 2 (1997)', "url": 'https://www.mediafire.com/file/9u4i0uabqnoxhm5/P%25C3%25A2nico_2_%25281997%2529.mp4/file' },
    { "name": 'Panico 3 (2000)', "url": 'https://www.mediafire.com/file/977vgmc5hw2i1d3/P%25C3%25A2nico_3_%25282000%2529.mp4/file' },
    { "name": 'Panico 4 (2011)', "url": 'https://www.mediafire.com/file/li1qllg286lackt/P%25C3%25A2nico_4_%25282011%2529.mp4/file' },
    { "name": 'Panico 5 (2022)', "url": 'https://mega.nz/file/hdInnSLI#mk5eCYtJ17QZwAOHYoxzjQdd_QLG-If4yeDt3Ya7Oio' },
    { "name": 'Panico 6 (2023)', "url": 'https://www.mediafire.com/file/oyugn2efnqi0u9y/PNCO6.mp4/file' },
    { "name": '471GB DE LOGIN DE SITES', "url": 'https://drive.google.com/drive/folders/1khDtmcrAqn72Sl_py_HkHl2eY-YOiCXz' },
    { "name": 'O Lobo de Wall Street', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Jkdy90Znd6bjk5OENvMW9Tc1JRbHg2QlZiZDJYVnBtTEEwWkRPc0kyU2xrL1NIWEtTdlVKSzNaNFhidWlhR3Jtd3plWkV3TXA1empCc055SWsxOXAzVHFHM2hxOUFBSVB0WGthd0lpUGpQU2ZlUlZ1SENSRk11R1ZhajFqSkFpNVFZRTdaU1hK' },
    { "name": 'O Retrato', "url": 'https://デ-ン-ッ-ク-ス-ン-デ-ド-ド-ル-ボ-ラ-ルグレフト-ブムフクトプドラア.ジ-1l1-グ.ッ-22-ク-11-ス-33-ル-99-プ-75-ゾ--エ--ブ--ス-ッ.ク.ス.ズ.ク.ジ.シグナルパブリコ-公共の識標-バレウドットグウクトットズヒ.セール/player3/download.api?download=NVNtelU0S0NBUWNDVkNNTzR4Rld3d0g0Z3M5bEJpT3Rkdy90Znd6bjk5OENvMW9NcHdrMTM5NDJDN3p0RllUUENCZFlmSXNOV210bE9YNjZQdEFjRmswMFViMm5iRzdpeFQ2VUdob3p0aCszaU9haXV6QnB2RFR1cG1HSUFVNHhnQ2s3a2VxdGxJaXlUUVl2SXg1RFk3SGhTejBqZkFpTkViTjljMUk9' },
]

IP_AUTORIZADO = '138.219.238.28'

pesquisa_contador = 0

def verificar_ip_autorizado():
    ip_solicitante = request.headers.get('X-Forwarded-For', request.remote_addr)
    ip_solicitante = ip_solicitante.split(',')[0].strip()
    if ip_solicitante != IP_AUTORIZADO:
        abort(403, description="Acesso negado para o seu IP.")

@app.before_request
def before_request():
    if request.path == '/' or request.path == '/contador_pesquisas':
        verificar_ip_autorizado()
    elif request.path == '/search' and 'query' not in request.args:
        verificar_ip_autorizado()

@app.route('/')
def home():
    return "Acesso permitido", 200

@app.route('/search')
def search():
    global pesquisa_contador
    query = request.args.get('query', '').lower()
    if query:
        pesquisa_contador += 1
    resultados = [conteudo for conteudo in conteudos if query in conteudo['name'].lower()]
    return jsonify({"results": resultados})

@app.route('/user_dnp')
def contador_pesquisas():
    return jsonify({"total_pesquisas": pesquisa_contador})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)

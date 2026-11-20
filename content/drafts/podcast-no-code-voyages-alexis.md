---
title: "No-Code & Voyages #6 : télétravailler en Asie avec une armée d'agents IA"
status: draft
created: 2026-11-20
tags: [podcast, travel, china, ai, agents]
---

Épisode #155 du podcast d'Alexis, « IA x no-code » (Hosakka Studio), série No-Code & Voyages. Enregistré dans un café à Saïgon, à la fin de notre voyage Hong Kong, Shenzhen, Hanoï, Saïgon. Publié le 19 novembre 2026. 58 min, en français.

- Épisode : https://podcasts.hosakka.studio/episodes/155-discussion-avec-axel-teletravailler-en-asie-avec-une-armee-d-agents-ia/
- Audio : https://audio.hosakka.studio/episodes/podcast-alex.mp3
- Mon post sur X : https://x.com/axelrock/status/2123451880302887244

## Mon post sur X (19 novembre 2026)

> Hong Kong, Shenzhen, Hanoï, Saïgon avec mon ami Alexis.
>
> À Saïgon, il m'a tendu le micro pour son podcast. On parle de la Chine qui nous a surpris, et de comment je bosse sur la route : plus de code à la main, des agents IA pilotés depuis mon iPhone.

## Description de l'épisode

> Je suis à Saigon avec Axel, développeur et CTO chez Cobl, mon compagnon de voyage entre Hong Kong, Shenzhen, Hanoï et Saigon. On commence par nos surprises : Shenzhen et ses drones, ses robots et ses voitures autonomes, le Hong Kong cyberpunk, des villes chinoises silencieuses où tout passe par Alipay et WeChat, et les feux synchronisés avec les GPS. Ensuite, on passe à la façon dont on travaille en voyage. Axel ne code plus à la main : il pilote des agents dans le cloud avec T3, depuis un iPhone Duo, en gérant le décalage horaire et ses abonnements IA. On parle aussi du token maxing, des vieux PC sous Linux pour héberger ses agents, des ratés de l'IA (le Japantown de Saigon, les événements qui n'existent plus) et de la grande division entre l'internet chinois et le nôtre.

## Chapitres

Les temps publiés vont jusqu'à 1:04:00 alors que l'audio dure 58 min. Ceux entre parenthèses sont lus dans la transcription.

- 0:00 Introduction et présentation d'Axel et de Cobl
- 3:00 (2:47) L'itinéraire du voyage et la claque de Shenzhen
- 11:00 (9:51) Hong Kong cyberpunk et la modernité chinoise
- 18:00 (15:35) Voitures autonomes et feux synchronisés avec les GPS
- 26:00 (21:13) Attentes, nourriture épicée et vieilles villes en Chine
- 32:00 (26:31) Une journée type de télétravail avec le décalage horaire
- 39:00 (30:47) Le workflow d'Axel : agents de code, T3 et machines dans le cloud
- 44:00 (37:34) Travailler depuis un iPhone Duo
- 47:00 (39:50) Maximiser ses abonnements IA : le dilemme du token maxing
- 53:00 (44:25) Setup résilient : agents sur VM ou vieux PC sous Linux
- 55:00 (47:09) L'IA hors du code et l'aventure de Japantown à Saigon
- 58:00 (51:14) Quand l'IA se trompe : les ratés de Hermès, et l'agent qui commande un T-shirt
- 1:01:00 (54:23) The Great Divide : l'internet chinois contre le nôtre
- 1:04:00 (56:18) Ce qu'on a hâte de faire en rentrant et où suivre Axel

## Transcription

Transcription automatique (ElevenLabs Scribe v2, 20 novembre 2026), deux voix séparées par la machine, noms propres relus à la main. Les temps sont ceux du fichier audio. Quelques mots peuvent être mal entendus (« Fab », « Astra », « Carbon », « Meta Muse Wonderful », « Laurent Le Pen » sont laissés tels quels).

**Alexis** · 00:12  
Je suis à Saïgon, Ho Chi Minh Ville, avec mon compagnon de voyage, Axel. Comment ça va ?

**Axel** · 00:18  
Ça va bien. Très très bien.

**Alexis** · 00:20  
Et donc l'idée, c'était de se faire une petite discussion que, que j'voulais qu'on fasse l'année dernière quand on a voyagé ensemble au Japon, puisqu'on a fait cinq semaines ensemble au Japon, sur un mode de voyage qui est un peu particulier, j'ai envie de dire, parce que j'pense que c'est pas forcément la manière-- déjà, les gens associent beaucoup voyage et vacances. Euh, et nous, en fait, on voyage plutôt, euh, là, en tout cas, c'est la deuxième fois, donc je généralise un peu, mais on voyage un petit peu plus dans un mode télétravail. Et donc j'pense qu'y a pas mal de choses à dire, euh, là-dessus. On travaille tous les deux dans la tech, t'es développeur. Euh, voilà, donc j'avais envie un peu qu'on parle de ça. L'année dernière au Japon, on l'a pas fait parce que, si tu te souviens, le jour où on l'avait prévu, euh, une petite gueule de bois. Euh, voilà, moi, j'ai un peu du mal à fonctionner, euh, on avait un petit peu trop profité des nuits de Tokyo. Donc voilà, ça, c'est pour la, la petite anecdote. Euh, voilà. Donc on est là dans un café à, à Saïgon. Est-ce que tu peux te présenter ?

**Axel** · 01:08  
Ouais. Eh ben moi, c'est Axel. Je suis développeur slash CTO chez Cobl, petite équipe de 10 où on fait un assistant, euh, sales intelligence artificielle.

**Alexis** · 01:20  
Y a une petite anecdote sympa quand même pour commencer. On fait une petite dédicace à notre ami, euh, Manu-

**Axel** · 01:25  
Ouais

**Alexis** · 01:25  
...qui, euh-- parce que Cobl s'appelait avant Thinkeo.

**Axel** · 01:28  
Exact.

**Alexis** · 01:28  
Et donc y a un, un membre à la communauté de NoCode France qui, j'espère, écoutera ce, ce, ce podcast. Je crois qu'il l'écoute, en tout cas, qui fait un podcast d'ailleurs lui-même. Je sais pas si tu, t'avais suivi.

**Axel** · 01:38  
Je sais qu'il fait-- j'ai pas encore écouté, mais ouais.

**Alexis** · 01:39  
Il fait un podcast assez sympa.

**Axel** · 01:40  
Donc coucou Manu, complètement.

**Alexis** · 01:41  
Donc voilà, une petite dédicace qui travaillait avec toi, qui était PM chez Thinkeo.

**Axel** · 01:45  
C'est ça.

**Alexis** · 01:46  
Et voilà, entre-temps, vous avez pivoté et donc, euh, voilà, donc tu, tu, t'es dev. Est-ce que tu veux dire en quelques mots, on y reviendra peut-être un petit peu, mais juste en quelques mots, ce que fait, euh, Cobl aujourd'hui ?

**Axel** · 01:55  
Ouais, on est passé de un outil de génération de documents pour les entreprises à maintenant un compagnon, euh, pour les sales assistants, euh, intelligence artificielle.

**Alexis** · 02:08  
Je trouve y a, y a un truc assez intéressant, on y reviendra, mais vous, euh, vous êtes une, vraiment une, une start-up, euh, j'ai envie de dire, AI native. Je vais-- on va pas faire trop d'anglicismes, mais donc y a un peu ce truc de vous, vous cherchez un peu aussi votre modèle. 'Fin en tout cas, vous ch-- et donc vous itérez très vite et notamment grâce à l'IA, grâce aux devs.

**Axel** · 02:29  
Ouais, c'est vrai qu'on a bien pris le pivot et en interne, euh, on est très très, très très outillés-

**Alexis** · 02:35  
Ouais

**Axel** · 02:35  
...sur l'IA, euh, notamment, bah parce que c'est une direction, 'fin c'est une, ouais, une direction qui est prise par mon CEO, moi-même un petit peu qui la pousse et c'est bien adopté, ouais. On est très fluides et très rapides sur ce truc-là quoi.

**Alexis** · 02:47  
Bon, on y, on y reviendra. D'abord, j'aimerais qu'on parle un petit peu de, de ce voyage puisqu'on est sur la fin de notre voyage. On a passé presque-- euh, on, on n'a pas commencé en même temps, on s'est rejoints à Hong Kong. Toi, t'as fait d'abord un premier voyage un peu plus vacances en Chine. Puis on s'est retrouvés à Hong Kong pour notre, euh-- voilà, moi, j'ai passé quelques jours à, à Shanghai. On s'est retrouvés à Hong Kong. On est allés ensuite à Shenzhen. Ensuite, on est allés au Vietnam. Euh, voilà, j'fais un petit résumé rapide pour ceux qui ont pas suivi. Ensuite, on est allés à Hanoï et là, on est à Saïgon. C'est la fin du voyage. Il nous reste quelques jours encore, euh, ici. Euh, ma première question, euh, pour pas refaire tout le, le, le déroulé, euh, qu-- c'est quoi le, le moment du vo-du voyage, toi, peut-être, que tu raconterais en premier à quelqu'un qui est, qui était pas là ?

**Axel** · 03:29  
Waouh ! Euh, c'est une bonne question. Euh, moi, quand j'suis parti à ce voyage-là, même si je sais qu'on faisait deux semaines au Vietnam, y avait quand même le côté de je partais voyager en Chine. Et, euh, y a beaucoup de trucs à raconter sur Shenzhen parce que ça représente pas la Chine, mais c'est assez incroyable. Et même quand on s'attend à un mon-monde futuriste et technologique et tout ça, c'est quand même malgré tout une, euh, une grande claque. Là où y a pas mal d'autres choses que j'ai vues qui correspondent un peu plus à mes attentes. Voilà, donc, euh, j'pense qu'il y a un grand truc sur ce voyage avec les attentes, les expectations, parce que, voilà, les, les surprises viennent pas forcément de là où on les attend, euh.

**Alexis** · 04:09  
Bah alors, un-- est-ce qu'il y a un moment particulier à Shenzhen, un truc que tu, tu raconterais qui serait un peu emblématique de, de ça ?

**Axel** · 04:16  
J'pense que nos-- si on cumule nos 24 premières heures à Shenzhen ou nos 48 premières heures à Shenzhen ont été un, un ensemble de choses qui ont été vraiment cool. Déjà, t'as voulu que dès qu'on est arrivés, on est arrivés déjà, il était bien dans l'après-midi ou un truc comme ça.

**Alexis** · 04:30  
Ouais.

**Axel** · 04:30  
Et, euh, on a fait le tour de plusieurs quartiers le premier jour, la première demi-journée même, et on a vu plein de trucs. Déjà, on a vu que c'est une ville immense et genre vraiment dans le sens immense, euh... Ça veut dire qu'on arrivait à la gare et de la gare à chez nous, qui est dans le centre, il fallait une heure de voiture alors qu'il y a pas de trafic quoi. Donc déjà, c'est, ça, c'est fou. Euh, ensuite, on a pu faire deux petits quartiers qui sont très, euh, dans cette ville qui est vraiment gigantesque, très très haute à plein d'endroits. On a fait des petits quartiers qui sont très mignons, euh, artistiques, créatifs, euh, tout ce que tu veux. Et je crois que même le premier jour, je me tenterai pas de prononcer le nom, euh, sur ce podcast, on est allés dans le quartier, euh, tech, euh, gadget, hardware-

**Alexis** · 05:08  
Hua-Hua-Huaqiangbei ou je sais pas.

**Axel** · 05:10  
C'est ça.

**Alexis** · 05:11  
Mais, euh, on sait pas comment le prononcer, mais, euh-

**Axel** · 05:13  
Et qui a pas forcément été une bonne surprise dans le sens de ce qu'on a vu, mais quand même une surprise sur la taille, sur, euh, tout ce qu'on a pu voir en termes de, de tech et de l'organisation aussi, parce que c'est toute une espèce de logistique qui est folle. Donc y avait tout ça et en même temps, le premier matin, on est allés bosser au coworking. Euh, on a vu des drones, on a vu un robot en allant manger. C'est-à-dire qu'on les cherchait pas. On les cherchait pas du tout. Y avait des voitures autonomes un peu partout qu'on a pu prendre. Je crois que dans la même journée, on a vu et des livraisons de drones et un robot, 'fin des gens qui étaient en train d'entraîner un robot à marcher dans les escaliers et, euh, prendre une voiture autonome. Et là, on fait : « Ah ouais, OK, bah au fait, c'est vraiment, euh, la Silicon Valley de, de Chine. » Et on n'a pas eu à chercher. C'est, moi, c'est ça surtout le-- ça nous est tombé dessus.

**Alexis** · 05:56  
Ouais, c'est clair. Mais tu vois, quelque part, et donc c'est, c'est intéressant de, de parler un peu tout de suite justement des attentes et, euh- Ça, tu vois, ce que tu décris quelque part, c'est ce qu'on-- en tout cas moi, c'est ce que je venais chercher quoi, tu vois ? C'est-à-dire de, de, de voir si vraiment en se baladant dans la rue, on voyait, euh, des mecs entraîner des drones. Euh, et donc on, et donc on l'a eu vraiment effectivement sans le chercher, mais en s'y attendant. Par contre, moi, j'ai été vachement ag-agréablement surpris que y a ce quartier de la vieille ville de, de Shenzhen qui n'est pas une vieille ville en, en tant que tel, mais qui est un quartier qui est vraiment hyper sympa, que, qu'a mentionné d'ailleurs en fait ce, cette interview, elle va sortir tout de suite après un entretien avec Laurent Le Pen qui est un, un quelqu'un de, de super qui m'a parlé de Shenzhen là ce matin là juste avant qu'on-- donc c'est rigolo tu vois. Et donc il a mentionné ce quartier-là de Nanshan, Nantou Old Town. Et euh, et ça, c'était hyper cool. Et comme-- et effectivement, on a aussi découvert un autre quartier que c'est donc OCT Loft, OCT, euh, aussi, hein, des anciens, euh, ateliers, euh, hangars de fabrication reconvertis en trucs un peu-- 'fin moi, ça, je m'attendais pas. Vraiment, j'avais aucune idée que y aurait des quartiers un peu design, un peu cool, un peu, euh, un peu dans notre vibe quoi.

**Axel** · 07:08  
C'est vrai. Je pense qu'il y a un truc qui est intéressant pour les gens qui regardent pas, c'est que je crois qu'ils appellent Nantou le quartier antique de la ville et que pour eux antique, c'est 1970 quoi, parce que-

**Alexis** · 07:18  
Ouais

**Axel** · 07:18  
...y avait rien avant. Donc le plus vieux quartier de la ville, il a, euh, bientôt 60 ans quoi.

**Alexis** · 07:23  
Ouais. Ouais, ça, c'est, c'est sûr que l'histoire de, de Shenzhen, bon je vais pas raconter là parce que je suis pas un spécialiste, mais assez étonnante. En tout cas, c'est une ville qui a-

**Axel** · 07:30  
Ouais

**Alexis** · 07:31  
...beaucoup changé dans les 40 dernières années. Euh, tu vois tout à l'heure, Laurent, il me disait, donc, euh, il me semble que on était, euh, dans ce quartier, donc il appelait ça High Tech Park. Donc je pense que c'est là où on était, des bureaux, etc. Et il disait, lui, quand il est arrivé en 2007, ici-- à cet endroit-là, y avait encore des usines. Y avait déjà, euh, mais y avait encore des usines. Et il disait maintenant, c'est un endroit où c'est inconcevable de mettre des usines parce que c'est les loyers les plus chers de, de la ville quasiment quoi. Et donc c'est, c'est assez étonnant comment ça a changé. Mais, euh, mais y a de tout en fait à Shenzhen, c'est ça qui est assez étonnant. Y a de tout et y a des choses, euh, aussi assez sympas, pas que sur le côté tech et tout quoi.

**Axel** · 08:08  
Non, c'est vrai qu'il y a des choses, 'fin, on a parlé un petit peu globalement d'urbanisme et peut-être un peu de, de politique dans un sens, mais de dire c'est une ville qui a été conçue, extrêmement bien conçue.

**Alexis** · 08:17  
Ouais.

**Axel** · 08:18  
Et ça se sent. Mais c'est particulier, c'est pas que un, c'est pas que un compliment. Euh, voilà, c'est, c'est, c'est très-- c'est assez difficile à décrire. Mais voilà, ça a été une grande claque.

**Alexis** · 08:29  
Est-ce que ça, ça t'est venu en premier ? Parce que globalement, c'est le, la ville qui t'a le plus marqué là dans tout ton voyage.

**Axel** · 08:37  
Ouais, je pense que c'est ma, ma plus grande surprise.

**Alexis** · 08:40  
Ouais.

**Axel** · 08:41  
Parce que y a plein d'autres choses que j'ai adorées, mais qui sont assez proches de ce que j'imaginais.

**Alexis** · 08:45  
Ouais.

**Axel** · 08:46  
Et, euh, je sais pas si je peux transitionner tout de suite mais-

**Alexis** · 08:49  
En quelques mots par exemple, qu'est-ce que t'as, qu'est-ce que t'as adoré, euh-

**Axel** · 08:52  
Moi, j'ai adoré Hong Kong

**Alexis** · 08:53  
...en plus tu vas en vrac. Ouais.

**Axel** · 08:54  
Euh, j'ai adoré Hong Kong, mais j'ai l'impression que j'ai consommé assez de médias sur, euh, Hong Kong, notamment des youtubeurs, parce qu'il y a beaucoup de youtubeurs asiatiques anglophones-

**Alexis** · 09:03  
Ouais

**Axel** · 09:03  
...que j'ai pu regarder et qui notamment à l'époque, j'étais un peu intéressé dans la photo et des gens qui testaient des photos et qui se baladaient dans Hong Kong. Donc en plus quand on teste de la photo, ben on voit des photos et on voit des trucs, des rues et des voilà. Et j'adore parce que c'est vraiment totalement ma came, mais un peu plus attendu-

**Alexis** · 09:20  
Ouais, OK

**Axel** · 09:20  
...euh, ce truc-là.

**Alexis** · 09:22  
C'est marrant parce que moi comme je suis pas du tout sur les réseaux, 'fin sur-- j'ai, j'ai pas la ref. Et tu vois, une fois, on s'est-- le premier soir, on était à Hong Kong avec mes, mes amis Camille et Vincent. On s'est promenés et à un moment, Camille, elle m'a dit : « Ah tiens, y a une youtubeuse connue là ». Et j'avais pas du tout la ref, tu vois, 'fin. Et bon elle, après, lui a dit bonjour comme ça, 'fin. Et c'était marrant. Et donc elle, elle me disait oui, elle, elle publie tout le temps des contenus super intéressants sur Hong Kong et tout. Donc elle avait aussi plein de choses qu'elle avait, qu'elle avait vues quoi. Mais moi, j'ai eu plus de surprises peut-être à Hong Kong effectivement et, et d'agréables surprises, ouais.

**Axel** · 09:51  
Ouais. Tu penses à quoi ?

**Alexis** · 09:53  
Moi, moi, c'est la nature qui m'a marqué en fait. Comme j'aime bien, euh, les randos et tout. Et que c'est quelque chose que on n'a pas eu tant que ça à notre voyage au Japon par exemple, où y a aussi de la nature incroyable, mais on a fait un voyage très urbain et qui était aussi génial. Mais moi, j'ai, j'ai, j'adore les villes, mais j-- de plus en plus, j'aime bien un peu la nature. Et là, Hong Kong, c'était très facile d'aller faire une ou deux randos, euh, et j'avais pas du tout, euh-- moi, je, je m'attendais à la ville, euh... J'e-- je m'attendais à la, à la, à la ville, à la capitale financière avec des grandes tours, etc. Je m'attendais un peu moins au quartier de Kowloon, euh, même si, euh-- parce qu'en fait, j'a-- j'étais pas renseigné, donc j'avais une confusion avec cette fameuse Kowloon Citadel là, qui en fait a été détruite déjà y a 20 ans. Mais en fait, y a d'autres bâtiments qui ressemblent quand même. Et ce côté, et j'ai eu cette révélation, euh, 'fin que le cyberpunk, c'était Hong Kong et pas Tokyo quoi. 'Fin en tout cas, l'imagerie notamment de Ghost in the Shell, c'était, euh, c'est Hong Kong. Donc ça, ça m'a un peu explosé le cerveau. Mais du coup tout ça, ouais, mi-bouah mi-wouah, c'est que j'ai quand même des surprises à Hong Kong quoi.

**Axel** · 10:57  
C'est vrai. Hong Kong a quand même ce truc très multi-niveaux un peu différent de Tokyo encore je trouve, avec un, un niveau au sol à Kowloon en particulier, où c'est vraiment des choses qui ont l'air d'être un autre âge. Là où dès qu'on lève la tête, on a des grandes tours.

**Alexis** · 11:11  
Ouais.

**Axel** · 11:12  
Mais en bas, ouais, on a-- je pense l'image la plus connue que j'ai, moi, c'est des petits gens qui poussent des chariots en très grande quantité et des canards laqués accrochés aux devantures des, des vitrines, énormément de blocs de clim. Dès qu'on lève la tête un petit peu-

**Alexis** · 11:27  
Ouais

**Axel** · 11:27  
...vraiment, ça, ça recouvre les buildings et ça fait vraiment, ouais, ce côté cyberpunk, euh. Et le tout avec des instances très très hautes qui vraiment en termes de société, ça donne 'fin vraiment plein de petits-

**Alexis** · 11:38  
Ouais

**Axel** · 11:38  
...trucs un peu intéressants quoi.

**Alexis** · 11:39  
Et un truc qui est un peu étonnant, peut-être que si tu veux commenter, c'est que on a fait tous les deux, euh, dans des trucs différents, mais Chine, Hong Kong, Chine. Et je crois que tu l'as dit à un moment, y a un petit truc de, sur le côté-- sur la modernité ou des choses que tu t'attendais. Ouais, je vais te laisser commenter plutôt. Je vais pas te dire de toute façon après-

**Axel** · 11:59  
Ouais, ouais. Euh, ben c'est vrai que j'imaginais Hong Kong comme une ville très moderne, ce qui, à plein d'égards, est une ville très moderne, mais Ouais, en fait, la Chine est devant en termes de plein de choses sur la modernité. Notamment, euh, ça passe par des petits détails, mais par exemple, l'usage du cash. En Chine, j'ai pas eu une seule fois besoin même de penser à utiliser du cash parce que c'est vraiment, euh, Alipay, les QR codes et WeChat dominent absolument, euh, le, le, le monde du paiement. Et, bah, en fait, on arrive à Hong Kong et c'est vrai que le premier taxi, il prend pas la carte, il prend, euh-

**Alexis** · 12:32  
Mmh.

**Axel** · 12:32  
Voilà. Donc ils ont leur système à eux, mais c'est un peu plus fragmenté. Et euh, ouais, on a quand même, euh, 'fin la Chine qu'on imagine. Après, j'ai vu que la Chine des villes, ce qui est très biaisé, à part une petite partie campagne aussi, mais, euh, ouais, la Chine est en avance sur plein de choses. On peut parler des voitures parce qu'on a parlé plein de fois des voitures pendant notre séjour.

**Alexis** · 12:52  
En plus, c'est un sujet que t'aimes bien. T'aimes bien les voitures.

**Axel** · 12:53  
J'aime bien les voitures. Euh, mais surtout, bah, les villes chinoises sont quasiment 100 % électrifiées. Je sais pas quel est le vrai, euh, le vrai pourcentage, mais un des grands trucs qui nous a bluffés, et je pense que Shenzhen, c'est encore le pic, mais c'est un peu le cas partout, c'est que c'est ultra silencieux.

**Alexis** · 13:09  
Ouais.

**Axel** · 13:09  
Vraiment-

**Alexis** · 13:10  
Voitures et scooters. Faut préciser aussi parce que scooter, ça fait beaucoup de bruit en ville.

**Axel** · 13:13  
Exactement.

**Alexis** · 13:13  
Et là, y a des nuées, des nuées de scooters, euh, sans bruit.

**Axel** · 13:16  
Ouais, c'est ça. Moi, le truc qui m'a choqué, c'est qu'on entend les freins des scooters qui s'arrêtent au feu. On entend les, les vélos qui arrêtent de pédaler parce qu'il y a le système de roue libre, euh-

**Alexis** · 13:26  
Ouais

**Axel** · 13:26  
...qui fait ça. Et sinon, euh, le-- surtout quand on est sur les intersections, c'est là où on a le plus d'interse-- de, de, de, de rencontres avec les voitures. Bah, en fait, on peut avoir, notamment à Shenzhen, devant notre hôtel, c'était du deux fois quatre voies sur le carrefour. Donc, au fait, au total, on est à un nombre de voies qui est incroyable. Mais sauf que quand les voitures sont à l'arrêt au feu, on n'a même pas de bruit d'air, de bruit de pneus, de bruit de absolument rien. C'est un silence. De temps en temps, ils se klaxonnent dessus. Pas très souvent, mais bon, ça existe un petit peu. Euh, les gens crachent en l'air. Donc, y a quand même des petits trucs qui perturbent le fait que ce soit un silence parfait, mais clairement, le s-- le, le-

**Alexis** · 14:01  
T'entends plus du coup.

**Axel** · 14:02  
C'est ça. Mais y a pas de bruit mécanique ou de bruit, euh, parasite dans l'autre sens quoi. Et-

**Alexis** · 14:07  
Ouais

**Axel** · 14:08  
...et par contre, bah voilà, on revient à Hong Kong et euh, un petit peu plus sans que ce soit une, quoi que ce soit qui est gênant, mais ouais. Donc ouais, y a plein de choses sur la, l'image qu'on a de Hong Kong. En fait, pour moi, Hong Kong, c'est vraiment figé dans les années 80, 90.

**Alexis** · 14:22  
Ouais.

**Axel** · 14:23  
Même quand on y va aujourd'hui, ce qui est probablement pas vrai du tout parce que j'y suis pas allé à l'époque et que y a sûrement beaucoup de choses qui ont changé.

**Alexis** · 14:29  
Ouais, ouais.

**Axel** · 14:29  
Mais c'est assez proche de l'image que j'ai vue dans, euh, bah des vieux films ou des trucs comme ça en fait quoi.

**Alexis** · 14:34  
Ouais, ouais, je suis d'accord. C'est une image de la modernité. C'est-- Et on-- 'fin, comme on est beaucoup allés au Japon, c'est un peu-- le Japon a un petit peu ça aussi, mais un cran, une décennie après quoi. C'est-à-dire, c'est figé plutôt dans les années 2000 ou je sais pas, 'fin-

**Axel** · 14:51  
Exactement

**Alexis** · 14:51  
...comme ça, une, une décennie 90, 2000 quoi, un peu la, l'éclatement de leur bulle économique. Et donc c'est très moderne, mais avec toujours une petite patine un peu, c'est pas complètement-- surtout après être allé en Chine.

**Axel** · 15:04  
Ouais, c'est ça.

**Alexis** · 15:04  
Là, tu te dis bon bah, c'est vraiment-- tu peux pas faire plus moderne. Tous les immeubles, tout est, est récent, toute la-- chaque voiture est hyper récente, 'fin tout, tout ce qui t'entoure et euh-

**Axel** · 15:13  
C'est ça

**Alexis** · 15:14  
...notamment à Shenzhen quoi.

**Axel** · 15:15  
Je résumerais un petit truc en disant que Hong Kong, c'est les néons et la Chine, c'est les LED quoi.

**Alexis** · 15:21  
Ouais.

**Axel** · 15:21  
Parce que vraiment, visuellement, euh, y a encore des vieux, des vieux néons, euh, qu'on voit quasiment, euh, flicker, je, j'ai pas le mot en français, mais à Hong Kong et dans les grandes villes chinoises, en tout cas, c'est très très, très très moderne.

**Alexis** · 15:35  
Ouais. Euh, dis-nous un mot sur le, l'expérience de la voiture autonome quand même. C'est-

**Axel** · 15:41  
Ah, alors moi, j'étais-

**Alexis** · 15:41  
Je dirais pas que c'est un highlight du voyage, mais quand même, c'est quand même un truc assez notable quoi.

**Axel** · 15:45  
Moi, je le mettrais dans les petits highlights du voyage parce que, euh, quand on a vu qu'il y avait des voitures autonomes, moi, j'avais vu que par exemple sur Airbnb et sur trip.com, on pouvait, euh, payer des gens pour qu'ils nous emmènent faire un tour de voiture autonome. Mais après déjà quelques semaines en Chine, j'étais déjà plutôt habitué à prendre des taxis via les applications de navigation et les trucs comme ça, qui est quelque chose de très très simple, très peu cher. Et en fait, il y a certaines de ces applis dans lesquelles on choisit donc sa catégorie de voiture et à certains moments, on peut cocher voiture autonome. Donc on a essayé ça et euh, après en avoir vu quelques-unes dans la rue et on est rentrés. Donc y a un petit process un petit peu marrant pour rentrer où il faut rentrer, il faut s'attacher, on a un petit écran dedans et euh, et on demande à la cour de dé-- la course de démarrer. Et on est tous les deux un petit peu dans la tech, donc on est rentrés. Forcément, c'est fascinant. Y a un volant, y a personne. Le volant est protégé par une espèce de truc en plastique pour que personne n'aille y toucher. La voiture, elle nous parle en anglais, en plus, je crois, en nous disant voilà, pour la voie de sécurité, machin, machin. Y a quelques petites règles, mais par contre, la voiture a commencé à rouler. Au début, c'est waouh, c'est impressionnant, comment elle va faire, comment elle va s'insérer et tout. Et euh, au-delà de la fascination, moi, j'ai trouvé que très très très vite, c'était très confortable.

**Alexis** · 16:58  
Et c'était normal.

**Axel** · 16:59  
Ouais, c'était normal. J'ai pris trois trajets au total dans mon, dans mon voyage. Y en a un, j'étais tout seul. J'ai sorti mon ordi à l'arrière, j'ai travaillé et pas une seule seconde, j'étais inquiet du fait qu'il y avait pas de chauffeur. Euh-

**Alexis** · 17:10  
Bah en fait, quelque part même, bon, on l'a pas pris beaucoup, tu vois, mais en fait, la con-la conduite est vachement plus fluide qu'un conducteur humain. Alors bon, à Shenzhen, c'est quand même, c'est tellement large, c'est tellement grand que même les chauffeurs humains, ils sont assez fluides, mais chauffeur humain, il pile des fois, il accélère, y ait-- surtout les chauffeurs taxi, des fois t'en as qui sont un peu nerveux. Là, c'est fluide. Et donc en fait, au bout d'un moment, tu te dis, passé le moment un peu irrationnel de la personne, en fait, surtout quand t'es dans la tech et tu vois les progrès de l'IA et tout, tu te dis bah en fait, y a des chances qu'elle conduise mieux qu'un humain quoi.

**Axel** · 17:40  
Ouais.

**Alexis** · 17:40  
En moyenne quoi, que la moyenne d'humain quoi.

**Axel** · 17:43  
C'est ça. Et c'est vrai qu'il y a le côté de, quand on prend un taxi, on peut tomber sur un chauffeur un peu particulier, ce qui nous est arrivé, euh, pendant ce voyage. Mais bah là, déjà, c'est pas le cas parce que vraiment, l'algo, il est partagé entre toutes les voitures.

**Alexis** · 17:56  
Ouais.

**Axel** · 17:56  
Et surtout, elles conduisent, le truc qui est un peu étrange, elles conduisent de manière très humaine. Genre, elles sont à moitié sur deux voies quand il faut un peu doubler un scooter, elles savent euh... Franchement, c'est-

**Alexis** · 18:07  
Mais c'est fluide.

**Axel** · 18:08  
C'est fluide, ouais.

**Alexis** · 18:09  
C'est-

**Axel** · 18:09  
Et organique, j'ai envie de dire, dans la, dans la conduite. On voit que ça a été entraîné sur, euh Sur de la conduite d'humain et pas que c'est un algorithme qui a dit : « Tu conduis dans cette voie, s'il y a un obstacle, tu t'arrêtes. » C'est vraiment, euh, c'est vraiment très fluide. En plus quand il y a du monde, y a des taxis, y a des piétons, y a des-- on a eu un petit cas où il y a quelqu'un qui a voulu se rabattre devant nous pour sortir. Et là, on s'est dit : « Waouh, qu'est-ce qu'elle va faire ? » Et la voiture a plutôt bien réagi. C'est-à-dire qu'elle a freiné et elle s'était, du coup, en esquivant la voiture un peu engagée dans une voie pour sortir, elle a réussi à revenir à faire son truc. Non, franchement, c'était très très fluide quoi. Et surtout, ça s'oublie. Moi, j'en suis à un petit point où je me dis franchement, bah, pour plein de petites raisons, ça pourrait être cool, euh, notamment, bah là, on est rendus au Vietnam, on a eu des chauffeurs ici qui sont moins, euh, moins chill que des voitures autonomes. Et je pense que la conduite est pas foncièrement plus difficile ici quoi.

**Alexis** · 18:56  
Non, ouais, ce serait intéressant de, de, de savoir, mais je pense-- y a, y a plein de scooters aussi en Chine, y a plein-- moi, ce qui me ferait peur ici, c'est les scooters. Y en a beaucoup. Donc t'as un peu une gestion comme ça des angles morts et tout que en tant qu'humain est un peu, euh, impressionnante. C'est-à-dire, tu dois être tout le temps sur ton, sur le qui vive. Et en même temps, bon les scooters eux-mêmes font attention aussi. De toute façon, tout le monde s'évite les uns les autres. C'est un peu le principe, de toute façon, de la conduite quoi. C'est-à-dire que normalement, personne ne va se rentrer, ne, ne, n'a envie de te rentrer dedans quoi.

**Axel** · 19:23  
Après, ici, y a un côté très organique, un peu comme, euh, deux amoureux qui ont leurs doigts qui se, qui s'entrelacent. Ici, c'est ce qui se passe entre les scooters et les piétons quand on veut traverser une route, c'est-à-dire qu'il n'y a pas d'ordre. Les-

**Alexis** · 19:34  
Y a pas de priorité.

**Axel** · 19:34  
Y a pas de priorité.

**Alexis** · 19:35  
Tu t'es un, un, un passage piéton en tant qu'humain, tu n'as pas de, tu pas, tu n'as pas-- ils s'en foutent de la priorité. Par contre-

**Axel** · 19:41  
Ça me fait repenser à un petit truc sur la Chine, je me permets, je ressaute dessus, mais moi, y a un truc qui m'a bluffé en Chine, dans la majorité des grandes villes, les feux de circuli-- de circulation sont synchronisés avec les GPS de toutes les voitures. C'est-à-dire que dès qu'on arrive à une intersection, le, le GPS de la voiture indique le feu, il passe au rouge dans 14 secondes. Et euh, et c'est le cas et pour les piétons et pour les voitures et pour les voitures autonomes. Donc tout le monde sait quand les feux-- c'est-à-dire que quand on commande un taxi, l'appli qui commande le taxi, elle dit : « Ne vous inquiétez pas, euh, votre chauffeur, il est pas, euh, en train de chiller, il est devant un feu rouge qui est rouge pendant 90 secondes. » Donc euh-

**Alexis** · 20:14  
Après, il arrive, ouais.

**Axel** · 20:15  
Attendez-le quoi. Et ça aussi, c'était les petits points, euh, tout l'écosystème tech est un peu cool.

**Alexis** · 20:21  
Est assez impressionnant et assez unifié et assez, euh-

**Axel** · 20:25  
Ouais.

**Alexis** · 20:25  
'Fin, tu, tu vois, après, c'est, c'est là où on comprend qu'il y a un niveau de centralisation de l'information qui est, euh, un peu flippant et en même temps extrêmement pratique quoi.

**Axel** · 20:35  
Ouais.

**Alexis** · 20:35  
Mais effectivement, y a pas beaucoup d'applis. 'Fin, mais voilà, une appli de cartes, 'fin, euh, de cartographie, par exemple, bah du coup, elle va avoir les feux quoi.

**Axel** · 20:43  
Ouais.

**Alexis** · 20:44  
Et je, j'imagine mal, je sais pas qu'est-ce que Google devrait faire, par exemple, pour négocier avec l'État français pour avoir accès aux feux, tu vois. Et ça pareil dans chaque pays de l'Union européenne. Je pense même pas d'ailleurs que ça serait possible, tu vois, 'fin.

**Axel** · 20:56  
Non, et puis surtout, je sais même pas si nos feux ont la techno de communiquer leur-

**Alexis** · 20:59  
Oui, en plus, ouais, exactement.

**Axel** · 21:00  
Communiquer leur système. Peut-être que oui et que, et que je suis un peu médisant, mais moi, j'imagine bien qu'on a une partie de nos feux tricolores qui est réglée sur un timer, euh.

**Alexis** · 21:10  
Ouais, ouais, ouais, bah.

**Axel** · 21:11  
Tout simplement quoi.

**Alexis** · 21:13  
Euh, est-ce que, est-ce que, là, on a parlé un peu des, des, des attentes, de ce qu'on s'attendait pas, mais est-ce qu'il y a des choses que tu t'attendais à voir et que t'as pas vues ?

**Axel** · 21:22  
Oh.

**Alexis** · 21:23  
Un peu...

**Axel** · 21:24  
Euh.

**Alexis** · 21:25  
Je te pose la question, je sais pas forcément ce que j'y répondrai, mais je vais réfléchir pendant que tu [inaudible].

**Axel** · 21:29  
Non, franchement, euh, j'ai rien qui me vient comme ça. De, de la nourriture épicée en Chine. Voilà, c'est-

**Alexis** · 21:38  
Tu t'attendais à ce qu'il y en ait plus ?

**Axel** · 21:39  
Je m'attendais à ce que ce soit très épicé et immangeable un repas sur deux.

**Alexis** · 21:42  
OK. Ah ouais.

**Axel** · 21:43  
Et au final, pas vraiment. J'ai eu un repas où ça a été vraiment très dur et c'est les fameux hot pot de Chongqing, euh, bah où ils rigolent pas quand ils disent que c'est hot, mais même pour les Chinois, c'est réputé pour être particulièrement spicy. Mais sinon, y a eu un truc, c'est qu'à beaucoup d'endroits, ils nous ont dit : « Non, non, mais là, c'est spicy. » Et en fait, spicy veut pas forcément dire que pimenté.

**Alexis** · 22:00  
Ouais.

**Axel** · 22:00  
C'est-à-dire que c'est un ensemble d'épices qui fait que moi, j'appellerais que c'est goûtu, mais en effet, c'est des épices.

**Alexis** · 22:05  
Ouais.

**Axel** · 22:06  
Euh, mais ouais, ça a été une surprise. J'ai voyagé la première partie du voyage en Chine avec des gens qui sont pas forcément très nourriture épicée. On a rarement eu, euh, des trucs qui étaient compliqués à manger. Sinon, non, je suis pas sûr que j'ai des, non, des, des choses dans ce sens-là.

**Alexis** · 22:23  
Ouais.

**Axel** · 22:24  
Et toi ?

**Alexis** · 22:26  
Bah, je m'attendais peut-être la seule chose que, là, qui me vient comme ça, c'est que à Shanghai notamment, je m'attendais à avoir plus de vieux bâtiments, de vieilles maisons, de-- or, c'est pas vraiment le cas. Et après, j'ai compris aussi que y a une volonté de-- ils sont en train de détruire tout. J'ai visité un, un quartier qui était encore un petit peu ancien, mais ancien dans le sens de là-bas, c'est-à-dire des années 30, 40, 'fin, et qu'ils vont bientôt détruire pour faire des grands buildings et tout comme ils font partout, parce que c'est des quartiers un peu centraux. Euh, mais donc voilà, donc y a pas du tout, euh, y a pas-- en fait, je, je-- après, je vais pas me lancer dans des choses sociologiques, je, parce que j'ai pas assez creusé le sujet, mais au Japon, on voit beaucoup de viei-- de vieilles architectures qui sont pas toujours très vieilles d'ailleurs, parce qu'on sait, au Japon, y a beaucoup de choses qui ont été détruites par de multiples incendies, reconstruisent, mais reconstruisent à l'identique. Et donc tu vois des vieilles maisons, des vieilles padogues-pagodes, des vieux trucs. Alors oui, t'as quelques, t'as des temples en Chine. Après, là, je parle des villes, donc encore une fois, il faut pas généraliser, euh, là, mais je parle, moi, de ce que je m'attendais. Je m'attendais à Shanghai d'avoir une vieille ville quoi. Voilà. Et j'ai pas vraiment vu. Bon, y a un quartier touristique un peu. Puis c'est, c'est des villes qui sont immenses aussi, donc peut-être que j'ai raté. Mais voilà, ce truc de-- c'est le contrecoup, quelque part, de cette modernité. Et impressionnante, c'est que, bah aussi, enfin, j'ai l'impression qu'un peu-

**Axel** · 23:46  
Il manque la moitié tradition, euh, du combo tradition et modernité, c'est ça ?

**Alexis** · 23:50  
Ouais, que, que, que t'as au-- bah ouais, mais tu vois, j'ai l'impression qu'ils essayent de l'effacer un peu, ce truc-là, tu vois. Et il doit y avoir des traditions, mais pas visuellement quoi. Mais oui, au Japon, j'ai, y a un peu ça, ce, ce fameux, euh, entre tradition et modernité, euh, qui, qui est un peu cliché, mais qui est un peu vrai quand même quoi.

**Axel** · 24:06  
Ouais. Moi, j'ai un petit point sur ça, c'est que surtout au début de mon voyage, ça s'est beaucoup, euh, amélioré à partir du moment où je suis retrouvé, mais à Chengdu notamment, à Chongqing un petit peu, y a des vieilles villes ou des vieilles rues Qui sont vraiment faites de bâtiments en bois avec des... On voit que c'était pas des notions d'accessibilité parce qu'il y a une marche en bois de 45 centimètres pour rentrer à l'intérieur du bâtiment ou des trucs comme ça. Euh, ça existe. Moi, le truc qui m'a un peu impressionné, c'est que ça, c'est rempli de boutiques. C'est-à-dire que y a dans une rue, euh, ancestrale qui est probablement vraiment très très vieille et qui est très très jolie, c'est rempli à 99 % de boutiques et y a un petit endroit où on peut rentrer. Y a un temple qui fait, euh, 20 mètres par 20 mètres, mais, mais sinon, c'est, euh, c'est très, euh, criard, j'ai envie de dire. C'est-à-dire que, ben, y a des gens avec des mégaphones qui sont en train de vendre des trucs. À Chengdu en particulier, c'est que des boutiques de souvenirs. C'est-à-dire que vraiment, euh, une boutique sur trois vend des petits pandas. Et nous, t'sais, dans des endroits qu'on aurait vachement protégés, je pense. Après, je dis ça, je pense que je retourne au Mont Saint-Michel et je me dirais : « Ouais, non, en fait, c'est vrai que Mont Saint-Michel, statistiquement-

**Alexis** · 25:09  
En fait, si tu réfléchis bien, c'est pas évident de préserver, tu vois, des endroits, j'imagine. Parce que si tu veux les préserver, est-ce que tu laisses des gens habiter dedans ? Mais à ce moment-là, personne peut les voir. Est-ce que tu mets des boutiques ? Ça, ça, ça génère un business. Donc comme ça, tu peux préser-- enfin sauvegarder l'endroit, mais tu leur donnes une utilité commerciale. C'est pas évident, hein, franchement, euh, mais c'est possible. Tu vois, moi, j'ai-- au Japon, à mon deuxième voyage, j'avais voy-- visité une ville qui s'appelle-- j'ai oublié déjà. J'sais plus, euh, c'est Uchiko, voilà, qui est une ville qui a été préservée. C'est un peu du coup, ça fait un peu musée quoi, mais et ça fait un peu fake, mais par contre, ils ont préservé les bâtiments. T'as quelques ateliers, quelques boutiques, mais sinon t'as aussi juste des trucs-- alors c'est un peu aussi étrange comme feeling, mais bon, tu vois, c'est, c'était sympa, c'était un peu-- c'était pas vivant, c'est ça qui était un peu bizarre, mais, euh-

**Axel** · 25:59  
Ouais

**Alexis** · 25:59  
...c'est, c'est difficile de trouver le, l'entre-deux, je pense. C'est vrai qu'on a la chance en, en Europe, en France d'avoir des vieux vija-villages, des choses hyper vieilles où t'as enfin-- tu-- même à, tu vas à Paris, tu te balades dans Le Marais, t'as l'impression un peu, tu vois, d'être à la Renaissance quoi.

**Axel** · 26:14  
C'est vrai. Après, je pense que ça existe en Chine, hein. J'ai vu un petit peu des villes dont je suis pas allé, mais y a Xi'an qui s'écrit X-I-apostrophe-A-N, je crois.

**Alexis** · 26:22  
Là où il y a l'armée, euh, de terre cuite.

**Axel** · 26:24  
Exactement. Et j'ai vu des photos, ça a l'air d'être quand même, d'avoir gardé des énormes palais, des murailles et des choses comme ça, euh.

**Alexis** · 26:31  
Non, mais c'est pour ça, je pense qu'il faut pas trop commenter, euh, là, ce, ce voyage qu'on fait, c'est, c'est quelques grandes villes, c'est pas un voyage en Chine, vraiment, euh. Donc, euh, donc voilà. Mais bon, ça, c'est le seul truc, tu vois, qui m'a, qui m'a mis, qui m'a un peu-- je m'attendais à, ouais, quelques décors à Shanghai qui étaient un peu, un peu différents. Euh, peut-être, euh, justement pour passer sur la partie un peu plus sérieuse, maintenant qu'on a parlé un petit peu de notre voyage, mais, euh, parle un peu de comment tu, comment tu travailles. Tu vois ? Parce que donc là, t'es à temps plein, tu travailles à temps plein, euh, sinon donc avec le décalage horaire, etc. Comment-- est-ce que tu peux me décrire un peu une, une journée, tu vois, un peu, un peu typique, euh, là, qu'on a fait là ces dernières semaines un peu pour toi quoi ?

**Axel** · 27:14  
Carrément. Eh ben déjà, bon ici, y a le truc, c'est qu'il y a le décalage horaire qui joue pas mal. Euh, actuellement, donc là, au Vietnam, on a six heures de décalage avec la France. Euh, ce qui fait que le matin, c'est le moment-- donc force-- on se presse pas trop parce que moi, je sais que je vais traîner un petit peu le soir. Euh, et du coup, en général, on commence notre journée par un café. Et, et en Chine et au Vietnam, la culture du café est assez chouette, qui fait que c'est un très bon moment de la journée déjà, euh, pour mettre le pied à l'étrier, un peu se décider de comment on va travailler parce qu'on a le choix entre des coworking, travailler, moi, peut-être un peu plus que toi, mais des fois travailler à l'hôtel pour, euh, on a des tâches un peu particulières qui nous demandent de plutôt être dans le silence ou, euh, au frais, euh, ça peut arriver aussi. Voilà. Assez souvent, on se trouve un endroit où on va-- qui va faire coworking, euh, dans lequel on va en fin de matinée et on se pose avec nos ordis après avoir payé la, notre, notre dû. Euh, on se pose avec nos ordis dans le petit endroit qu'on aura choisi. On met nos écouteurs, on travaille chacun de notre côté, euh, jusqu'à ce qu'on ait faim. Et là, donc c'est un moment qui est relativement calme parce qu'en général, la France est pas réveillée. Euh, on peut avancer bien comme il faut. Quand on a faim, on va manger, ce qui pour moi correspond très souvent, euh, mes premiers collègues se réveillent. Euh, et donc quand on revient de manger, ma journée devient un peu plus dans la communication, c'est-à-dire de savoir ce qui s'est passé, euh, remettre un peu d'huile dans les rouages et, euh, et communiquer autour de ce qui a été fait dans les heures d'avant. Euh, et sinon, après, ben c'est encore assez normal pendant quelques heures. C'est juste que moi, je suis déjà habitué à travailler en remote puisque la majorité de mes collègues sont à Paris, euh, et moi, je suis à Nantes. Donc je suis déjà en remote de base, donc ça change pas grand-chose à ma vie. C'est-à-dire que j'ai mon ordi portable, euh, j'ai, j'ai ma musique, j'ai mon Slack et ma journée, hormis qu'à chaque fois que je lève la tête, je suis dans un environnement qui est un peu nouveau.

**Alexis** · 29:10  
Ouais. Et, et souvent, j'ai l'impression où ce qui se passe, c'est peut-être, je sais pas, vers 19, 20 heures, on va dîner, on se promène un peu, on essaye de découvrir un peu parce que c'est toujours aussi cet équilibre d'essayer de se dire : « Bon, on est quand même à l'étranger, faut qu'on profite un peu. » On se-- des fois, on-- quand on prend le café, on va dans des quartiers un peu différents. On essaye d'aller dans des cowork dans des quartiers différents. On sort déjeuner, on fait un petit tour, on retravaille, on va dîner, on rentre et souvent, quand on est en semaine, on va dire et qu'on n'est pas-- tu vas retravailler un peu.

**Axel** · 29:42  
Ouais, souvent, je retravaille quand on arrive à l'hôtel. Euh, moi, j'ai, j'ai de la chance, c'est que mon CEO m'a dit que je pouvais, euh-- enfin, la première fois que je suis allé au Japon, ce qui était encore une année avant toi, m'a dit de profiter tant que mon travail était fait, c'est cool. Mais par contre, je suis quand même très reconnaissant d'avoir l'opportunité. Et ce qui fait que pendant nous, les heures où on dîne, c'est un peu le cœur du milieu de la journée, euh, pour les collègues en France. Et quand je reviens, y a souvent un peu des questions, y a des petits trucs à tester, y a des petites choses à faire. Y a aussi un truc, c'est que pendant tout ce temps-là, moi, j'ai des agents qui travaillent. On va y revenir, mais-

**Alexis** · 30:12  
C'était ma question suivante

**Axel** · 30:13  
...j'ai des agents qui travaillent. Et en fait, mon babysitting ne s'arrête pas. Donc c'est-à-dire que quand je rentre, eh ben en général, j'ai deux, trois collègues qui m'ont demandé des trucs et six agents qui m'ont demandé des trucs.

**Alexis** · 30:20  
Ouais.

**Axel** · 30:21  
Et puis, bah pour optimiser ma nuit, euh, c'est sûr que j'essaye de tous les remettre un peu on track et tout Donc ouais, en général, on rentre et moi, je suis en général jusqu'à minuit, une heure du matin en train de, de redonner un petit coup de boost à mes agents. Euh, j'espérais que je regarderais des films le soir. On a des, des projecteurs dans les chambres et des télés un peu sympa, mais au fait, jamais. J'ai-

**Alexis** · 30:39  
Voilà

**Axel** · 30:39  
...je fais jamais ça. Je rentre, je babysitte mes agents et puis bah après, je vais me coucher et puis ça recommence, euh.

**Alexis** · 30:47  
Est-ce que tu peux décrire un petit peu ça ? Tu vois, parce que justement, là, si on fait un peu la même journée, mais, euh, du point de vue de tes interactions avec, euh, avec l'IA, euh, déjà un peu à quoi ça te, ça te sert. Et, euh, parce que tu vois, y a un jeu un peu de maximiser le temps, le-- déjà d'une, d'une partie logistique, c'est-à-dire comme c'est de l'asynchrone, tu lances une tâche, elle peut mettre une demi-heure à mouliner tout ça, y a une espèce de-- et aussi les limites des abonnements, euh, de ce que t'utilises. Si tu veux décrire aussi peut-être ton setup, tu vois, quel, euh-

**Axel** · 31:18  
Alors, je suis pas très fier de cette partie, euh, maxing des abonnements, mais je vais quand même y venir parce que c'est une réalité et que voilà. Euh, y a déjà par rapport au timing, l'idée, c'est de se dire la quasi exclusivité de mon travail aujourd'hui est faite par des agents. 'Fin, la partie communication, ça reste moi. C'est-à-dire que parler avec mes collègues et s'aligner sur toutes ces choses-là.

**Alexis** · 31:37  
C'est du développement, principalement.

**Axel** · 31:38  
C'est du développement. C'est ça. Moi, je, j'arrive et je suis développeur front-end à la base et mon métier, c'est de coder. Euh, je n'ai pas écrit une ligne de code depuis un moment. Je n'ai même pas de, d'éditeur de code sur mon ordi à l'instant. 'Fin, je crois que j'en ai installé un, mais c'était pour ouvrir un fichier Markdown dans un truc propre, mais je n'ai pas édité de code manuellement depuis que j'ai réinstallé mon ordi y a environ six semaines. Euh, 100 % de mon, mon édition de code se passe via des agents. Et, euh, donc ouais, aujourd'hui, c'est beaucoup de la, plus de la stratégie parce que je re-je regarde assez peu le code. On pourra y revenir, mais c'est plutôt de dire : "OK, c'est quoi les objectifs que je veux atteindre avec ces trucs-là ?" Et bah en fait, je me lève le matin et je suis très content de regarder ce que mes agents ont fait la nuit. Souvent, je suis assez excité parce que je leur ai donné une tâche avant d'aller me coucher qui est censée être un peu longue, un peu dure, euh, un peu challengeante. Et moi, je me réveille, c'est un peu le matin de Noël tous les matins. De me dire : "Attends, est-ce qu'il a réussi ?" Parce que là, par exemple, dimanche dernier, j'ai dit à un agent : "Écoute, regarde tous les bugs et résous tous les bugs." Et je me suis levé lundi en me disant, euh : "J'espère que vraiment tous mes bugs sont résolus." Je me suis levé dimanche, je crois, en me disant : "J'espère que tous mes bugs sont résolus." Je crois que je t'en ai parlé. On était en, en croisière sur la baie d'Along et de temps en temps, on captait un petit bout de 4G. Et je crois que j'étais trop excité de dire à Alexis : "Ouah, je crois qu'il a réussi à résoudre tous mes bugs en moins de 1 000 lignes de code." Bon, c'était pas vrai, mais, euh, parce que j'avais pas lu, j'avais juste regardé, euh. Voilà. Donc de temps en temps, je viens, je fais des petits checks. Y a des moments, il faut que je me pose sérieusement pour voir ce qui a été fait, pour lire, pour me pencher dessus, pour tester, euh, tout ce truc-là. Mais ouais, le-- donc y a, y a cette grande partie de toutes les quelques heures, il faut vérifier les tâches qui ont été un peu longues. Y a des tâches qui sont courtes, mais y a peu de tâches qui sont courtes. Et puis moi, je, on va dire, je stratégise, euh, où j'envoie tous ces agents, sur quoi je les fais travailler. Et puis je, je design les features, euh.

**Alexis** · 33:26  
Ça, c'est le côté produit, finalement.

**Axel** · 33:29  
C'est le côté produit, ouais.

**Alexis** · 33:29  
C'est-à-dire que t'es directeur technique, mais aussi t'as une gros- un gros rôle à jouer sur la direction produit. Vous avez un PM aussi dans l'équipe ?

**Axel** · 33:37  
Ouais.

**Alexis** · 33:38  
Mais, euh, vous travaillez de concert quoi, ça-

**Axel** · 33:40  
C'est ça. Et le, et mon CEO, Damien, qui est très impliqué dans, dans ces discussions-là. Et voilà. Donc là, par exemple, depuis, euh, la partie où on, où on s'est retrouvés, y a une feature que je pousse et j'essaye de partager un, une sorte de proto en interne pour qu'on voit dans quelle direction on va aller, euh, sur la proactivité des agents. Et en fait, c'est-- mes questions, c'est quasiment de l'anthropologie, c'est de se dire : "Mais au fait, qu'est-ce qu'on a envie de savoir quand l'agent, il fait le travail pour nous ?" Et moi, c'est une question que je me pose pour moi tous les jours et voilà, j'essaie de leur transcrire pour nos clients.

**Alexis** · 34:11  
Pour des sales, par exemple-

**Axel** · 34:12  
Pour des sales, exactement.

**Alexis** · 34:13  
C'est de te dire : "OK, de quoi un sales, il a besoin pour faire, donc un sales, un commercial, 'fin, pour, pour, pour faire son métier ?"

**Axel** · 34:19  
Pour faire son métier.

**Alexis** · 34:19  
Et comment un agent peut proactivement, euh...

**Axel** · 34:22  
Voilà. Voilà. Donc voilà. Donc ça, c'est toutes mes questions. Je me les pose. Donc moi, en tant que dev, bah j'ai des agents qui travaillent pour moi et puis je, moi, je vois bien ce qu'ils me demandent. Et y a, je vois bien ce qu'ils me demandent, pose, la fatigue ou des choses comme ça. Et j'essaie de résoudre ces petits problèmes-là et, euh, voilà, de partager cette vision en interne avec l'équipe pour qu'on soit tous d'accord, vérifier que ça correspond bien aux, aux attentes de nos clients. Donc ça, c'est pour, voilà, ce qui est mon travail et comment je babysit mes agents. Donc c'est-à-dire qu'en fait, y a des petits bursts toutes les quelques heures, ce qui correspond plutôt bien avec notre système où bah on peut se retrouver pour manger. Parce qu'en fait, quand je mange, ça travaille. Quand, euh, je me balade, donc là, on est sortis prendre un café, ben j'ai prompté dans le taxi, euh-

**Alexis** · 34:58  
Ouais

**Axel** · 34:59  
...euh, pour relancer mes trucs. Euh, là, on va se refaire une petite session boulot. Y aura le dîner, y aura, voilà, tous ces petits trucs-là. Et donc j'ai un espèce de flux continu de trucs, mais c'est très très asynchrone. Je pense que c'est ça le truc intéressant.

**Alexis** · 35:12  
Ouais. Et c'est une logistique particulière, c'est une manière de travailler, surtout pour des développeurs, qui est vraiment presque à l'opposé, j'ai envie de dire, de ce qu'on faisait avant. C'est-à-dire un développeur, avant, il p- il travaillait que quand il écrivait du code, en quelque sorte, ou quand il réfléchissait, qui éventuellement, y avait un truc, c'est vraiment sinon rien n'est fait quoi. Tant que, tant que t'as pas les mains sur le clavier, rien n'est fait quoi.

**Axel** · 35:32  
Ouais, c'est vrai. Là, il reste quand même que y a un truc, c'est qu'y a des moments, il faut, faut faire des pauses pour savoir où on va. Parce que vraiment, et on en a parlé tous les deux-

**Alexis** · 35:40  
Ouais

**Axel** · 35:40  
...y a, y a ces moments où en fait, on sait qu'y a des trucs qui sont faits, mais on sait plus quoi, on s'y perd un peu, surtout quand on parallélise un petit peu. Voilà. Donc-

**Alexis** · 35:46  
Est-ce que juste pour, pour expliquer un peu toi, ton, ton setup, donc t'utilises un outil qui s'appelle T3.

**Axel** · 35:52  
Ouais.

**Alexis** · 35:52  
T'utilisais Conductor avant, 'fin, un mé- un espèce de méta-agent, je sais pas comment ça s'appelle, un orchestrateur-

**Axel** · 35:57  
Ouais

**Alexis** · 35:57  
...de, d'agents. Donc tu vas lancer plusieurs agents en parallèle sur plusieurs tâches sur la même codebase, à peu près, 'fin sur la base de code, euh-

**Axel** · 36:05  
Ouais, c'est ça. Et ces agents, euh... Donc moi, dans mon setup, ces agents tournent dans le cloud. Donc j'ai des machines à distance, ce qui fait que le côté cool, bah quand on voyage, déjà, c'est que je suis pas dépendant de ma connexion Internet pour que l'agent fasse son travail. Moi, je lui dispatche sa tâche. Visuellement, ça ressemble à un Codex ou un Claude Code ou si vous voulez, c'est juste que je l'ai setup pour que ça tourne sur une machine, euh, qui est dans le cloud. Donc moi, je, j'envoie mes tâches Je peux fermer mon ordi et aller faire ma vie ou je peux surtout les reprendre depuis mon téléphone à n'importe quel moment. Et voilà. Donc c'est globalement, on va dire, pour simplifier, un Codex ou un Claude Code dans le cloud à qui moi, je délègue mes tâches en parallèle. Euh-

**Alexis** · 36:44  
L'intérêt, c'est que tu peux et déléguer des tâches à Claude Code et à Codex et à n'importe quoi, parce qu'en fait, ça, ça vient un peu par-dessus quoi. Et donc-

**Axel** · 36:50  
Exactement

**Alexis** · 36:51  
...t'es pas-- tu peux avoir plusieurs abonnements, plusieurs machins. Bon, c'est-

**Axel** · 36:54  
Ouais

**Alexis** · 36:54  
...plusieurs modèles qui travaillent. 'Fin, on peut avoir-

**Axel** · 36:56  
Exactement. Et puis je le demande à l'un d'utiliser l'autre aussi. Ça, c'est un truc que je fais pas mal. J'ai beaucoup de setup où je travaille avec un agent, euh. Voilà, pour rentrer dans le détail aujourd'hui, Opus 5 est mon-- 5.5 est mon, euh, mon agent de prédilection pour la plupart des tâches. Mais des fois, je lui dis : « Ouais, vérifie ton travail avec Fab ou avec un combo de Fab et Astra » ou-- là, j'ai essayé un petit peu parce que j'avais des crédits OpenCode de dire : « Utilise Carbon et Meta Muse Wonderful, euh, pour vérifier ton travail de temps en temps ». Euh, voilà. Et, et les agents s'orchestrent aussi entre eux. Des fois, je parle à un et je lui demande de, de déléguer les tâches un maximum.

**Alexis** · 37:34  
Et y a un truc qui est rigolo du coup, que-- par rapport à tout ce que tu décris, le côté cloud, etc., qui fait que en fait, t'as-- non seulement t'as plus besoin d'histoire de code, t'as presque plus besoin d'ordinateur quoi.

**Axel** · 37:45  
Non.

**Alexis** · 37:45  
Et donc tu travailles notamment sur un iPhone Duo-

**Axel** · 37:47  
Ouais

**Alexis** · 37:47  
...que t'as acquis à Hong Kong, mais qui a l'air beaucoup plus pratique pour travailler que un, un téléphone normal quoi, quelque part.

**Axel** · 37:54  
Ouais. J'avais-- j'ai toujours eu ce petit rêve de me dire : « Je peux travailler d'un peu depuis n'importe où ». Euh, 100 % depuis le téléphone, c'était pas fou fou. Se trimballer avec un iPad, c'est un peu cool, mais euh-

**Alexis** · 38:04  
Ouais, c'est un peu fastidieux quoi, de sortir son iPad, même son iPad Mini tout le temps.

**Axel** · 38:08  
C'est ça. Le truc, c'est que pendant longtemps, les éditeurs de code étaient pas du tout au niveau de permettre de faire ce travail. Le truc, c'est qu'aujourd'hui, j'édite pas de code. Ma machine ne, n'a pas besoin de lancer des commandes. Ma machine en direct n'a pas vraiment besoin d'avoir des permissions particulières. Et là, notamment, bah avec Conductor, mais qui a fermé y a pas longtemps et là, le passage à T3. En fait, c'est-- les commandes sont exécutées sur une machine Linux dans le cloud et y a très très peu de limites. Et en fait, le-- mon device n'est quasiment qu'un écran qui me montre-

**Alexis** · 38:34  
Ouais

**Axel** · 38:34  
...quelque chose qui se passe ailleurs. Et oui, j'ai pas besoin de...

**Alexis** · 38:38  
Et le format est bien quoi. C'est-à-dire sur un téléphone, tu pourrais faire pareil, mais là, je vois, tu vois, quand tu travailles, tu-- c'est quand même une petite tablette hein, finalement, le, le Duo quand il est ouvert.

**Axel** · 38:47  
Ouais.

**Alexis** · 38:47  
Donc t'as quand même plus d'espace. C'est plus facile pour taper déjà sur le clavier. T'as plus d'espace à l'écran, tu peux voir les threads et la conversation. 'Fin, y a un truc un peu de...

**Axel** · 38:55  
Ouais. En plus, nous, on a une offre qui est aujourd'hui, on est en train de changer ça, mais on est très desktop. Et c'est vrai que de pouvoir afficher, bah, le produit sur lequel on travaille dans un ratio qui est proche de celui d'un ordinateur où, tu vois, les contrôles, ils sont quand même accessibles et tout, ça joue beaucoup. Euh, des fois, y a quand même des grandes quantités de choses à lire ou des petites choses à voir, ou même de se connecter à des outils qui en ont pas d'interface. Y a peu, mais ça existe encore un petit peu, qui ont pas de, de bonne appli mobile et des trucs comme ça. Franchement, le setup est, le setup est vraiment chouette. Euh, l'appareil est vraiment cool pour plein de petits détails. Il attire beaucoup l'attention hein, depuis-

**Alexis** · 39:28  
Ouais, tu t'es fait plein d'amis, hein.

**Axel** · 39:30  
Ouais, je me suis fait plein d'amis, en vrai, euh, voilà. Trop, mais voilà. Et j'ai profité, bah notamment quand je suis à Hong Kong, où j'ai pu mettre la main sur cet appareil, euh...

**Alexis** · 39:39  
Ouais, déjà mettre la main parce que c'est pas facile à se procurer et en plus un petit peu moins cher quoi.

**Axel** · 39:43  
Ouais, voilà. Espérons qu'y ait pas de problème parce que mes garanties, euh-

**Alexis** · 39:47  
Seront-

**Axel** · 39:47  
...sont sévèrement limitées. Et euh-

**Alexis** · 39:49  
On te le souhaite, ouais.

**Axel** · 39:50  
Et, et je vais rebondir sur un dernier truc que tu m'as demandé tout à l'heure et j'ai pas forcément répondu, c'est la partie, euh, maximiser mes abonnements. Y a un peu ce petit FOMO quand même qui fait que-- et malheureusement pour moi, ça tombe souvent le week-end. Euh, j'ai des abonnements, notamment Claude et Claude Code, qui se renouvellent le dimanche soir, dans la nuit du dimanche au lundi, avec notre décalage horaire. Et ça m'embête d'avoir des abonnements qui sont relativement chers avec un énorme compute qui est dispo et que i-il en reste pas mal à la fin de la semaine.

**Alexis** · 40:20  
Mh.

**Axel** · 40:20  
Donc ça fait quoi ? Trois ou quatre week-ends que bah j'suis là le samedi, dimanche. Mais qu'est-ce que je peux faire ? Des trucs que j'avais prévu de faire. Le but, c'est pas de dépenser, de gaspiller ces trucs, c'est de se dire : « Attends, là, y a ça, j'ai du-- j'ai, j'ai de la force disponible. Qu'est-ce que je peux faire de trucs ambitieux ? » En général, c'est ça. C'est qui-- c'est quoi les trucs ambitieux que je me permettrais pas de faire ? Et je les lance le week-end. Le petit problème, c'est qu'après ce truc-là, il traîne la semaine. Ça veut dire que je me suis rajouté une tâche pour la semaine d'après parce qu'il faut que je m'en occupe. Euh, réécris tout le site, résous tous les bugs et, euh, et tente de refaire une nouvelle version en Rust. C'est une blague, mais, euh, vu que tout le monde fait ça, j'y pense. Voilà, donc après, il faut baby-sitter quand on a lancé une tâche ambitieuse. Mais souvent, par contre, elles sont très excitantes.

**Alexis** · 41:01  
Bah tu vois, c'est-- les gens qui écoutent ce podcast savent que je, je juge un peu le token maxing et que je suis pas un, un fan de ça et de, de, de, de ce gas-, de ce gaspillage. Ouais, ça dépend dans quel sens on le voit, mais, euh, néanmoins, y a quand même un truc que je dois reconnaître quand même depuis quelques semaines, mois, le niveau agentique, tu vois, de, des, et des modèles qu'on a et des agents qu'on a, en fait, fait que effectivement, on peut leur demander de faire des choses vraiment cool quoi. Et donc je, j'ai ressenti un peu, je, je lutte contre moi-même. Puis comme j'ai pas des gros abonnements, t'façon, je, je, je me, je m'empêche de faire ça, mais des fois, j'ai envie, tu vois. J'ai envie de là, tu vois, je travaille sur des serious games, des trucs comme ça, de lancer... À un moment, je dis franchement, j'ai, j'ai pensé à prendre un abonnement à 200 dollars. C'était au-- quand Astra est sorti, juste pour faire développer, tu vois. Pendant un mois, je me dis : « Je saigne le truc et je fais développer plein de moteurs de jeux, etc. pour dév-- faire des serious games ». Après, je me suis dit : « Bon... » Mais je re-- je comprends, tu vois, ce sentiment quand t'as un projet intéressant et des trucs, de mettre à puissance cette énergie, euh, cognitive quelque part, tu vois. Je, je, je le comprends. Je, tu vois, c'est...

**Axel** · 42:10  
J'suis, j'suis pas fier de moi, clairement. Et, euh, après, y a un autre truc, c'est que bah moi, c'est la boîte qui paye pour cet abonnement. J'ai la chance que mon CEO soit pour, euh, que s'il y a des outils qui aident, euh, qu'on saute dessus. Et m-- c'est probablement pour me rassurer, mais j'essaye de me dire : « Attends, mais y a des trucs qui vont devoir être faits ». Et juste si je les fais là, c'est, c'est-- je parle d'argent et pas du tout d'écologie ou de choses comme ça, mais si je le fais là, c'est gratuit. Voilà, parce que ça coûtera pas plus cher. Et quand on voit le, le montant de tokens qu'on peut dépenser quand il reste 34 % d'un abonnement à 200 $ de Claude, euh, c'est incroyable. Et donc vraiment, donc là, j'ai eu un truc quand même samedi soir, j'ai lancé un agent en lui disant : « Regarde tous les bugs de Sentry, résous-les tous. Tu fais une espèce de grosse PR qui contiendra toutes les autres PR, machin. » Et il en a résolu 100 d'un coup.

**Alexis** · 43:00  
OK.

**Axel** · 43:00  
Voilà. Donc, euh, dans un truc qui était mon, ma chute de mon abonnement de la semaine.

**Alexis** · 43:05  
Ouais.

**Axel** · 43:06  
Euh...

**Alexis** · 43:08  
Non, mais c'est, c'est, c'est un dilemme, hein. Je veux dire, à un moment, on peut pas-- rien n'a-- la loi n'interdit pas de, de, de maximiser ses tokens, euh. C'est comme l'avion, c'est comme toutes ces choses-là, hein, tu vois. Donc c'est-- après, c'est, c'est des dilemmes, mais je-- humainement, tu vois, je le comprends vraiment parce que comme tu dis, tu vois, c'est-à-dire que, euh, j'sais pas, 500 $ de Fable, tu as en échange de ça, et en plus, ces 500 $, tu les payes pas vraiment puisque c'est-- mais en volume, hein, je veux dire, euh, tu as des choses extrêmement, euh, intéressantes. Alors, les gens qui s'amusent à recoder Call of Duty, etc., ça, je qualifierais pas ça d'intéressant parce que ça, c'est de la connerie, c'est-- voilà, mais, mais utiliser cette énergie pour faire des choses intéressantes, créatives, qui servent à quelque chose et tout, c'est, c'est vrai que c'est, euh, ça, ça fait envie, ça donne envie, quoi. 'fin, c'est un-- c'est comme d'avoir, euh, une armée de, de stagiaires un peu smart qui tu peux demander des choses nuit et jour. Euh, voilà, c'est-

**Axel** · 44:03  
Là, j'ai envie de jumper sur un truc, c'est que moi, c'est pas une armée de stagiaires un peu smart, c'est que moi, je suis le stagiaire de, de Fable 5.2 et de Opus 5.5. C'est-à-dire que je suis là, ils m'ont demandé de review et de débloquer et de rajouter une clé d'API, euh, qui est manquante dans 1Password.

**Alexis** · 44:17  
T'es leur assistant, quoi.

**Axel** · 44:18  
Voilà, je suis leur assistant, ouais. Clairement, là, ils m'attendent. Je te le dis pendant qu'on enregistre le podcast.

**Alexis** · 44:25  
Euh, il y a juste un truc sur lequel je voulais rebondir. Ça fait partie des questions, là, que j'avais préparées un peu. Mais c'est marrant, tu vois, t'as, t'as évoqué donc tout ton setup et tout. Et en fait, tu vois, un truc dont je me suis rendu compte, là, pendant ce voyage. Donc moi, c'est pareil, tu vois, je, j'ai un setup très frugal, je travaille que sur mon ordi, 'fin, et je résistais un peu à ce truc de cloud et d'orchestrateur et, euh, et en fait, le truc, c'est que là, le setup que t'as décrit, il est extrêmement résilient. C'est-à-dire que on a-- tu l'as, tu l'as mentionné, notamment le fait de travailler, 'fin, de faire travailler les agents sur des VM qui sont dans le cloud, c'est extrêmement résilient. C'est-à-dire que moi, par exemple, hier, j'ai dû partir du coworking dans lequel j'étais parce que, bah, la connexion était pas très bonne, elle était un peu instable et elle avait pas assez de bande passante. Et j'ai dû-- et donc voilà, et donc j'étais limité. Après, j'ai eu un autre truc où j'étais limité par les ressources de mon ordi, 'fin, et, euh, et bon, voilà, moi, je, je-- pas dans les mêmes contextes que toi, aussi, euh, professionnel, mais je reconnais que là, dans des situations de voyage, où la connexion est instable, où la bande passante est, est pas garantie et tout ça, c'est quand même, euh-- y a-- ça m'a fait réfléchir. Tu vois, y a un truc où faut que je retravaille un peu mon setup, quand même.

**Axel** · 45:33  
Ouais. Bah, j'encourage, euh, ceux qui en rencontrent ces petits problèmes de la connexion, ça peut être un peu compliqué ou j'aimerais bien pouvoir travailler sans que mon ordi soit allumé ou, euh, des petites choses comme ça. Y a des solutions, y a le cloud, y a aussi le fait d'avoir une machine chez soi, euh, de récupérer un vieil ordi, parce que globalement, pour faire tourner un agent, il faut très peu de ressources. Et je vois dans les sphères que je suis, y a beaucoup le : « Mais récupère un ordi ou acheter un truc à 100 € sur leboncoin de quelqu'un qui se sert plus d'un ordi qui a 6, 7 ans. » Voilà, mettez Linux et en fait, cet ordi, il est pas pour vous.

**Alexis** · 46:04  
Hein.

**Axel** · 46:04  
Il est vraiment que pour vos agents, euh, vous faites le setup. Et ouais, c'est sûr que c'est, euh-

**Alexis** · 46:09  
En plus, petite astuce au passage, tu prends un vieil ordi, t'installes un Linux un peu léger, même un truc pas, un peu, pas très ergonomique, tu vois. Mais de toute façon, c'est pas grave, c'est l'agent qui va-- et au passage, tu demandes à l'agent de bien optimiser la configuration. Première chose que tu fais. Et, euh, franchement, c'est assez ouf parce que il va bien configurer la mémoire swap, les trucs, plein de petits trucs que tu fais jamais, en fait, qui sont chiants à administrer quand t'as, t'as ta bécane Linux. Et vraiment, tu peux redonner vie à des-- déjà, Linux permet beaucoup de redonner vie à des vieilles bécanes et en plus, avec un agent qui l'optimise, c'est double, double bonheur, quoi.

**Axel** · 46:43  
Ouais. Bah moi, pour info, je suis pas très branché ligne de commande Linux ou tout ça de base, mais je deviens amoureux parce que je me rends compte à quel point les agents sont excellents. Mais genre vraiment, moi, je suis un utilisateur de Mac, mais vraiment, c'est bien, bien meilleur pour un agent d'être sur Linux que d'être sur Mac. On se rend compte du nombre de choses que je dois contourner pour faire des trucs simples sur mon ordi, là où, euh, je, je le fais plus. D'ailleurs, les agents tournent pas sur mon ordi, mais c'est vraiment incroyable.

**Alexis** · 47:09  
Euh, peut-être une, une, une dernière question. Euh, déjà, est-ce que, est-ce que t'as-- est-ce que t'utilises de l'IA un peu pour d'autres choses que du dev ? Pas l'impression tant que ça, si ? Ou qu'est-ce que-

**Axel** · 47:21  
Alors, peu, mais le truc, c'est que je fais pas beaucoup d'autres choses que le dev. C'est surtout ça. Mais un petit peu. Notamment, là, on a voyagé et, euh-

**Alexis** · 47:31  
Oui

**Axel** · 47:32  
...on a un petit peu utilisé l'IA pour essayer de trouver des choses qui correspondent à nos attentes, à nos envies, parce qu'on a très vite des agents, même quand on fait pas grand-chose. Parce que moi, c'est marrant, parce que quand je fais du pas dev, j'utilise ChatGPT. Ce qui est, euh-- j'ai été, euh, 'fin, vraiment, pour moi, ChatGPT, c'était le truc des normies, quoi. J'étais très Claude et j'avais mon setup et j'avais mon-- j'ai eu mon OpenClaw les premiers jours où y avait OpenClaw et je parlais via Telegram en vocal avec mon truc. Et là, y a quand même le côté cool, bah non, je snap une photo ou là, tout à l'heure, je demandais : « Vas-y, en fait, je vais acheter du café pour, euh, telle personne. » Et il a fait le croisement, il a fait : « Ah, telle personne, OK, c'est plutôt du café filtre. T'es là, ah ouais, c'est un peu un connaisseur. Tu peux essayer de le surprendre avec un... » En fait, j'ai pas besoin de lui expliquer parce qu'il aurait pu me donner, me donner autre chose. On a eu des surprises, hein, pas que des bonnes à laisser les IA, euh...

**Alexis** · 48:17  
Est-ce que tu veux qu'on raconte notre aventure d'hier soir ou-

**Axel** · 48:20  
On peut raconter notre aventure d'hier soir. Je me disais qu'il fallait qu'un jour, je la raconte à mes amis, mais je vais la raconter à mes amis via ce podcast.

**Alexis** · 48:24  
À la France entière. Bon, euh...

**Axel** · 48:26  
Exactement.

**Alexis** · 48:27  
Ou en tout cas à mon, à mon, m-mon audience.

**Axel** · 48:29  
Mais ouais. Ben, tu veux que je raconte ou, euh ?

**Alexis** · 48:32  
En fait, on, on sait-- je-- on sait pas vraiment qui, euh, j'ai-- d'où nous est venue l'idée. Mais à Saïgon, y a, y a un quartier qui s'appelle Japantown On adore le Japon, je pense que c'est ça qui nous a un petit peu aveuglés, mais je pense que dans nos recherches respectives, c'est un peu ressorti ou pas, tu vois. Après, j'ai relu, après, j'ai pas forcément lu, mais voilà, moi, ça me paraissait évident qu'on adore le Japon, on va aller à Japantown quoi.

**Axel** · 48:55  
Ouais. Moi, je sais d'où ça vient. Parce que-

**Alexis** · 48:57  
Toi, tu l'as vu dans tes reco, dans tes recos ?

**Axel** · 48:59  
Ouais, quand je fais ma petite recherche dans le ChatGPT de Japantown, en fait, j'ai demandé à, à une IA avant qu'on a réussi, parce qu'on fait un peu notre programme de voyage en streaming. C'est-à-dire que quelques jours avant, on dit : « Tiens, on va aller, euh, on va aller là-bas. » Et dans quel quartier il faut aller se loger ? Parce que moi, par exemple, j'ai pas trop kiffé le quartier dans lequel on est arrivé à Hanoi et j'ai changé d'hôtel, euh, en cours de-- en début de, de semaine. Et je me suis dit : « Tiens, je vais un peu plus faire ma recherche de quel quartier j'ai-- me, me plaira plus à, à Saïgon. » Et j'ai vu que dans les résultats qu'il m'a proposés, le deuxième résultat était à Japantown. Et il m'a dit : « Oh, tu vas aimer, euh, voilà, c'est vivant, c'est... » Et puis il y a des petites ruelles japonaises quoi.

**Alexis** · 49:40  
Ouais, ouais.

**Axel** · 49:41  
Voilà. Et euh, donc on s'est dit Japantown. Et puis on avait envie de manger. On s'est dit : « Tu sais quoi ? Ce soir, on va aller manger un tonkatsu ou un plat bien japonais parce que ça va être un peu cool. »

**Alexis** · 49:51  
Moi, je me disais qu'il y a moyen qu'à Japantown, il y ait un très bon tonkatsu, par exemple.

**Axel** · 49:55  
Exactement.

**Alexis** · 49:55  
Bien. Et en fait, et en fait, Japantown, c'est le quartier rouge de Saïgon quoi. En tout cas, c'est un quartier rouge. Je sais pas s'il y en a d'autres, mais c'est un quartier rouge quoi.

**Axel** · 50:04  
Surtout, c'était un piège. C'est-à-dire que tu m'as dit : « Ouais, il faut rentrer, il y a une petite entrée. » Vraiment, tu sais, c'est pas un quartier où c'est des rues et on peut rentrer dans n'importe quelle rue. C'est genre un bloc et il y a une entrée qui emmène quelque part. Et donc on est rentrés dans ce truc-là qui est un petit labyrinthe rempli d'hôtesses quoi.

**Alexis** · 50:19  
Ouais.

**Axel** · 50:20  
Il y a-

**Alexis** · 50:20  
De bars hôtesses

**Axel** · 50:21  
...deux ou trois restaurants, mais-

**Alexis** · 50:23  
Ouais, vaguement. Ils avaient pas l'air incroyables en plus. Ils étaient un peu à l'entrée, donc c'est ça, ça a maintenu l'illusion encore pendant quelques mètres. Et puis-

**Axel** · 50:29  
Ouais, ouais

**Alexis** · 50:30  
...et par contre, il y a au moins, je sais pas, 30, 40, 50 peut-être bars hôtesses quoi.

**Axel** · 50:34  
Je ne sais pas. Donc voilà. Et donc c'est très malaisant parce que c'est pas du tout ce qu'on est venu chercher. Alexis a beaucoup fait rire quelqu'un parce qu'il y a des gens qui nous demandaient : « Mais qu'est-ce que vous voulez ? » Et arrivés au bout du quartier, à l'endroit où il n'y a plus de sortie, c'est-à-dire qu'on se retrouve et il y a trois murs et juste l'option de faire demi-tour.

**Alexis** · 50:50  
Bah, je me suis dit perdue pour perdue quand même, je vais demander à une hôtesse où est le meilleur tonkatsu quoi. Et ça l'a fait beaucoup rire. Parce qu'en fait, elle a cru que je faisais une blague quoi, je pense, ou je sais pas. Enfin. Et du coup, après, elle a ramené une de ses copines, elle dit : « Vas-y, demande-lui ce qu'il cherche. » Je lui ai dit : « Je cherche le meilleur tonkatsu. » Ça a fait beaucoup faire la deuxième aussi.

**Axel** · 51:06  
Ouais.

**Alexis** · 51:06  
Et après, elles m'ont dit que je m'étais-- j'avais été mal aiguillé, que c'était pas ici, les tonkatsu.

**Axel** · 51:10  
Exactement. Voilà. Donc merci ChatGPT. Merci l'IA.

**Alexis** · 51:14  
Moi, j'ai eu, bon voilà, c'était le, la, la petite anecdote qui était un peu l'IA et un peu no-no-nous aussi. Les-- moi, je-- donc c'est vrai que j'ai, j'ai beaucoup utilisé le, mon agent Hermes pour préparer ce voyage, notamment pour faire des recherches sur les gens à rencontrer et tout, les meet-up tech, etc. Je croise toujours ça aussi un peu avec ce-- quand on arrive sur place, je demande à tous les gens que je rencontre, les quartiers, les trucs et, euh, un peu des recherches. Et, euh, mais j'ai eu plusieurs fois, sur des choses plus sérieuses, des, des, des ratés, des gros ratés avec Hermes. Notamment, par exemple, un exemple, à Shenzhen, il m'a dit qu'au-- à un des musées, un, un art center qui avait l'air assez chouette, il y avait une expo sur le-- qui s'appelait The Future of Code ou un truc comme ça. Et en plus, mon agent Hermes, il me disait : « Ouais, ça, c'est génial pour toi, c'est dans ton thème et tout. » Et j'arrive, je vois pas le truc et donc, et je redemande et il me dit : « Ah bah non, en fait, c'était au mois de mars. » Et ça, ça m'est arrivé plusieurs fois. Pareil, il m'a trouvé à Hanoi un festival de start-up qui en fait était trois mois plus tard. Et donc après, ça m'a fait comprendre quand même que les fonctionnalités de base de recherche de Hermes, parce qu'après, j'ai décortiqué le truc pour comprendre, c'était intéressant, étaient quand même pas incroyables quoi. Et là, j'ai fini par réussir à lui faire mettre à jour un peu ses skills et tout. Il fait des recherches, il croise les infos et tout ça et là, ça donne des meilleurs résultats. Mais j'ai eu, ouais, plusieurs ratés. Et comme quoi, et on le sait hein, mais ça vaut le coup toujours de rappeler quand même que voilà, l'IA se trompe quand même très régulièrement, même aujourd'hui. On disait avant que Fable est incroyable et Opus, etc. Mais notamment, bon moi, quand je travaille avec Hermes, j'utilise pas ces outils. J'utilise des modèles Flash, open weight, plus des skills, un peu les trucs de base de, de Hermes. Bah sur la recherche, il est vraiment pas si bon quoi.

**Axel** · 52:56  
C'est vrai. J'ai deux petites notes, du coup, sur les usages liés à-- externes au, au code. La première, c'est que j'ai demandé à ChatGPT de me commander un t-shirt.

**Alexis** · 53:05  
Ouais.

**Axel** · 53:06  
Parce que j'avais très chaud et je voulais, voilà, un t-shirt plus adapté à la température quand on est arrivés au Vietnam. Donc j'ai lancé Codex sur mon ordi, euh, qui m'a trouvé un vendeur qui a lancé en computer use mon Messenger, qui a écrit au vendeur pour savoir quelle était la taille, quelle était les dispos dans les boutiques qu'ils avaient là, de négocier s'il pouvait commander un Grab Express, donc qui est un outil de livraison un peu comme Uber, mais qui peut aussi faire de la livraison de petits objets. Et qui à un moment m'a dit : « Bah voilà, j'ai trouvé ce t-shirt dans telle taille, ce sera tel montant avec la livraison. » Euh, donc il m'a dit : « Oui, tu peux faire un paiement via je ne sais pas quoi, un outil de paiement local. » Je lui ai dit non. Il m'a fait : « C'est bon, bah j'ai recontacté le vendeur, il m'a envoyé un truc que tu peux utiliser dans Revolut. » J'ai fait le paiement. Il avait contacté l'hôtel pour vérifier avec l'hôtel que je pouvais le faire livrer à mon hôtel parce que voilà. Et euh, et je reçois un message WhatsApp de l'hôtel qui dit : « Ouais, on a bien reçu votre colis. » Voilà. Donc ça, c'était-- l'expérience était assez chouette. Bon, j'ai, j'ai-- c'était pas du zéro message. Il y a eu peut-être, on va dire, une dizaine de messages de ma part, de validation, de confirmation, de trucs comme ça, mais un peu cool comme expérience.

**Alexis** · 54:11  
Ça, c'est le côté vraiment agentique hein. Enfin, je le répète à longueur de podcast, mais le, ce qu'on vit actuellement, c'est pas tant la puissance des LLM, c'est le-

**Axel** · 54:19  
Le croisement des infos, la connexion

**Alexis** · 54:21  
...le côté agentique qui est vraiment, euh, voilà.

**Axel** · 54:23  
Ouais. Donc il y a ça. Et sinon, l'autre point qui est quand même assez important à souligner, dont on n'a pas parlé et qui, culturellement et par rapport à notre métier, c'est la division entre l'Internet chinois et l'In-- 'fin, on peut dire en Asie, mais globalement en Chine, surtout, c'est très très marqué, et notre Internet à nous. Et c'est pareil pour les IA, parce que nous, on a nos IA et ils ont des IA, ils ont un App Store dans lesquels on n'a pas les, les applications. Il y a une application qui est plus utilisée que ChatGPT, qui est un assistant chinois, mais qu'on peut pas télécharger. Enfin, en tout cas, moi, j'ai un iPhone et j'ai pas de compte App Store chinois, je peux pas le télécharger. Euh, il y a plein de choses qu'on peut pas faire si on n'a pas une CB chinoise, si on sait pas lire le chinois.

**Alexis** · 54:58  
Ouais. Ouais, puis il y a des trucs d'accès, de-- une petite anecdote là-dessus. Par exemple, le dernier soir à Shenzhen, on allait dans un club techno un peu, j'allais dire underground, pas vraiment, mais un peu, voilà. Et alors, je crois que j'avais eu la reco quand même par une recherche de Hermes, tu vois. Mais par contre, il arrivait pas à trouver ce qu'il y avait le soir même. Or, l'info était disponible sur le, le, le WeChat du truc. Donc y a tout cet usage de WeChat aussi, de groupes, de-- c'est un peu à moitié Twitter, à moitié WhatsApp. Enfin, WeChat, de toute façon, ça fait tout hein. Ça, les, les gens écouteront tous mes podcasts en anglais, là, toutes les interviews, je, je reviens en détail sur toutes ces choses-là, mais, euh, et j'ai été obligé d'aller, moi, faire une capture parce que j'arrivais pas à lire l'image. Je voyais bien qu'il y avait un truc le soir même, mais je comprenais pas ce que c'était. Et ensuite d'avoir la traduction, mais il arrivait pas à arriver à, à avoir cette info. D'ailleurs, il m'a, il m'a dit, je crois : « Y a rien ce soir », quoi.

**Axel** · 55:49  
Oui. En tout cas, c'est, c'est vrai que c'était fascinant parce qu'on a un monde de tech qui a au bout de notre doigt et auquel on n'a vraiment pas accès, euh-

**Alexis** · 55:59  
Ouais

**Axel** · 55:59  
...et ça, c'est triste. Vraiment, euh, j'espère qu'un jour, ce sera pas, euh-- 'fin, on trouvera autre chose parce que c'est un, c'est un truc qui va dans les deux sens hein, parce que en théorie, euh, en Chine, ils ont pas accès à Google, mais nous, on n'a pas accès à, à une grande partie de l'Internet. Et voilà. Donc c'était la, le, the great divide, la grande division.

**Alexis** · 56:18  
Dernière question : euh, qu'est-ce que t'as hâte de faire quand tu vas rentrer, euh, quand tu vas rentrer chez toi ?

**Axel** · 56:25  
Ouais, le premier truc qui me vient, c'est un peu particulier, c'est d'aller voir mon café que j'aime bien en bas de chez moi et de lui demander s'il peut me faire du coconut coffee.

**Alexis** · 56:32  
Ouais.

**Axel** · 56:33  
Voilà, qui va-- qui est ma, ma grande découverte, euh, culinaire du moment. Et euh-

**Alexis** · 56:40  
Mais c'est, c'est-

**Axel** · 56:41  
Voilà, j'ai, j'ai pas d'autres réponses

**Alexis** · 56:42  
...c'est, c'est très très, euh, à propos.

**Axel** · 56:45  
Et toi, par contre, je suis curieux.

**Alexis** · 56:47  
Ce que je vais faire ?

**Axel** · 56:48  
Ouais.

**Alexis** · 56:48  
Oh, j'ai une réponse très simple qui n'est pas du tout liée à ce voyage, mais j'ai hâte de jouer à GTA VI quoi.

**Axel** · 56:52  
Ah.

**Alexis** · 56:52  
Qui sort là. Alors, je sais pas quand le-- je publierai cet épisode. Si, je pense que je vais publier avant. Euh, ah mais non, d'ailleurs, oui, en plus, je parlais de l'épisode avec Laurent, là, que j'ai enregistré, mais tout à l'heure, mais je l'ai enregistré en anglais, c'était pas sur-- ce sera pas sur le même flux. Donc, euh, là, je vais publier vite ce, ce, cet entretien, je pense. Euh, le-- je vais le publier, je pense, le jour de mon anniversaire, donc le 19, qui est le jour de la sortie de GTA, qui est le jour de notre dernier voyage, dernier jour de voyage. Donc voilà, je reviens le 20 et j'espère jouer à GTA. Je sais pas combien de temps ça va mettre à télécharger le jeu. Ça, c'est ma petite frustration, tu vois, de-- je pense que j'y jouerai que samedi, mais euh, mais voilà, je vais dormir aussi. Je pense que ça, ça-- j'ai hâte aussi un peu de, de ça quoi.

**Axel** · 57:27  
Nice.

**Alexis** · 57:28  
Bon, eh bah écoute, merci beaucoup pour, pour tout ça. C'était très cool de faire enfin ce, ce petit échange. Où est-ce que les gens peuvent te suivre ? Où est-ce que tu publies ? Un petit peu sur LinkedIn, un peu sur X ?

**Axel** · 57:37  
Un peu sur LinkedIn, un peu sur X, ouais.

**Alexis** · 57:40  
Tu me donneras les liens-

**Axel** · 57:41  
C'est axelrock tout attaché sur X.

**Alexis** · 57:43  
Qui n'est pas un pseudo, qui est ton vrai nom.

**Axel** · 57:45  
C'est mon vrai nom, voilà.

**Alexis** · 57:47  
Ça me fait-- je, je le dis à chaque fois, mais je trouve ça un peu fascinant, mais parce que pendant longtemps, on s'est connus dans un contexte où on fonctionne plus par pseudo. Et donc j'ai longtemps cru que c'était ton pseudo et donc c'est ton vrai nom. Et s'il y a des gens qui écoutent Game of Roles, parce que je sais qu'il y en a parmi mes auditeurs, vous avez peut-être entendu Axel Rock dans les, dans des-- en tout cas le nom, pas toi directement, mais, mais voilà. Eh bah écoute, merci beaucoup.

**Axel** · 58:09  
Merci à toi.

**Alexis** · 58:09  
Je mettrai tous les liens dans, dans les notes. À bientôt.

**Axel** · 58:12  
Super.

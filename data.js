const data = [{
            date: new Date(1949,0,1),
            dateString: "Le 1er Janvier 1949",
            content: {
                container: "div content",
                image: {
                    container: "div image-wrapper",
                    img_url: "data:image/jpeg;base64,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",
                    alt_txt: "Mao Zedong révolutionnaire et le général Chiang Kai Chek lors de leur dernière rencontre",
                    label: "Mao Zedong révolutionnaire et le général Chiang Kai Chek lors de leur dernière rencontre"
                },
            text: {
                    container: "div text",
                    content: [{
                        container: "h2",
                        text: "1949 - Défausse de la Chine par le Japon ",
                    }, {
                        container: "p",
                        text: "Lors de la fin de la deuxième Guerre Mondiale, les Japonais, qui occupaient la Chine, ainsi que Taiwan ont été obligés de redonner l’île à la Chine. Cependant, après la guerre, à cause du massacre des japonais, ayant tué plus de 7.5 millions de chinois lors de la guerre, les communistes de Mao Zedong, prônant le partage des terres avec le peuple, se sont rebellés contre le gouvernement nationaliste chinois et ceux-ci ont été soutenus par l’URRS. Ils ont renversé le gouvernement en place et vaincu les nationalistes du général Chiang Kai-Shek, qui, le 8 décembre 1949, a décidé de se réfugier à Taiwan avec ce qu’il restait de son gouvernement, à plus de 150 km de la côte chinoise. Depuis ce jour, le gouvernement de Pékin tenterait de réunifier Taiwan et la Chine.",
                    }]
                }
            }
        }, {
            date: new Date(1955, 5,1),
            content: {
                container: "div content invisible",
                image: {
                    container: "div image-wrapper",
                    img_url: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/c99f/live/4a3b44f0-195b-11ed-894d-e96102bbb308.jpg",
                    label: "Le leader nationaliste Chiang Kai-shek passe en revue les troupes américaines à bord du USS Wasp dans les eaux territoriales de Taïwan.",
                },
                text: {
                    container: "div text",
                    content: [{
                        container: "h2",
                        text: "1955 - Première crise du détroit de Taiwan",
                    }, {
                        container: "p",
                        text: "Les partisans de Mao Zedong vont prendre possession de quelques îles sur le territoire de Taiwan. Cependant, ils seront vite freinée par les États-Unis, qui considère le gouvernement nationaliste présent en Taiwan comme le seul gouvernement  légitime chinois, vont menacer pékin, notamment avec la résolution de la Fermose du 29 janvier 1955, permettant au président du pays à rétablir par la force si nécéssaire la paix dans le détroit. Devant ce puissant allié et une possible menace de force nucléaire par ceux-ci, les envahisseurs renoncent à leur tentative d’annexion de Taiwan.",

                    }]
                }
            },
        }, {
            date: new Date(1958,2,15),
            content: {
                container: "div content invisible",
                image: {
                    container: "div image-wrapper",
                    img_url: "https://amcham.com.tw/wp-content/uploads/2019/03/tra-2.jpg",
                    alt_txt: "A random image",
                    label:"This is an image",
                },
                text: {
                    container: "div text",
                    content: [{
                        container: "h2",
                        text: "1958- Deuxième crise du détroit de Taiwan",
                    }, {
                        container: "p",
                        text: "Afin de vérifier la détermination des Américains à protéger Taiwan, Mao Zedong a décidé de bombarder les îles de Quemoy et de Matsu. Ceux-ci ont réagi rapidement en mettant en place une flotte militaire à Taiwan et en ravitaillant Taiwan avec de l'artillerie militaire, pouvant tirer des charges nucléaires.",

                    }]
                }
            }
        },
        {
            date: new Date(1979,1,15),
            content: {
                container: "div content invisible",
                image: {
                    container: "div image-wrapper",
                    img_url: "https://amcham.com.tw/wp-content/uploads/2019/03/tra-2.jpg",
                    alt_txt: "A random image",
                },
                text: {
                    container: "div text",
                    content: [{
                        container: "h2",
                        text: "1979- Vote du «Taiwan Relation Act",
                    }, {
                        container: "p",
                        text: "Le congrès américain garantit à Taiwan de l’aide pour la protection de leur territoire, ainsi qu’une entraide économique pour faciliter le commerce entre les deux nations.",
                    }]
                }
            }
            },
            {
            date: new Date(1987,6,15),
            content: {
                container: "div content invisible",
                image: {
                    container: "div image-wrapper",
                    img_url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Tsmc.svg/1200px-Tsmc.svg.png",
                    alt_txt: "A random image",
                    label:"",
                },
                text: {
                    container: "div text",
                    content: [{
                        container: "h2",
                        text: "1987: Création de la compagnie de puces électronique Taiwan Semiconductor Manufacturing Company(TSMC) par le gouvernement taiwanais.",
                    }, {
                        container: "p",
                        text: "Cette date est importante, car elle marque le début d’une compagnie qui est un acteur très important dans les tensions entre Taiwan et la Chine. Dans le processus de la création d’électronique, il est vital d’avoir des puces de très grandes qualités pour assurer un bon fonctionnement de l’appareil. Cependant, la création de puces coûte chère et n’est pas viable pour la plupart des «start-ups companies» en quête de nouvelles technologies. C’est pourquoi TSMC a été fondé. Cette compagnie s’occupe de la création de puces et tout ce que les clients doivent faire est de simplement lui fournir le plan de conception de la puce désirée. Ainsi, TSMC est devenue une des meilleures compagnies de création de puces dans le monde. On estime que plus de 60% de nos puces proviennent de cette compagnie et qu’elle produit 92% des puces les plus performantes sur le marché. La Chine, à cause des restrictions imposées par les États-Unis, cherche une nouvelle raison pour prendre possession de Taiwan et, par conséquent, se procurer des puces performantes. Certains d’entre vous allez vous poser la question suivante: pourquoi la Chine ne produit-elle pas ses propres puces à la place? La réponse s’explique par la loi de Moores (Moore’s law). Cette loi très simple de Gordon Earle Moore, le cofondateur d’Intel, une compagnie de puces informatiques, précise qu'à tous les deux ans, le nombre de transistors dans une puce électronique double. Un transistor est un des principaux composants de tout appareil électronique. Simplement dit, plus un appareil possède de transistors, plus la performance de l’appareil sera significative. Étant donné que la Chine est entrée dans la course à la création des meilleures puces quelques dizaines d’années après les États-Unis, les puces créées par l’Occident possèdent 32 fois plus de transistors que la Chine. Sachant qu’il peut y avoir des milliards de transistors dans une seule puce, c’est un très grand retard qu’a la Chine, expliquant sa motivation à rapatrier Taiwan, l’endroit où les puces supérieures sont fabriquées."
                    }]
                }
            }
        },
        {
            date: new Date(1996,5,15),
            content: {
                container: "div content invisible",
                image: {
                    container: "div image-wrapper",
                    img_url: "https://cdn-hub.ina.fr/notice/360x270/0ec/AFE85005980.jpeg?__=95386_95380",
                    alt_txt: "A random image",
                    label:"",
                },
                text: {
                    container: "div text",
                    content: [{
                        container: "h2",
                        text: "1996- Troisième crise de Taiwan",
                    }, {
                        container: "p",
                        text: "Après la mort de Chiang Ching-Kuo, fils de Chiang-Kai-Shek, Taiwan est devenu une démocratie et Lee Teng-Hui est devenu président de la République de Chine. De plus, avec la visite aux États-Unis du nouveau président taiwannais, le gouvernement chinois, voyant qu’il a perdu de l’influence sur ce pays, a fait des tirs à blanc près de la côte taiwannaise afin de l’intimider. Cependant, grâce à la réaction rapide du président Clinton, aucun affrontement ne s’est produit. De fait, l’ancien président américain a envoyé des porte-avions au pays allié pour décourager la Chine à attaquer Taiwan, ce qui a porté fruit."
                    }]
                }
            }
        }


    ];

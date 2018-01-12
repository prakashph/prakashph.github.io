var APP_DATA = {
  "scenes": [
    {
      "id": "0-bus-stop",
      "name": "Bus Stop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5103338113355937
      },
      "linkHotspots": [
        {
          "yaw": 0.20804481226890026,
          "pitch": -0.20368260546076478,
          "rotation": 1.5707963267948966,
          "target": "1-town-plaza"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.11257441843236471,
          "pitch": -0.7216875520948207,
          "title": "Create Tower<br>",
          "text": "<span class=\"st\">The Campus for Research Excellence And Technological Enterprise (<em>CREATE</em>) is an international research campus and innovation hub.</span>"
        },
        {
          "yaw": 1.9089395621406808,
          "pitch": -0.09604590391822398,
          "title": "Internal Shuttle Services<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-town-plaza",
      "name": "Town Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 3.552713678800501e-15,
        "pitch": -0.09994856104426475,
        "fov": 1.5103338113355937
      },
      "linkHotspots": [
        {
          "yaw": -0.35806589124529076,
          "pitch": -0.05798315871764359,
          "rotation": 0.7853981633974483,
          "target": "2-food-court"
        },
        {
          "yaw": -0.4679091474343373,
          "pitch": 0.06714605630686421,
          "rotation": 16.493361431346422,
          "target": "0-bus-stop"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2434160300494934,
          "pitch": -0.4887769631876626,
          "title": "CREATE Tower<br>",
          "text": "Text"
        },
        {
          "yaw": 0.585803066557613,
          "pitch": -0.2113928730256749,
          "title": "The Hwang's Restaurant<br>",
          "text": "Text"
        },
        {
          "yaw": 1.4923630965917525,
          "pitch": -0.28234946766030866,
          "title": "Spice Table Restaurant<br>",
          "text": "Text"
        },
        {
          "yaw": -3.140573255661158,
          "pitch": -0.03591284134230399,
          "title": "Bus Stop<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-food-court",
      "name": "Food Court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.9877642889560878,
        "pitch": -0.17213363290956707,
        "fov": 1.5103338113355937
      },
      "linkHotspots": [
        {
          "yaw": 0.7077074758178625,
          "pitch": -0.023460257842188526,
          "rotation": 0,
          "target": "3-utown-green"
        },
        {
          "yaw": 0.7164689872052108,
          "pitch": 0.15821583146410134,
          "rotation": 3.141592653589793,
          "target": "1-town-plaza"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0539165882127826,
          "pitch": -0.43423672134016833,
          "title": "Food Court<br>",
          "text": "Text"
        },
        {
          "yaw": 1.9980219757608353,
          "pitch": -0.22076275976233362,
          "title": "South Tower<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-utown-green",
      "name": "UTown Green",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5103338113355937
      },
      "linkHotspots": [
        {
          "yaw": 0.11370879792630184,
          "pitch": 0.12315180814951532,
          "rotation": 12.566370614359176,
          "target": "4-stephen-riady-centre"
        },
        {
          "yaw": 0.003460389254156482,
          "pitch": 0.2860837895310304,
          "rotation": 3.9269908169872414,
          "target": "2-food-court"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6239008212953792,
          "pitch": 0.18057512595738245,
          "title": "UTown Green<br>",
          "text": "Text"
        },
        {
          "yaw": 0.8146987349619383,
          "pitch": -0.1991055682011833,
          "title": "Education Resource Centre<br>",
          "text": "Text"
        },
        {
          "yaw": 1.7434954531991727,
          "pitch": -0.22526862014719384,
          "title": "South Tower<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-stephen-riady-centre",
      "name": "Stephen Riady Centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.11719237326597742,
        "pitch": -0.10550125888005724,
        "fov": 1.5103338113355937
      },
      "linkHotspots": [
        {
          "yaw": 0.07244215081029282,
          "pitch": -0.008896026443274252,
          "rotation": 4.71238898038469,
          "target": "5-inside-stephen-riady-centre"
        },
        {
          "yaw": 0.06673804757439328,
          "pitch": 0.2024795735542284,
          "rotation": 9.42477796076938,
          "target": "3-utown-green"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.13758889177885258,
          "pitch": -0.5420524102279298,
          "title": "Stephen Riady Centre<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-inside-stephen-riady-centre",
      "name": "Inside Stephen Riady Centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5103338113355937
      },
      "linkHotspots": [
        {
          "yaw": -0.0276780674700845,
          "pitch": 0.20465301210246878,
          "rotation": 0.7853981633974483,
          "target": "6-guardian-pharmacy"
        },
        {
          "yaw": -0.15786667349748562,
          "pitch": 0.3891927302603424,
          "rotation": 8.63937979737193,
          "target": "4-stephen-riady-centre"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5003693713498993,
          "pitch": -0.1298300594542745,
          "title": "SingPost POPStation<br>",
          "text": "Text"
        },
        {
          "yaw": 2.5621747966459214,
          "pitch": 0.008260443005049467,
          "title": "Entrance to Stephen Riady Centre<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-guardian-pharmacy",
      "name": "Guardian Pharmacy",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.5169020749410009,
        "pitch": 0.024985354372915936,
        "fov": 1.5103338113355937
      },
      "linkHotspots": [
        {
          "yaw": 0.41300303063235155,
          "pitch": 0.18524240037555373,
          "rotation": 6.283185307179586,
          "target": "7-utown-auditorium-2"
        },
        {
          "yaw": 0.4228268898048366,
          "pitch": 0.3841501511087948,
          "rotation": 9.42477796076938,
          "target": "5-inside-stephen-riady-centre"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.08311396550436,
          "pitch": -0.22726397483732086,
          "title": "Guardian Pharmacy<br>",
          "text": "Text"
        },
        {
          "yaw": -0.14962159225234295,
          "pitch": -0.2198076801497102,
          "title": "UTown Auditorium 2<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-utown-auditorium-2",
      "name": "UTown Auditorium 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.12347053611950543,
        "pitch": -0.0194344424252737,
        "fov": 1.5103338113355937
      },
      "linkHotspots": [
        {
          "yaw": -0.18172436599462927,
          "pitch": 0.3794191235702442,
          "rotation": 3.141592653589793,
          "target": "6-guardian-pharmacy"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6887970729637676,
          "pitch": -0.31204127081043964,
          "title": "UTown Auditorium 2<br>",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "UTown Virtural Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

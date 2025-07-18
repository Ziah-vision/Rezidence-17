var APP_DATA = {
  "scenes": [
    {
      "id": "0-sever",
      "name": "Sever",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6841563619282471,
        "pitch": 0.019640671728936354,
        "fov": 1.4010345833304123
      },
      "linkHotspots": [
        {
          "yaw": 1.3605794582074004,
          "pitch": -0.04235836599681875,
          "rotation": 0,
          "target": "1-zpad"
        },
        {
          "yaw": -0.12617181933658905,
          "pitch": -0.0998623355559971,
          "rotation": 0,
          "target": "3-vchod"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-zpad",
      "name": "Západ",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.285859204148295,
        "pitch": -0.02487818418997456,
        "fov": 1.4010345833304123
      },
      "linkHotspots": [
        {
          "yaw": -0.37645932629450485,
          "pitch": 0.12941192678083624,
          "rotation": 0,
          "target": "0-sever"
        },
        {
          "yaw": 0.8710554274039133,
          "pitch": 0.03436576537421132,
          "rotation": 0,
          "target": "2-jih"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-jih",
      "name": "Jih",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010345833304123
      },
      "linkHotspots": [
        {
          "yaw": -0.9715712613308369,
          "pitch": 0.08071245899516555,
          "rotation": 0,
          "target": "1-zpad"
        },
        {
          "yaw": 0.7582853347635083,
          "pitch": 0.04116859037498344,
          "rotation": 0,
          "target": "3-vchod"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vchod",
      "name": "Východ",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.25822614774729935,
        "pitch": -0.017021915498409257,
        "fov": 1.4010345833304123
      },
      "linkHotspots": [
        {
          "yaw": 1.090706776749963,
          "pitch": 0.14807330841988176,
          "rotation": 0,
          "target": "0-sever"
        },
        {
          "yaw": -0.5334084388185509,
          "pitch": 0.027871528670617707,
          "rotation": 0,
          "target": "2-jih"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Rezidence 17",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

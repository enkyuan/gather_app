module.exports = function(config) {
  return {
    "expo": {
      "name": "gather",
      "slug": "gather",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./src/assets/images/app/icon.png",
      "scheme": "gather",
      "userInterfaceStyle": "automatic",
      "newArchEnabled": true,
      "ios": {
        "supportsTablet": false,
        "bundleIdentifier": "com.enkyuan.gather"
      },
      "android": {
        "adaptiveIcon": {
          "foregroundImage": "./src/assets/images/app/adaptive-icon.png",
          "backgroundColor": "#ffffff"
        }
      },
      "web": {
        "bundler": "metro",
        "output": "static",
        "favicon": "./src/assets/images/app/favicon.png"
      },
      "plugins": [
        "expo-router",
        [
          "expo-splash-screen",
          {
            "image": "./src/assets/images/app/splash-icon.png",
            "imageWidth": 200,
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
          }
        ]
      ],
      "experiments": {
        "typedRoutes": true
      }
    }
  }
}

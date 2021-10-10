# MaiarExtensionTests

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

# How to reproduce error
- run `npm i` in the home directory
- Replace line 25 in node_modules\@elrondnetwork\erdjs\out\smartcontracts\wrapper\systemWrapper.js with
    ```SystemConstants.SYSTEM_ABI_PATH = path_1.default.join(".", "../../../abi");```

- run `ng serve`
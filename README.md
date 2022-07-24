# wf-logging-toolbox
Logging utility library for Node.js
Output messages to the default console with log level, timestamp and user

## Index
* [Installation](#installation)
* [Dependencies](#dependencies)
* [Examples](#examples)
* [License](#license)
* [Uninstallation](#uninstallation)

## Installation
* This library/package can be easily installed by running
```npm install wf-logging-tollbox --save```

## Dependencies
* Node modules:
  * moment

## Examples
* Using javascript
```
const { wfLoggingToolbox } = require('wf-logging-toolbox');

const loggerInUTC = new wfLoggingToolbox(null)
const loggerInEST = new wfLoggingToolbox('America/New_York')

loggerInUTC.info('This is my message', 'my_user')
//Expected result: [INFO] [2022-07-24 19:47:19] [my_user] This is my message

loggerInEST.info('This is my message', 'my_user')
//Expected result: [INFO] [2022-07-24 15:47:19] [my_user] This is my message
```

* Using typescript
```
import { wfLoggingToolbox } from 'wf-logging-toolbox'

const loggerInUTC = new wfLoggingToolbox(null)
const loggerInEST = new wfLoggingToolbox('America/New_York')

loggerInUTC.info('This is my message', 'my_user')
//Expected result: [INFO] [2022-07-24 19:47:19] [my_user] This is my message

loggerInEST.info('This is my message', 'my_user')
//Expected result: [INFO] [2022-07-24 15:47:19] [my_user] This is my message
```
* Check other examples in [/src/examples.ts](https://github.com/LeonardoNevesDuarte/wf-logging-toolbox/blob/main/src/examples.ts)

## License
* This library is licensed under GNU General Public License v.3.0
* Please check the license content [here](https://github.com/LeonardoNevesDuarte/wf-logging-toolbox/blob/main/LICENSE)

## Uninstallation
* This library/package can be easily uninstalled by running
```npm uninstall wf-logging-tollbox```


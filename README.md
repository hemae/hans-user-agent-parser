# hans-user-agent-parser
parser device name, touchable device, device kind

## Table of contents
* [Installing](#installing)
* [Example](#example)
* [User agent object](#user-agent-object)

<a name="installing"><h2>Installing</h2></a>
Add the package to your project
```
npm i hans-user-agent-parser
```
using yarn
```
yarn add hans-user-agent-parser
```


<a name="example"><h2>Example</h2></a>

Export *ua* from *hans-user-agent-parser*

```javascript
const ua = require('hans-user-agent-parser')
```
using TypeScript
```typescript
import ua from 'hans-user-agent-parser'
```  

```typescript
const userAgent = ua(window)
```

<a name="user-agent-object"><h2>User agent object</h2></a>

```typescript
console.log(userAgent) //

{
    device: 'desktop', //on of them ['desktop', 'tablet', 'mobile']
    touchableDevice: boolean, //true if device has touch events
    deviceName: 'macintosh' // on of device names
}
```

### Device names

#### Desktop

- macintosh
- windows
- linux

#### Tablet

- ipad
- ipod
- x11

#### Mobile

- iphone
- android
- blackerry
- mini
- iemobile



## Installation
Install with npm:
```
$ npm install js-toast-msg
```
## Usage and Examples
```
import { toast } from 'js-toast-msg';

const pageTitle = 'home';  

/**
* Displays the toast message.
*/
toast.showMessage(`pageTitle= ${pageTitle}`); 
```

```
/**
* Change the displayed time of the toast message.
* The property of the parameter is millisecond.
*/
toast.setDuration(5000); 
```

```
/**
* Change the font size of the toast message.
*/
toast.setFontSize(15);  
```

# Contributors   
peter.yo

# Licenced
MIT

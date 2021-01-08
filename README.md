<p align="center">Timer and Countdown hook for React.</p>
<p align="center">
    <a href="https://circleci.com/gh/thinnakrit/react-timerhook">
        <img src="https://circleci.com/gh/thinnakrit/react-timerhook.svg?style=svg" />
    </a>
    <a href="https://coveralls.io/github/thinnakrit/react-timerhook?branch=master">
        <img src="https://coveralls.io/repos/github/thinnakrit/react-timerhook/badge.svg?branch=master" />
    </a>
    <a href="https://www.npmjs.com/package/react-timerhook">
        <img src="https://img.shields.io/npm/v/react-timerhook.svg" />
    </a>
</p>

## Installation
Using npm:

```sh
$ npm install --save react-timerhook
```

Using yarn:

```sh
$ yarn add react-timerhook
```

## Quick Start
```javascript
import React from 'react';
import useCountDown from 'react-timerhook';

const initialTime = 60 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000

const render = () => {
  const { currentTimer, onStartTimer, onResetTimer, isFinish } = timerhook(
    {
        initialTimer: 60,
        mode: 'COUNTDOWN_SECOND',
    }
  )
  // start the timer during the first render
  React.useEffect(() => {
    onStartTimer();
  }, []);
  
  const restart = React.useCallback(() => {
    // you can start existing timer with an arbitrary value
    // if new value is not passed timer will start with initial value
    
    onResetTimer(100);
  }, []);
 
  return (
    <>
      <p>Time left: {timeLeft}</p>

      {isFinish ? <b>FINISH</b> : ''}

      <button onClick={restart}>
        Restart counter with 100 seconds
      </button>
    </>
  );
}
```

## Documentation
### [timeLeft, actions] = useCountDown(timeToCount, interval)

#### Parameters
Takes a default countdown time and interval time.
* `initialTimer` {`Number`} Time in milliseconds that countdown should start with. **Defaults to `60000`**
* `mode` {`String`} Time mode set to `COUNTDOWN_SECOND` **Defaults to `null`**

#### Return value
Returns an array with remaining time and actions object.
* `currentTimer` {`Number`} Remaining countdown time in milliseconds
* `onStartTimer` {`Function`} Start or restart a countdown. Takes time in milliseconds to start with.
* `onResetTimer` {`Function`} Resets a countdown to initial state

## Contributing
Feel free to submit any issues or pull requests.

## License
MIT

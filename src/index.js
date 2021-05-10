import React from 'react';
import ReactDOM from 'react-dom';

import App from 'Components/App';
import { tvApi } from 'api';

tvApi.search('hi score');
ReactDOM.render(<App />, document.getElementById('root'));

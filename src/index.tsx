import React from 'react';
import './index.css';
import {state} from './redux/state'
import {renderTree} from "./redux/render";




renderTree(state)
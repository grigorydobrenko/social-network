import React from 'react';
import './index.css';
import {addPost, state} from './redux/state'
import {renderTree} from "./redux/render";




renderTree(state,addPost)
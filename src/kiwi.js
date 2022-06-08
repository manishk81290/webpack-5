//import _ from 'lodash';
import React from 'react';
import Header from './components/HeaderComponent/Header';
import Kiwi from './components/KiwiComponent/Kiwi';
const hdr=new Header();
hdr.render('KIWI IMAGE PAGE',process.env.NODE_ENV);
const kw=new Kiwi();
kw.render();
import addImage from './add-image';
import helloWorld from './hello-world';
import Button from './components/ButtonComponent/Button';
import Header from './components/HeaderComponent/Header';
const hdr=new Header();
hdr.render(process.env.NODE_ENV);
helloWorld();
addImage();
const btn=new Button();
btn.render();
import './Header.scss';
class Header{
    headerText="Hello All! This heading is using SCSS files";
    render(mode='none'){
        const h1=document.createElement('h1');
        h1.innerHTML=this.headerText+' - ' + mode;
        const body=document.querySelector('body');
        body.appendChild(h1);
    }
}

export default Header;
// Navbar component
export const navbar = () => {
    const headerElement = document.querySelector('header');
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    const text = document.createElement('h1');
    text.textContent = 'Today';
    nav.appendChild(text);
    headerElement.appendChild(nav);
}
import Menu from "./menu";

export default function adaptive () {
    let scrollPos;
    let oldInnerWidth = window.innerWidth;

    window.addEventListener('scroll', () => {
        scrollPos = window.scrollTop;
    })

    window.onresize = () => {
        if (window.innerWidth != oldInnerWidth) {
            location.reload();
            window.scrollTo(scrollPos)
        }
    }

    if (window.innerWidth < 768) {
        const menuInstance = new Menu();
        menuInstance.render();
    }
}
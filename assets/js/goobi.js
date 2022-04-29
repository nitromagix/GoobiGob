'use strict';

const goobi = (x, y) => {
    const element = createSizedImage('./assets/images/g.static.gif', '50px', '50px')
    element.style.zIndex = 1;

    let prev;
    let deg = 0;

    function handleDirectionChange(direction) {
        if (direction === null) {
            deg = prev === 'up' ? -90 : prev === 'left' ? 180 : prev === 'down' ? 90 : 0
            prev = 'right';
        }
        if (direction === 'left') {
            deg = prev === 'up' ? 90 : prev === 'right' ? 180 : prev === 'down' ? -90 : 0
            prev = 'left';
        }
        if (direction === 'up') {
            deg = prev === 'left' ? 90 : prev === 'down' ? 180 : prev === 'right' ? -90 : 0
            prev = 'up';
        }
        if (direction === 'right') {
            deg = prev === 'down' ? 90 : prev === 'left' ? 180 : prev === 'up' ? -90 : 0
            prev = 'right';
        }
        if (direction === 'down') {
            deg = prev === 'right' ? 90 : prev === 'up' ? 180 : prev === 'left' ? -90 : 0
            prev = 'down';
        }
        element.style.transform = 'rotate(' + deg + 'deg)';
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}
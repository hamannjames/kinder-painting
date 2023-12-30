
export function intersecting(node, {id}) {
    
    const onIntersecting = (entries, observer) => {
        const {isIntersecting} = entries[0];
        node.dispatchEvent(new CustomEvent(isIntersecting ? `intersection-${id}-enter` : `intersection-${id}-exit`));
    }

    const theObserver = new IntersectionObserver(onIntersecting);
    theObserver.observe(node);

    return {
        destroy() {
            theObserver.disconnect();
        }
    }
}
export function initAutoLink() {
    document.querySelectorAll("a.h-autolink")
        .forEach((_l) => {
            // The selected `a` elements are all 'HTMLLinkElement'.
            const l = _l as HTMLLinkElement;
            l.href = l.innerText;
        });
}
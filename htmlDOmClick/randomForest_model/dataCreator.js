(function () {
    function getAllElementsData() {
        let elements = document.body.querySelectorAll('*');
        let data = [];

        elements.forEach(el => {
            let attributes = {};
            Array.from(el.attributes).forEach(attr => attributes[attr.name] = attr.value);

            // Check for click events using getEventListeners (works in DevTools)
            let hasClickEvent = getEventListeners(el).click ? true : false;

            data.push({
                tag: el.tagName,
                text: el.textContent.trim().replace(/\s+/g, ' ').substring(0, 200),
                hasClickEvent: hasClickEvent,
                ...attributes
            });
        });

        copy(JSON.stringify(data));
        console.log("DOM data with event listeners copied to clipboard!");
    }

    getAllElementsData();
})();
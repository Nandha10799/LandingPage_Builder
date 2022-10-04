export default (editor, opts = {}) => {
    const domc = editor.DomComponents;

    domc.addType("My-Component", {
        model: {
            defaults: {
                tagName: "INPUT",
                draggable: true,
                droppable: false,
                attributes: {
                    type: "text",
                    name: 'default-name',
                    placeholder:'Insert text here'
                },
                init(){
                    this.on('change:attributes:value', this.handleTypeChange);
                },
                handleTypeChange(){
                    console.log('Input type changed to: ', this.getAttributes().value);
                },
                traits: ["name", "placeholder", { type: "checkbox", name: "required" }]
            }
        },
        view: {}
    });
};
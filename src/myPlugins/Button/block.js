import 'bootstrap/dist/css/bootstrap.min.css';
export default (editor, opts = {}) => {
    const bm = editor.BlockManager;

    bm.add('My-Block', {
        label: `${opts.name}`,
        category: opts.category,
        content: {type: 'My-Component'},
        style: {
            height: '65px',
            width: '50%'
        }
    });

    bm.add('My-Block2', {
        label: `${opts.name}`,
        category: opts.category,
        label: 'Material Button',
        content: `<button class="btn btn-primary">Click</button>`
    });
}
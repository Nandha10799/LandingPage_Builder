import loadComponents from  './component';
import loadBlocks from './block';

export default (editor, opts = {}) => {
    const options = {
        label: 'New Component',
        name: 'New Component',
        category: 'Extra',
        ...opts
    };

    loadComponents(editor, options);
    loadBlocks(editor,options);
};
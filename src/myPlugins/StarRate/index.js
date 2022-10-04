import loadComponents from  './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
    const options = {
        label: 'Star Rate',
        name: 'Star Rate',
        category: 'Extra',
        ...opts
    };

    loadComponents(editor, options);
    loadBlocks(editor,options);
};
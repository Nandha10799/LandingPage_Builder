import loadComponents from  './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
    const options = {
        label: 'New Swiper',
        name: 'New Swiper',
        category: 'Extra',
        ...opts
    };

    loadComponents(editor, options);
    loadBlocks(editor,options);
};
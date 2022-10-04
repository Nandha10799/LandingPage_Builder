import grapesjs from "grapesjs";
import { useEffect,useState } from "react";
import 'grapesjs/dist/css/grapes.min.css';
import gsjsPresetWebpage from 'grapesjs-preset-webpage';
import basicPlugins from 'grapesjs-blocks-basic';
import Forms from 'grapesjs-plugin-forms';
import navBar from 'grapesjs-navbar';
import myBlock from './myPlugins/Button/index';
import Swiper from "./myPlugins/swiper/index";
import StarRate from "./myPlugins/StarRate/index";

function Editor() {
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        const editor = grapesjs.init({
            container: '#gjs',
            height: '700px',
            width: '100%',
            plugins: [gsjsPresetWebpage, basicPlugins, Forms, navBar, myBlock,Swiper],
            allowScripts: true,
            storageManager: {
                type: 'local', // Type of the storage, available: 'local' | 'remote'
                autosave: true, // Store data automatically
                autoload: true, // Autoload stored data on init
                stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
                options: {
                  local: { // Options for the `local` type
                    key: 'gjsProject', // The key for the local storage
                  },
                }
              }
        })
        setEditor(editor);
    }, []);
    return(
        <div>
            <div id="gjs">

            </div>
        </div>
    );
}
export default Editor;
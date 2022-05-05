import Auth from './Auth';
import Panel from './Panel';
import AuthCP from "./Auth/AuthCP";
import PanelCP from "./Panel/PanelCP";

export default [
    {
        'layout': <AuthCP/>,
        'module': Auth
    },
    {
        'layout': <PanelCP/>,
        'module': Panel
    },
];
/*NO ES OBLIGATORIO EN REDUX HACER ESTO, PERO ES MEJOR PARA LA REUTILIZACIÓN Y SIMPLICIDAD DEL CODIGO */
import {changeVisibility} from '../redux/actionsFunctionCreators.js'
import {store} from './store.js'

export const panelBtnChanger = ()=>{store.dispatch(changeVisibility("floatDown 2s forwards", "logoDash 1s forwards"));};
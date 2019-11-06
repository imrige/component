import Card from "./Card.js";
import Grid from "./CardGrid.js";
import Meta from "./CardMeta.js";
import './style.scss';

Card.Grid = Grid;
Card.Meta = Meta;

Card.install = Vue => {
    Vue.component(Card.name, Card);
    Vue.component(Grid.name, Grid);
    Vue.component(Meta.name, Meta);
};

export default Card;

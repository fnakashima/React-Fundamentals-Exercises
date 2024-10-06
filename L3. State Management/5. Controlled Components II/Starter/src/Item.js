import PropTypes from "prop-types";

const Item = ({ key, item }) => {
    return <li key={key}>{item}</li>;
};

Item.propTypes = {
    key: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired
};

export default Item;
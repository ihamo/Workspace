import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button color="white" text="Plus" />
		</header>
	);
};

// We could pass a default props, if not given
Header.defaultProps = {
	title: 'Task Tracker'
};

// define the Typ of props (strin, int, boolean etc.)
Header.propTypes = {
	title: PropTypes.string.isRequired
};

// style - CSS in JS
// const headingStyle = {
// 	color: 'red',
// 	backgroundColor: 'black'
// };

export default Header;

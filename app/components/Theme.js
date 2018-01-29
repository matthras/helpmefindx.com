import PropTypes from 'prop-types';
import BootstrapStyle from '../styles/vendor/bootstrap.min.css';
import TopNavbar from './TopNavbar';

const Theme = ({ children }) => (
    <div>
        <TopNavbar />
        <style dangerouslySetInnerHTML={{ __html: BootstrapStyle }} />
        {children}
    </div>
);

Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
};

export default Theme;

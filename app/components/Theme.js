import PropTypes from 'prop-types';
import BootstrapStyle from '../styles/vendor/bootstrap.min.css';
import TopNavbar from './TopNavbar';
import Body from './Body';

const Theme = ({ children }) => (
    <div>
        <TopNavbar />
        <style dangerouslySetInnerHTML={{ __html: BootstrapStyle }} />
        <Body>
        {children}
        </Body>
    </div>
);

Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
};

export default Theme;

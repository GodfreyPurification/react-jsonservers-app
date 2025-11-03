import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';

const Header = ({ title }) => {
    const { width } = useWindowSize();

    return (
        <header className="Header">
            <h1>{title}</h1>
            <div className="header-icon">
                {width < 768 ? (
                    <FaMobileAlt title="Mobile View" aria-label="Mobile View" />
                ) : width < 992 ? (
                    <FaTabletAlt title="Tablet View" aria-label="Tablet View" />
                ) : (
                    <FaLaptop title="Desktop View" aria-label="Desktop View" />
                )}
            </div>
        </header>
    );
};

export default Header;
